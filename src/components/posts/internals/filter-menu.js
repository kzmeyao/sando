import React from 'react';
import './filter-menu.css';

const FilterMenu = ({ currentFilter }) => (
  <div className="filter-menu content">
    <span className="menu-trigger">FILTER</span>
    <span className="current-filter pure-u-s-0">: {currentFilter}</span>
  </div>
);

export default FilterMenu;
