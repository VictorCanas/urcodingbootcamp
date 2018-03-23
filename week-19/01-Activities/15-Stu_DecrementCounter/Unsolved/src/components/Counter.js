import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    poop: ""
  };

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  Escrement = () => {
    this.setState({ poop: this.state.poop + '💩' });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <p className="card-text">Escrement {this.state.poop}</p>
          <button type="button" className="btn btn-success" style={{ margin: "5px" }} onClick={this.Increment}>
            Increment
          </button>
          <button type="button" className="btn btn-danger" style={{ margin: "5px" }} onClick={this.Decrement}>
            Decrement
          </button>
          <button type="button" className="btn btn-warning" style={{ margin: "5px" }} onClick={this.Escrement}>
            Escrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
