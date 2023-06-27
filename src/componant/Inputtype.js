import React, { useContext } from "react";
import FormContext from "./FormContext";

const InputType = (props) => {
  const formctx = useContext(FormContext);
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
        onBlur={formctx.formik.handleBlur}
        required
      />
      <div style={{ height: "20px", color: "red" }}>
        {formctx.formik.errors[props.name] &&
        formctx.formik.touched[props.name] ? (
          <p>{formctx.formik.errors[props.name]}</p>
        ) : null}
      </div>
    </div>
  );
};

export default InputType;
