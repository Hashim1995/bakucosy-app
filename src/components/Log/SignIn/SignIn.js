import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./SignIn.module.scss";
import { Button, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { set_LoggedUser } from "../../../../redux/loggedUser";
const SignIn = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const loggedUser = useSelector((state) => state.users_DB.value);

  const login = (username, password) => {
    loggedUser.map((item) => {
      if (item.email === username && item.password === password) {
        dispatch(set_LoggedUser({ isLogged: true, user: item }));

        localStorage.setItem(
          "currentUser",
          JSON.stringify({ isLogged: true, user: item })
        );
      }
    });
  };

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      login(values.username, values.password);
      setLoading(false);
      router.reload();
    }, 1500);
  };

  return (
    <Form form={form} name="signin" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="E-mail"
        name="username"
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
