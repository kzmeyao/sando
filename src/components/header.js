import { Link } from 'gatsby';
import React from 'react';

const headerClass = 'bg-white text-center md:text-left';
const headingClass = 'font-heading font-semibold text-3xl text-black';
const subtitleClass = 'text-xs text-black';
const navLinkClass =
  'no-underline text-xs text-grey-darkest hover:underline';

const HomeHeader = ({ title }) => (
  <header className={headerClass}>
    <div className="content">
      <Navigation />
      <div className={subtitleClass}>&nbsp;</div>
      <Link className="no-underline inline-block" to="/">
        <h1 className={headingClass}>{title}</h1>
      </Link>
    </div>
  </header>
);

const PostHeader = ({ title, subtitle }) => (
  <header className={headerClass}>
    <div className="content text-left">
      <Navigation />
      <div className={subtitleClass}>{subtitle.toUpperCase()}</div>
      <h1 className={headingClass}>{title}</h1>
    </div>
  </header>
);

const Navigation = () => (
  <nav className="clearfix pb-12">
    <Link className={`${navLinkClass} float-left`} to="/">
      home
    </Link>
    <Link className={`${navLinkClass} float-right`} to="/about">
      about
    </Link>
  </nav>
);

export { HomeHeader, PostHeader };
