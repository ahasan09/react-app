import React, { Component } from "react";

class ChildCounter extends Component {
  componentWillUnmount() {
    console.log("Count UnMount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div className="row">
        <div className="col-1">
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.getBadgeClasses()}
          >
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            style={this.styles}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled={!this.props.counter.value}
            onClick={() => this.props.onDecrement(this.props.counter)}
            style={this.styles}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default ChildCounter;
