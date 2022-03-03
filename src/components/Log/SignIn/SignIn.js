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

  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((val) => {
        console.log(val.user);
        if (typeof window !== undefined) {
          const currentUser = {
            isLogged: true,
            value: val.user,
          };
          reactLocalStorage.setObject("loggedUser", currentUser);
          setLoading(false);
          router.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form form={form} name="signin" onFinish={onFinish} layout="vertical">
      <Form.Item
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

      <Form.Item
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
