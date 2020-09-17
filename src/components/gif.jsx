import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  // constructor(props) {
  //   super(props);
  //   ///////////////
  // }

  // handleClick = () => {
  //   ////////////////
  // }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
