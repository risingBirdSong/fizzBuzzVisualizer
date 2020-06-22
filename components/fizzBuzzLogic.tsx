import * as React from "react";
import { fizzHelper, fizzColorHelper } from "../fizzHelper";
const FizzBuzzLogic = (num: number, current?: boolean) => {
  let value: string | number = num;
  let backgroundColor: string = "beige";
  let color: string = "white";
  if (num % 15 === 0) {
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
    color = fizzColorHelper(num);
    backgroundColor = "white";
    // borderColor = "2px purple";
  }
  return (
    <div
      key={num}
      className="grid-item-current"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{
          color: color,
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default FizzBuzzLogic;
