import React, { useContext } from "react";
import FormContext from "./FormContext";

export default function Radio(props) {
  const formctx = useContext(FormContext);

  return (
    <>
      <div
        key={props.id}
        className="my-4 form-check d-flex justify-cantent-center align-items-center"
      >
        <input
          type="radio"
          id={props.id}
          name="gender"
          value={props.value}
          className="p-2 mx-3 form-check-input"
          checked={formctx.formik.values.gender === props.value}
          onChange={formctx.formik.handleChange}
          required
        />
        <label htmlFor={props.id} className="form-check-label">
          {props.name}
        </label>
      </div>
    </>
  );
}
