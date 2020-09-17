import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);  
  }
  
  render() {
    return (
      <input type="text" className="form-control form-search" 
        onChange={this.handleUpdate} 
      />
    );
  }
}

export default SearchBar;