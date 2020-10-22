/* eslint-disable camelcase */
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import DispatchContext from '../app/DispatchContext';
import StateContext from '../app/StateContext';

const Search = (props) => {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const onChange = (search_q) => {
    appDispatch({ type: 'search_q', payload: search_q });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.history.push('/');
    appDispatch({ type: 'getWallz' });
  };

  const clear = () => {
    appDispatch({ type: 'showLists' });
    appDispatch({ type: 'getWallz' });
    props.history.push('/');
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input
        value={appState.search_q}
        onChange={(e) => onChange(e.target.value)}
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
