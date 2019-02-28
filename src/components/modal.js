import React from 'react';
import './modal.css';

const Modal = ({ children, classNames, close }) => {
  return (
    <div className={`modal ${classNames}`}>
      <div className="modal-content">{children}</div>
      <button className="modal-close" onClick={close}>
        x
      </button>
    </div>
  );
};

export default Modal;
