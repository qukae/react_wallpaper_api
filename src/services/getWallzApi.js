/* eslint-disable consistent-return */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import axios from 'axios';

// custom hook taking filter data and returning array of images and some status
export default function useGetWallz(q, categories, colors, resolutions, atleast, ratios, order, sorting, page, getWallz) {
  const [loading, setLoading] = useState(true); // show loader when fetching
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true); // when server don't have more images it stops sending requests

  useEffect(() => {
    setData([]);
    setHasMore(true);
  }, [getWallz]); // clear images array

  useEffect(() => {
    if (!hasMore) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://cors-qukae.herokuapp.com/https://wallhaven.cc/api/v1/search', // i run cors proxy for this app
      params: {
        q, categories, colors, resolutions, atleast, ratios, order, sorting, page,
      },
      cancelToken: new axios.CancelToken((c) => { cancel = c; return c; }),
    }).then((res) => {
      setData(res.data.data);
      setHasMore(res.data.data.length > 0);

      setLoading(false);
    }).catch((e) => {
      if (axios.isCancel(e)) {
        return;
      }
      setError(true);
      setLoading(false);
    });
    return () => cancel();
  }, [page, getWallz, hasMore]); // eslint-disable-line

  return {
    loading, error, hasMore, data,
  };
}
