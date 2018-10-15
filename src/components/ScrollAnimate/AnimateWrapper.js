import React, { Component } from "react";
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

export default class ScrollAnimateItem extends Component {
  constructor(props) {
    super(props);
    this.el = null; // element
    this.fooEl = null; // 占位 element
    this.startIndex = 0; // 距离wrapper顶部的距离
    this.bgc = getRandomColor();
  }

  state = {
    process: 0,
    className: '',
  };

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
      this.setState({ className: '' })
      // this.el.style.position = "sticky";
      // this.el.style.position = "-webkit-sticky";
      this.el.style.top = "0";
    } else if (currentIndex > endIndex) {
      process = 1;
      this.setState({ className: styles['after-scroll-process'] })
      this.el.style.top = this.fooEl.offsetHeight + "px";
    }

    this.setState({ process });
  }

  render() {
    const { children, scrollDistance = 1, style, className, ...props } = this.props;
    const { process, className: currentClass } = this.state;

    return (
      <React.Fragment>
        <section
          className={`${styles["animate-wrapper"]} ${currentClass}`}
          {...props}
          style={{ backgroundColor: this.bgc, ...style }}
          ref={el => (this.el = el)}
        >
          <p style={{ position: 'absolute', right: '24px', top: '8px', fontWeight: '900' }}>{`${process * +scrollDistance | 0} / ${scrollDistance}px`}</p>
          {children &&
            React.Children.map(children, child =>
              React.cloneElement(child, { process })
            )}
        </section>
        <div
          className="scroll-animate-foo"
          style={{ height: `${scrollDistance}px` }}
          ref={el => (this.fooEl = el)}
        />
      </React.Fragment>
    );
  }
}
