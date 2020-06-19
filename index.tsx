import * as React from "react";
import ReactDOM from "react-dom";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = ()  => {

  const numbers = [...Array(10).keys()];

  return (
    <div>
      {numbers.map((num) => {
        return <p key={num}>{num}</p>;
      })}
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);