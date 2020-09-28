/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../MainFilter.css';
import './Colors.css';

const Colors = ({ showColorMenu, colorMenuVisible, onColorClick, color }) => {
  const colors = [
    '660000', '990000', 'cc0000', 'cc3333', 'ea4c88', '993399', '663399', '333399', '0066cc',
    '0099cc', '66cccc', '77cc33', '669900', '336600', '666600', '999900', 'cccc33', 'ffff00',
    'ffcc33', 'ff9900', 'ff6600', 'cc6633', '996633', '663300', '000000', '999999', 'cccccc',
    'ffffff', '424153', 'reset',
  ];

  const createColorsEl = () => {
    const el = colors.map((item) => {
      if (item === 'reset') {
        return (
          <button type="button" className="colors-btn" key="reset" style={{ backgroundColor: 'white' }}>clear</button>
        );
      }
      const color = `#${item}`;
      return (
        <button onClick={() => onColorClick(item)} type="button" className="colors-btn" key={color} style={{ backgroundColor: color }} />
      );
    });
    return el;
  };

  const clazz = 'filter-btn-active';
  return (
    <div className="colors-div">
      <button type="button" className={`filter-btn ${colorMenuVisible ? clazz : null}`} onClick={showColorMenu} style={{ backgroundColor: `#${color}` }}>
        Color
      </button>

      {
        colorMenuVisible
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
