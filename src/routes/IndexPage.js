import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import styles from "./IndexPage.less";

@connect()
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    window.scope = this;
  }

  render() {
    return (
      <div className={styles.index}>
        <Link to="/absolute">
          <h1>absolute版</h1>
        </Link>
        <Link to="/fixed">
          <h1>fixed版</h1>
        </Link>
        <Link to="/sticky">
          <h1>sticky版(最终版)</h1>
        </Link>
      </div>
    );
  }
}
