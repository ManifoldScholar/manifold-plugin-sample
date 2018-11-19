import React, { Component } from "react";
import "./styles.scss";
import header from "../../../assets/header.png";

export default class PostFooter extends Component {
  render() {
    return (
      <div className="custom-postfooter">
        <div className="container">
          <img src={header} />
          <span>Imagine your own footer here.</span>
        </div>
      </div>
    );
  }
}
