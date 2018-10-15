import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";

export default class ScrollAnimateWrapper extends React.Component {
  static childContextTypes = {
    scrolltop: PropTypes.number
  };

  constructor(props) {
    super(props);
    window.ScrollAnimateWrapper = this;
  }

  state = {
    scrolltop: 0
  };

  getChildContext() {
    const { scrolltop } = this.state;
    return { scrolltop };
  }

  handleScroll = e => {
    const { target } = e;
    this.setState({ scrolltop: target.scrollTop });
  };

  render() {
    const { scrolltop } = this.state;
    const { children, ...props } = this.props;

    return (
      <div
        className={styles.wrapper}
        ref={el => (this.wrapperIns = el)}
        onScroll={this.handleScroll}
        {...props}
      >
        {children &&
          React.Children.map(children, child =>
            React.cloneElement(child, { scrolltop })
          )}
      </div>
    );
  }
}
