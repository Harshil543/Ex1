import React, { useContext } from "react";
import FormContext from "./FormContext";
import InputType from "./Inputtype";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import About from "./About";
import Profile from "./Profile";
import Button from "./Button";
import PasswordInputType from "./PasswordInputType";
// import PhoneNumber from "./Phonenumber";

const FormComponent = () => {
  const formctx = useContext(FormContext);

  const handleClick = () => {
    formctx.formik.handleSubmit();
  };

  return (
    <div className="px-5 pt-2 m-3 shadow-lg bg-light rounded">
      <h1 className="text-center">Profile</h1>
      <div className="d-flex flex-column justify-contant-center align-items-center">
        <Profile name="image" />
      </div>
      <InputType
        type="text"
        onChange={formctx.formik.handleChange}
        value={formctx.formik.values.name}
        label="Name"
        maxLength="35"
        name="name"
        placeholder="Name"
      />
      <InputType
        type="text"
        onChange={formctx.formik.handleChange}
        value={formctx.formik.values.email}
        label="Email"
        maxLength="55"
        placeholder="email"
        name="email"
      />
      <InputType
        onChange={formctx.handlePhonenumber}
        value={formctx.formik.values.phonenumber}
        label="Phone Number"
        placeholder="Phone Number"
        name="phonenumber"
      />
      <PasswordInputType
        onChange={formctx.formik.handleChange}
        value={formctx.formik.values.password}
        label="Password"
        placeholder="Password"
        name="password"
      />
      <div className="d-flex justify-cantent-center align-items-center">
        <label className="">Gender</label>
        {formctx.genderlist.map((gender) => {
          return (
            <div key={gender.id}>
              <Radio id={gender.id} value={gender.value} name={gender.name} />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-cantent-center align-items-center">
        <div className="me-4">Hobbie</div>
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
      </div>
      <About placeholder="About me" name="aboutme" />
      <Button onClick={handleClick} label="submit" type="outline-dark" />
    </div>
  );
};

export default FormComponent;
