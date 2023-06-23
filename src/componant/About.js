import React, { useContext } from "react";
import FormContext from "./FormContext";

export default function About({ name, placeholder }) {
  const formctx = useContext(FormContext);

  return (
    <div className="form-group">
      <label className="mt-4">About me</label>
      <textarea
        placeholder={placeholder}
        className="form-control my-4"
        name={name}
        maxLength="500"
        value={formctx.formik.values.aboutme}
        onChange={formctx.formik.handleChange}
      ></textarea>
    </div>
  );
}
