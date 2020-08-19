import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  handleclick,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      onClick={handleclick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
