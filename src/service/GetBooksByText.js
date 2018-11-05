import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";

let state = {
  searchText: "",
  error: "",
  fetchingData: false
};

export let GetBooksBySearch = async searchText => {
  const apiKey = process.env.REACT_APP_API_KEY;
  //console.log(`SearchText:${searchText} - key: ${apiKey}`);
  //const { searchText } = this.state;
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

  const result = await Axios.get(requestUri);
  //console.log(result);
  const resultBooks = parseXMLResponse(result.data);
  return resultBooks;
  // .then(res => {
  //   this.parseXMLResponse(res.data);
  // })
  // .catch(error => {
  //   this.state.fetchingData;
  //   this.setState({
  //     error: error.toString(),
  //     fetchingData: false
  //   });
  // });
};

// parse string xml received from goodreads api
export let parseXMLResponse = response => {
  //console.log("parseXMLResponse - response in progress....");
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(response, "application/xml");
  const parseError = XMLResponse.getElementsByTagName("parsererror");
  //console.log(XMLResponse);
  if (parseError.length) {
    //console.log("Error: " + parseError.length);
    // this.setState({
    //   error: "There was an error fetching results.",
    //   fetchingData: false
    // });
  } else {
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    const searchResults = XMLresults.map(result => XMLToJson(result));
    return searchResults;
    // this.setState({ fetchingData: false }, () => {
    //   this.props.setResults(searchResults);
    // });
  }
};

// Function to convert simple XML document into JSON.
// Loops through each child and saves it as key, value pair
// if there are sub-children, call the same function recursively on its children.
export let XMLToJson = XML => {
  const allNodes = new Array(...XML.children);
  const jsonResult = {};
  allNodes.forEach(node => {
    if (node.children.length) {
      jsonResult[node.nodeName] = XMLToJson(node);
    } else {
      jsonResult[node.nodeName] = node.innerHTML;
    }
  });
  return jsonResult;
};
