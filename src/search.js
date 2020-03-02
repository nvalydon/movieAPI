import React, { Component } from "react";
import axios from "axios";
import Data from "./Data";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", data: [] };
  }

  searchQuery = ({ target }) => {
    this.setState({ query: target.value });
  };

  makeRequest = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${this.state.query}&apikey=bd226797`)
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data.Search
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Search for some Movies fam</h1>
        <label for="Query"><h2>Search: </h2></label>
        <input
          value={this.state.query}
          onChange={this.searchQuery}
          name="Query"
        />
        <br />
        <button type="submit" onClick={this.makeRequest}>
          Submit
        </button>
        {this.state.data.map(d => (
          <Data {...d} {...this.props} />
        ))}
      </div>
    );
  }
}
