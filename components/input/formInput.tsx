"use client";
import { FunctionComponent, InputHTMLAttributes } from "react";
import { Input, Form } from "antd";
import { useValidateContext } from "@/providers/ValidateProvider";

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
  name: string;
  inputtype: string;
  label: string;
}

const FormInput: FunctionComponent<IFormInput> = ({
  label,
  name,
  inputtype,
  ...props
}) => {
  const context = useValidateContext();
  const error = context ? context.error : null;

  return (
    <Form.Item
      label={label}
      name={name}
      validateStatus={error && Object.keys(error).includes(name) ? "error" : ""}
      help={error && Object.keys(error).includes(name) ? error[name] : ""}
      className="w-full">
      <Input
        {...props}
        placeholder={label}
        type={inputtype}
        className="w-full"
      />
    </Form.Item>
  );
};

export default FormInput;
