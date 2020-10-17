/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import DispatchContext from '../../app/DispatchContext';
import StateContext from '../../app/StateContext';
import './Ratios.css';

const Ratios = () => {
  const ratUW = ['21x9', '32x9', '48x9'];
  const ratW = ['16x9', '16x10'];
  const ratP = ['9x16', '10x16', '9x18'];
  const ratS = ['1x1', '3x2', '4x3', '5x4'];

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

  const handleChange = (rat) => {
    appDispatch({ type: 'ratios', payload: rat });
    setOpen(false);
  };

  const clear = () => {
    appDispatch({ type: 'ratios', payload: '' });
    setOpen(false);
  };

  const createRatioEl = (ratArray) => {
    const el = ratArray.map((rat) => (
      <button onClick={() => handleChange(rat)} type="button" className="res-btn rat-btn" key={rat}>
        {rat}
      </button>
    ));
    return el;
  };

  const clazz = 'filter-btn-active';

  return (
    <div ref={node} className="res-div">
      <button
        type="button"
        className={`filter-btn ${open ? clazz : null}`}
        onClick={() => setOpen(!open)}
      >
        {appState.ratios || 'Ratio'}
        {open ? String.fromCharCode(9652) : String.fromCharCode(9662)}
      </button>

      {
        open
          ? (
            <div className="res-menu rat-menu">
              <button
                type="button"
                className="res-btn rat-clear"
                onClick={clear}
              >
                Clear
              </button>
              <div className="res-col">
                <h6 className="res-title">Ultrawide</h6>
                {createRatioEl(ratUW)}
              </div>
              <div className="res-col">
                <h6 className="res-title">Wide</h6>
                {createRatioEl(ratW)}
              </div>
              <div className="res-col">
                <h6 className="res-title">Portrait</h6>
                {createRatioEl(ratP)}
              </div>
              <div className="res-col">
                <h6 className="res-title">Square</h6>
                {createRatioEl(ratS)}
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

export default Ratios;
