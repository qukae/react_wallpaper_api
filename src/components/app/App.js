/* eslint-disable max-len */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';
import useGetWallz from '../../services/getWallzApi';
import Wpage from '../wpage/Wpage';

export default function App() {
  const [q, setQ] = useState();
  const [categories, setCategories] = useState([1, 0, 0]);
  const [colors, setColors] = useState(null);
  const [sorting, setSorting] = useState('date_added');
  const [page, setPage] = useState(1);
  const [wallzData, setWallzData] = useState([]);

  const {
    hasMore,
    loading,
    error,
    data,
  } = useGetWallz(q, categories, colors, sorting, page);

  useEffect(() => {
    setWallzData((prevWallzData) => [...prevWallzData, ...data]);
  }, [data]);

  const onSearch = (e) => {
    setWallzData([]);
    setQ(e);
    setPage(1);
  };
  const onFilterSubmit = (categories, colors) => {
    setWallzData([]);
    setColors(colors);
    setCategories(categories);
    setPage(1);
  };
  const onNavClick = (sorting) => {
    setWallzData([]);
    setSorting(sorting);
    setPage(1);
  };
  const onPageScroll = () => {
    setPage((prevPage) => prevPage + 1);
  };
  function Home() {
    return (
      <div>HOME</div>
    );
  }
  return (
    <>
      <Router>
        {/* {console.log('app_render')} */}
        <Route
          path="/"
          render={() => (
            <>
              <MainHeader onSearch={(e) => { onSearch(e); }} onNavClick={(sorting) => { onNavClick(sorting); }} />
              <MainFilter onSubmit={(categories, color) => { onFilterSubmit(categories, color); }} />
            </>
          )}
        />
        <Route
          path="/w/:id"
          component={Wpage}
        />
        <Route
          path="/"
          exact
          render={() => (
            <Gallery page={page} loading={loading} error={error} hasMore={hasMore} onPageScroll={onPageScroll} wallzData={wallzData} />
          )}
        />

      </Router>
    </>
  );
}
