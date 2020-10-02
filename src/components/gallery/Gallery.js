import React, { useRef, useCallback } from 'react';
import './Gallery.css';

export default function Gallery({
  loading, error, hasMore, onPageScroll, wallzData,
}) {
  const observer = useRef();
  const lastWallzRef = useCallback((node) => {
    if (loading) return;
    if (!hasMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onPageScroll();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);
  // console.log('gallery ', wallzData);
  const CreateEl = () => wallzData.map((item, index) => {
    if (wallzData.length === index + 1) {
      return (
        <figure className="container-img" ref={lastWallzRef} key={item.id}>
          <img src={item.thumbs.large} className="gallery-img" alt={item.id} />
        </figure>
      );
    }
    return (
      <figure className="container-img" key={item.id}>
        <img src={item.thumbs.large} className="gallery-img" alt={item.id} />
      </figure>
    );
  });

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
    <>
      <div className="gallery">
        {CreateEl()}
        {Loader()}
        {Error()}
      </div>
    </>
  );
}
