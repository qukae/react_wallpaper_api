import React, { Component } from 'react';
import Categories from './categories/Categories';
import './MainFilter.css';

export default class MainFilter extends Component {

  state = {
    categories: [1,0,0],
    color: '',
    colorsMenuVisible: false
  }

  onCategoriesClick = (indx) => {
    // console.log('clkc_filer', indx, this.state.categories);
    this.setState(({categories}) => {
      const oldEl = categories[indx]
      const newEl = oldEl ? 0 : 1
      return {categories: [...categories.slice(0, indx), newEl, ...categories.slice(indx+1)]}
    })
  };

  onSubmit = (e) => {
    e.preventDefault()
    // console.log('submit', this.state.categories)
    this.props.onSubmit(this.state.categories)
  }

  render() {
    const {categories} = this.state

    return (
      <div className="main-filter">
        <form onSubmit={this.onSubmit}>
          <Categories onTypeClick={(indx) => this.onCategoriesClick(indx)} categories={categories}/>
          <button type="submit" className="filter-btn">Submit</button>
        </form>
      </div>
    );
  }
}
