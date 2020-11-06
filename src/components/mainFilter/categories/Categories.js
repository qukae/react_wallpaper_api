/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import DispatchContext from '../../app/DispatchContext';
import StateContext from '../../app/StateContext';
import '../MainFilter.css';

const Categories = () => {
  const clazz = 'filter-btn-active';
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const onCategoriesClick = (indx) => { // send categories hardcoded to btns to app state
    appDispatch({ type: 'categories', payload: indx });
  };

  return (
    <div>
      <button
        type="button"
        className={`filter-btn ${appState.categories[0] ? clazz : null}`}
        onClick={() => onCategoriesClick(0)}
      >
        General
      </button>

      <button
        type="button"
        className={`filter-btn ${appState.categories[1] ? clazz : null}`}
        onClick={() => onCategoriesClick(1)}
      >
        Anime
      </button>

      <button
        type="button"
        className={`filter-btn ${appState.categories[2] ? clazz : null}`}
        onClick={() => onCategoriesClick(2)}
      >
        People
      </button>
    </div>
  );
};

export default Categories;
