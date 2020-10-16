/* eslint-disable camelcase */
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import DispatchContext from '../app/DispatchContext';

const Search = (props) => {
  const appDispatch = useContext(DispatchContext);
  const [search_q, setSearch_q] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: 'search_q', payload: search_q });
    props.history.push('/');
  };

  const clear = () => {
    setSearch_q('');
    appDispatch({ type: 'search_q', payload: '' });
    props.history.push('/');
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input
        value={search_q}
        onChange={(e) => setSearch_q(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Search..."
      />
      <button className="btn-search btn-search-submit" type="submit">

        <FontAwesomeIcon className="ico" icon={faSearch} />
      </button>
      <button className="btn-search btn-search-clear" type="button" onClick={clear}>
        <FontAwesomeIcon className="ico" icon={faTrashAlt} />
      </button>
    </form>
  );
};
export default withRouter(Search);
