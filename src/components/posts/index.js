import React from 'react';
import FilterMenu from './internals/filter-menu';
import FilteredPosts from './internals/filtered-posts';
import { FilterType } from 'constants/types';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    const { filterType, filter, posts } = props;
    const countries = new Set();
    const years = new Set();
    for (const post of posts) {
      const { country, date } = post;
      countries.add(country);
      years.add(date.split('-')[0]);
    }
    const filters = {};
    filters[FilterType.COUNTRIES] = Array.from(countries).sort();
    filters[FilterType.YEARS] = Array.from(years).sort((a, b) => b - a);

    this.state = {
      currentFilter: filter,
      currentFilterType: filterType,
      filters,
    };
  }

  filterPosts(filter, filterType) {
    return this.props.posts.filter((post) => {
      if (filterType === FilterType.COUNTRIES) {
        return (
          post.country
            .toLowerCase()
            .split(' ')
            .join('-')
            .replace(/[^a-z\-]+/g, '') === filter
        );
      }
      if (filterType === FilterType.YEARS) {
        return post.date.split('-')[0] === filter.toString();
      }
      return [];
    });
  }

  render() {
    const { currentFilter, currentFilterType, filters } = this.state;
    const filteredPosts = this.filterPosts(currentFilter, currentFilterType);

    return (
      <>
        <FilterMenu
          currentFilter={currentFilter}
          currentFilterType={currentFilterType}
          filters={filters}
        />
        <FilteredPosts posts={filteredPosts} />
      </>
    );
  }
}

export default Posts;
