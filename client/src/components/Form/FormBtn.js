import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10, backgroundColor: "#20315A", borderColor:"#20315A"}} className="btn btn-info justify-content-center">
    {props.children}
  </button>
);
