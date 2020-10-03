/* eslint-disable camelcase */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';
import useGetWallz from '../../services/getWallzApi';
import Wpage from '../wpage/Wpage';

export default function App() {
  const [app_q, setQ] = useState();
  const [app_categories, setCategories] = useState([1, 0, 0]);
  const [app_colors, setColors] = useState(null);
  const [app_sorting, setSorting] = useState('date_added');
  const [app_page, setPage] = useState(1);
  const [app_wallzData, setWallzData] = useState([]);

  const {
    hasMore,
    loading,
    error,
    data,
  } = useGetWallz(app_q, app_categories, app_colors, app_sorting, app_page);

  useEffect(() => {
    setWallzData((prevWallzData) => [...prevWallzData, ...data]);
  }, [data]);

  const onSearch = (q) => {
    if (q === app_q) {
      return;
    }
    setWallzData([]);
    setQ(q);
    setPage(1);
  };
  const onFilterSubmit = (categories, colors) => {
    if ((categories && colors) === (app_categories && app_colors)) {
      return;
    }
    setWallzData([]);
    setColors(colors);
    setCategories(categories);
    setPage(1);
  };
  const onNavClick = (sorting) => {
    if (sorting === app_sorting) {
      return;
    }
    setWallzData([]);
    setSorting(sorting);
    setPage(1);
  };
  const onPageScroll = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Router>
        {/* {console.log('app_render')} */}
        <Route
          path="/"
          render={() => (
            <>
              <MainHeader onSearch={(q) => { onSearch(q); }} onNavClick={(sorting) => { onNavClick(sorting); }} />
              <MainFilter onSubmit={(categories, color) => { onFilterSubmit(categories, color); }} />
            </>
          )}
        />
        <Route
          path="/w/:id"
          render={() => (
            <Wpage wallzData={app_wallzData} />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <Gallery page={app_page} loading={loading} error={error} hasMore={hasMore} onPageScroll={onPageScroll} wallzData={app_wallzData} />
          )}
        />

      </Router>
    </>
  );
}
