import React, { useContext } from "react";
import "./Profile.css";
import { FormContext } from "./FormContext";

const Profile = (props) => {
  const { image } = useContext(FormContext);

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
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="form-group mt-4">
        <img
          className="rounded-circle"
          src={image}
          alt="Preview"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default Profile;
