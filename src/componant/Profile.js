import React, { useContext, useState } from "react";
import "./Profile.css";
import FormContext from "./FormContext";

const Profile = () => {
  const formctx = useContext(FormContext);
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const openImageInPreview = () => {
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <>
      <div className="profile">
        <div
          className="profile-pic-div"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={formctx.image}
            id="photo"
            alt="Profile"
            onClick={openImageInPreview}
            style={{ objectFit: "cover" }}
          />
          {isHovered && (
            <>
              <input
                type="file"
                id="file"
                onChange={formctx.handleImageChange}
                accept="image/*"
              />
              <label htmlFor="file" id="uploadBtn">
                upload
              </label>
            </>
          )}
        </div>
      </div>
      {showPreview && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <img src={formctx.image} alt="Preview" className="preview-image" />
        </div>
      )}
    </>
  );
};

export default Profile;
