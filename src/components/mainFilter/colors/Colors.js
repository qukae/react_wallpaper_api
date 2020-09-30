/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, useState } from 'react';
import '../MainFilter.css';
import './Colors.css';

const Colors = ({ onColorClick, color }) => {
  const colors = [
    '660000', '990000', 'cc0000', 'cc3333', 'ea4c88', '993399', '663399', '333399', '0066cc',
    '0099cc', '66cccc', '77cc33', '669900', '336600', '666600', '999900', 'cccc33', 'ffff00',
    'ffcc33', 'ff9900', 'ff6600', 'cc6633', '996633', '663300', '000000', '999999', 'cccccc',
    'ffffff', '424153', 'reset',
  ];

  // click outside hook
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    console.log('clicking anywhere');
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (item) => {
    onColorClick(item);
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

  //  click outside end

  const createColorsEl = () => {
    const el = colors.map((item) => {
      if (item === 'reset') {
        return (
          <button type="button" className="colors-btn" key="reset" style={{ backgroundColor: 'white' }}>clear</button>
        );
      }
      const btnColor = `#${item}`;
      return (
        <button onClick={() => handleChange(item)} type="button" className="colors-btn" key={btnColor} style={{ backgroundColor: btnColor }} />
      );
    });
    return el;
  };

  const clazz = 'filter-btn-active';

  return (
    <div ref={node} className="colors-div">
      <button type="button" className={`filter-btn ${open ? clazz : null}`} onClick={() => setOpen(!open)} style={{ backgroundColor: `#${color}` }}>
        Color
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
