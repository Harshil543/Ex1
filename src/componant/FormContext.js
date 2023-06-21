import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phonenumber);
    e.target.reset();
  };

  const handlePhonenumber = (e) => {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "+" + "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    setPhonenumber(e.target.value);
  };

  const contextValue = {
    name,
    email,
    phonenumber,
    setName,
    setEmail,
    setPhonenumber,
    handleSubmit,
    handlePhonenumber,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
