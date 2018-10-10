import React, { Component } from "react";
import styles from "./styles.less";

export default class ScrollAnimateItem extends Component {
  state = {
    process: 0
  };

  el = null; // element
  fooEl = null; // 占位 element
  startIndex = 0; // 距离wrapper顶部的距离

  componentDidMount() {
    this.init();
  }

  init = () => {
    this.startIndex = this.el.offsetTop;
  };

  UNSAFE_componentWillReceiveProps({ scrolltop }) {
    const currentIndex = scrolltop;
    const { startIndex } = this;
    const endIndex = startIndex + this.fooEl.offsetHeight;
    let process = 0;
    if (currentIndex > startIndex && currentIndex <= endIndex) {
      process = (currentIndex - startIndex) / (endIndex - startIndex);
      this.el.style.position = "sticky";
      this.el.style.top = "0";
    } else if (currentIndex > endIndex) {
      process = 1;
      this.el.style.position = "relative";
      this.el.style.top = this.fooEl.offsetHeight + "px";
    }

    this.setState({ process });
  }

  render() {
    const { children, scrollDistance = 1, className, ...props } = this.props;
    const { process } = this.state;

    return (
      <React.Fragment>
        <section
          className={styles["animate-wrapper"]}
          {...props}
          ref={el => (this.el = el)}
        >
          {children &&
            React.Children.map(children, child =>
              React.cloneElement(child, { process })
            )}
        </section>
        <div
          className="scroll-animate-foo"
          style={{ height: `${100 * scrollDistance}%` }}
          ref={el => (this.fooEl = el)}
        />
      </React.Fragment>
    );
  }
}
