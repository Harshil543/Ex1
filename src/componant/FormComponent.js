import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import InputType from "./Inputtype";
import Phonenumber from "./Phonenumber";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Button from "./Button";
// import Profile from "./Profile";
import About from "./About";

export default function FormComponent() {
  const hobbielist = [
    {
      id: 1,
      name: "Swimming",
      value: "SWIM",
    },
    {
      id: 2,
      name: "Driving",
      value: "DRIVING",
    },
    {
      id: 3,
      name: "cycling",
      value: "cycling",
    },
  ];

  const genderlist = [
    { id: "M", name: "Male", value: "MALE" },
    { id: "F", name: "Female", value: "FEMALE" },
  ];

  const {
    name,
    email,
    phonenumber,
    setAboutme,
    setGender,
    setName,
    setEmail,
    handleSubmit,
    handlePhonenumber,
    handleCheckboxChange,
    // handleImageChange,
  } = useContext(FormContext);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  return (
    <div className="col-4 p-4 bg-light">
      <h1>Profile</h1>
      <InputType
        label="Name"
        placeholder="Name"
        maxLength="35"
        value={name}
        onChange={handleChange(setName)}
        required="required"
      />
      <InputType
        label="Email"
        placeholder="Email"
        maxLength="55"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        value={email}
        onChange={handleChange(setEmail)}
        required="required"
      />
      <Phonenumber value={phonenumber} onChange={handlePhonenumber} />
      <label htmlFor="hobbie" className="my-2">
        Hobbie
      </label>
      {hobbielist.map((hobbies) => {
        return (
          <div key={hobbies.id}>
            <CheckBox
              label="Hobbie"
              id={hobbies.id}
              value={hobbies.value}
              name={hobbies.name}
              onChange={handleCheckboxChange}
            />
          </div>
        );
      })}
      <About onChange={handleChange(setAboutme)} />
      <label className="my-3">Gender</label>
      {genderlist.map((gender) => {
        return (
          <div key={gender.id}>
            <Radio
              id={gender.id}
              value={gender.value}
              name={gender.name}
              onChange={handleChange(setGender)}
            />
          </div>
        );
      })}
      {/* <Profile onChange={handleImageChange} /> */}
      <Button onClick={handleSubmit} type="dark" />
      {/* <Button type="outline-dark" /> */}
      {/* <Button type="link text-decoration-none text-dark" /> */}
    </div>
  );
}
