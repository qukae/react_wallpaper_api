import React from 'react';
import './HeaderNav.css';

const HeaderNav = ({onNavClick}) => {
  console.log('header');
  return (
    <nav>
      <ul className="header-nav">
        <li className="btn-nav-li">
          <a href="#!" onClick={() => onNavClick('date_added')} className="btn-nav">Latest</a>
        </li>
        <li className="btn-nav-li">
          <a href="#!" onClick={() => onNavClick('views')} className="btn-nav">Most viewed</a>
        </li>
        <li className="btn-nav-li">
          <a href="#!" onClick={() => onNavClick('toplist')} className="btn-nav">Toplist</a>
        </li>
        <li className="btn-nav-li">
          <a href="#!" onClick={() => onNavClick('random')} className="btn-nav">Random</a>
        </li>
        <li className="btn-nav-li">
          <a href="#!" onClick={() => onNavClick('date_added')} className="btn-nav">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
