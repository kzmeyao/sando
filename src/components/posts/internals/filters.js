import React from 'react';
import { Link } from 'gatsby';
import { FilterType } from './posts-types';

const Filters = ({ currentFilter, currentFilterType, filters, onSelect }) => (
  <div className="pt-5">
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
      <h3 className="pb-2 text-grey-dark text-xs">{filterType}</h3>
      <ul className="list-reset mb-8">
        {filters.map(filter => (
          <li
            className={
              isSameFilterType && filter === currentFilter
                ? 'font-bold leading-tight'
                : 'leading-tight'
            }
            key={filter}
          >
            <Link
              className="no-underline text-grey-darkest"
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
