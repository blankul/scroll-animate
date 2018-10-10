import React from "react";
import styles from "./styles.less";

function random(start, end) {
  return (Math.random() * (end - start) + start) | 0
}

function getColorItem() {
  return random(150, 180)
}

function getRandomColor() {
  return `rgb(${getColorItem()},${getColorItem()},${getColorItem()})`
}

export default () => (
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
)