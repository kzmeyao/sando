import { Link } from 'gatsby';
import React from 'react';
import './header.css';

const HomeHeader = ({ title }) => (
  <header>
    <div className="content pure-g">
      <div className="pure-u-1 pure-u-padding-one">
        <Navigation />
        <div className="subtitle">&nbsp;</div>
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

const PostHeader = ({ title, subtitle }) => (
  <header>
    <div className="content pure-g">
      <div className="pure-u-1 pure-u-padding-one">
        <Navigation />
        <div className="subtitle">{subtitle.toUpperCase()}</div>
        <h2>{title}</h2>
      </div>
    </div>
  </header>
);

const Navigation = () => (
  <nav>
    <Link to="/">home</Link>
    <Link to="/">about</Link>
  </nav>
);

export { HomeHeader, PostHeader };
