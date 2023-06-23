import React, { useContext } from "react";
import FormContext from "./FormContext";

const PhoneNumber = ({ name, onChange }) => {
  const formctx = useContext(FormContext);

  return (
    <div>
      <label htmlFor={name}>Phone Number:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={formctx.formik.values.phonenumber}
        onChange={(e) => {
          let x = e.target.value
            .replace(/\D/g, "")
            .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
          x = !x[2]
            ? x[1]
            : // eslint-disable-next-line
              "+" + "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");

          formctx.formik.setFieldValue("phonenumber", x);
        }}
      />
    </div>
  );
};

export default PhoneNumber;
