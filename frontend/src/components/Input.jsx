// Input.js
import React from "react";
import { Input as MaterialInput } from "@material-tailwind/react";

const Input = ({
  type,
  label,
  name,
  value,
  onChange,
  required = false,
  className,
}) => {
  return (
    <MaterialInput
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      color="blue"
      size="md"
      variant="outlined"
      required={required}
      className={className}
    />
  );
};

export default Input;
