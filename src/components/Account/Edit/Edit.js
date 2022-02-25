import { useState } from "react";
import Style from "./Edit.module.scss";
import "react-phone-number-input/style.css";
import { Form, Input, Select, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const EditAccount = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Form
        layout="vertical"
        form={form}
        name="editUserForm"
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              pattern: new RegExp(/^[a-zA-Z\s]*$/),
              message: "The name must contain only letters",
            },
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            className={Style.input}
            prefix={<UserOutlined />}
            placeholder="Your Name"
          />
        </Form.Item>

        <Form.Item
          name="surname"
          label="Surname"
          rules={[
            {
              pattern: new RegExp(/^[a-zA-Z\s]*$/),
              message: "The surname must contain only letters",
            },
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            className={Style.input}
            prefix={<UserOutlined />}
            placeholder="Your Surname"
          />
        </Form.Item>

        <Form.Item
          name="oldPassword"
          label="Old password"
          rules={[
            {
              required: true,
              message: "Please input your old password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            className={Style.input}
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New password"
          rules={[
            {
              pattern: new RegExp(
                /(?=^.{8,40}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){1,}))((?!.*[",;&|'])|(?=(.*\W){1,}))(?!.*[",;&|'])^.*$/
              ),
              message:
                "Password must include one number at least 8 charachters and one uppercase letter",
            },
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            className={Style.input}
          />
        </Form.Item>

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
              Confirm
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditAccount;
