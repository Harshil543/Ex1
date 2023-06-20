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

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="text-center m-4">Profile</h1>
        <input
          className="form-control m-4"
          placeholder="Name"
          maxLength="35"
          onChange={handleChange(setName)}
          required
        ></input>
        <input
          className="form-control m-4"
          placeholder="Email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
          maxLength="55"
          onChange={handleChange(setEmail)}
          required
        ></input>
        <div className="container m-4 d-flex justify-content-center align-items-center">
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
        <div className="container m-4 d-flex justify-content-center align-items-center">
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
        <textarea
          placeholder="About me"
          className="form-control m-4"
          maxLength="500"
          onChange={handleChange(setAboutme)}
        ></textarea>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {image && (
          <div className="form-group">
            <img
              className="rounded-circle"
              src={image}
              alt="Preview"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
        )}
        <input
          className="form-control m-4"
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={handleChange(setPhonenumber)}
          required
        ></input>
        <button type="submit" className="btn btn-success mb-5">
          submit
        </button>
      </form>
    </div>
  );
}
