import React, { Component } from "react";
// import Counter from "./counter";
import ChildCounter from "./childcounter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
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
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-info btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          //   <Counter
          //     onDelete={this.handleDelete}
          //     key={counter.id}
          //     value={counter.value}
          //     id={counter.id}
          //   />
          <ChildCounter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
