import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import InputType from "./Inputtype";
import Phonenumber from "./Phonenumber";

export default function Compform() {
  const {
    name,
    email,
    phonenumber,
    setName,
    setEmail,
    handleSubmit,
    handlePhonenumber,
  } = useContext(FormContext);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="col-2">
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
      <button type="submit" className="btn btn-success">
        submit
      </button>
    </form>
  );
}
