import { React, useState } from "react";

const InputType = (props) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="position-relative">
      <label htmlFor={props.label} className="mt-3 mb-1">
        {props.label}
      </label>
      <input
        type={isRevealPwd ? "text" : "password"}
        className={`form-control ${props.className}`}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        required
      />
      <button
        onClick={() => setIsRevealPwd((prevState) => !prevState)}
        style={{ margin: "-30px 210px " }}
        className="btn btn-link text-decoration-none text-dark position-absolute"
        label="show"
      >
        {!isRevealPwd ? "Show" : "Hide"}
      </button>
    </div>
  );
};

export default InputType;
