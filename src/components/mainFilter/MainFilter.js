/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './MainFilter.css';

export default class MainFilter extends Component {
  render() {
    return (
      <div className="main-filter">
        <input type="checkbox" name="general" value="general" id="search-general" checked="" className="custom-check-box" />
        <label htmlFor="search-general">General</label>
        <input type="checkbox" name="anime" value="anime" id="search-anime" checked="" />
        <label htmlFor="search-anime">Anime</label>
        <input type="checkbox" name="people" value="people" id="search-people" />
        <label htmlFor="search-people">People</label>
      </div>
    );
  }
}
