"use client";

import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { Input } from "antd";

export const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const t = useTranslations("Common");

  return (
    <Input.Password
      name="password"
      placeholder={t("Password")}
      type={isVisible ? "text" : "password"}
      onChange={() => {}}
      suffix={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          style={{ background: "none", border: "none", padding: 0 }}>
          {isVisible ? (
            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <FaEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      className="max-w-xs"
    />
  );
};

export default PasswordInput;
