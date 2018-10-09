import React from 'react';
import { connect } from 'dva';
import { debounce, throttle } from 'lodash';
// import fn from './test.1.js';
import fn, { a } from './test.js';
import styles from './IndexPage.css';

// const { a } = fn;

window.qq = function () {
  fn();
  console.log(a)
}

function cb () {
  console.log(666)
}

// const fn = debounce(cb, 500, { leading: true })
const fn1 = throttle(cb, 500);

function IndexPage() {
  return (
    <div className={styles.normal} onClick={fn1}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
