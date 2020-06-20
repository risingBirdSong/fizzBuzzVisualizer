import * as React from "react";
const fizzBuzzing = (num: number, current: number): JSX.Element => {
  let value: string | number;
  let backgroundColor: string;
  let color: string;
  if (num === current) {
    if (num === 0) {
      value = 0;
      backgroundColor = "burlywood";
      color = "black";
    } else if (num % 15 === 0) {
      value = "fizz buzz";
      backgroundColor = "brown";
      color = "white";
    } else if (num % 3 === 0) {
      value = "fizz";
      backgroundColor = "purple";
      color = "antiquewhite";
    } else if (num % 5 === 0) {
      value = "buzz";
      backgroundColor = "chocolate";
      color = "cornsilk";
    } else {
      value = num;
      backgroundColor = "burlywood";
      color = "black";
    }
    return (
      <div
        className="grid-item-current"
        style={{ backgroundColor: backgroundColor }}
      >
        <div style={{ color: color }}>{value}</div>
      </div>
    );
  } else {
    //insert function here
    return (
      <div key={num} className="grid-item">
        {num}
      </div>
    );
  }
};

export default fizzBuzzing;
