import React from "react";
import { Radio } from "antd";

interface Option {
  value: string;
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

interface DynamicRadioGroupProps {
  options: Option[];
  label: string;
  name: string;
  description?: string;
}

const DynamicRadioGroup: React.FC<DynamicRadioGroupProps> = ({
  options,
  label,
  description,
  name,
}) => {
  const [selected, setSelected] = React.useState(options[0]?.value || "");

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      {description && <p className="text-gray-500">{description}</p>}
      <input type="hidden" name={name} value={selected} />
      <Radio.Group value={selected} onChange={handleChange}>
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default DynamicRadioGroup;
