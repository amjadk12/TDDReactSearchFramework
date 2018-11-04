import React, { Component } from "react";

class SearchBooks extends Component {
  state = {
    searchText: "",
    prevSearchText: "",
    error: "",
    fetchingData: false
  };

  onTextChange = e => {
    //console.log(e.target.value.trim());
    this.setState({ searchText: e.target.value.trim() });
  };
  handleClick = () => {
    //console.log("clicked the button");
    console.log(this.state.searchText.toLocaleLowerCase());
    console.log(this.state.prevSearchText.toLocaleLowerCase());
    if (
      this.state.prevSearchText.toLocaleLowerCase() !==
        this.state.searchText.toLocaleLowerCase() ||
      this.state.prevSearchText === ""
    ) {
      this.setState({ prevSearchText: this.state.searchText });
      alert(this.state.searchText);
    } else {
      alert("already searched");
    }
  };
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          className="searchtext mr-1 col-sm-9 form-control"
          type="text"
          placeholder="Search Books By title or author or ISBN"
          name="searchText"
          onChange={this.onTextChange}
          value={this.state.searchText}
        />
        <button
          className="search col-sm-2 btn btn-primary"
          id="search"
          onClick={this.handleClick}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBooks;
