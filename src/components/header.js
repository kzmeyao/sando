import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <div className="content pure-g">
      <div className="pure-u-m-0 pure-u-m-1-6 pure-u-padding-one" />
      <div className="pure-u-1 pure-u-l-5-6 pure-u-padding-one">
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <h2>{siteTitle}</h2>
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
