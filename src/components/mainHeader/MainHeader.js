import React from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo';
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';

const MainHeader = () => (
  <>
    <div className="main-header">
      <Logo />
      <HeaderNav />
      <Search />
    </div>
  </>
);

export default MainHeader;
