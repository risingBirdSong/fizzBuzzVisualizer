import * as React from "react";
import FizzStatus from "../fizzEnum";
import { Tab, leftBracket, rightBracket } from "./htmlHelper";

const IfFizz = (props: { status: FizzStatus }) => {
  return (
    <div className={props.status === FizzStatus["fizz"] ? "fizzStatus" : ""}>
      <p></p>
      <Tab></Tab>
      <span className="control">&nbsp; else if </span>
      <span className="structure">(</span>
      <span className="values">
        num
      </span> <span className="structure">%</span>{" "}
      <span className="values">3</span> <span className="control">===</span>{" "}
      <span className="values">0</span> <span className="structure">)</span>
      <span className="structure">{leftBracket}</span>
      <p></p>
      <Tab />
      <span>
        {" "}
        <Tab></Tab> <span className="control">print</span>{" "}
        <span className="string">"fizz"</span>{" "}
      </span>
      <p></p>
      <Tab />
      <Tab />
      <span className="structure">{rightBracket}</span>
    </div>
  );
};

export default IfFizz;
