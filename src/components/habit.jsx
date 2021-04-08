import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = (event) => {
    console.log(event);
    console.log("1111");
  };

  //   handleIncrement2 = () => {
  //   };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={(event) => this.handleIncrement(event)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
