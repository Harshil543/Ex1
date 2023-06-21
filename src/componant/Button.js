import React from "react";

export default function Button() {
  return (
    <>
      <button type="submit" className="btn btn-success m-2">
        submit
      </button>
      <button type="submit" className="btn btn-outline-success m-2">
        submit
      </button>
      <button
        type="submit"
        className="btn btn-link text-decoration-none text-dark m-2"
      >
        submit
      </button>
    </>
  );
}
