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
import useViewport from '../utils/useViewport';
import Wpage from '../wpage/Wpage';

export default function App() {
  function appReducer(draft, action) {
    switch (action.type) {
      case 'search_q':
        if (draft.search_q === action.payload) {
          return;
        }
        draft.search_q = action.payload;
        break;

      case 'categories':
        if (draft.categories[action.payload]) {
          draft.categories[action.payload] = 0;
        } else {
          draft.categories[action.payload] = 1;
        }
        break;

      case 'colors':
        if (draft.colors === action.payload) {
          return;
        }
        draft.colors = action.payload;
        break;

      case 'resolutions':
        if (draft.resolutions === action.payload) {
          return;
        }
        draft.resolutions = action.payload;
        break;

      case 'atleast':
        if (draft.atleast === action.payload) {
          return;
        }
        draft.atleast = action.payload;
        break;

      case 'ratios':
        if (draft.ratios === action.payload) {
          return;
        }
        draft.ratios = action.payload;
        break;

      case 'order':
        draft.order = action.payload;
        break;

      case 'sorting':
        if (draft.sorting === action.payload) {
          return;
        }
        draft.sorting = action.payload;
        break;

      case 'page':
        draft.page += action.payload;
        break;

      case 'showLists':
        draft.search_q = '';
        draft.categories = [1, 1, 0];
        draft.colors = '';
        draft.resolutions = '';
        draft.atleast = '';
        draft.ratios = '';
        draft.order = 'desc';
        break;

      case 'wallzData':
        if (draft.page === 1) {
          draft.wallzData = action.payload;
          return;
        }
        draft.wallzData = [...draft.wallzData, ...action.payload];
        break;

      case 'getWallz':
        draft.page = 1;
        draft.wallzData = [];
        draft.getWallz = !draft.getWallz;
        break;

      default:
        break;
    }
  }
  const initialState = {
    search_q: '',
    categories: [1, 1, 0],
    colors: '',
    resolutions: '',
    atleast: '',
    ratios: '',
    order: 'desc',
    sorting: 'date_added',
    page: 1,
    wallzData: [],
    getWallz: 0,
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  // Custom hook useGetWallz gets wallpapers data as 'data' from server using axios
  const {
    hasMore,
    loading,
    error,
    data,
  } = useGetWallz(state.search_q, state.categories, state.colors, state.resolutions, state.atleast, state.ratios, state.order, state.sorting, state.page, state.getWallz);

  useEffect(() => {
    dispatch({ type: 'wallzData', payload: data });
  }, [data]); // eslint-disable-line

  const { width } = useViewport();

  const breakpoint = 690;

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <Route
            path="/"
            render={() => (
              <>
                <MainHeader />
                {width > breakpoint ? <MainFilter /> : null}
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
