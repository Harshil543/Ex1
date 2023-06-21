import React from "react";

export default function CheckBox({ onChange }) {
  return (
    <div className="form-group mt-4">
      <label htmlFor="hobbie">Hobbie</label>
      <div className="mt-4">
        <input
          type="checkbox"
          id="Swimming"
          name="Swimming"
          value="Swimming"
          onChange={onChange}
          required
        />
        <label className="m-2" htmlFor="Swimming">
          Swimming
        </label>
        <input
          type="checkbox"
          id="Driving"
          name="Driving"
          value="Driving"
          onChange={onChange}
        />
        <label className="m-2" htmlFor="Driving">
          Driving
        </label>
        <input
          type="checkbox"
          id="Cycling"
          name="Cycling"
          value="Cycling"
          onChange={onChange}
        />
        <label className="m-2" htmlFor="Cycling">
          Cycling
        </label>
      </div>
    </div>
  );
}
