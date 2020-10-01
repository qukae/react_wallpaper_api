/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';
import getWallz from '../../services/getWallzApi';

export default function App() {
  const [q, setQ] = useState('');
  const [categories, setCategories] = useState([1, 0, 0]);
  const [colors, setColors] = useState(null);
  const [sorting, setSorting] = useState('date_added');
  const [page, setPage] = useState(1);

  const {
    wallz,
    hasMore,
    loading,
    error,
  } = getWallz(q, categories, colors, sorting, page);

  const onSearch = (e) => {
    setQ(e);
    setPage(1);
  };
  const onFilterSubmit = (categories, colors) => {
    setColors(colors);
    setCategories(categories);
    setPage(1);
  };
  const onNavClick = (sorting) => {
    setSorting(sorting);
    setPage(1);
  };
  const onPageScroll = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {/* {console.log('app_render')} */}
      <MainHeader onSearch={(e) => { onSearch(e); }} onNavClick={(sorting) => { onNavClick(sorting); }} />
      <MainFilter onSubmit={(categories, color) => { onFilterSubmit(categories, color); }} />
      <Gallery wallz={wallz} page={page} loading={loading} error={error} hasMore={hasMore} onPageScroll={onPageScroll} />
    </>
  );
}
