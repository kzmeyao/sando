import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <div className="content pure-g">
      <div className="pure-u-1-5 pure-u-padding-one" />
      <div className="pure-u-4-5 pure-u-padding-one">
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <h3>{siteTitle}</h3>
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
