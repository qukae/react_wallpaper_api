/* eslint-disable camelcase */
import React from 'react';
import './Aside.css';

export default function Aside({wallData}) {

  const colors = (clrs) => {
    console.log('clr');
    return clrs.map((clr) => (
      <div key={clr} className="clr-item" style={{ backgroundColor: clr }} />
    ));
  };
  const tags = (tgs) => tgs.map((tag) => (
    <div key={tag} className="tag-item">{tag.name}</div>
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
    <aside className="aside-wpage">
      <div className="aside-div">
        <h5 className="resolution">{wallData.resolution}</h5>
        {colors(wallData.colors)}
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
