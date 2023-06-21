import React from "react";

export default function About({ onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="gender" className="mt-4">
        About me
      </label>
      <textarea
        placeholder="About me"
        className="form-control my-4"
        maxLength="500"
        onChange={onChange}
      ></textarea>
    </div>
  );
}
