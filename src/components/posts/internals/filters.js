import React from 'react';
import { Link } from 'gatsby';
import { FilterType } from './posts-types';
import './filters.css';

const Filters = ({ currentFilter, currentFilterType, filters, onSelect }) => (
  <div className="filters">
    <FilterList
      currentFilter={currentFilter}
      currentFilterType={currentFilterType}
      filters={filters[FilterType.COUNTRIES]}
      filterType={FilterType.COUNTRIES}
      onSelect={onSelect}
    />
    <FilterList
      currentFilter={currentFilter}
      currentFilterType={currentFilterType}
      filters={filters[FilterType.YEARS]}
      filterType={FilterType.YEARS}
      onSelect={onSelect}
    />
  </div>
);

const FilterList = ({
  currentFilter,
  currentFilterType,
  filters,
  filterType,
  onSelect
}) => {
  const isSameFilterType = currentFilterType === filterType;

  return (
    <>
      <h6>{filterType}</h6>
      <ul>
        {filters.map(filter => (
          <li
            className={
              isSameFilterType && filter === currentFilter ? 'selected' : ''
            }
            key={filter}
          >
            <Link
              onClick={onSelect}
              to={`/?type=${filterType.toLowerCase()}&filter=${filter}`}
            >
              {filter}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Filters;
