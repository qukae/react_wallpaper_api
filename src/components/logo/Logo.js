/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DispatchContext from '../app/DispatchContext';
import './Logo.css';

const Logo = () => {
  const appDispatch = useContext(DispatchContext);
  return (
    <Link to="/" className="logo-wrap">
      <div
        className="logo"
        // goes to main page and reset all
        onClick={() => {
          appDispatch({ type: 'showLists' });
          appDispatch({ type: 'getWallz' });
        }}
      >
        {/* 3 times needed for broken text effect */}
        <p className="glitch">
          <span aria-hidden="true">WALLZ_HAVEN</span>
          <span aria-hidden="true">WALLZ_HAVEN</span>
          WALLZ_HAVEN
        </p>
      </div>
    </Link>
  );
};

export default Logo;
