import React from "react";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center m-5">Profile</h1>
        <input
          className="form-control m-4"
          placeholder="Name"
          maxLength="35"
        ></input>
        <input
          className="form-control m-4"
          placeholder="Email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
          maxLength="55"
        ></input>
        <div className="container m-4 d-flex justify-content-center align-items-center">
          <input
            type="checkbox"
            id="Swimming"
            name="Swimming"
            value="Swimming"
          />
          <label className="m-2" htmlFor="Swimming">
            Swimming
          </label>
          <input type="checkbox" id="Driving" name="Driving" value="Driving" />
          <label className="m-2" htmlFor="Driving">
            Driving
          </label>
          <input type="checkbox" id="Cycling" name="Cycling" value="Cycling" />
          <label className="m-2" htmlFor="Cycling">
            Cycling
          </label>
        </div>
        <div className="container m-4 d-flex justify-content-center align-items-center">
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male" className="m-2">
            Male
          </label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female" className="m-2">
            Female
          </label>
        </div>
        <textarea
          placeholder="About me"
          className="form-control m-4"
          maxLength="500"
        ></textarea>
        <img className="rounded-circle" src="logo192.png" alt="Avatar" />
        <input
          className="form-control m-4"
          placeholder="Name"
          maxLength="35"
        ></input>
        <input
          className="form-control m-4"
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        ></input>
        <button type="submit" className="btn btn-success">
          submit
        </button>
      </form>
    </div>
  );
}
