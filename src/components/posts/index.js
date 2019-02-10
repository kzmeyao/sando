import React from 'react';

const FilterType = {
  COUNTRY: 'COUNTRY',
  YEAR: 'YEAR'
};

class Posts extends React.Component {
  constructor(props) {
    super(props);
    const countries = new Set();
    const years = new Set();
    for (const post of this.props.posts) {
      const { country, date } = post;
      countries.add(country);
      years.add(date.split('-')[0]);
    }
    this.state = {
      countryFilters: Array.from(countries).sort(),
      yearFilters: Array.from(years).sort((a, b) => a > b)
    };
  }
  render() {
    return (
      <div>
        <div>COUNTRIES</div>
        <ul>
          {this.state.countryFilters.map(country => (
            <li key={country}>{country}</li>
          ))}
        </ul>
        <div>YEARS</div>
        <ul>
          {this.state.yearFilters.map(year => (
            <li key={year}>{year}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
