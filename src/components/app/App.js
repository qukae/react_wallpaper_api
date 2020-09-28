import React, { Component } from 'react';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';

export default class App extends Component {
  state = {
    searchQuery: '2077',
    categories: [1,0,0]
  }

  onSearch = (e) => {
    console.log("search_app",e);
    this.setState({
      searchQuery: e
    })
    console.log(this.state);
  }
  onFilterSubmit = (e) => {
    console.log('app_sub', e);
    this.setState({
      categories: e
    })
  }

  render() {
    const {searchQuery, categories} = this.state
    return (
    <>
      {console.log('app_render')}
      <MainHeader onSearch={(e) => {this.onSearch(e)}}/>
      <MainFilter onSubmit={(e) => {this.onFilterSubmit(e)}}/>
      {/* <Gallery searchQuery={searchQuery} categories={categories}/> */}
    </>
    );
  }
}
