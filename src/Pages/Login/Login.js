import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login() {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState(null);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setFormError(null);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setFormError("Please fill all the fields");
  };

  return (
    <div className="form-group">
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <Typography.Title level={2}>Login</Typography.Title>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="name@email.com"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/forgot-password">
              Forgot password
            </a>
          </Form.Item>

          {formError && (
            <div className="form-error" type="primary">
              {formError}
            </div>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Login
            </Button>
            don't have an account? <a href="/register">sign in</a>
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
}

export default Login;
