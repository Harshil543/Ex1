import React, { useContext } from "react";
import "./Profile.css";
import FormContext from "./FormContext";

const Profile = () => {
  const formctx = useContext(FormContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        formctx.setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      formctx.setImage(null);
    }
    formctx.formik.setFieldValue("profile", file);
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="image" className="my-4">
          Upload Image
        </label>
        <div className="form-group">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="form-group mt-4">
        <img
          className="rounded-circle"
          src={formctx.image}
          alt="Preview"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default Profile;
