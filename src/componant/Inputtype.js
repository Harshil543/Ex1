import React from "react";

const InputType = (props) => {
  return (
    <div>
      <label htmlFor={props.label} className="mt-3 mb-1">
        {props.label}
      </label>
      <input
        type={props.type}
        className={`form-control ${props.className}`}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default InputType;
