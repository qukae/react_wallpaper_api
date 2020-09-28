/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../MainFilter.css';

const Categories = ({ categories, onTypeClick }) => {
  const clazz = 'filter-btn-active';

  return (
    <>
      <button
        type="button"
        className={`filter-btn ${categories[0] ? clazz : null}`}
        onClick={() => onTypeClick(0)}
      >
        General
      </button>

      <button
        type="button"
        className={`filter-btn ${categories[1] ? clazz : null}`}
        onClick={() => onTypeClick(1)}
      >
        Anime
      </button>

      <button
        type="button"
        className={`filter-btn ${categories[2] ? clazz : null}`}
        onClick={() => onTypeClick(2)}
      >
        People
      </button>
    </>
  );
};

export default Categories;
