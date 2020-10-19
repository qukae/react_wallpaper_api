/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import DispatchContext from '../../app/DispatchContext';
import StateContext from '../../app/StateContext';
import '../MainFilter.css';
import './Resolutions.css';

const Resolutions = () => {
  const resUW = ['2560x1080', '3440x1440', '3840x1600'];
  const res16x9 = ['1280x720', '1600x900', '1920x1080', '2560x1440', '3840x2160'];
  const res16x10 = ['1280x800', '1600x1000', '1920x1200', '2560x1600', '3840x2400'];
  const res4x3 = ['1280x960', '1600x1200', '1920x1440', '2560x1920', '3840x2880'];
  const res5x4 = ['1280x1024', '1600x1280', '1920x1536', '2560x2048', '3840x3072'];

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const node = useRef();
  const [open, setOpen] = useState(false);
  const [atleast, setAtleast] = useState(true);

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

  const handleChange = (res) => {
    if (atleast) {
      appDispatch({ type: 'atleast', payload: res });
      appDispatch({ type: 'resolutions', payload: '' });
    } else {
      appDispatch({ type: 'atleast', payload: '' });
      appDispatch({ type: 'resolutions', payload: res });
    }
    setOpen(false);
  };

  const clear = () => {
    appDispatch({ type: 'resolutions', payload: '' });
    appDispatch({ type: 'atleast', payload: '' });
    setOpen(false);
  };
  // handles exact or atleast option and reset res
  useEffect(() => {
    appDispatch({ type: 'resolutions', payload: '' });
    appDispatch({ type: 'atleast', payload: '' });
  }, [atleast]); // eslint-disable-line

  const createResolutionsEl = (resArray) => {
    const el = resArray.map((res) => (
      <button onClick={() => handleChange(res)} type="button" className="res-btn" key={res}>
        {res}
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
        {appState.atleast ? String.fromCharCode(8805) : null}
        {appState.resolutions || appState.atleast || 'Resolution'}
        {open ? String.fromCharCode(9652) : String.fromCharCode(9662)}
      </button>

      {
        open
          ? (
            <div className="res-menu">
              <button
                type="button"
                className={`res-btn res-atleast ${atleast ? 'res-btn-active' : null}`}
                onClick={() => setAtleast(true)}
              >
                Atleast
              </button>
              <button
                type="button"
                className={`res-btn res-exact ${atleast ? null : 'res-btn-active'}`}
                onClick={() => setAtleast(false)}
              >
                Exactly
              </button>
              <button
                type="button"
                className="res-btn res-clear"
                onClick={clear}
              >
                Clear
              </button>

              <div className="res-col">
                <h6 className="res-title">Ultrawide</h6>
                {createResolutionsEl(resUW)}
              </div>
              <div className="res-col">
                <h6 className="res-title">16:9</h6>
                {createResolutionsEl(res16x9)}
              </div>
              <div className="res-col">
                <h6 className="res-title">16:10</h6>
                {createResolutionsEl(res16x10)}
              </div>
              <div className="res-col">
                <h6 className="res-title">4:3</h6>
                {createResolutionsEl(res4x3)}
              </div>
              <div className="res-col">
                <h6 className="res-title">5:4</h6>
                {createResolutionsEl(res5x4)}
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

export default Resolutions;
