"use client";

import { Input } from "antd";
import { FunctionComponent, InputHTMLAttributes } from "react";

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
}

const CustomInput: FunctionComponent<ICustomInput> = ({
  inputRef,
  className,
  ...attr
}) => {
  return <Input type="text" ref={inputRef} {...(attr as any)} />;
};

export default CustomInput;
