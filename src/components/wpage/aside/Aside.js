/* eslint-disable camelcase */
import React, {useContext} from 'react';
import DispatchContext from '../../app/DispatchContext';
import './Aside.css';

export default function Aside({wallData, onHideClick, asideHidden}) {

  const colors = (clrs) => {
    return clrs.map((clr) => (
      <div key={clr} className="clr-item" style={{ backgroundColor: clr }} />
    ));
  };
  const tags = (tgs) => tgs.map((tag) => (
    <div key={tag.name} className="tag-item">{tag.name}</div>
  ));

  const properties = (wllData) => {
    const {
      uploader, created_at, category, file_size, views, favorites, file_type,
    } = wllData;
    return (
      <dl className="prop-dl">
        <div className="prop-left">
          <dd className="prop-dd">Uploader</dd>
          <dd className="prop-dd">Date</dd>
          <dd className="prop-dd">Category</dd>
          <dd className="prop-dd">Size</dd>
          <dd className="prop-dd">Views</dd>
          <dd className="prop-dd">Favorites</dd>
          <dd className="prop-dd">Type</dd>
        </div>
        <div className="prop-right">
          <dt className="prop-dt">
            <img className="prop-img" src={uploader.avatar.['20px']} alt="avatar"/>
            <span>{uploader.username}</span>
          </dt>
          <dt className="prop-dt">{created_at}</dt>
          <dt className="prop-dt">{category}</dt>
          <dt className="prop-dt">{file_size/1000} Kb</dt>
          <dt className="prop-dt">{views}</dt>
          <dt className="prop-dt">{favorites}</dt>
          <dt className="prop-dt">{file_type}</dt>
        </div>
      </dl>
    );
  };

  return (
    <aside className={`aside-wpage ${asideHidden ? 'aside-wpage-hidden' : null}`}>
      <div className="aside-div">
        <button
          className="btn-nav btn-nav-li btn-hide"
          onClick={onHideClick}
        >
          hide
        </button>
        <h5 className="resolution">{wallData.resolution}</h5>
          <div className="colors-container">
          {colors(wallData.colors)}
          </div>
        <h5>TAGS</h5>
        <div className="tags-container">
          {tags(wallData.tags)}
        </div>
        <h5>PROPERTIES</h5>
        <div className="properties-container">
          {properties(wallData)}
        </div>
      </div>
    </aside>
  );
}
