/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './Wpage.css';
import { withRouter } from 'react-router-dom';
import useGetOneWall from '../../services/getOneWallApi';
import Aside from './aside/Aside';

function Wpage({ match }) {
  const [zoomClass, setZoomClass] = useState('showcase-img-sm');
  const [asideHidden, setAsideHidden] = useState(false);

  const onHideClick = () => {
    setAsideHidden(!asideHidden);
    console.log(asideHidden);
  };

  const { wallData, loading, error } = useGetOneWall(match.params.id);
  // console.log(wallData);
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
  const Img = () => {
    if (wallData) {
      return (
        <img
          onClick={onZoom}
          className={`showcase-img ${zoomClass}`}
          src={wallData.path}
          alt={wallData.id}
        />
      );
    }
    return null;
  };
  const Loader = () => {
    if (loading) {
      return (
        <div className="loader">
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      );
    }
    return null;
  };
  const Error = () => {
    if (error) {
      return (
        <div className="Error">
          <p>Error</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="wpage-container">
      <div className={`showcase ${asideHidden ? 'showcase-full' : null}`}>
        {wallData ? <Aside wallData={wallData} onHideClick={onHideClick} asideHidden={asideHidden}/> : null}
        <div className="img-div">
          {Img()}
        </div>
        {Error()}
        {Loader()}
      </div>
    </div>
  );
}

export default withRouter(Wpage);
