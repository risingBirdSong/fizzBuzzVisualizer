import * as React from "react";
import { fizzBuzzHandler } from "../index";

// interface fizzBuzzHandler {
//   proppedFizzbuzz: (num: number) => void;
//   activeprop: boolean;
//   clear: () => void;
//   next: () => void;
// }

const Buttons = (props: fizzBuzzHandler): JSX.Element => {
  return (
    <div className="buttons-container">
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.beginAutomaticProp(600);
          }
        }}
      >
        fizzbuzz slowly
      </button>
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.beginAutomaticProp(200);
          }
        }}
      >
        fast
      </button>
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.next();
          }
        }}
      >
        step through
      </button>
      <button
        onClick={() => {
          props.clear();
        }}
      >
        clear
      </button>
    </div>
  );
};

export default Buttons;
