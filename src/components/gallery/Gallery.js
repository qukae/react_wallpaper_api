import React, { useRef, useCallback } from 'react';
import './Gallery.css';

export default function Gallery({
  wallz, loading, hasMore, onPageScroll,
}) {
  const observer = useRef();

  const lastWallzRef = useCallback((node) => {
    // if (loading) return;
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
        <div ref={lastWallzRef} key={item}>
          <img src={item} className="gallery-img" alt={item} />
        </div>
      );
    }
    return (
      <div key={item}>
        <img src={item} className="gallery-img" alt={item} />
      </div>
    );
  });

  return (
    <div className="gallery">
      {CreateEl()}
    </div>
  );
}
