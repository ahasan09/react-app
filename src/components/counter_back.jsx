import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["Tag1", "Tag2", "Tag3"],
    conditionalTags: []
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleIncrementOld = this.handleIncrementOld.bind(this);
  }

  renderTags() {
    if (this.state.conditionalTags.length === 0)
      return <p>There are no tags!!</p>;

    return (
      <ul>
        {this.state.conditionalTags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrementOld() {
    console.log("Increment Clicked!!", this);
  }

  handleIncrement = () => {
    console.log("Increment Clicked!!", this);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    console.log("Decrement Clicked!!", this);
    this.setState({ value: this.state.value - 1 });
  };

  passEvent = product => {
    console.log(product);
  };

  render() {
    //console.log(this.props);

    return (
      <React.Fragment>
        <span
          style={{ fontSize: 20, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={this.styles}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        <button
          onClick={this.handleDecrement}
          style={this.styles}
          className="btn btn-secondary btn-sm mr-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.passEvent({ id: 2 })}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Pass Event
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>
          {this.state.conditionalTags.length === 0 &&
            "Please create anew tag!!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
