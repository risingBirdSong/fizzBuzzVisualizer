import * as React from "react";
import { Tab, leftBracket, rightBracket } from "./htmlHelper";
import FizzStatus from "../fizzEnum";

const IfFizzBuzz = (props: { status: FizzStatus }) => {
  return (
    <div
      className={
        props.status === FizzStatus["fizzbuzz"] ? "fizzBuzzStatus" : ""
      }
    >
      <Tab /> <span className="control"> if </span>
      <span className="structure">(</span>
      <span className="values">
        num
      </span> <span className="structure">%</span>{" "}
      <span className="values">15</span> <span className="control">===</span>{" "}
      <span className="values">0</span> <span className="structure">)</span>
      <span className="structure">{leftBracket}</span>
      <p></p>
      <Tab />
      <span>
        {" "}
        <Tab></Tab> <span className="control">print</span>{" "}
        <span className="string">"fizzbuzz"</span>{" "}
      </span>
      <p></p>
      <Tab />
      <Tab />
      <span className="structure">{rightBracket}</span>
    </div>
  );
};

export default IfFizzBuzz;
