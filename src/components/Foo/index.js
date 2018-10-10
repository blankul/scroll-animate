import React from "react";
import styles from "./styles.less";

export default () => (
  <div className={styles.normal}>
    <h1 className={styles.title}>Yay! Welcome to scroll-animate!</h1>
    <div className={styles.welcome} />
    <section className={styles.list}>
      <p>请随意上下滚动，观察效果</p>
      <p>缓慢滚动效果更佳</p>
    </section>
  </div>
);
