import * as React from "react";

interface fizzBuzzHandler {
  proppedFizzbuzz: (num: number) => void;
}

const Buttons = (props: fizzBuzzHandler): JSX.Element => {
  return (
    <div>
      <button
        onClick={() => {
          props.proppedFizzbuzz(800);
        }}
      >
        fizzbuzz slowly
      </button>
      <button
        onClick={() => {
          props.proppedFizzbuzz(300);
        }}
      >
        fast
      </button>
      <button>step through</button>
    </div>
  );
};

export default Buttons;
