import React, { Component } from 'react';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';

export default class App extends Component {
  state = {
    searchQuery: '',
    categories: [1,0,0],
    color: null
  }

  onSearch = (e) => {
    console.log("search_app",e);
    this.setState({
      searchQuery: e
    })
    console.log(this.state);
  }
  onFilterSubmit = (categories, color) => {
    console.log('app_sub', categories, color);
    this.setState({
      categories: categories,
      color: color
    })
  }

  render() {
    const {searchQuery, categories, color} = this.state
    return (
    <>
      {console.log('app_render')}
      <MainHeader onSearch={(e) => {this.onSearch(e)}}/>
      <MainFilter onSubmit={(categories, color) => {this.onFilterSubmit(categories, color)}}/>
      {/* <Gallery searchQuery={searchQuery} categories={categories} color={color}/> */}
    </>
    );
  }
}
