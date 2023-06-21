import React from "react";

export default function Button() {
  return (
    <div className="d-flex m-5">
      <button type="submit" className="btn btn-success mx-5">
        submit
      </button>
      <button type="submit" className="btn btn-outline-success mx-5">
        submit
      </button>
      <button
        type="submit"
        className="btn btn-link mx-5 text-decoration-none text-dark"
      >
        submit
      </button>
    </div>
  );
}
