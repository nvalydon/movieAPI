import React, { Component } from "react";
import Card from "react-bootstrap/Card"

export default class Data extends Component {
  redirect = () => {
    this.props.history.push("/SpecificMovie/" + this.props.imdbID)
  }
  render() {
    return (
      <Card>
        <h4>Title: {this.props.Title}</h4>
        <h4>Release Year: {this.props.Year}</h4>
        <img id={this.props.imdbID} onClick={this.redirect} src={this.props.Poster} />
      </Card>
    );
  }
}
