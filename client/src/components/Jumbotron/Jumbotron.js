import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ backgroundColor: "#20315A", color: "white" }} className="jumbotron text-center">
    {children}
  </div>
);

export default Jumbotron;
