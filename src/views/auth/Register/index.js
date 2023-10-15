import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    setLoading(true);
    // TODO: Call API to submit form
  };

  return (
    <>
      <Form
        form={form}
        initialValues={{}}
        onFinish={onSubmit}
        style={{
          marginTop: "3rem",
          minWidth: 400,
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
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

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Create new account
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Already have an account? <Link to="/">Login</Link>
      </Text>
    </>
  );
};

export default Register;
