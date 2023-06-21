import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import InputType from "./Inputtype";
import Phonenumber from "./Phonenumber";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Button from "./Button";
import Profile from "./Profile";

export default function Compform() {
  const {
    name,
    email,
    phonenumber,
    setGender,
    setName,
    setEmail,
    handleSubmit,
    handlePhonenumber,
    handleCheckboxChange,
    handleImageChange,
  } = useContext(FormContext);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="col-3">
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
      <CheckBox onChange={handleCheckboxChange} />
      <Radio onChange={handleChange(setGender)} />
      <Profile onChange={handleImageChange} />
      <Button />
    </form>
  );
}
