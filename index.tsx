import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = () => {
  const initialNumbers = [...Array(30).keys()];
  const [current, setCurrent] = React.useState(0);
  const [fizzArray, setNumbers] = React.useState<number[]>(initialNumbers);
  //https://github.com/parcel-bundler/parcel/issues/954
  //apparently parcel is calling babel for using async await but it's not needed because typescript provides its own
  // the fix was adding to package.json the config for browserslist -> last 1 Chrome version
  async function fizzbuzz() {
    for (let num of fizzArray) {
      await delayer(500);
      setCurrent(num);
    }
  }

  return (
    <div>
      <Buttons proppedFizzbuzz={fizzbuzz} />
      <div className="grid-container">
        {fizzArray.map((fizz) => {
          return fizz === current ? (
            <div key={fizz} className="grid-item-current">
              {fizz}
            </div>
          ) : (
            <div key={fizz} className="grid-item">
              {fizz}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
