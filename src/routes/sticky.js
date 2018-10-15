import React from "react";
import ScrollAnimate, { AnimateWrapper } from "../components/ScrollAnimate";
import Seek1 from "../components/AnimeItem/Seek1.js";
import Seek2 from "../components/AnimeItem/Seek2.js";
import Foo from "../components/Foo";

export default class Test extends React.Component {
  render() {
    return (
      <ScrollAnimate>
        <Foo />
        <AnimateWrapper scrollDistance={3000}>
          <Seek1 />
        </AnimateWrapper>
        <Foo />
        <AnimateWrapper scrollDistance={2400}>
          <Seek2 />
        </AnimateWrapper>
        <Foo />
        <Foo />
        <AnimateWrapper scrollDistance={1200}>
        </AnimateWrapper>
        <Foo />
      </ScrollAnimate>
    );
  }
}
