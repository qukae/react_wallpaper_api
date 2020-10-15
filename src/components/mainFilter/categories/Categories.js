/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../MainFilter.css';

const Categories = ({ categories, onCategoriesClick }) => {
  const clazz = 'filter-btn-active';

  return (
    <div>
      <button
        type="button"
        className={`filter-btn ${categories[0] ? clazz : null}`}
        onClick={() => onCategoriesClick(0)}
      >
        General
      </button>

      <button
        type="button"
        className={`filter-btn ${categories[1] ? clazz : null}`}
        onClick={() => onCategoriesClick(1)}
      >
        Anime
      </button>

      <button
        type="button"
        className={`filter-btn ${categories[2] ? clazz : null}`}
        onClick={() => onCategoriesClick(2)}
      >
        People
      </button>
    </div>
  );
};

export default Categories;
