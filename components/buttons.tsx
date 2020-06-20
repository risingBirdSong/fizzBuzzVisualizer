import * as React from "react";

interface fizzBuzzHandler {
  proppedFizzbuzz: () => void;
}

const Buttons = (props: fizzBuzzHandler): JSX.Element => {
  return (
    <div>
      <button onClick={props.proppedFizzbuzz}>fizzbuzz!</button>
      <button>slow</button>
      <button>medium</button>
      <button>fast</button>
      <button>step through</button>
    </div>
  );
};

export default Buttons;
