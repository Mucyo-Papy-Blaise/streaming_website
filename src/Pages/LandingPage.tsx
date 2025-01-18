import React from "react";
import NavBar from "../Component/NavBar";
import Home from "../Component/Home";

const LandingPage: React.FC = () => {

  const handleContactClick = () => {
    console.log("Contact section clicked!");
  };

  const handleAboutClick = () => {
    console.log("About section clicked!");
  };

  const handleHomeClick = () => {
  };

  return (
    <div>
      <NavBar
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onHomeClick={handleHomeClick}
      />
      <Home />
    </div>
  );
};

export default LandingPage;
