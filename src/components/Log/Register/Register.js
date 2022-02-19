import React, { useState } from "react";
import Style from "./Register.module.scss";
import { Form, Input, Select, Row, Col, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const Register = () => {
  const { Option } = Select;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      validateTrigger="onFinish"
      layout="vertical"
      form={form}
      name="register"
      onChange={onFinish}
      initialValues={{
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input
          className={Style.input}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Surname"
        rules={[{ required: true, message: "Please input your Surname!" }]}
      >
        <Input
          className={Style.input}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
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
        <Input className={Style.input} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password className={Style.input} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password className={Style.input} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          className={`${Style.input} ${Style.numberInput}`}
          addonBefore={prefixSelector}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select className={Style.input} placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the captcha you got!",
                },
              ]}
            >
              <Input className={Style.input} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox className={Style.input}>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <button
          type="submit"
          style={{ fontSize: "1em", width: "100%" }}
          className="black-button"
        >
          Register
        </button>
      </Form.Item>
    </Form>
  );
};

export default Register;
