import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/">
    <div className="logo">
      <p className="glitch">
        <span aria-hidden="true">WALLZ_HAVEN</span>
        <span aria-hidden="true">WALLZ_HAVEN</span>
        WALLZ_HAVEN
      </p>
    </div>
  </Link>
);

export default Logo;
