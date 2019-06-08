import React from "react";

export default class CountryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };

    this.countries = [
      "county1",
      "county2",
      "county3",
      "county4",
      "county5",
      "county6"
    ];
  }

  componentWillReceiveProps(newProps) {
    let arr = this.countries.filter(c => c.indexOf(newProps.string) !== -1);
    this.setState({ countries: arr });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.countries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    );
  }
}
