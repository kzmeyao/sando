import React, { useEffect } from 'react';
import './modal.css';

const toggleBodyClass = () =>
  document.getElementsByTagName('body')[0].classList.toggle('open-modal');

const Modal = ({ children, classNames, close }) => {
  useEffect(() => {
    toggleBodyClass();
    return toggleBodyClass;
  });

  return (
    <div className={`modal ${classNames || ''}`}>
      <div className="modal-content">{children}</div>
      <button className="modal-close" onClick={close}>
        x
      </button>
    </div>
  );
};

export default Modal;
