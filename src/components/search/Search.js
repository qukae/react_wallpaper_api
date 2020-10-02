import React, { Component } from 'react';
import './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faSearch, faTrashAlt  } from '@fortawesome/free-solid-svg-icons'

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
    }
  }
  clear = () => {
    this.setState({
      input: ''
    })
    this.props.onSearch('')

  }


  render() {
    return (
      <form onSubmit={this.onSubmit} className="search">
        <input
          value={this.state.input}
          onChange={this.onChangeInput}
          className="search-input"
          type="text"
          placeholder="Search..."
        />
          <button className="btn-search btn-search-submit" type="submit">

          <FontAwesomeIcon className="ico" icon={faSearch} />
          </button>
          <button className="btn-search btn-search-clear" type="button" onClick={this.clear}>
          <FontAwesomeIcon className="ico" icon={faTrashAlt} />
          </button>

      </form>
    );
  }
}
