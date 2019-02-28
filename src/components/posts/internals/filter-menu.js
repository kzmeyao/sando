import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './filter-menu.css';

import Modal from '../../modal';

const FilterMenu = ({ currentFilter }) => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <div className="filter-menu content">
        <span className="menu-trigger" onClick={() => toggleModal(true)}>
          FILTER
        </span>
        <span className="current-filter pure-u-s-0">: {currentFilter}</span>
      </div>
      {showModal && <FilterModal close={() => toggleModal(false)} />}
    </>
  );
};

const FilterModal = ({ close }) => {
  return ReactDOM.createPortal(
    <Modal close={close}>HI</Modal>,
    document.getElementById('modal-root')
  );
};

export default FilterMenu;
