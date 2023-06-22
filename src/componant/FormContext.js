import { createContext, useState } from "react";
import photo from "./profile.JPG";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [hobbie, setHobbie] = useState([]);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(photo);
  const [aboutme, setAboutme] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let phoneNumber = phonenumber.replace(/[\s()+-]/g, "");

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(phoneNumber);
    console.log(hobbie);
    console.log(gender);
    console.log(aboutme);
    e.target.reset();
    setImage(photo);
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

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const contextValue = {
    name,
    email,
    phonenumber,
    gender,
    image,
    aboutme,
    password,
    setPassword,
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
    handleChange,
    hobbielist,
    genderlist,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
