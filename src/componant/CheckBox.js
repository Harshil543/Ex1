import React from "react";

const CheckBox = ({ name, value, checked, onChange, label, id }) => {
  return (
    <>
      <div className="form-check d-flex justify-cantent-center align-items-center">
        <input
          className=" form-check-input"
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label className=" form-check-label mx-2" htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
