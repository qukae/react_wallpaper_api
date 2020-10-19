/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import DispatchContext from '../../app/DispatchContext';
import StateContext from '../../app/StateContext';
import './Sorting.css';

const Sorting = () => {
  const sorting = ['random', 'relevance', 'date_added', 'views', 'favorites', 'toplist'];

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleChange = (sort) => {
    appDispatch({ type: 'sorting', payload: sort });
    setOpen(false);
  };

  const createSortingEl = (sortingArray) => {
    const el = sortingArray.map((sort) => (
      <button onClick={() => handleChange(sort)} type="button" className="res-btn" key={sort}>
        {
           sort.charAt(0).toUpperCase() + sort.slice(1)
        }
      </button>
    ));
    return el;
  };

  const clazz = 'filter-btn-active';

  return (
    <div ref={node} className="sort-div">
      <button
        type="button"
        className={`filter-btn ${open ? clazz : ''}`}
        onClick={() => setOpen(!open)}
      >
        {appState.sorting.charAt(0).toUpperCase() + appState.sorting.slice(1) || 'Date Added'}
        {open ? String.fromCharCode(9652) : String.fromCharCode(9662)}
      </button>

      {
        open
          ? (
            <div className="sort-menu">
              <div className="res-col">
                {createSortingEl(sorting)}
              </div>
            </div>
          )
          : (
            null
          )
      }
    </div>
  );
};

export default Sorting;
