import React from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo';
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';
import useViewport from '../utils/useViewport';
import Burger from '../../mobile_components/Burger';

const MainHeader = () => {
  const { width } = useViewport(); // for mobile component display

  const breakpoint = 700; // screen width in px

  return (
    <>
      <div className="main-header">
        <Logo />
        {/* if mobile shows burger menu else shows desktop nav */}
        {width > breakpoint ? <HeaderNav /> : <Burger />}
        <Search />
      </div>
    </>
  );
};

export default MainHeader;
