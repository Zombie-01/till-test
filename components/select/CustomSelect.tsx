// components/DynamicSelect.tsx
import React from "react";
import { Select } from "antd";
import { useTranslations } from "next-intl";

interface Option {
  value: string | number;
  label: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

interface DynamicSelectProps {
  options: Option[];
  placeholder?: string;
  description?: string;
  onChange: (value: string | number) => void;
  selectedValue?: Set<string | number>;
  size?: "small" | "middle" | "large";
  defaultSelectedKeys?: Array<string | number>;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  placements?: "inside" | "outside" | "outside-left";
  color?: string;
}

const DynamicSelect: React.FC<DynamicSelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  selectedValue = new Set(),
  size = "middle",
  color,
  description,
  defaultSelectedKeys = [],
}) => {
  const isInvalid = Array.from(selectedValue).some((value) =>
    options.some((option) => option.value === value && option.isInvalid)
  );

  const errorMessages = Array.from(selectedValue)
    .map((value) =>
      options.find((option) => option.value === value && option.isInvalid)
    )
    .filter(Boolean)
    .map((option) => option!.errorMessage)
    .join(", ");

  return (
    <div>
      {description && <p>{description}</p>}
      <Select
        mode="multiple"
        value={Array.from(selectedValue) as any}
        size={size}
        placeholder={placeholder}
        style={{ width: "100%" }}
        onChange={onChange}
        status={isInvalid ? "error" : undefined}
        options={options.map((option) => ({
          label: option.label,
          value: option.value,
        }))}
        defaultValue={defaultSelectedKeys as any}
      />
      {isInvalid && <div style={{ color: "red" }}>{errorMessages}</div>}
    </div>
  );
};

export default DynamicSelect;
