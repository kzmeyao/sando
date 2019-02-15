import React from 'react';
import { FilterType } from './posts-types';

const Filters = ({ countryFilters, setFilter, yearFilters }) => (
  <>
    <div>COUNTRIES</div>
    <ul>
      {countryFilters.map((country, index) => (
        <li key={country} onClick={() => setFilter(FilterType.COUNTRY, index)}>
          {country}
        </li>
      ))}
    </ul>
    <div>YEARS</div>
    <ul>
      {yearFilters.map((year, index) => (
        <li key={year} onClick={() => setFilter(FilterType.YEAR, index)}>
          {year}
        </li>
      ))}
    </ul>
  </>
);

export default Filters;
