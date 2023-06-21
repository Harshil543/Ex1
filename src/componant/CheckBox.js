import React from "react";

export default function CheckBox(props) {
  return (
    <>
      <div key={props.key} className="form-group">
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <label className="mx-2" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
    </>
  );
}
