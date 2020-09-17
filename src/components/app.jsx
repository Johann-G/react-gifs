import React, { Component } from "react";

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import giphy from "giphy-api"

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [
      ],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }
  }

  search = (query) => {
    giphy("zAbW8kUm6yEhNfpoJ7nC7JWL4OAhpFI4").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data 
      })
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>        
      </div>
    );
  }
}

export default App;