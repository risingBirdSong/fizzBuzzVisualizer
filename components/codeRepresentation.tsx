import * as React from "react";

const CodeRepresentation = () => {
  //prettier-ignore
  let leftBracket = "{";
  let rightBracket = "}";
  return (
    <div className="code">
      {/* <pre>{codeBlock}</pre> */}
      <pre>
        {" "}
        <span style={{ color: "purple" }}>for</span>
        <span>
          <span style={{ color: "blue" }}>(</span>{" "}
          <span style={{ color: "purple", fontStyle: "italic" }}>let</span>{" "}
          <span style={{ color: "orange" }}>num</span>{" "}
          <span style={{ color: "blue" }}>of</span> numbers{" "}
          <span style={{ color: "blue" }}>)</span>
        </span>
        <span style={{ color: "blue" }}>{leftBracket}</span>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "purple" }}>if</span>
          <span style={{ color: "blue" }}>(</span>
          <span style={{ color: "orange" }}>num</span>{" "}
          <span style={{ color: "blue" }}>%</span>{" "}
          <span style={{ color: "orange" }}>15</span>{" "}
          <span style={{ color: "purple" }}>===</span>{" "}
          <span style={{ color: "orange" }}>0</span>{" "}
          <span style={{ color: "blue" }}>)</span>
          <span style={{ color: "blue" }}>{leftBracket}</span>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            {" "}
            <span style={{ color: "purple" }}>return</span>{" "}
            <span style={{ color: "green" }}>"fizzbuzz"</span>{" "}
          </span>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "blue" }}>{rightBracket}</span>
          {/* divider */}
          <span style={{ color: "purple" }}>&nbsp;else if </span>
          <span style={{ color: "blue" }}>(</span>
          <span style={{ color: "orange" }}>num</span>{" "}
          <span style={{ color: "blue" }}>%</span>{" "}
          <span style={{ color: "orange" }}>3</span>{" "}
          <span style={{ color: "purple" }}>===</span>{" "}
          <span style={{ color: "orange" }}>0</span>{" "}
          <span style={{ color: "blue" }}>)</span>
          <span style={{ color: "blue" }}>{leftBracket}</span>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            {" "}
            <span style={{ color: "purple" }}>return</span>{" "}
            <span style={{ color: "green" }}>"fizz"</span>{" "}
          </span>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "blue" }}>{rightBracket}</span>
          {/* divider */}
          {/* divider */}
          <span style={{ color: "purple" }}>&nbsp;else if </span>
          <span style={{ color: "blue" }}>(</span>
          <span style={{ color: "orange" }}>num</span>{" "}
          <span style={{ color: "blue" }}>%</span>{" "}
          <span style={{ color: "orange" }}>5</span>{" "}
          <span style={{ color: "purple" }}>===</span>{" "}
          <span style={{ color: "orange" }}>0</span>{" "}
          <span style={{ color: "blue" }}>)</span>
          <span style={{ color: "blue" }}>{leftBracket}</span>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            {" "}
            <span style={{ color: "purple" }}>return</span>{" "}
            <span style={{ color: "green" }}>"buzz"</span>{" "}
          </span>
          <p></p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "blue" }}>{rightBracket}</span>
          {/* divider */}
          <p></p>
          <span style={{ color: "blue" }}>{rightBracket}</span>
        </p>
      </pre>
    </div>
  );
};

export default CodeRepresentation;
