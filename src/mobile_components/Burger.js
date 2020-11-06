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

// it have very pure layout but who even want to browse PC wallpapers on their phone anyway?
// I made it just that app can be used on mobile device
// It uses same components as desktop but a little different logic, order and css
// Maybe later when i learn reactNative i make a full mobile app
const Burger = (props) => {
  const appDispatch = useContext(DispatchContext);
  const [open, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: 'getWallz' });
    props.history.push('/');
    setOpen(false);
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

export default withRouter(Burger);
