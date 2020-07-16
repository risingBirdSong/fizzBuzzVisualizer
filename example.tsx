import React from "react";
import "./styles.css";

const LoggingCounter = () => {
  const [value, setVal] = React.useState(0);

  function logValue() {
    console.log(value);
  }
  setInterval(logValue, 1000);

  return (
    <div>
      Current value is {value}
      <button onClick={() => setVal((x) => x + 1)}>++</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <LoggingCounter />
    </div>
  );
}
