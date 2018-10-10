import React from "react";
import ScrollAnimate, { ItemAbsolute as ScrollItem } from "../components/ScrollAnimate";
import Foo from "../components/Foo";

const AnimateItem = ({ process }) => (
  <h1 style={{ textAlign: "center", marginTop: "100px" }}>
    process: {(process * 100) | 0}%
  </h1>
);

export default class Test extends React.Component {
  render() {
    return (
      <ScrollAnimate>
        <Foo/>
        <ScrollItem style={{ backgroundColor: "#a0d8da" }} scrollDistance={6}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 6</h2>
        </ScrollItem>
        <Foo/>
        <ScrollItem style={{ backgroundColor: "#999" }} scrollDistance={3}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 3</h2>
        </ScrollItem>
        <Foo/>
        <Foo/>
        <ScrollItem style={{ backgroundColor: "pink" }} scrollDistance={8}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 8</h2>
        </ScrollItem>
        <Foo/>
      </ScrollAnimate>
    );
  }
}
