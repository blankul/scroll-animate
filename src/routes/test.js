import React from "react";

export default class Test extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "600px",
          height: "600px",
          border: "1px solid #999",
          transform: "translate(0)",
          overflow: "auto"
        }}
      >
        <div style={{ backgroundColor: "pink", height: "1000px" }} />
        <h1 style={{ position: "sticky", top: "10px" }}>666666666666s</h1>
        <h1 style={{ position: "relative", top: "10px" }}>666666666666s</h1>
        <div style={{ backgroundColor: "green", height: "1000px" }} />
      </div>
    );
  }
}
