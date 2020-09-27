/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './MainFilter.css';

export default class MainFilter extends Component {

  state = {
    categories: [1,0,0]
  }

  onTypeClick = (indx) => {
    console.log('clkc', indx);
    this.setState(({categories}) => {
      const oldEl = categories[indx]
      const newEl = oldEl ? 0 : 1
      return {categories: [...categories.slice(0, indx), newEl, ...categories.slice(indx+1)]}
    })
  };

  onSubmit = (e) => {
    e.preventDefault()
    console.log('submit', this.state.categories)
    this.props.onSubmit(this.state.categories)
  }

  render() {
    const clazz = 'filter-btn-active'
    const {categories} = this.state

    return (
      <div className="main-filter">
        <form onSubmit={this.onSubmit}>
        <button
          type="button"
          className={`filter-btn ${categories[0] ? clazz : null}`}
          onClick={(e) => this.onTypeClick(0)}
        >
          General
        </button>

        <button
          type="button"
          className={`filter-btn ${categories[1] ? clazz : null}`}
          onClick={(e) => this.onTypeClick(1)}
          >
            Anime
          </button>

          <button
          type="button"
          className={`filter-btn ${categories[2] ? clazz : null}`}
          onClick={(e) => this.onTypeClick(2)}
          >
            People
          </button>

          <button type="submit" className="filter-btn">Submit</button>
        </form>
      </div>
    );
  }
}
