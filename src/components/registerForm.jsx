import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
    .required()
      .email({ minDomainAtoms: 2 })
      .label("Username"),
    password: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .label("Password"),
      name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    console.log("Registered");
  };

  render() {
    return (
      <div>
        <h2>Register Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
