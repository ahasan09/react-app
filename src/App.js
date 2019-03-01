import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Customer from "./components/customers";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Counters from "./components/counters";
import CustomerForm from "./components/customerForm";
import Posts from "./components/posts";
import NotFound from "./components/common/notFound";
import LoginForm from "./components/loginForm";
import "./App.css";
import RegisterForm from "./components/registerForm";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevState.counters.length !== this.state.counters.length)
      console.log("DOM UPDATED");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/customers/:id" component={CustomerForm} />
            <Route path="/customers/new" component={CustomerForm} />
            <Route path="/customers" component={Customer} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/not-found" component={NotFound} />
            <Route
              path="/counters"
              render={props => (
                <Counters
                  counters={this.state.counters}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                  onReset={this.handleReset}
                  {...props}
                />
              )}
            />
            <Route path="/" exact component={Home} />
            <Redirect from="/messages" to="/posts" />
            <Redirect to="/not-found" />
          </Switch>
          {/* <Customer /> */}
          {/* <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
