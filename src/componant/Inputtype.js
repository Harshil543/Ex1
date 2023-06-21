import React from "react";

export default function Inputtype(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className="form-control my-4"
        id={props.label}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        required={props.required}
        pattern={props.pattern}
      />
    </div>
  );
}
