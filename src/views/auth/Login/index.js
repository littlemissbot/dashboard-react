import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    setLoading(true);
    // TODO: Call API to submit form
  };

  return (
    <Form
      form={form}
      initialValues={{}}
      onFinish={onSubmit}
      style={{
        marginTop: "3rem",
        minWidth: 400,
      }}
      align="right"
    >
      <Form.Item
        name="emailAddress"
        rules={[
          {
            required: true,
            message: "Please input your email address!",
          },
        ]}
      >
        <Input placeholder="Email Address" />
      </Form.Item>

      <Form.Item name="oneTimePassword">
        <Input placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
