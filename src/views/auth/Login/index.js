import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Text } = Typography;

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    setLoading(true);
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/dashboard");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <Form
        form={form}
        initialValues={{
          emailAddress: "test@sample.com",
          password: "testSample"
        }}
        onFinish={onSubmit}
        style={{
          marginTop: "3rem",
          minWidth: 400,
        }}
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
            Login
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Don't have an account? <Link to="/register">Register</Link>
      </Text>
    </>
  );
};

export default Login;
