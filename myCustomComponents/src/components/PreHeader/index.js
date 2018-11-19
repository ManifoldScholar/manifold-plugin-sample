import React, { Component } from "react";
import "./styles.scss";
import header from "../../../assets/header.png";

export default class PreHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: null };
  }

  componentDidMount() {
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then(res => {
      res.json().then(json => {
        this.setState({ quote: json[0] });
      });
    });
  }

  render() {
    return (
      <div className="custom-preheader">
        <img src={header} />
        {this.state.quote && (
          <span>"{this.state.quote}" &mdash;Ron Swanson</span>
        )}
      </div>
    );
  }
}
