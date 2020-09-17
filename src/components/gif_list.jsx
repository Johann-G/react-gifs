import React, { Component } from "react";

import Gif from "./gif.jsx";

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  // constructor(props) {
  //   super(props);
  //   ///////////////
  // }

  // handleClick = () => {
  //   ////////////////
  // }

  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} />
        })}
      </div>
    );
  }
}

export default GifList;
