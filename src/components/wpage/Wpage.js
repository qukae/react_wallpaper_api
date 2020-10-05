/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './Wpage.css';
import { withRouter } from 'react-router-dom';
import useGetOneWall from '../../services/getOneWallApi';

function Wpage({ match }) {
  const [zoomClass, setZoomClass] = useState('showcase-img-sm');

  const { wallData, loading, error } = useGetOneWall(match.params.id);
  console.log(wallData);
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
          alt="asd"
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
    <div className="showcase">
      <div className="img-div">
        {Img()}
        {Loader()}
        {Error()}
      </div>
    </div>
  );
}

export default withRouter(Wpage);
