import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';
import Filters from './internals/filters';
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

    this.state = { filters };
  }
  render() {
    const { filters } = this.state;
    const { location, posts } = this.props;
    const { type, filter } = queryString.parse(location.search);
    const currentFilter = filter
      ? decodeURIComponent(filter)
      : filters[FilterType.YEARS][0];
    const currentFilterType = type ? type.toUpperCase() : FilterType.YEARS;
    const filteredPosts = posts.filter(post => {
      if (currentFilterType === FilterType.COUNTRIES) {
        return post.country === currentFilter;
      } else {
        return post.date.split('-')[0] === currentFilter.toString();
      }
    });

    return (
      <div className="pure-g">
        <div className="pure-u-1-5">
          <Filters
            currentFilter={currentFilter}
            currentFilterType={currentFilterType}
            filters={filters}
          />
        </div>
        <div className="pure-u-4-5">
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
