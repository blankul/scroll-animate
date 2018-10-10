import React from "react";
import ScrollAnimate, {
  ItemSticky as ScrollItem
} from "../components/ScrollAnimate";
import Seek1 from "../components/AnimeItem/Seek1.js";
import Seek2 from "../components/AnimeItem/Seek2.js";
import Foo from "../components/Foo";

const AnimateItem = ({ process }) => (
  <h1 style={{ textAlign: "center", marginTop: "100px" }}>
    process:
    {(process * 100) | 0}%
  </h1>
);

export default class Test extends React.Component {
  render() {
    return (
      <ScrollAnimate>
        <Foo/>
        <ScrollItem style={{ backgroundColor: "#a0d8da" }} scrollDistance={4}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 4</h2>
          <Seek1 />
        </ScrollItem>
        <Foo/>
        <ScrollItem style={{ backgroundColor: "#999" }} scrollDistance={4}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 4</h2>
          <Seek2 />
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
