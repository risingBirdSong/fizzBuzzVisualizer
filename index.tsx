import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";
import fizzBuzzing from "./components/fizzbuzzing";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = () => {
  let length = 100;
  const initialNumbers = [...Array(length).keys()];
  const [current, setCurrent] = React.useState(-1);
  const [fizzArray, setNumbers] = React.useState<number[]>(initialNumbers);
  //https://github.com/parcel-bundler/parcel/issues/954
  //apparently parcel is calling babel for using async await but it's not needed because typescript provides its own
  // the fix was adding to package.json the config for browserslist -> last 1 Chrome version
  async function fizzbuzz(delayAmount: number) {
    for (let num of fizzArray) {
      await delayer(delayAmount);
      setCurrent(num);
    }
  }

  return (
    <div>
      <Buttons proppedFizzbuzz={fizzbuzz} />
      <div className="grid-container">
        {fizzArray.map((fizz) => {
          {
            return fizzBuzzing(fizz, current);
          }
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
