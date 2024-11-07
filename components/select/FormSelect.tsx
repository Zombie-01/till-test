import React, { FunctionComponent, InputHTMLAttributes } from "react";
import DynamicSelect from "./CustomSelect"; // Correct import path
import { useValidateContext } from "@/providers/ValidateProvider";

interface Option {
  value: string | number;
  label: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
  options: Option[];
  name: string;
  inputtype: string;
  label: string;
}

const FormSelect: FunctionComponent<IFormInput> = ({
  label,
  name,
  options,
  inputtype,
  ...props
}) => {
  const [value, setValue] = React.useState<any>(new Set([]));
  const context = useValidateContext();
  const error = context ? context.error : null;

  return (
    <div className="w-full">
      <DynamicSelect
        selectedValue={value}
        onChange={setValue}
        options={options}
        placeholder={name}
        {...(props as any)}
      />
      {error && Object.keys(error).includes(name) && (
        <p className="absolute text-error">{error[name]}</p>
      )}
    </div>
  );
};

export default FormSelect;
