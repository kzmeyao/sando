import React from 'react';
import { FilterType } from './posts-types';
import './filters.css';

const Filters = ({
  countryFilters,
  currentFilterIndex,
  currentFilterType,
  setFilter,
  yearFilters
}) => (
  <div className="filters">
    <FilterList
      currentFilterType={currentFilterType}
      currentFilterIndex={currentFilterIndex}
      filters={countryFilters}
      filterType={FilterType.COUNTRIES}
      setFilter={setFilter}
    />
    <FilterList
      currentFilterType={currentFilterType}
      currentFilterIndex={currentFilterIndex}
      filters={yearFilters}
      filterType={FilterType.YEARS}
      setFilter={setFilter}
    />
  </div>
);

const FilterList = ({
  currentFilterType,
  currentFilterIndex,
  filters,
  filterType,
  setFilter
}) => {
  const isSameFilterType = currentFilterType === filterType;

  return (
    <>
      <h5>{filterType}</h5>
      <ul>
        {filters.map((filter, index) => (
          <li
            className={
              isSameFilterType && currentFilterIndex === index ? 'selected' : ''
            }
            key={filter}
            onClick={() => setFilter(filterType, index)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Filters;
