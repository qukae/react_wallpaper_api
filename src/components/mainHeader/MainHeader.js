import React from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo';
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';

const MainHeader = ({ onSearch, onNavClick }) => (
  <>
    <div className="main-header">
      <Logo />
      <HeaderNav onNavClick={(sorting) => { onNavClick(sorting); }} />
      <Search onSearch={(e) => { onSearch(e); }} />
    </div>
  </>
);

export default MainHeader;
