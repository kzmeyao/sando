import React from 'react';

import './layout.css';
import './pure-base.css';
import './pure-grids.css';

const Layout = ({ children, header }) => (
  <>
    {header}
    <div className="content">
      <main>{children}</main>
      <footer>© Kevin Yao, {new Date().getFullYear()}</footer>
    </div>
    <div id="modal-root" />
  </>
);

export default Layout;
