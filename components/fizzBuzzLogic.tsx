import * as React from "react";
const FizzBuzzLogic = (num: number, current?: boolean) => {
  let value: string | number = num;
  let backgroundColor: string = "beige";
  let color: string = "white";
  let borderColor;
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
  if (current && typeof value !== "number") {
    color = "red";
    borderColor = "4px solid orange";
  }
  return (
    <div
      key={num}
      className="grid-item-current"
      style={{ backgroundColor: backgroundColor }}
    >
      <div style={{ color: color, border: borderColor }}>{value}</div>
    </div>
  );
};

export default FizzBuzzLogic;
