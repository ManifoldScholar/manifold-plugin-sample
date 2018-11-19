import add from "add";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static displayName = "MyCustomFooter.Footer";

  render() {
    return (
      <footer className="footer-browse">
        <section className="footer-primary">
          <div className="container flush">
            <div style={{ color: "white" }} className="flex-row">
              This is my custom footer. I can do whatever I want with it.
            </div>
          </div>
        </section>
        <section className="footer-secondary">
          <div className="container flush">
            <div className="colophon">Copyright {add([2017.7, 0.3])}</div>
          </div>
        </section>
      </footer>
    );
  }
}
