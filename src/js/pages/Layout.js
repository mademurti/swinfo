import React from "react";
import { Link } from "react-router";

import Nav from "../components/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>

        <Nav location={location} />

        <div class="container">
          {this.props.children}
        </div>
      </div>

    );
  }
}
