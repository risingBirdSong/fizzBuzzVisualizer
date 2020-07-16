import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";
import fizzBuzzHandler from "./components/fizzbuzzHandler";
import CodeRepresentation from "./components/codeRepresentation";
import { fizzHelper } from "./fizzHelper";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = () => {
  let length = 100;
  const initialNumbers = [...Array(length).keys()];
  const [current, setCurrent] = React.useState(-1);
  const [fizzArray, setNumbers] = React.useState<number[]>(initialNumbers);
  const [step, nextStep] = React.useState<number>(-1);
  let [active, setActive] = React.useState(false);
  let count = 0;
  let stopFizzBuzz = false;
  //https://github.com/parcel-bundler/parcel/issues/954
  //apparently parcel is calling babel for using async await but it's not needed because typescript provides its own
  // the fix was adding to package.json the config for browserslist -> last 1 Chrome version
  function fizzbuzz(delayAmount: number, stop?: "stop" | "stopping") {
    let delaying;
    if (stopFizzBuzz === true) {
      console.log("were trying to stop");
      clearTimeout(delaying);
      return;
    }
    delaying = setTimeout(() => {
      if (count <= 100 && !stop) {
        count++;
        setCurrent(count);
        fizzbuzz(delayAmount);
      } else {
        count = 0;
        setActive(false);
      }
    }, delayAmount);
  }

  const restart = () => {
    console.log("requesting reset");
    stopFizzBuzz = true;
    count = 0;
    nextStep(-1);
    setCurrent(-1);
    setNumbers([...Array(length).keys()]);
  };

  const stepThrough = () => {
    let next = step + 1;
    nextStep(next);
    setCurrent(next);
  };
  let fizzStatus = fizzHelper(current);
  return (
    <main>
      <div className="fizzcenter">
        <Buttons
          proppedFizzbuzz={() => {
            fizzbuzz(300);
          }}
          activeprop={active}
          activeSetter={setActive}
          clear={restart}
          next={stepThrough}
        />
        <div className="grid-container">
          {fizzArray.map((fizz) => {
            {
              return fizzBuzzHandler(fizz, current);
            }
          })}
        </div>
      </div>
      <div className="codeblock">
        <CodeRepresentation currentNum={current} fizzStatus={fizzStatus} />
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
