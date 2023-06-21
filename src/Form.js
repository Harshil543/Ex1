import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hobbie, setHobbie] = useState([]);
  const [gender, setGender] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [image, setImage] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(aboutme);
    console.log(phonenumber);
    console.log(hobbie);
    console.log(gender);
    e.target.reset();

    setImage(null);
  };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbie((preHobbie) => [...preHobbie, value]);
    } else {
      setHobbie((prevInterests) =>
        prevInterests.filter((hobbie) => hobbie !== value)
      );
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handlePhonenumber = (e) => {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : // eslint-disable-next-line
        "+" + "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    setPhonenumber(e.target.value);
  };

  return (
    <div className="my-4 d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="bg-light p-5">
        <h1 className="text-center my-4">Profile</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control my-4"
            placeholder="Name"
            maxLength="35"
            onChange={handleChange(setName)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control my-4"
            placeholder="Email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
            maxLength="55"
            onChange={handleChange(setEmail)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number (US format)</label>
          <input
            className="form-control mt-4"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+(xxx) xxx-xxxx"
            onChange={handlePhonenumber}
            required
          />
          <small className="form-text text-muted">
            Format: +(123) 456-7890
          </small>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="hobbie">Hobbie</label>
          <div className="mt-4">
            <input
              type="checkbox"
              id="Swimming"
              name="Swimming"
              value="Swimming"
              onChange={handleCheckboxChange}
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
              onChange={handleCheckboxChange}
            />
            <label className="m-2" htmlFor="Driving">
              Driving
            </label>
            <input
              type="checkbox"
              id="Cycling"
              name="Cycling"
              value="Cycling"
              onChange={handleCheckboxChange}
            />
            <label className="m-2" htmlFor="Cycling">
              Cycling
            </label>
          </div>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="gender">Gender</label>
          <div className="mt-4">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange(setGender)}
            />
            <label htmlFor="male" className="m-2">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange(setGender)}
            />
            <label htmlFor="female" className="m-2">
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="my-4">
            Upload Image
          </label>
          <div className="form-group">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="form-group mt-4">
            <img
              className="rounded-circle"
              src={image}
              alt="Preview"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="gender" className="mt-4">
            About me
          </label>
          <textarea
            placeholder="About me"
            className="form-control my-4"
            maxLength="500"
            onChange={handleChange(setAboutme)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success mx-5"
          disabled={
            !name ||
            !email ||
            !hobbie.length ||
            !gender ||
            !aboutme ||
            !phonenumber
          }
        >
          submit
        </button>
        <button
          type="submit"
          className="btn btn-outline-success mx-5"
          disabled={
            !name ||
            !email ||
            !hobbie.length ||
            !gender ||
            !aboutme ||
            !phonenumber
          }
        >
          submit
        </button>
        <button
          type="submit"
          className="btn btn-link mx-5 text-decoration-none text-dark"
          disabled={
            !name ||
            !email ||
            !hobbie.length ||
            !gender ||
            !aboutme ||
            !phonenumber
          }
        >
          submit
        </button>
      </form>
    </div>
  );
}
