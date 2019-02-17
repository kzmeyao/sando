import React from 'react';
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
    this.state = {
      currentFilterIndex: 0,
      currentFilterType: FilterType.YEARS,
      filters
    };
  }
  setFilter = (filterType, index) => {
    this.setState({
      currentFilterIndex: index,
      currentFilterType: filterType
    });
  };
  render() {
    const { currentFilterIndex, currentFilterType, filters } = this.state;
    const currentFilter = filters[currentFilterType][currentFilterIndex];
    const filteredPosts = this.props.posts.filter(post => {
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
            currentFilterIndex={currentFilterIndex}
            currentFilterType={currentFilterType}
            filters={filters}
            setFilter={this.setFilter}
          />
        </div>
        <div className="pure-u-4-5">
          <FilteredPosts posts={filteredPosts} />
        </div>
      </div>
    );
  }
}

export default Posts;
