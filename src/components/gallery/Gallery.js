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

  return (
    <>
      <div className="gallery">
        {CreateEl()}
      </div>
      <div className="loader">
        {loading}
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
      <div>{error && 'Error'}</div>
    </>
  );
}
