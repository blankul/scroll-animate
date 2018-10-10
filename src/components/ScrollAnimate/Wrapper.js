import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";

export default class ScrollAnimateWrapper extends React.Component {
  static childContextTypes = {
    currentScrollIndex: PropTypes.number
  };

  constructor(props) {
    super(props);
    window.ScrollAnimateWrapper = this;
  }

  state = {
    currentScrollIndex: 0
  };

  getChildContext() {
    const { currentScrollIndex } = this.state;
    return { currentScrollIndex };
  }

  handleScroll = e => {
    const { target } = e;
    this.setState({ currentScrollIndex: target.scrollTop });
  };

  render() {
    const { currentScrollIndex } = this.state;
    const { children } = this.props;

    return (
      <div
        className={styles.wrapper}
        ref={el => (this.wrapperIns = el)}
        onScroll={this.handleScroll}
      >
        {children &&
          React.Children.map(children, child =>
            React.cloneElement(child, { currentScrollIndex })
          )}
      </div>
    );
  }
}
