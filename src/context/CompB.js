import React, { Component } from "react";
import CompC from "./CompC";

export class CompB extends Component {
  render() {
    return (
      <div>
        <CompC />
      </div>
    );
  }
}

export default CompB;
