import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';
import Filters from './internals/filters';
import FilterMenu from './internals/filter-menu';
import FilteredPosts from './internals/filtered-posts';
import { FilterType } from './internals/posts-types';

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
    const filters = {};
    filters[FilterType.COUNTRIES] = Array.from(countries).sort();
    filters[FilterType.YEARS] = Array.from(years).sort((a, b) => a > b);

    this.state = { filters, isServer: true };
  }
  componentDidMount() {
    this.setState({ isServer: false });
  }
  filterPosts(filter, filterType) {
    return this.props.posts.filter(post => {
      if (filterType === FilterType.COUNTRIES) {
        return post.country === filter;
      } else if (filterType === FilterType.YEARS) {
        return post.date.split('-')[0] === filter.toString();
      }
      return [];
    });
  }
  render() {
    if (this.state.isServer) {
      return null;
    }
    const { filters } = this.state;
    const { type, filter } = queryString.parse(this.props.location.search);
    const defaultFilter = filters[FilterType.YEARS][0];
    let currentFilter = filter ? decodeURIComponent(filter) : defaultFilter;
    let currentFilterType = type ? type.toUpperCase() : FilterType.YEARS;
    let filteredPosts = this.filterPosts(currentFilter, currentFilterType);
    if (filteredPosts.length === 0) {
      currentFilter = defaultFilter;
      currentFilterType = FilterType.YEARS;
      filteredPosts = this.filterPosts(currentFilter, currentFilterType);
    }

    return (
      <div className="lg:flex">
        <div className="lg:hidden">
          <FilterMenu
            currentFilter={currentFilter}
            currentFilterType={currentFilterType}
            filters={filters}
          />
        </div>
        <div className="hidden lg:block lg:w-1/6">
          <Filters
            currentFilter={currentFilter}
            currentFilterType={currentFilterType}
            filters={filters}
          />
        </div>
        <div className="lg:w-5/6">
          <FilteredPosts posts={filteredPosts} />
        </div>
      </div>
    );
  }
}

export default props => (
  <Location>
    {locationProps => <Posts {...locationProps} {...props} />}
  </Location>
);
