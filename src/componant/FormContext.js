import React, { createContext, useState } from "react";
import { useFormik } from "formik";
import photo from "./profile.JPG";

const initialValues = {
  profile: photo,
  name: "",
  email: "",
  phonenumber: "",
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
        formik.setFieldValue("profile", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
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

// import { createContext, useState } from "react";
// import photo from "./profile.JPG";
// import { useFormik } from "formik";

// export const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [image, setImage] = useState(photo);

//   const initialValues = {
//     name: "",
//   };

//   const handlePhonenumber = (e) => {
//     let x = e.target.value
//       .replace(/\D/g, "")
//       .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//     e.target.value = !x[2]
//       ? x[1] // eslint-disable-next-line
//       : "+" + "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
//     setPhonenumber(e.target.value);
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setHobbie((preHobbie) => [...preHobbie, value]);
//     } else {
//       setHobbie((preHobbie) => preHobbie.filter((hobbie) => hobbie !== value));
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImage(null);
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values, actions) => {
//       console.log(values);
//       actions.resetForm();
//       setImage(photo);
//     },
//   });

//   const contextValue = {
//     formik,
//     handlePhonenumber,
//     handleCheckboxChange,
//     handleImageChange,
//     hobbielist,
//     genderlist,
//   };

//   return (
//     <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
//   );
// };

// import React, { createContext } from "react";
// import { useFormik } from "formik";

// const initialValues = {
//   name: "",
//   email: "",
//   aboutme: "",
//   gender: "",
// };
// const handleCheckboxChange = (e) => {
//   const { value, checked } = e.target;
//   if (checked) {
//     setHobbie((preHobbie) => [...preHobbie, value]);
//   } else {
//     setHobbie((preHobbie) => preHobbie.filter((hobbie) => hobbie !== value));
//   }
// };
// const FormContext = createContext(null);

// export const FormProvider = ({ children }) => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values, { resetForm }, e) => {
//       console.log(values);
//       resetForm();
//     },
//   });

//   return <FormContext.Provider value={formik}>{children}</FormContext.Provider>;
// };

// export default FormContext;
