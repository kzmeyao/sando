import React, { useEffect, useState } from 'react';
import './modal.css';

const toggleBodyClass = () =>
  document.getElementsByTagName('body')[0].classList.toggle('open-modal');

const Modal = ({ children, classNames, close }) => {
  useEffect(() => {
    toggleBodyClass();
    return toggleBodyClass;
  });

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  });

  return (
    <div className={`modal ${classNames || ''} ${show ? 'show-modal' : ''}`}>
      <div className="modal-content">{children}</div>
      <button className="modal-close" onClick={close}>
        x
      </button>
    </div>
  );
};

export default Modal;
