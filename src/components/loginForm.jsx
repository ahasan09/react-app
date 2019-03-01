import React from "react";
import Joi from "joi-browser";
// import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  userName = React.createRef();

  //   componentDidMount() {
  //     this.userName.current.focus();
  //   }
  // validate = () => {
  //   const options = { abortEarly: false };
  //   const { error } = Joi.validate(this.state.data, this.schema, options);
  //   if (!error) return null;

  //   const errors = {};
  //   error.details.map(e => (errors[e.path[0]] = e.message));
  //   return errors;

  //   // const { data } = this.state;

  //   // if (data.username.trim() === "")
  //   //   errors.username = "Username is required.";
  //   // if (data.password.trim() === "")
  //   //   errors.password = "Password is required.";

  //   // return Object.keys(errors).length === 0 ? null : errors;
  // };

  // validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const schema = { [name]: this.schema[name] };
  //   const { error } = Joi.validate(obj, schema);
  //   return error ? error.details[0].message : null;
  //   // if (name === "username") {
  //   //   if (value.trim() === "") return "Username is required.";
  //   // }
  //   // if (name === "password") {
  //   //   if (value.trim() === "") return "Password is required.";
  //   // }
  // };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const errors = this.validate();
  //   this.setState({ errors: errors || {} });
  //   if (errors) return;

  //   console.log("Submitted");

  //   this.doSubmit();
  // };  

  doSubmit=()=>{
    console.log("Submitted");
  }

  // handleChange = ({ currentTarget: input }) => {
  //   const errors = { ...this.state.errors };
  //   const errorMessage = this.validateProperty(input);
  //   if (errorMessage) errors[input.name] = errorMessage;
  //   else delete errors[input.name];

  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;
  //   this.setState({ data, errors });
  // };

  render() {
    // const { data, errors } = this.state;

    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput("username","Username")}
        {this.renderInput("password","Password","password")}
          {/* <Input
            name="username"
            value={data.username}
            label="Username"
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          /> */}
          {/* <Input
            name="password"
            value={data.password}
            label="Password"
            type="password"
            onChange={this.handleChange}
            error={errors.password}
          /> */}
          {this.renderButton("Login")}
          {/* <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary"
          >
            Login
          </button> */}
        </form>
      </div>
    );
  }
}

export default LoginForm;
