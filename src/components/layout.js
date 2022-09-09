import React from 'react';

import './layout.css';

const Layout = ({ children, header }) => (
  <div className="site">
    {header}
    <main>
      <div className="main-container">{children}</div>
    </main>
    <footer className="text-sm text-right text-grey-darker">
      <div className="main-container">
        © Kevin Yao, {new Date().getFullYear()}
      </div>
    </footer>
    <div id="modal-root" />
  </div>
);

export default Layout;
