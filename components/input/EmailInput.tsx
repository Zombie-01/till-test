import React from "react";
import { Input, Form } from "antd";
import { useTranslations } from "next-intl";

export const EmailInput: React.FC = () => {
  const t = useTranslations("Common");

  return (
    <Form.Item
      label={t("Email")}
      name="email"
      rules={[
        {
          type: "email",
          required: true,
          message: t("Please enter a valid email"),
        },
      ]}
      className="max-w-xs">
      <Input placeholder={t("Email")} />
    </Form.Item>
  );
};

export default EmailInput;
