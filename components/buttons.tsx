import * as React from "react";
import { fizzBuzzHandler } from "../index";

const Buttons = (props: fizzBuzzHandler): JSX.Element => {
  return (
    <div className="buttons-container">
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.beginAutomaticProp(400);
          }
        }}
      >
        fizzbuzz slowly
      </button>
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.beginAutomaticProp(150);
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
