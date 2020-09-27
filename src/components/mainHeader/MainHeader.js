import React, { Component } from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo';
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';

const MainHeader = ({ onSearch }) => (
  <>
    <div className="main-header">
      <Logo />
      <HeaderNav />
      <Search onSearch={(e) => { onSearch(e); }} />
    </div>
  </>
);

export default MainHeader;
