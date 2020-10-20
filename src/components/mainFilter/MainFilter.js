import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import DispatchContext from '../app/DispatchContext';

import Categories from './categories/Categories';
import Colors from './colors/Colors';
import Resolutions from './resolutions/Resolutions';
import './MainFilter.css';
import Ratios from './ratios/Ratios';
import Order from './order/Order';
import Sorting from './sorting/Sorting';

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
        <Ratios />
        <Sorting />
        <Order />
        <button type="submit" className="filter-btn submit-btn">
          <FontAwesomeIcon className="filter-icon" icon={faRedoAlt} />
        </button>
      </form>
    </>
  );
};

export default withRouter(MainFilter);
