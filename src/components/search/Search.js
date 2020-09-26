import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
    );
  }
}
