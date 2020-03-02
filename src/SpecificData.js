import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class SpecificData extends Component {
  ratings = () => {
    let message = "";
    for (let i in this.props.Ratings) {
      message = (
        <p>
          {message} >{this.props.Ratings[i].Source}:{" "}
          {this.props.Ratings[i].Value}
          <br />
        </p>
      );
    }
    return message;
  };

  render() {
    return (
      <div>
        <Table>
          <tbody align="left">
            <tr>
              <img
                src={this.props.Poster}
                onClick={this.redirect}
                style={{ height: "auto", width: "400px", float: "left" }}
              />
              <td id="dataTable">
                <tr>
                  <td class="dataTable">
                    <h1>{this.props.Title}</h1>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>
                      Release Date: <br />
                      {this.props.Released}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>
                      Genre(s):
                      <br /> {this.props.Genre}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>
                      Director: <br />
                      {this.props.Director}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>
                      Length: <br />
                      {this.props.Runtime}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>
                      Actors: <br />
                      {this.props.Actors}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>
                      Synopsis: <br />
                      {this.props.Plot}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td class="dataTable">
                    <h4>Ratings: </h4>
                    <h4>{this.ratings()}</h4>
                  </td>
                </tr>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
