import React from "react";

export default function Radio(props) {
  return (
    <>
      <div key={props.id} className="form-group">
        <input
          type="radio"
          id={props.id}
          name="gender"
          value={props.value}
          onChange={props.onChange}
          required
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
    </>
  );
}
