import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faSearch, faTrashAlt  } from '@fortawesome/free-solid-svg-icons'

 class Search extends Component {
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
    this.props.history.push('/')
  }
  clear = () => {
    this.setState({
      input: ''
    })
    this.props.onSearch('')
    this.props.history.push('/')
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
export default withRouter(Search)