import * as React from "react";
const FizzBuzzLogic = (num: number, current: number) => {
  let value: string | number = num;
  let backgroundColor: string = "beige";
  let color: string = "white";
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
      key={num}
      className="grid-item-current"
      style={{ backgroundColor: backgroundColor }}
    >
      <div style={{ color: color }}>{value}</div>
    </div>
  );
};

export default FizzBuzzLogic;
