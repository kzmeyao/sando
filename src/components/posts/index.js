import React from 'react';
import Filters from './internals/filters';

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
  setFilter = (filterType, index) => {
    this.setState({
      currentFilterIndex: index,
      currentFilterType: filterType
    });
  };
  render() {
    const {
      countryFilters,
      currentFilterIndex,
      currentFilterType,
      yearFilters
    } = this.state;

    return (
      <div className="pure-g">
        <div className="pure-u-1-5">
          <Filters
            countryFilters={countryFilters}
            setFilter={this.setFilter}
            yearFilters={yearFilters}
          />
        </div>
        <div className="pure-u-4-5">Content</div>
      </div>
    );
  }
}

export default Posts;
