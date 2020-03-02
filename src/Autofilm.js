import React, { Component } from "react";

export default class AutoFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apikey: "",
      filmTitle: ""
    };
  }

  // render() {
  //   return (
  //     <div>
  //       <h4>Title: {this.props.data.Title}</h4>
  //       <h4>Release Date: {this.props.data.Released}</h4>
  //       <h4>Age Rating: {this.props.data.Rated}</h4>
  //       <h4>Genre: {this.props.data.Genre}</h4>
  //       <h4>Synopsis: {this.props.data.Plot}</h4>
  //       <img src={this.props.data.Poster} />
  //     </div>
  //   );
  // }
}
