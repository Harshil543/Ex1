import React from "react";

export default function Button(props) {
  return (
    <div className="text-center">
      <button
        onClick={props.onClick}
        type="submit"
        className={`btn btn-${props.type} m-2`}
      >
        {props.label}
      </button>
    </div>
  );
}
