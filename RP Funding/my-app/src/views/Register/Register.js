import React from "react";
import "./Register.css";
import UserFrom from "../../components/UserForm/UserForm";

function Register() {
  return (
    <div className="pure-g">
      <div className="pure-u-lg-1-3"></div>
      <div className="pure-u-1 pure-u-lg-1-3">
        <h2>Registration Form</h2>
        <UserFrom />
      </div>
      <div className="pure-u-lg-1-3"></div>
    </div>
  );
}

export default Register;
