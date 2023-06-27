import React, { createContext, useState } from "react";
import { useFormik } from "formik";
import photo from "./pro2.jpg";

const initialValues = {
  profile: photo,
  name: "",
  email: "",
  phonenumber: "",
  password: "",
  aboutme: "",
  gender: "",
  hobbies: [],
};

const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const genderlist = [
    { id: "M", name: "Male", value: "MALE" },
    { id: "F", name: "Female", value: "FEMALE" },
  ];

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
      name: "Cycling",
      value: "CYCLING",
    },
  ];

  const handlePhonenumber = (e) => {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    x = !x[2]
      ? x[1]
      : // eslint-disable-next-line
        "+" + "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");

    formik.setFieldValue("phonenumber", x);
  };

  const [image, setImage] = useState(photo);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(photo);
    }
  };

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      let errors = {};
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.phonenumber) {
        errors.phonenumber = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalid Password.";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }, e) => {
      // let phoneNumber = values.phonenumber.replace(/[\s()+-]/g, "");
      console.log(values);
      resetForm();
      setImage(photo);
    },
  });

  return (
    <FormContext.Provider
      value={{
        formik,
        hobbielist,
        genderlist,
        image,
        setImage,
        handleImageChange,
        handlePhonenumber,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
