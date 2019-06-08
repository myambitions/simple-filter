import React from "react";

import CountryList from "./CountryList";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      string: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ string: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.string}
          onChange={this.handleChange}
        />
        <CountryList string={this.state.string} />
      </div>
    );
  }
}
