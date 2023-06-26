import React, { useContext, useState } from "react";
import FormContext from "./FormContext";

const InputType = (props) => {
  const formctx = useContext(FormContext);
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="form-group position-relative">
      <label htmlFor={props.name} className="form-label mt-3 mb-1">
        {props.label}
      </label>
      <div className="col input-group mb-3">
        <input
          type={isRevealPwd ? "text" : "password"}
          className="form-control"
          id={props.name}
          name={props.name}
          value={formctx.formik.values[props.name]}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          onChange={formctx.formik.handleChange}
          onBlur={formctx.formik.handleBlur}
          required
        />
        <button
          onClick={() => setIsRevealPwd((prevState) => !prevState)}
          className="btn btn-secondary"
          type="button"
          id="button-addon2"
        >
          <span>
            {!isRevealPwd ? (
              <i className="fa fa-eye" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            )}
          </span>
        </button>
      </div>
      <div style={{ height: "20px", color: "red" }}>
        {formctx.formik.touched.password && formctx.formik.errors.password ? (
          <p>{formctx.formik.errors.password}</p>
        ) : null}
      </div>
    </div>
  );
};

export default InputType;
