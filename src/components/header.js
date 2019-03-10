import { Link } from 'gatsby';
import React from 'react';
import './header.css';

const HomeHeader = ({ title }) => (
  <header>
    <div className="content pure-g">
      <div className="pure-u-m-0 pure-u-l-1-6 pure-u-padding-one" />
      <div className="pure-u-1 pure-u-l-5-6 pure-u-padding-one">
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  </header>
);

const goBack = () => {
  window && window.history.back();
};

const PostHeader = ({ title, subtitle }) => (
  <header>
    <div className="content pure-g">
      <div className="pure-u-1 pure-u-padding-one">
        <a className="pure-u-s-0 back-link" href="#" onClick={goBack}>
          {'<'} back
        </a>
        <div className="subtitle">{subtitle.toUpperCase()}</div>
        <h2>{title}</h2>
      </div>
    </div>
  </header>
);

export { HomeHeader, PostHeader };
