import React, { Component } from "react";
import ReactDOM from "react-dom";

export default function(cfg = {}) {
  console.log(111);
  const { scrollDistance = 1 } = cfg;

  return function(WrappedComponent) {
    class Com extends Component {
      constructor(props) {
        console.log(666);
        super(props);
        window.item = this;
      }

      el = null; // element

      state = {};

      UNSAFE_componentWillReceiveProps({ scrolltop }) {
        console.log({ scrolltop });
      }

      render() {
        return (
          <React.Fragment>
            {React.cloneElement(WrappedComponent, {
              style: { height: "100%", position: "absolute" },
              ref: el => (this.el = ReactDOM.findDOMNode(el))
            })}
            <div
              className="scroll-animate-foo"
              style={{ height: `${100 * scrollDistance}%` }}
            />
          </React.Fragment>
        );
      }
    }

    return <Com />;
  };
}
