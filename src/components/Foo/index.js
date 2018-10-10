import React from "react";
import styles from "./styles.less";

export default () => (
  <div className={styles.normal}>
    <h1 className={styles.title}>Yay! Welcome to scroll-animate!</h1>
    <div className={styles.welcome} />
    <section className={styles.list}>
      <p>请随意上下滚动，观察效果</p>
      <p>请稍微慢一点</p>
    </section>
  </div>
);
