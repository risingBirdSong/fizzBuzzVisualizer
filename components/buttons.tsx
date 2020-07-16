import * as React from "react";

interface fizzBuzzHandler {
  proppedFizzbuzz: (num: number) => void;
  activeprop: boolean;
  activeSetter: React.Dispatch<React.SetStateAction<boolean>>;
  clear: () => void;
  next: () => void;
}

const Buttons = (props: fizzBuzzHandler): JSX.Element => {
  return (
    <div className="buttons-container">
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.proppedFizzbuzz(500);
            props.activeSetter(true);
          }
        }}
      >
        fizzbuzz slowly
      </button>
      <button
        onClick={() => {
          console.log("active prop", props.activeprop);
          if (!props.activeprop) {
            props.proppedFizzbuzz(200);
            props.activeSetter(true);
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
