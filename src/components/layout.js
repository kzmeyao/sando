import React from 'react';

import './layout.css';

const Layout = ({ children, header }) => (
  <>
    {header}
    <div className="content">
      <main>{children}</main>
      <footer className="text-sm text-right text-grey-darker my-8">
        © Kevin Yao, {new Date().getFullYear()}
      </footer>
    </div>
    <div id="modal-root" />
  </>
);

export default Layout;
