import React, { Component } from "react";

class SearchBooks extends Component {
  state = {};
  render() {
    return (
      <div>
        Search:
        <input
          type="text"
          name="query"
          className="form-control my-3"
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchBooks;
