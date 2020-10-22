import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimesCircle, faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import DispatchContext from '../components/app/DispatchContext';

import HeaderNav from '../components/headerNav/HeaderNav';
import Categories from '../components/mainFilter/categories/Categories';
import Colors from '../components/mainFilter/colors/Colors';
import Resolutions from '../components/mainFilter/resolutions/Resolutions';
import '../components/mainFilter/MainFilter.css';
import Ratios from '../components/mainFilter/ratios/Ratios';
import Order from '../components/mainFilter/order/Order';
import Sorting from '../components/mainFilter/sorting/Sorting';
import './Burger.css';

const MainFilter = (props) => {
  const appDispatch = useContext(DispatchContext);
  const [open, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: 'getWallz' });
    props.history.push('/');
  };

  const Filter = () => (
    <form onSubmit={onSubmit} className="main-filter">
      <Resolutions />
      <Colors />
      <Ratios />
      <Sorting />
      <Order />
      <Categories />
      <button type="submit" className="filter-btn submit-btn">
        <FontAwesomeIcon className="filter-icon" icon={faRedoAlt} />
      </button>
    </form>
  );

  return (
    <>
      <button
        type="button"
        className="burger-btn"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon className="ico ico-burger" icon={open ? faTimesCircle : faBars} />
      </button>
      <div className={`burger-menu ${open ? '' : 'burger-menu-closed'}`}>
        <Filter />
        <HeaderNav />
      </div>
    </>
  );
};

export default withRouter(MainFilter);
