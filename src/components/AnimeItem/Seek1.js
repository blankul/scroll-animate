import React from "react";
import anime from "animejs";
import styles from "./styles.less";

export default class Seek1 extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
    this.seekAnim = null;
  }

  componentDidMount() {
    this.initAnime();
  }

  UNSAFE_componentWillReceiveProps({ process }) {
    console.log(process);
    this.seekAnim.seek(this.seekAnim.duration * process);
  }

  initAnime = () => {
    this.seekAnim = anime.timeline({
      targets: this.el,
      easing: "linear"
    });

    this.seekAnim
      .add({
        translateY: -200,
        duration: 350
      })
      .add({
        translateY: 300,
        duration: 350
      })
      .add({
        translateY: 300,
        rotate: 360,
        scale: 2.5,
        duration: 500
      })
      .add({
        translateY: 400,
        scale: 2.5,
        duration: 200
      });
  };

  render() {
    return <div className={styles.item} ref={el => (this.el = el)} />;
  }
}
