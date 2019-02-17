import React from 'react';
import { Link } from 'gatsby';
import { FilterType } from './posts-types';
import './filters.css';

const Filters = ({ currentFilter, currentFilterType, filters }) => (
  <div className="filters">
    <FilterList
      currentFilter={currentFilter}
      currentFilterType={currentFilterType}
      filters={filters[FilterType.COUNTRIES]}
      filterType={FilterType.COUNTRIES}
    />
    <FilterList
      currentFilter={currentFilter}
      currentFilterType={currentFilterType}
      filters={filters[FilterType.YEARS]}
      filterType={FilterType.YEARS}
    />
  </div>
);

const FilterList = ({
  currentFilter,
  currentFilterType,
  filters,
  filterType
}) => {
  const isSameFilterType = currentFilterType === filterType;

  return (
    <>
      <h5>{filterType}</h5>
      <ul>
        {filters.map(filter => (
          <li
            className={
              isSameFilterType && filter === currentFilter ? 'selected' : ''
            }
            key={filter}
          >
            <Link to={`?type=${filterType.toLowerCase()}&filter=${filter}`}>
              {filter}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Filters;
