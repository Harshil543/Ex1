import React from "react";

const InputType = ({
  onChange,
  maxLength,
  placeholder,
  label,
  name,
  value,
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        className="form-control my-4"
        id={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputType;
