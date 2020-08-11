import React from "react";
import "./sign-in-and-sign-up.styles.sass";
//importing components
import SignIn from "../../components/sign-in/sign-in";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
