import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DispatchContext from '../../components/app/DispatchContext';

export default function HeaderNavMob() {
  const appDispatch = useContext(DispatchContext);

  const onNavClick = (sorting) => {
    appDispatch({ type: 'sorting', payload: sorting });
    appDispatch({ type: 'showLists' });
    appDispatch({ type: 'getWallz' });
  };
  const [open, setOpen] = useState(false);
  const Nav = () => (
    <nav className="header-nav-wrap-mob">
      <ul className="header-nav-mob">
        <Link to="/">
          <li className="btn-nav-li-mob">
            <button type="button" onClick={() => onNavClick('date_added')} className="res-btn">Latest</button>
          </li>
        </Link>
        <Link to="/">
          <li className="btn-nav-li-mob">
            <button type="button" onClick={() => onNavClick('views')} className="res-btn">Most viewed</button>
          </li>
        </Link>
        <Link to="/">
          <li className="btn-nav-li-mob">
            <button type="button" onClick={() => onNavClick('toplist')} className="res-btn">Toplist</button>
          </li>
        </Link>
        <Link to="/">
          <li className="btn-nav-li-mob">
            <button type="button" onClick={() => onNavClick('random')} className="res-btn">Random</button>
          </li>
        </Link>
        <Link to="/">
          <li className="btn-nav-li-mob">
            <button type="button" onClick={() => onNavClick('date_added')} className="res-btn">About</button>
          </li>
        </Link>
      </ul>

      <button
        type="button"
        className="burger-btn burger-btn-close"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon className="ico ico-burger" icon={faTimesCircle} />
      </button>
    </nav>
  );

  return (
    <div className="nav-mob">
      <button
        type="button"
        className="burger-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? <FontAwesomeIcon className="ico ico-burger" icon={faTimesCircle} /> : <FontAwesomeIcon className="ico ico-burger" icon={faBars} />}
      </button>
      {open ? <Nav /> : null}
    </div>
  );
}
