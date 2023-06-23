import React, { useContext } from "react";
import FormContext from "./FormContext";
import InputType from "./Inputtype";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import PhoneNumber from "./Phonenumber";
import About from "./About";
import Profile from "./Profile";

const FormComponent = () => {
  const formctx = useContext(FormContext);

  const handleClick = () => {
    formctx.formik.handleSubmit();
  };

  return (
    <div>
      <InputType label="Name" name="name" />
      <InputType label="Email" name="email" type="email" />
      <PhoneNumber name="phonenumber" />
      <label className="my-3">Gender</label>
      {formctx.genderlist.map((gender) => {
        return (
          <div key={gender.id}>
            <Radio id={gender.id} value={gender.value} name={gender.name} />
          </div>
        );
      })}

      <label className="my-3">Hobbie</label>
      {formctx.hobbielist.map((hobby) => (
        <CheckBox
          key={hobby.id}
          name="hobbies"
          value={hobby.value}
          checked={formctx.formik.values.hobbies.includes(hobby.value)}
          onChange={formctx.formik.handleChange}
          label={hobby.name}
        />
      ))}

      <About placeholder="About me" name="aboutme" />
      <Profile />
      <button onClick={handleClick} type="submit">
        Submit
      </button>
    </div>
  );
};

export default FormComponent;

// import React, { useContext } from "react";
// import { FormContext } from "./FormContext";
// import InputType from "./Inputtype";
// // import Phonenumber from "./Phonenumber";
// // import CheckBox from "./CheckBox";
// // import Radio from "./Radio";
// // import Button from "./Button";
// // import Profile from "./Profile";
// // import About from "./About";

// export default function FormComponent() {
//   const formik =
//     // handlePhonenumber,
//     // handleCheckboxChange,
//     // handleImageChange,
//     // genderlist,
//     // hobbielist,
//     useContext(FormContext);

//   // console.log(formik.values.name);

//   return (
//     <div className="col-4 p-4 bg-light">
//       <h1>Profile</h1>
//       {/* <div className="d-flex flex-column justify-contant-center align-items-center">
//         <Profile onChange={handleImageChange} />
//       </div> */}
//       <InputType name="name" label="Name" maxLength="35" required="required" />
//       <button onClick={formik.handleSubmit} type="submit">
//         submit
//       </button>
//       {/* <InputType
//         type="text"
//         label="Email"
//         maxLength="55"
//         pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
//         value={values.email}
//         onChange={handleChange}
//         required="required"
//       />
//       <InputType
//         type="password"
//         label="password"
//         value={values.password}
//         onChange={handleChange}
//         required="required"
//       />
//       <Phonenumber value={values.phonenumber} onChange={handlePhonenumber} />
//       <label htmlFor="hobbie" className="my-2">
//         Hobbie
//       </label>
//       {hobbielist.map((hobbies) => {
//         return (
//           <div key={hobbies.id}>
//             <CheckBox
//               label="Hobbie"
//               id={hobbies.id}
//               value={hobbies.value}
//               name={hobbies.name}
//               onChange={handleCheckboxChange}
//             />
//           </div>
//         );
//       })}
//       <About onChange={handleChange} />
//       <label className="my-3">Gender</label>
//       {genderlist.map((gender) => {
//         return (
//           <div key={gender.id}>
//             <Radio
//               id={gender.id}
//               value={gender.value}
//               name={gender.name}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       })} */}
//       {/* <Button type="dark" /> */}
//     </div>
//   );
// }

// import React, { useContext } from "react";
// import { FormContext } from "./FormContext";
// import InputType from "../componant/Inputtype";
// import Button from "./Button";

// export default function FormComponent() {
//   const { formik } = useContext(FormContext);
//   console.log(formik);

//   return (
//     <form onSubmit={formik.handleSubmit} className="col-4 p-4 bg-light">
//       <h1>Profile</h1>
//       <InputType
//         type="text"
//         label="Name"
//         maxLength="35"
//         value={formik.values.name}
//         onChange={formik.handleChange}
//         required="required"
//       />
//       <Button type="dark" />
//     </form>
//   );
// }

// import React from "react";
// import { useFormik, FormikProvider, useFormikContext, Field } from "formik";

// const MyForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <FormikProvider value={formik}>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <Field type="text" id="firstName" name="firstName" />

//         <label htmlFor="lastName">Last Name:</label>
//         <Field type="text" id="lastName" name="lastName" />

//         <label htmlFor="email">Email:</label>
//         <Field type="email" id="email" name="email" />

//         <button type="submit">Submit</button>
//       </form>
//       <AdditionalInfo />
//     </FormikProvider>
//   );
// };

// const AdditionalInfo = () => {
//   const { values } = useFormikContext();

//   return (
//     <div>
//       <h2>Additional Information</h2>
//       <p>First Name: {values.firstName}</p>
//       <p>Last Name: {values.lastName}</p>
//       <p>Email: {values.email}</p>
//     </div>
//   );
// };

// export default MyForm;
