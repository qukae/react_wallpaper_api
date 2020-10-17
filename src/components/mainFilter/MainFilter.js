import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import DispatchContext from '../app/DispatchContext';

import Categories from './categories/Categories';
import Colors from './colors/Colors';
import Resolutions from './resolutions/Resolutions';
import './MainFilter.css';

const MainFilter = (props) => {
  const appDispatch = useContext(DispatchContext);

  const onSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: 'getWallz' });
    props.history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmit} className="main-filter">
        <Categories />
        <Colors />
        <Resolutions />
        <button type="submit" className="filter-btn">Submit</button>
      </form>
    </>
  );
};

export default withRouter(MainFilter);
