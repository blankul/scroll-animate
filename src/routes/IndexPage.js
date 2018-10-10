import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
// import { Parallax } from "rc-scroll-anim";
// import video from "./../assets/GOsdyUIGZrNPSntOoRpe.mp4";

@connect()
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    window.scope = this;
  }

  wrapperIns = null; // 容器dom实例
  targetIns = null; // 目标dom实例
  targetZhanweiIns = null; // 目标dom占位实例
  distance = null; // 滚动到目标的距离

  componentDidMount() {
    this.distance = this.targetZhanweiIns.offsetTop;
    // scrollScreen.init();
  }

  handleScroll = e => {
    const { target } = e;
    const squareIns = document.getElementById("square");
    const currentIndex = target.scrollTop;
    const startIndex = this.distance;
    const endIndex =
      this.distance +
      this.targetZhanweiIns.offsetHeight -
      this.targetIns.offsetHeight;
    let topValue = 0;

    if (currentIndex < startIndex) topValue = startIndex;
    else if (currentIndex > startIndex && currentIndex <= endIndex) {
      const ratio = (currentIndex - startIndex) / (endIndex - startIndex);
      if (ratio <= 0.5) squareIns.style.transform = `scale(${ratio * 12})`;
      else squareIns.style.transform = `scale(${(1 - (ratio - 0.5)) * 6})`;
      topValue = currentIndex;
    } else topValue = endIndex;

    this.targetIns.style.top = topValue + "px";
  };

  render() {
    return (
      <div
        id="wrapper"
        className={`wrapper ${styles.wrapper}`}
        ref={el => (this.wrapperIns = el)}
        onScroll={this.handleScroll}
      >
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
        <div
          id="target"
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#eee",
            position: "absolute"
          }}
          ref={el => (this.targetIns = el)}
        >
          {/* <Parallax
            animation={{ scale: 1, opacity: 0.5, transform: "" }}
            style={{ transform: "scale(0)", margin: "10px auto" }}
            targetId="wrapper"
            className={styles["code-box-shape"]}
          /> */}
          <div
            id="square"
            className={styles["code-box-shape"]}
            style={{ margin: "200px auto" }}
          />
        </div>
        <div
          ref={el => (this.targetZhanweiIns = el)}
          className="zhanwei"
          // style={{ height: "100%", backgroundColor: "pink" }}
          style={{ height: "400%", backgroundColor: "pink" }}
        />
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
      </div>
    );
  }
}
