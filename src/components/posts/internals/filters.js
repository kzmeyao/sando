import React from 'react';
import { Link } from 'gatsby';
import { toFilterKey } from 'utils';
import { FilterType } from 'constants/types';

const Filters = ({ currentFilter, currentFilterType, filters, onSelect }) => (
  <div className="font-sans pt-5">
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
  onSelect,
}) => {
  const isSameFilterType = currentFilterType === filterType;

  return (
    <>
      <h3 className="pb-3 text-grey-dark text-s">{filterType}</h3>
      <ul className="mb-8">
        {filters.map((filter) => (
          <li
            className={
              isSameFilterType && toFilterKey(filter) === currentFilter
                ? 'font-bold leading-tight pb-1'
                : 'leading-tight pb-1'
            }
            key={filter}
          >
            <Link
              className="hover:font-bold no-underline text-grey-darkest"
              onClick={onSelect}
              to={`/${filterType.toLowerCase()}/${toFilterKey(filter)}/`}
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
