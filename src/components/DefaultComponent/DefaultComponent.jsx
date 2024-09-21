import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FootComponent from "../FootComponent/FootComponent";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FootComponent />
    </div>
  );
};

export default DefaultComponent;
