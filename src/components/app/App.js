import React, { Component } from 'react';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';

export default class App extends Component {
  state = {}
  render() {
    return (
    <>

      <MainHeader />
      <MainFilter />
      <Gallery />
    </>
    );
  }
}
