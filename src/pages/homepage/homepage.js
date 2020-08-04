import React from "react";
import "./homepage.styles.scss";
//importing components
import Directory from "../../components/directory/directory.js";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
