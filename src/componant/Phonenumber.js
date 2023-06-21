import React from "react";

function Phonenumber({ onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="phone">Phone Number (US format)</label>
      <input
        className="form-control mt-4"
        type="tel"
        id="phone"
        name="phone"
        placeholder="+(xxx) xxx-xxxx"
        onChange={onChange}
        required
      />
      <small className="form-text text-muted">Format: +(123) 456-7890</small>
    </div>
  );
}

export default Phonenumber;
