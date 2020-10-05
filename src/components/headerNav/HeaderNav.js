import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = ({ onNavClick }) => (
  <nav>
    <ul className="header-nav">
      <Link to="/">
        <li className="btn-nav-li">
          <button type="button" onClick={() => onNavClick('date_added')} className="btn-nav">Latest</button>
        </li>
      </Link>
      <Link to="/">
        <li className="btn-nav-li">
          <button type="button" onClick={() => onNavClick('views')} className="btn-nav">Most viewed</button>
        </li>
      </Link>
      <Link to="/">
        <li className="btn-nav-li">
          <button type="button" onClick={() => onNavClick('toplist')} className="btn-nav">Toplist</button>
        </li>
      </Link>
      <Link to="/">
        <li className="btn-nav-li">
          <button type="button" onClick={() => onNavClick('random')} className="btn-nav">Random</button>
        </li>
      </Link>
      <Link to="/">
        <li className="btn-nav-li">
          <button type="button" onClick={() => onNavClick('date_added')} className="btn-nav">About</button>
        </li>
      </Link>
    </ul>
  </nav>
);

export default HeaderNav;
