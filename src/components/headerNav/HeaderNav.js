import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DispatchContext from '../app/DispatchContext';
import './HeaderNav.css';

const HeaderNav = () => {
  const appDispatch = useContext(DispatchContext);

  const onNavClick = (sorting) => {
    appDispatch({ type: 'showLists' }); // clear state
    appDispatch({ type: 'sorting', payload: sorting }); // set type of list hardcoded to buttons
    appDispatch({ type: 'getWallz' }); // gets data form server
  };

  return (
    <nav className="header-nav-wrap">
      <ul className="header-nav">

        <li className="btn-nav-li">
          <Link to="/">
            <button type="button" onClick={() => onNavClick('date_added')} className="btn-nav">Latest</button>
          </Link>
        </li>
        <li className="btn-nav-li">
          <Link to="/">
            <button type="button" onClick={() => onNavClick('views')} className="btn-nav">Most viewed</button>
          </Link>
        </li>
        <li className="btn-nav-li">
          <Link to="/">
            <button type="button" onClick={() => onNavClick('toplist')} className="btn-nav">Toplist</button>
          </Link>
        </li>
        <li className="btn-nav-li">
          <Link to="/">
            <button type="button" onClick={() => onNavClick('random')} className="btn-nav">Random</button>
          </Link>
        </li>
        <li className="btn-nav-li">
          <Link to="/about">
            <button type="button" className="btn-nav">About</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
