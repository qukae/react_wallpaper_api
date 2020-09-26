import React, { Component } from 'react';
import './MainHeader.css';
import Logo from '../logo/Logo'
import HeaderNav from '../headerNav/HeaderNav';
import Search from '../search/Search';

export default class MainHeader extends Component {
  render() {
    return (
      <>
        <div className="main-header">
          <Logo />
          <HeaderNav />
          <Search />
        </div>
      </>
    );
  }
}
