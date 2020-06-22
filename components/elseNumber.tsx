import * as React from "react";
import FizzStatus from "../fizzEnum";
import { Tab, leftBracket, rightBracket } from "./htmlHelper";

const ElseNumber = (props: { status: FizzStatus }) => {
  return (
    <div
      className={
        props.status === FizzStatus["notfizzorbuzz"] ? "numberStatus" : ""
      }
    >
      <p></p>
      <span>
        {" "}
        <Tab /> <span className="control"> return</span>{" "}
        <span className="values">num</span>{" "}
      </span>
    </div>
  );
};

export default ElseNumber;
