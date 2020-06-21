import * as React from "react";
import FizzBuzzLogic from "./fizzBuzzLogic";
const fizzBuzzHandler = (num: number, current: number): JSX.Element => {
  let value: string | number;
  let backgroundColor: string;
  let color: string;
  if (num === current) {
    return FizzBuzzLogic(num, true);
  } else if (num < current) {
    return FizzBuzzLogic(num);
  } else {
    return (
      <div key={num} className="grid-item">
        {num}
      </div>
    );
  }
};

export default fizzBuzzHandler;
