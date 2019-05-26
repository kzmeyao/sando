import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Filters from './filters';
import Modal from '../../modal';
import { toFilterKey, fromFilterKey } from 'utils';

import './filter-menu.css';

const FilterMenu = props => {
  const { currentFilter, currentFilterType, filters } = props;
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <div className="mt-5 mb-2 text-center md:text-left">
        <span
          className="cursor-pointer underline"
          onClick={() => toggleModal(true)}
        >
          FILTER
        </span>
        {currentFilter ? `: ${fromFilterKey(currentFilter, filters)}` : ''}
      </div>
      {showModal &&
        ReactDOM.createPortal(
          <Modal classNames="filter-modal" close={() => toggleModal(false)}>
            <Filters {...props} onSelect={() => toggleModal(false)} />
          </Modal>,
          document.getElementById('modal-root')
        )}
    </>
  );
};

export default FilterMenu;
