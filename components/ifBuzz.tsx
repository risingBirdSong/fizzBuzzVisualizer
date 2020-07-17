import * as React from "react";
import FizzStatus from "../fizzEnum";
import { Tab, leftBracket, rightBracket, Space } from "./htmlHelper";

const IfBuzz = (props: { status: FizzStatus }) => {
  return (
    <div className={props.status === FizzStatus["buzz"] ? "buzzStatus" : ""}>
      <p></p>
      <Tab /> <span className="control">&nbsp;else if </span>
      <span className="structure">(</span>
      <span className="values">
        num
      </span> <span className="structure">%</span>{" "}
      <span className="values">5</span> <span className="control">===</span>{" "}
      <span className="values">0</span> <span className="structure">)</span>
      <span className="structure">{leftBracket}</span>
      <p></p>
      <Tab />
      <span>
        {" "}
        <Tab /> <span className="control"> print</span>{" "}
        <span className="string">"buzz"</span> <br />
        <br />
        <Tab />
        <Space />
        <Tab /> <span className="control"> continue</span>{" "}
      </span>
      <p></p>
      <Tab />
      <Tab />
      <span className="structure">{rightBracket}</span>
      {/* divider */}
    </div>
  );
};

export default IfBuzz;
