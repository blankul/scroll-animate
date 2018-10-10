import React from "react";
import ScrollAnimate, {
  ItemSticky as ScrollItem
} from "../components/ScrollAnimate";
import Seek1 from "../components/AnimeItem/Seek1.js";
import Seek2 from "../components/AnimeItem/Seek2.js";
import Foo from "../components/Foo";

export default class Test extends React.Component {
  render() {
    return (
      <ScrollAnimate>
        <Foo />
        <ScrollItem scrollDistance={1800}>
          <Seek1 />
        </ScrollItem>
        <Foo />
        <ScrollItem scrollDistance={2400}>
          <Seek2 />
        </ScrollItem>
        <Foo />
        <Foo />
        <ScrollItem scrollDistance={1200}>
        </ScrollItem>
        <Foo />
      </ScrollAnimate>
    );
  }
}
