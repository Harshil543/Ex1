import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import InputType from "./Inputtype";
import Phonenumber from "./Phonenumber";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Button from "./Button";
import Profile from "./Profile";
import About from "./About";

export default function FormComponent() {
  const {
    name,
    email,
    phonenumber,
    password,
    setPassword,
    setAboutme,
    setGender,
    setName,
    setEmail,
    handleSubmit,
    handlePhonenumber,
    handleCheckboxChange,
    handleImageChange,
    handleChange,
    genderlist,
    hobbielist,
  } = useContext(FormContext);

  return (
    <form onSubmit={handleSubmit} className="col-4 p-4 bg-light">
      <h1>Profile</h1>
      <div className="d-flex flex-column justify-contant-center align-items-center">
        <Profile onChange={handleImageChange} />
      </div>
      <InputType
        type="text"
        label="Name"
        placeholder="Name"
        maxLength="35"
        value={name}
        onChange={handleChange(setName)}
        required="required"
      />
      <InputType
        type="text"
        label="Email"
        placeholder="Email"
        maxLength="55"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        value={email}
        onChange={handleChange(setEmail)}
        required="required"
      />
      <InputType
        type="password"
        label="password"
        placeholder="Password"
        value={password}
        onChange={handleChange(setPassword)}
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
      <Button type="dark" />
    </form>
  );
}
