/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, useState } from 'react';
import '../MainFilter.css';
import './Colors.css';

const Colors = ({ onColorClick }) => {
  const colors = [
    '660000', '990000', 'cc0000', 'cc3333', 'ea4c88', '993399', '663399', '333399', '0066cc',
    '0099cc', '66cccc', '77cc33', '669900', '336600', '666600', '999900', 'cccc33', 'ffff00',
    'ffcc33', 'ff9900', 'ff6600', 'cc6633', '996633', '663300', '000000', '999999', 'cccccc',
    'ffffff', '424153', 'reset',
  ];

  // click outside hook
  const node = useRef();
  const [open, setOpen] = useState(false);
  const [btnColor, setBtnColor] = useState('313131');
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (color) => {
    onColorClick(color);
    setBtnColor(color || '313131');
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
    const el = colors.map((color) => {
      if (color === 'reset') {
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
      <button type="button" className={`filter-btn ${open ? clazz : null}`} onClick={() => setOpen(!open)} style={{ backgroundColor: `#${btnColor}` }}>
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
