import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCustomer, getSex, saveCustomer } from "../services/fakeCustomerService";

class CustomerForm extends Form {
  // {this.props.match.params.id}

  state = {
    data: {
      firstName: "",
      lastName: "",
      age: "",
      sexId: "",
      phone: "",
      income: "",
      address: ""
    },
    sex: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    firstName: Joi.string()
      .min(2)
      .max(50)
      .required()
      .label("Firstname"),
    lastName: Joi.string()
      .min(2)
      .max(50)
      .required()
      .label("Lastname"),
    age: Joi.number()
      .integer()
      .min(0)
      .max(80)
      .required()
      .label("Age"),
    income: Joi.number()
      .required()
      .label("Income"),
    sexId: Joi.string()
      .required()
      .label("Sex"),
    phone: Joi.string()
      .required()
      .label("Phone"),
    address: Joi.string()
      .label("Address")
  };

  componentDidMount() {
    const sex = getSex();
    this.setState({ sex });

    const customerId = this.props.match.params.id;
    if (customerId === "new") return;

    const customer = getCustomer(customerId);
    if (!customer) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(customer) });
  }

  mapToViewModel(customer) {
    return {
      _id: customer._id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      age: customer.age,
      sexId: customer.sex._id,
      phone: customer.phone,
      income: customer.income,
      address: customer.address
    };
  }

  doSubmit = () => {
    saveCustomer(this.state.data);
    this.props.history.push("/customers");
  };

  render() {
    return (
      <div>
        <h2>Customer Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "Firstname")}
          {this.renderInput("lastName", "Lastname")}
          {this.renderInput("age", "Age")}
          {this.renderSelect("sexId", "Sex", this.state.sex)}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("income", "Income")}
          {this.renderInput("address", "Address")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CustomerForm;
