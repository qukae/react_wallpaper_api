import React, { useRef, useCallback, useContext } from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';
import StateContext from '../app/StateContext';
import DispatchContext from '../app/DispatchContext';
import Loader from '../utils/Loader';
import Error from '../utils/Error';

export default function Gallery({ loading, error, hasMore }) {
  const { wallzData } = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const observer = useRef();

  // infinite scroll
  const lastWallzRef = useCallback((node) => {
    if (loading) return;
    if (!hasMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        appDispatch({ type: 'page', payload: 1 });
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]); // eslint-disable-line

  // creating gallery images
  const CreateEl = () => wallzData.map((item, index) => {
    // this if takes last element in array of images and adds ref for IntersectionObserver
    if (wallzData.length === index + 1) {
      return (
        <Link to={`/w/${item.id}`} key={item.id}>
          <figure className="container-img" ref={lastWallzRef}>
            <img src={item.thumbs.small} className="gallery-img" alt={item.id} />
          </figure>
        </Link>
      );
    }
    return (
      <Link to={`/w/${item.id}`} key={item.id}>
        <figure className="container-img">
          <img src={item.thumbs.small} className="gallery-img" alt={item.id} />
        </figure>
      </Link>
    );
  });

  return (
    <>
      <div className="gallery">
        {CreateEl()}
        {loading ? Loader() : null}
        {error ? Error() : null}
      </div>
    </>
  );
}
