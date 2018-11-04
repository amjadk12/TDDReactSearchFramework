import React, { Component } from "react";

class SearchBooks extends Component {
  state = {
    searchText: "",
    error: "",
    fetchingData: false
  };

  onTextChange = e => {
    console.log(e.target.value.trim());
    this.setState({
      searchText: e.target.value.trim()
    });
  };
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          className="mr-1 col-sm-9 form-control"
          type="text"
          placeholder="Search Books By title or author or ISBN"
          name="searchText"
          onChange={this.onTextChange}
          value={this.state.searchText}
        />
        <button className="search col-sm-2 btn btn-primary" id="search">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBooks;
