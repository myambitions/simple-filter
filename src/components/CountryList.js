import React from "react";

export default class CountryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fcountries: [],
      countries: [
        "county1",
        "county2",
        "county3",
        "county4",
        "county5",
        "county6"
      ]
    };
  }

  static getDerivedStateFromProps(props, state) {
    let arr = state.countries.filter(c => c.indexOf(props.string) !== -1);
    return {
      fcountries: arr
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.fcountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    );
  }
}
