import React from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo';
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';
import useViewport from '../utils/useViewport';
import Burger from '../../mobile_components/Burger';

const MainHeader = () => {
  const { width } = useViewport();

  const breakpoint = 700;

  return (
    <>
      <div className="main-header">
        <Logo />
        {width > breakpoint ? <HeaderNav /> : <Burger />}
        <Search />
      </div>
    </>
  );
};

export default MainHeader;
