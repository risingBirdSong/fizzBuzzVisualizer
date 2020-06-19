import * as React from "react";
import ReactDOM from "react-dom";

// const React = require("react");
// const ReactDOM = require("react-dom");

const App = ()  => {

  const numbers = [...Array(20).keys()];

  return (
    <div className="grid-container">
      {numbers.map((num) => {
        return <div className="grid-item">{num}</div>  
      })}
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);