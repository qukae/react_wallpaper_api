/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './Wpage.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import useGetOneWall from '../../services/getOneWallApi';
import Aside from './aside/Aside';
import Loader from '../utils/Loader';
import Error from '../utils/Error';

function Wpage({ match }) {
  const [zoomClass, setZoomClass] = useState('showcase-img-sm');
  const [asideHidden, setAsideHidden] = useState(false);

  const onHideClick = () => {
    setAsideHidden(!asideHidden);
  };

  // custom hook useGetOneWall gets one wallpaper data from server using axios and image id
  const { wallData, loading, error } = useGetOneWall(match.params.id);

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

  return (
    <div className="wpage-container">
      <div className={`showcase ${asideHidden ? 'showcase-full' : ''}`}>
        {wallData ? (
          <Aside
            wallData={wallData}
            onHideClick={onHideClick}
            asideHidden={asideHidden}
          />
        ) : null}
        <div className="img-div">
          {Img()}
          <button
            type="button"
            className="btn-hide"
            onClick={onHideClick}
          >
            <FontAwesomeIcon className={asideHidden ? 'btn-hide-ico-right' : 'btn-hide-ico-left'} icon={faChevronLeft} />
          </button>
        </div>
        {error ? Error() : null}
        {loading ? Loader() : null}
      </div>
    </div>
  );
}

export default withRouter(Wpage);
