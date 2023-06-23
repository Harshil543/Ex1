import React from "react";

const CheckBox = ({ name, value, checked, onChange, label, id }) => {
  return (
    <div>
      <div className="form-group">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label className="mx-2" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
