import React from "react";

const InputType = ({
  label,
  placeholder,
  maxLength,
  onChange,
  required,
  pattern,
}) => (
  <div className="form-group">
    <label htmlFor={label}>{label}</label>
    <input
      className="form-control my-4"
      id={label}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      required={required}
      pattern={pattern}
    />
  </div>
);
export default InputType;
