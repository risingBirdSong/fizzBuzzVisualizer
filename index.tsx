import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";
import fizzBuzzHandler from "./components/fizzbuzzHandler";
import CodeRepresentation from "./components/codeRepresentation";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = () => {
  let length = 100;
  const initialNumbers = [...Array(length).keys()];
  const [current, setCurrent] = React.useState(-1);
  const [fizzArray, setNumbers] = React.useState<number[]>(initialNumbers);
  const [step, nextStep] = React.useState<number>(-1);
  let [active, setActive] = React.useState(false);
  //https://github.com/parcel-bundler/parcel/issues/954
  //apparently parcel is calling babel for using async await but it's not needed because typescript provides its own
  // the fix was adding to package.json the config for browserslist -> last 1 Chrome version
  async function fizzbuzz(delayAmount: number) {
    for (let num of fizzArray) {
      await delayer(delayAmount);
      setCurrent(num);
    }
    setActive(false);
  }

  const restart = () => {
    setCurrent(-1);
    setNumbers([...Array(length).keys()]);
  };

  const stepThrough = () => {
    let next = step + 1;
    nextStep(next);
    setCurrent(next);
  };

  return (
    <main>
      <div className="fizzcenter">
        <Buttons
          proppedFizzbuzz={fizzbuzz}
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
        <CodeRepresentation />
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
