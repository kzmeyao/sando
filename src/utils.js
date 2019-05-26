import { FilterType } from 'constants/types';

// TODO: refactor filters

const isYearFilter = filter => /^\d+$/.test(filter);

export const toFilterKey = filter =>
  isYearFilter(filter) ? filter : filter.toLowerCase().replace(/[^a-z]+/g, '');

export const fromFilterKey = (key, filters) => {
  const actualFilters = isYearFilter(key)
    ? filters[FilterType.YEARS]
    : filters[FilterType.COUNTRIES];
  for (let i = 0; i < actualFilters.length; ++i) {
    if (toFilterKey(actualFilters[i]) === key) {
      return actualFilters[i];
    }
  }
  return null;
};
