/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import DispatchContext from '../../app/DispatchContext';
import StateContext from '../../app/StateContext';
import '../MainFilter.css';
import './Colors.css';

const Colors = () => {
  const colors = [
    '660000', '990000', 'cc0000', 'cc3333', 'ea4c88', '993399', '663399', '333399', '0066cc',
    '0099cc', '66cccc', '77cc33', '669900', '336600', '666600', '999900', 'cccc33', 'ffff00',
    'ffcc33', 'ff9900', 'ff6600', 'cc6633', '996633', '663300', '000000', '999999', 'cccccc',
    'ffffff', '424153', 'reset',
  ];

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const node = useRef(); // for detecting click outside modal window
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => { // i need somehow to move it in separate component
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

  const handleChange = (color) => {
    appDispatch({ type: 'colors', payload: color });
    setOpen(false);
  };

  const createColorsEl = () => { // creates menu with colors
    const el = colors.map((color) => {
      if (color === 'reset') { // special element. resets color
        return (
          <button onClick={() => handleChange(null)} type="button" className="colors-btn" key="reset" style={{ backgroundColor: 'white' }}>clear</button>
        );
      }
      const colorHex = `#${color}`;
      return (
        <button onClick={() => handleChange(color)} type="button" className="colors-btn" key={colorHex} style={{ backgroundColor: colorHex }} />
      );
    });
    return el;
  };

  const clazz = 'filter-btn-active';

  return (
    <div ref={node} className="colors-div">
      <button
        type="button"
        className={`filter-btn ${open ? clazz : null}`}
        onClick={() => setOpen(!open)}
        style={{ backgroundColor: `#${appState.colors || '313131'}` }}
      >
        Color
        {/* charCode is for arrow up or down when menu open/close */}
        {open ? String.fromCharCode(9652) : String.fromCharCode(9662)}
      </button>

      {
        open
          ? (
            <div className="colors-menu">
              {createColorsEl()}
            </div>
          )
          : (
            null
          )
      }
    </div>
  );
};

export default Colors;
