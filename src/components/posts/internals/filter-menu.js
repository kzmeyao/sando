import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './filter-menu.css';

import Filters from './filters';
import Modal from '../../modal';

const FilterMenu = props => {
  const { currentFilter } = props;
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <div className="filter-menu content">
        <span className="menu-trigger" onClick={() => toggleModal(true)}>
          FILTER
        </span>
        <span className="current-filter pure-u-s-0">: {currentFilter}</span>
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
