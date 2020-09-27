import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    input: ''
  }

  onChangeInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.input) {
      this.props.onSearch(this.state.input)
      this.setState({
        input: ''
      })
    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmit} className="search">
        <input
          onChange={this.onChangeInput}
          className="search-input"
          type="text"
          placeholder="Search..."
        />
      </form>
    );
  }
}
