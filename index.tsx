import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";
import fizzBuzzHandler from "./components/fizzbuzzHandler";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = () => {
  let length = 100;
  const initialNumbers = [...Array(length).keys()];
  const [current, setCurrent] = React.useState(-1);
  const [fizzArray, setNumbers] = React.useState<number[]>(initialNumbers);
  let [active, setActive] = React.useState(false);
  let [stop, setStop] = React.useState(false);
  //https://github.com/parcel-bundler/parcel/issues/954
  //apparently parcel is calling babel for using async await but it's not needed because typescript provides its own
  // the fix was adding to package.json the config for browserslist -> last 1 Chrome version
  async function fizzbuzz(delayAmount: number) {
    for (let num of fizzArray) {
      console.log("stop", stop);
      await delayer(delayAmount);
      setCurrent(num);
    }
    setActive(false);
  }

  const restart = () => {
    setCurrent(-1);
    setNumbers([...Array(length).keys()]);
    setStop(true);
  };

  return (
    <div>
      <Buttons
        proppedFizzbuzz={fizzbuzz}
        activeprop={active}
        activeSetter={setActive}
        clear={restart}
      />
      <button
        onClick={() => {
          console.log("want to stop before", stop);
          setStop(true);
          console.log("want to stop after", stop);
        }}
      >
        stop
      </button>
      <div className="grid-container">
        {fizzArray.map((fizz) => {
          {
            return fizzBuzzHandler(fizz, current);
          }
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
