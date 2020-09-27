import React, { Component } from 'react';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';

export default class App extends Component {
  state = {
    searchQuery: '2077'
  }

  onSearch = (e) => {
    console.log("search_app",e);
    this.setState({
      searchQuery: e
    })
    // console.log(this.state.searchQuery);
  }

  render() {

    return (
    <>
      {console.log('app_render')}
      <MainHeader onSearch={(e) => {this.onSearch(e)}}/>
      <MainFilter />
      <Gallery searchQuery={this.state.searchQuery}/>
    </>
    );
  }
}
