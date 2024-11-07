// components/FormDateInput.tsx
"use client";
import React, { FunctionComponent, useState } from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { useValidateContext } from "@/providers/ValidateProvider";

interface IFormDateInput {
  name: string;
  label: string;
  minValue?: DatePickerProps["disabledDate"];
  maxValue?: DatePickerProps["disabledDate"];
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  labelPlacement?: "inside" | "outside" | "outside-left";
  variants?: "flat" | "bordered" | "underlined" | "faded";
}

interface CustomDateInputProps extends IFormDateInput {
  value: DatePickerProps["value"];
  setValue: (date: DatePickerProps["value"]) => void;
}

const CustomDateInput: React.FC<CustomDateInputProps> = ({
  label,
  placeholder,
  minValue,
  maxValue,
  isDisabled,
  errorMessage,
  isInvalid,
  isReadOnly,
  isRequired,
  description,
  value,
  setValue,
}) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <label>{label}</label>
      <DatePicker
        style={{ width: "100%" }}
        placeholder={placeholder}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        value={value}
        onChange={setValue}
        status={isInvalid ? "error" : undefined}
      />
      {description && <p>{description}</p>}
      {isInvalid && errorMessage && (
        <p style={{ color: "red" }}>{errorMessage}</p>
      )}
    </div>
  );
};

export const FormDateInput: FunctionComponent<IFormDateInput> = ({
  label,
  name,
  minValue,
  maxValue,
  placeholder,
  description,
  errorMessage,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  labelPlacement,
  variants,
}) => {
  const [value, setValue] = useState<DatePickerProps["value"]>(null);
  const context = useValidateContext();
  const error = context ? context.error : null;

  return (
    <div className="relative w-full">
      <CustomDateInput
        name=""
        label={label}
        placeholder={placeholder || name}
        minValue={minValue}
        maxValue={maxValue}
        description={description}
        errorMessage={errorMessage}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        isInvalid={isInvalid || (error && Object.keys(error).includes(name))}
        value={value}
        setValue={setValue}
      />
      <input
        type="hidden"
        name={name}
        value={value ? value.format("YYYY-MM-DD") : ""}
      />
      {error && Object.keys(error).includes(name) && (
        <p className="absolute text-error">{error[name]}</p>
      )}
    </div>
  );
};

export default FormDateInput;
