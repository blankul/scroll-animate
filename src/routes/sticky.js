import React from "react";
import ScrollAnimate, {
  ItemSticky as ScrollItem
} from "../components/ScrollAnimate";
import Seek1 from "../components/AnimeItem/Seek1.js";
import Seek2 from "../components/AnimeItem/Seek2.js";
import styles from "./IndexPage.less";

const AnimateItem = ({ process }) => (
  <h1 style={{ textAlign: "center", marginTop: "100px" }}>
    process:
    {(process * 100) | 0}%
  </h1>
);

const custom = (
  <div className={styles.normal}>
    <h1 className={styles.title}>Yay! Welcome to dva!</h1>
    <div className={styles.welcome} />
    <ul className={styles.list}>
      <li>
        To get started, edit <code>src/index.js</code> and save to reload.
      </li>
      <li>
        <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
          Getting Started
        </a>
      </li>
    </ul>
  </div>
);

export default class Test extends React.Component {
  render() {
    return (
      <ScrollAnimate>
        {custom}
        <ScrollItem style={{ backgroundColor: "#a0d8da" }} scrollDistance={4}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 4</h2>
          <Seek1 />
        </ScrollItem>
        {custom}
        <ScrollItem style={{ backgroundColor: "#999" }} scrollDistance={4}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 4</h2>
          <Seek2 />
        </ScrollItem>
        {custom}
        {custom}
        <ScrollItem style={{ backgroundColor: "pink" }} scrollDistance={8}>
          <AnimateItem />
          <h2 style={{ textAlign: "center" }}>scrollDistance: 8</h2>
        </ScrollItem>
        {custom}
      </ScrollAnimate>
    );
  }
}
