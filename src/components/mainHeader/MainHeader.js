import React from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo';
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';
import useViewport from '../utils/useViewport';
import HeaderNavMob from '../../mobile_components/headerNav/HeaderNavMob';
import '../../mobile_components/headerNav/HeaderNavMob.css';


const MainHeader = () => {
  const { width } = useViewport();

  const breakpoint = 620;

  return (
    <>
      <div className="main-header">
        <Logo />
        {width > breakpoint ? <HeaderNav /> : <HeaderNavMob />}
        <Search />
      </div>
    </>
  );
};

export default MainHeader;
