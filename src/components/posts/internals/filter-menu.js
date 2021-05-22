import React, { useState } from 'react';

import Filters from './filters';
import { Modal } from '../../common/Modal';
import { fromFilterKey } from 'utils';

import './filter-menu.css';

const FilterMenu = (props) => {
  const { currentFilter, filters } = props;
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <div className="mt-4 mb-2 text-center md:text-left font-sans">
        <button
          className="cursor-pointer underline hover:bg-sando"
          onClick={() => toggleModal(true)}
        >
          FILTER
        </button>
        {currentFilter ? `: ${fromFilterKey(currentFilter, filters)}` : ''}
      </div>
      {showModal && (
        <Modal classNames="filter-modal" close={() => toggleModal(false)}>
          <Filters {...props} onSelect={() => toggleModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default FilterMenu;
