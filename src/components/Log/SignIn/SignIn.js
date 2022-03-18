import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./SignIn.module.scss";
import { Button, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { reactLocalStorage } from "reactjs-localstorage";
import { getAuth } from "../../../utils/authentication/firebase";
import { setCurrentUser } from "../../../../redux/currentUser";

const SignIn = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [wrong, setWrong] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((val) => {
        if (typeof window !== undefined) {
          const currentUser = {
            isLogged: true,
            value: val.user,
          };
          reactLocalStorage.setObject("loggedUser", currentUser);
          sessionStorage.setItem("Auth Token", val._tokenResponse.refreshToken);
          setLoading(false);
          router.reload();
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrEmail(true);
          setErrPassword(false);
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrEmail(false);
          setErrPassword(true);
        } else {
          setWrong(true);
        }
      });
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
        <em style={{ color: "red" }}>Your email may be incorrect</em>
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
