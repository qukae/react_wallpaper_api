import React, { Component } from 'react';
import Categories from './categories/Categories';
import Colors from './colors/Colors';
import './MainFilter.css';

export default class MainFilter extends Component {

  state = {
    categories: [1,0,0],
    color: null,
    colorMenuVisible: false
  }
  showColorMenu = () => {
    this.setState(({colorMenuVisible}) => {
      const res = colorMenuVisible ? false : true
      return {colorMenuVisible: res}
    })
  }
  onColorClick = (color) => {
    this.setState({
      color: color
    })
  }
  onCategoriesClick = (indx) => {
    this.setState(({categories}) => {
      const oldEl = categories[indx]
      const newEl = oldEl ? 0 : 1
      return {categories: [...categories.slice(0, indx), newEl, ...categories.slice(indx+1)]}
    })
  };

  onSubmit = (e) => {
    console.log('filter_submit: ', this.state.color);
    e.preventDefault()
    this.props.onSubmit(this.state.categories, this.state.color)
  }

  render() {
    const {categories, colorMenuVisible, color } = this.state

    return (
      <>
        <form onSubmit={this.onSubmit} className="main-filter">
          <Categories onTypeClick={(indx) => this.onCategoriesClick(indx)} categories={categories}/>

          <Colors showColorMenu={() => this.showColorMenu()} colorMenuVisible={colorMenuVisible} onColorClick={(color) => this.onColorClick(color)} color={color}/>
          <button type="submit" className="filter-btn">Submit</button>
        </form>
      </>
    );
  }
}
