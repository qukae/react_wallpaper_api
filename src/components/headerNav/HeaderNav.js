import React, { Component } from 'react';
import './HeaderNav.css';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <ul className="header-nav">
          <li className="btn-nav-li">
            <a href="#!" className="btn-nav">Latest</a>
          </li>
          <li className="btn-nav-li">
            <a href="#!" className="btn-nav">Hot</a>
          </li>
          <li className="btn-nav-li">
            <a href="#!" className="btn-nav">Toplist</a>
          </li>
          <li className="btn-nav-li">
            <a href="#!" className="btn-nav">Random</a>
          </li>
          <li className="btn-nav-li">
            <a href="#!" className="btn-nav">Upload</a>
          </li>
        </ul>
      </nav>
    );
  }
}
