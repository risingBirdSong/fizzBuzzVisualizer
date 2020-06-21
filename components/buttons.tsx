import * as React from "react";

interface fizzBuzzHandler {
  proppedFizzbuzz: (num: number) => void;
  activeprop: boolean;
  activeSetter: React.Dispatch<React.SetStateAction<boolean>>;
  clear: () => void;
}

const Buttons = (props: fizzBuzzHandler): JSX.Element => {
  return (
    <div>
      <button
        onClick={() => {
          if (props.activeprop === false) {
            props.proppedFizzbuzz(600);
            props.activeSetter(true);
          }
        }}
      >
        fizzbuzz slowly
      </button>
      <button
        onClick={() => {
          console.log("active prop", props.activeprop);
          if (props.activeprop === false) {
            props.proppedFizzbuzz(30);
            props.activeSetter(true);
          }
        }}
      >
        fast
      </button>
      <button>step through</button>
      <button
        onClick={() => {
          if (!props.activeprop) {
            props.clear();
          }
        }}
      >
        clear
      </button>
    </div>
  );
};

export default Buttons;
