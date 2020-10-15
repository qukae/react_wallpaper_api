import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import DispatchContext from '../app/DispatchContext';

import Categories from './categories/Categories';
import Colors from './colors/Colors';
import './MainFilter.css';

const MainFilter = (props) => {
  const appDispatch = useContext(DispatchContext);

  const [categories, setCategories] = useState([1, 0, 0]);
  const [color, setColor] = useState(null);

  const onColorClick = (clr) => {
    setColor(clr);
  };

  const onCategoriesClick = (indx) => {
    setCategories((prevState) => {
      const newElement = prevState[indx] ? 0 : 1;
      return [...prevState.slice(0, indx), newElement, ...prevState.slice(indx + 1)];
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: 'categories', payload: categories });
    appDispatch({ type: 'colors', payload: color });
    props.history.push('/');
  };

  return (
    <>
      <form onSubmit={onSubmit} className="main-filter">
        <Categories onCategoriesClick={(indx) => onCategoriesClick(indx)} categories={categories} />
        <Colors onColorClick={(clr) => onColorClick(clr)} />
        <button type="submit" className="filter-btn">Submit</button>
      </form>
    </>
  );
};

export default withRouter(MainFilter);
