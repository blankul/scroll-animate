import React, { Component } from "react";

export default class ScrollAnimateItem extends Component {
  state = {
    process: 0
  };

  el = null; // element
  fooEl = null; // 占位 element
  topValue = 0; // 定位top值

  componentDidMount() {
    this.startIndex = this.fooEl.offsetTop;
  }

  UNSAFE_componentWillReceiveProps({ scrolltop }) {
    const currentIndex = scrolltop;
    const { startIndex } = this;
    const endIndex =
      startIndex + this.fooEl.offsetHeight - this.el.offsetHeight;

    if (currentIndex < startIndex) {
      this.topValue = startIndex;

      this.el.style.position = "absolute";
      this.el.style.top = "auto";
    } else if (currentIndex > startIndex && currentIndex <= endIndex) {
      const process = (currentIndex - startIndex) / (endIndex - startIndex);
      this.setState({ process });
      this.topValue = currentIndex;

      this.el.style.position = "fixed";
      this.el.style.top = "0px";
    } else {
      this.topValue = endIndex;

      this.el.style.position = "absolute";
      this.el.style.top = endIndex + "px";
    }
  }

  render() {
    const { children, scrollDistance = 1, style, ...props } = this.props;
    const { process } = this.state;

    return (
      <React.Fragment>
        <div
          style={{
            height: "100%",
            position: "absolute",
            width: "100%",
            ...style
          }}
          // style={{ height: "100%", position: "fixed", width: "100%", ...style }}
          {...props}
          ref={el => (this.el = el)}
        >
          {children &&
            React.Children.map(children, child =>
              React.cloneElement(child, { process })
            )}
        </div>
        <div
          className="scroll-animate-foo"
          style={{ height: `${100 * scrollDistance}%` }}
          ref={el => (this.fooEl = el)}
        />
      </React.Fragment>
    );
  }
}
