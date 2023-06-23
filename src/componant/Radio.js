import React, { useContext } from "react";
import FormContext from "./FormContext";

export default function Radio(props) {
  const formctx = useContext(FormContext);

  return (
    <>
      <div key={props.id} className="form-group">
        <input
          type="radio"
          id={props.id}
          name="gender"
          value={props.value}
          checked={formctx.formik.values.gender === props.value}
          onChange={formctx.formik.handleChange}
          required
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
    </>
  );
}
