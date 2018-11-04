import React, { Component } from "react";

class SearchBooks extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          name="query"
          className="form-control my-3"
          placeholder="Search..."
        />
        <button id="search" />
      </div>
    );
  }
}

export default SearchBooks;
