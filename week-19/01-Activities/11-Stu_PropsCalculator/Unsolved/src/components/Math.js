import React from "react";

const Math = props => {
  let result;

  switch (props.operaiton) {
    case "addition":
      result = props.num1 + props.num2;
      break;
    case "substraction":
      result = props.num1 - props.num2;
      break;
    case "multiplication":
      result = props.num1 * props.num2;
      break;
    case "division":
      result = props.num1 / props.num2;
      break;
    default:
      break;
  }

};

export default Math;
