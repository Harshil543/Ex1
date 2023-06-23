import React from "react";

const CheckBox = ({ name, value, checked, onChange, label }) => {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default CheckBox;
