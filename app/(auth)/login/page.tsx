"use client";

import { useLogin } from "@/hooks";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
import { Form, Input, Button, Typography, Checkbox } from "antd";

const LoginPage = () => {
  // Login hook
  const { submit, loading, form } = useLogin();
  // Render
  return (
    <Form form={form} layout="vertical" autoComplete="off" onFinish={submit}>
      {/* Username */}
      <Form.Item
        label="Хэрэглэгчийн нэр"
        name="username"
        rules={[{ required: true, message: "Хэрэглэгчийн нэрээ оруулна уу!" }]}>
        <Input
          disabled={loading}
          size="large"
          prefix={<MailTwoTone />}
          placeholder="Хэрэглэгчийн нэрээ оруулна уу"
        />
      </Form.Item>

      {/* Password */}
      <Form.Item
        label="Нууц үг"
        name="password"
        rules={[{ required: true, message: "Нууц үгээ оруулна уу!" }]}>
        <Input.Password
          disabled={loading}
          size="large"
          prefix={<LockTwoTone />}
          placeholder="Нууц үгээ оруулна уу"
        />
      </Form.Item>

      {/* Forgot password */}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox disabled={loading}>Намайг сана</Checkbox>
        </Form.Item>
        <Typography.Link className="float-right" href="/password">
          Нууц үгээ мартсан уу?
        </Typography.Link>
      </Form.Item>

      {/* Submit */}
      <Button
        size="large"
        className=""
        type="primary"
        htmlType="submit"
        block
        loading={loading}>
        Нэвтрэх
      </Button>
    </Form>
  );
};

export default LoginPage;
