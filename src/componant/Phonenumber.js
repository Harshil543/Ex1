import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-phone-number-input/style.css";

const PhoneNumber = ({ name, onChange }) => {
  // const formctx = useContext(FormContext);
  const [value, setValue] = useState();

  return (
    <div>
      <label htmlFor={name}>Phone Number:</label>

      <PhoneInput
        country="US"
        // type="text"
        id={name}
        name={name}
        value={value}
        onChange={setValue}
      />
      <span> {value} </span>
    </div>
  );
};

export default PhoneNumber;
