import React, { Component } from "react";
import axios from "axios";
import SpecificData from "./SpecificData"


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, apikey: "", filmTitle: "", query: "" };
  }
  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    axios
      .get(
        `http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=bd226797`
      )
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      });
  };

  onClick = ({ target: { value } }) => {
    this.makeRequest(value);
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };
  render() {
    return (
      <div id="main">
        <SpecificData {...this.state.data} />
      </div>
    );
  }
}
