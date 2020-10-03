/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import './Wpage.css';
import { Link, withRouter } from 'react-router-dom';

function Wpage({ key }) {
  const [zoomClass, setZoomClass] = useState('showcase-img-sm');
  console.log('wallzData');

  useEffect(() => {
    console.log('effect');
  }, [key]);

  const onZoom = () => {
    switch (zoomClass) {
      case 'showcase-img-sm':
        setZoomClass('showcase-img-md');
        break;
      case 'showcase-img-md':
        setZoomClass('showcase-img-lg');
        break;
      case 'showcase-img-lg':
        setZoomClass('showcase-img-sm');
        break;
      default:
        break;
    }
  };
  return (

    <div key={key} className="showcase">
      <div className="img-div">
        <Link to="/">
          <img onClick={onZoom} className={`showcase-img ${zoomClass}`} src="https://w.wallhaven.cc/full/2e/wallhaven-2ep8g6.jpg" alt="asd" />
        </Link>
      </div>
    </div>

  );
}

export default withRouter(Wpage);
