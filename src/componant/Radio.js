import React from "react";

function Radio({ onChange }) {
  return (
    <div className="my-3 col-2 d-flex">
      <label className="mx-3">Gender</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="Male"
          required
          onChange={onChange}
        />
        <label className="form-check-label mx-3" htmlFor="male">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="Female"
          required
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
    </div>
  );
}

export default Radio;
