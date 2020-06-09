import React from "react";
import "./Register.css";
import UserFrom from '../../components/UserForm/UserForm'

function Register() {
  return (
    <div class="pure-g">
      <div class="pure-u-lg-1-3"></div>
      <div class="pure-u-lg-1-3 pure-u-sm-1-1">
        <h2>Regsitraion Form</h2>
        <UserFrom />
      </div>
      <div class="pure-u-lg-1-3"></div>

    </div>
  );
}

export default Register;
