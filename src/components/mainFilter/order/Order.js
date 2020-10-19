/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import DispatchContext from '../../app/DispatchContext';
import StateContext from '../../app/StateContext';
import './Order.css';

const Order = () => {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const changeOrder = () => {
    if (appState.order === 'desc') {
      appDispatch({ type: 'order', payload: 'asc' });
    } else {
      appDispatch({ type: 'order', payload: 'desc' });
    }
  };
  return (
    <div className="order res-div">
      <button
        type="button"
        className="filter-btn"
        onClick={() => changeOrder()}
      >
        {appState.order === 'desc'
          ? <FontAwesomeIcon className="order-desc" icon={faChevronLeft} />
          : <FontAwesomeIcon className="order-asc" icon={faChevronLeft} />}
      </button>
    </div>
  );
};

export default Order;
