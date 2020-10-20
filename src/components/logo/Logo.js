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
        onClick={() => {
          appDispatch({ type: 'showLists' });
          appDispatch({ type: 'getWallz' });
        }}
      >
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
