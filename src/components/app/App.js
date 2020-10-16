/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';

import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

import Gallery from '../gallery/Gallery';
import MainHeader from '../mainHeader/MainHeader';
import MainFilter from '../mainFilter/MainFilter';
import useGetWallz from '../../services/getWallzApi';
import Wpage from '../wpage/Wpage';

export default function App() {
  function appReducer(draft, action) {
    switch (action.type) {
      case 'search_q':
        if (draft.search_q === action.payload) {
          return;
        }
        draft.wallzData = [];
        draft.page = 1;
        draft.search_q = action.payload;
        break;

      case 'categories':
        if (draft.categories.join('') === action.payload.join('')) {
          return;
        }
        draft.wallzData = [];
        draft.page = 1;
        draft.categories = action.payload;
        break;

      case 'colors':
        if (draft.colors === action.payload) {
          return;
        }
        draft.wallzData = [];
        draft.page = 1;
        draft.colors = action.payload;
        break;

      case 'sorting':
        if (draft.sorting === action.payload) {
          return;
        }
        draft.wallzData = [];
        draft.page = 1;
        draft.sorting = action.payload;
        break;

      case 'page':
        draft.page += action.payload;
        break;

      case 'wallzData':
        draft.wallzData = [...draft.wallzData, ...action.payload];
        break;

      default:
        break;
    }
  }
  const initialState = {
    search_q: '',
    categories: [1, 1, 0],
    colors: '',
    sorting: 'date_added',
    page: 1,
    wallzData: [],
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  // Custom hook useGetWallz gets wallpapers data as 'data' from server using axios
  const {
    hasMore,
    loading,
    error,
    data,
  } = useGetWallz(state.search_q, state.categories, state.colors, state.sorting, state.page);

  useEffect(() => {
    dispatch({ type: 'wallzData', payload: data });
  }, [data]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <Route
            path="/"
            render={() => (
              <>
                <MainHeader />
                <MainFilter />
              </>
            )}
          />
          <Route
            path="/w/:id"
            render={() => (
              <Wpage />
            )}
          />
          <Route
            path="/"
            exact
            render={() => (
              <Gallery loading={loading} error={error} hasMore={hasMore} />
            )}
          />

        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
