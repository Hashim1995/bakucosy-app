import React from "react";
import Style from "./SignIn.module.scss";
import { Form, Input, Divider, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const SignIn = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Username or email address">
        <Input
          placeholder="Your username or email address"
          className={Style.input}
          prefix={<UserOutlined />}
        />
      </Form.Item>
      <Form.Item label="Password">
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
      <Form.Item>
        <button
          style={{ fontSize: "1em", width: "100%" }}
          className="black-button"
        >
          Sign in
        </button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
