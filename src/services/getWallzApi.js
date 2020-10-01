/* eslint-disable no-return-assign */
/* eslint-disable no-useless-return */
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetWallz(q, categories, colors, sorting, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [wallz, setWallz] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setWallz([]);
  }, [q, categories, colors, sorting]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search',
      params: {
        q, categories, colors, sorting, page,
      },
      cancelToken: new axios.CancelToken((c) => cancel = c),
    }).then((res) => {
      setWallz((prevWallz) => [...prevWallz, ...res.data.data.map((w) => w.thumbs.large)]);
    }).catch((e) => {
      if (axios.isCancel(e)) return;
      setError(true);
    });
    return () => cancel();
  }, [q, categories, colors, sorting, page]);

  return {
    loading, error, wallz, hasMore,
  };
}
