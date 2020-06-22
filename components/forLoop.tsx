import * as React from "react";
import FizzStatus from "../fizzEnum";
import { Tab, leftBracket, rightBracket } from "./htmlHelper";

const ForLoop = () => {
  return (
    <div>
      {" "}
      <span className="control">for</span>
      <span>
        <span className="structure">(</span>{" "}
        <span className="variable">let</span>{" "}
        <span className="values">num</span>{" "}
        <span className="structure">of</span> numbers{" "}
        <span className="structure">)</span>
      </span>
      <span className="structure">{leftBracket}</span>
    </div>
  );
};

export default ForLoop;
