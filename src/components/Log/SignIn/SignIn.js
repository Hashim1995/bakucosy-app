import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./SignIn.module.scss";
import { Button, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { reactLocalStorage } from "reactjs-localstorage";
import { setCurrentUser } from "../../../../redux/authUser";
import axios from "axios";
const SignIn = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [wrong, setWrong] = useState(false);
  const dispatch = useDispatch();

  const userFoundMiddleware = (data) => {
    if (data.userFound) {
      return true;
    } else {
      setErrEmail(true);
      return false;
    }
  };
  const passwordMiddleware = (data) => {
    if (data.password) {
      return true;
    } else {
      setErrPassword(true);
      return false;
    }
  };

  const signInFinish = (data) => {
    if (!userFoundMiddleware(data)) {
      setErrEmail(true);
      setLoading(false);
    } else {
      setErrEmail(false);
      if (!passwordMiddleware(data)) {
        setErrPassword(true);
        setLoading(false);
      } else {
        setErrPassword(false);
        if (userFoundMiddleware(data) && passwordMiddleware(data)) {
          if (
            (data.status =
              " success" && data.userFound && data.password && data.user)
          ) {
            if (typeof window !== undefined) {
              reactLocalStorage.setObject("isLogged", true);
              reactLocalStorage.setObject("loggedUser", data.user);
              reactLocalStorage.setObject("access_token", data.token);
              setLoading(false);
              router.reload();
            }
          }
        }
      }
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACK_END}/login-user`, values)
      .then((res) => signInFinish(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Form form={form} name="signin" onFinish={onFinish} layout="vertical">
      <Form.Item
        style={{ margin: "10px 0" }}
        label="E-mail"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          placeholder="Your username or email address"
          className={Style.input}
          prefix={<UserOutlined />}
        />
      </Form.Item>
      {errEmail && (
        <em style={{ color: "red" }}>The user not found, please try again</em>
      )}
      <Form.Item
        style={{ margin: "10px 0" }}
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        label="Password"
      >
        <Input.Password
          className={Style.input}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {errPassword && (
        <em style={{ color: "red" }}>Your password may be incorrect</em>
      )}
      {wrong && <em style={{ color: "red" }}>Something went wrong</em>}
      <div className={Style.leftToRight}>
        <Checkbox>Remember me</Checkbox>

        <a className={Style.forgot} href="">
          Forgot password
        </a>
      </div>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            loading={loading}
            style={{ fontSize: "1em", width: "100%" }}
            className="black-button"
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default SignIn;
