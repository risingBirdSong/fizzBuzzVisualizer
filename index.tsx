import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";

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
  async function fizzbuzz() {
    for (let num of fizzArray) {
      await delayer(200);
      setCurrent(num);
    }
  }

  const fizzBuzzing = (num: number): JSX.Element => {
    let value: string | number;
    let backgroundColor: string;
    let color: string;
    if (num === current) {
      if (num === 0) {
        value = 0;
        backgroundColor = "burlywood";
        color = "black";
      } else if (num % 15 === 0) {
        value = "fizz buzz";
        backgroundColor = "brown";
        color = "white";
      } else if (num % 3 === 0) {
        value = "fizz";
        backgroundColor = "purple";
        color = "antiquewhite";
      } else if (num % 5 === 0) {
        value = "buzz";
        backgroundColor = "chocolate";
        color = "cornsilk";
      } else {
        value = num;
        backgroundColor = "burlywood";
        color = "black";
      }
      return (
        <div
          className="grid-item-current"
          style={{ backgroundColor: backgroundColor }}
        >
          <div style={{ color: color }}>{value}</div>
        </div>
      );
    } else
      return (
        <div key={num} className="grid-item">
          {num}
        </div>
      );
  };

  return (
    <div>
      <Buttons proppedFizzbuzz={fizzbuzz} />
      <div className="grid-container">
        {fizzArray.map((fizz) => {
          {
            return fizzBuzzing(fizz);
          }
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
