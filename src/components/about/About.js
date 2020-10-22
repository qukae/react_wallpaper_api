import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <p>This app is made using wallhaven.cc API.</p>
      <p>
        You can find source code at
        <a href="https://github.com/qukae/react_wallpaper_api"> GitHub.</a>
      </p>
      <p>This project is made for educational purposes.</p>
      List of some hooks and other stuff used inside app :
      axios, immer, immerReducer, useState, useContext, useEffect, useRef,
      custom hooks, react-router, IntersectionObserver.
    </div>
  );
}
