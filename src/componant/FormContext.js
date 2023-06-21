import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [hobbie, setHobbie] = useState([]);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [aboutme, setAboutme] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phonenumber);
    console.log(hobbie);
    console.log(gender);
    console.log(aboutme);
    e.target.reset();
    setImage(null);
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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbie((preHobbie) => [...preHobbie, value]);
    } else {
      setHobbie((preHobbie) => preHobbie.filter((hobbie) => hobbie !== value));
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

  const contextValue = {
    name,
    email,
    phonenumber,
    gender,
    image,
    aboutme,
    setAboutme,
    setImage,
    setGender,
    setName,
    setEmail,
    setPhonenumber,
    handleSubmit,
    handlePhonenumber,
    handleCheckboxChange,
    handleImageChange,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
