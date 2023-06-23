import React, { useContext } from "react";
import FormContext from "./FormContext";
import InputType from "./Inputtype";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
// import PhoneNumber from "./Phonenumber";
import About from "./About";
import Profile from "./Profile";

const FormComponent = () => {
  const formctx = useContext(FormContext);

  const handleClick = () => {
    formctx.formik.handleSubmit();
  };

  return (
    <div className="col-4 p-4 bg-light">
      <h1 className="text-center">Profile</h1>
      <div className="d-flex flex-column justify-contant-center align-items-center">
        <Profile name="image" />
      </div>
      <InputType
        onChange={formctx.formik.handleChange}
        value={formctx.formik.values.name}
        label="Name"
        maxLength="35"
        name="name"
        placeholder="Name"
      />
      <InputType
        onChange={formctx.formik.handleChange}
        value={formctx.formik.values.email}
        label="Email"
        maxLength="55"
        placeholder="email"
        name="email"
        type="email"
      />
      <InputType
        onChange={formctx.handlePhonenumber}
        value={formctx.formik.values.phonenumber}
        label="Phone Number"
        placeholder="Phone Number"
        name="phonenumber"
      />
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
          id={hobby.id}
          name="hobbies"
          value={hobby.value}
          checked={formctx.formik.values.hobbies.includes(hobby.value)}
          onChange={formctx.formik.handleChange}
          label={hobby.name}
        />
      ))}

      <About placeholder="About me" name="aboutme" />
      <button onClick={handleClick} type="submit">
        Submit
      </button>
    </div>
  );
};

export default FormComponent;
