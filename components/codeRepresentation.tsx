import * as React from "react";
import { Tab, leftBracket, rightBracket } from "./htmlHelper";
import IfFizzBuzz from "./ifFizzbuzz";
import IfFizz from "./ifFizz";
import IfBuzz from "./ifBuzz";
import ForLoop from "./forLoop";
import ElseNumber from "./elseNumber";

enum FizzStatus {
  "fizz",
  "buzz",
  "fizzbuzz",
  "notfizzorbuzz",
}

//todo remove optional
interface CodeRepProps {
  currentNum?: number;
  fizzStatus: FizzStatus;
}

const CodeRepresentation = (props: CodeRepProps) => {
  //prettier-ignore
  return (
    <div className="code">
      <pre>
        <ForLoop/>
         <p> <Tab/> log(<span className="values">num</span>) <span className="currentNum">{props.currentNum}</span></p>
        <p>
         <IfFizzBuzz status={props.fizzStatus}/>
         <IfFizz status={props.fizzStatus}></IfFizz>
         <IfBuzz status={props.fizzStatus}></IfBuzz>
         <ElseNumber status={props.fizzStatus}/>
         <p></p>
      <span className="structure">{rightBracket}</span>
        </p>
      </pre>
    </div>
  );
};
//Tab
export default CodeRepresentation;
