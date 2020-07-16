import * as React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import delayer from "./helpers";
import fizzBuzzHandler from "./components/fizzbuzzHandler";
import CodeRepresentation from "./components/codeRepresentation";
import { fizzHelper } from "./fizzHelper";

type beginAutomatic = (
  num: number
) => {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
export interface fizzBuzzHandler {
  beginAutomaticProp: (num: number) => void;
  activeprop: boolean;
  clear: () => void;
  next: () => void;
}

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = () => {
  let length = 100;
  const initialNumbers = [...Array(length).keys()];
  const [current, setCurrent] = React.useState(-2);
  const [fizzArray, setNumbers] = React.useState<number[]>(initialNumbers);
  // const [step, nextStep] = React.useState<number>(-2);
  let [active, setActive] = React.useState(false);
  let [count] = React.useState(0);
  //https://github.com/parcel-bundler/parcel/issues/954
  //apparently parcel is calling babel for using async await but it's not needed because typescript provides its own
  // the fix was adding to package.json the config for browserslist -> last 1 Chrome version
  // function fizzbuzz(delayAmount: number) {
  //   let delaying;
  //   if (stopFizzBuzz === true) {
  //     console.log("were trying to stop");
  //     clearTimeout(delaying);
  //     return;
  //   }
  //   delaying = setTimeout(() => {
  //     if (count <= 100) {
  //       setCount(++count);
  //       setCurrent(count);
  //       fizzbuzz(delayAmount);
  //     } else {
  //       setCount(0);
  //       setActive(false);
  //     }
  //   }, delayAmount);
  // }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let next = current + 1;
      setCurrent(next);
    }, 300);
    return () => clearTimeout(timer);
    /** this i tried out of experimentation and i was pleased to see it works...
     * my understanding of how it works is that it will fire once on componenet mount,
     * which is the reason i set current at -2 so the board is blank at the beginning
     * notice that log(num) -2 quickly jumps to  log(num) -1
     * the useEffect will not advanced until a start button is clicked because
     * active is false, ... false && truthy is falsy and therefore the use effect doesnt fire
     * when begun its true, and current will keep changing so that the useEffect will keep being fired
     */
  }, [active && current]);

  const restart = () => {
    console.log("requesting reset");
    setActive(false);
    setCurrent(-2);
    setNumbers([...Array(length).keys()]);
  };

  const stepThrough = () => {
    let next = current + 1;
    setCurrent(next);
  };
  let fizzStatus = fizzHelper(current);
  return (
    <main>
      <div className="fizzcenter">
        <Buttons
          beginAutomaticProp={() => {
            // console.log("num from Buttons", num);
            setActive(true);
            setCurrent(0);
          }}
          activeprop={active}
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
