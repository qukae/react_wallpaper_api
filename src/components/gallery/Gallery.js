import React, { useRef, useCallback } from 'react';
import './Gallery.css';

export default function Gallery({
  wallz, loading, error, hasMore, onPageScroll,
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

  const CreateEl = () => wallz.map((item, index) => {
    if (wallz.length === index + 1) {
      return (
        <figure className="container-img" ref={lastWallzRef} key={item}>
          <img src={item} className="gallery-img" alt={item} />
        </figure>
      );
    }
    return (
      <figure className="container-img" key={item}>
        <img src={item} className="gallery-img" alt={item} />
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
