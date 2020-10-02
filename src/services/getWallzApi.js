import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetWallz(q, categories, colors, sorting, page) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [wallz, setWallz] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setWallz([]);
  }, [q, categories, colors, sorting]);

  useEffect(() => {
    if (!hasMore) {
      setLoading(false);
      return;
    }
    console.log('request');
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search',
      params: {
        q, categories, colors, sorting, page,
      },
      cancelToken: new axios.CancelToken((c) => { cancel = c; return c; }),
    }).then((res) => {
      console.log(res);
      setWallz((prevWallz) => [...prevWallz, ...res.data.data.map((w) => w.thumbs.large)]);
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
  }, [q, categories, colors, sorting, page, hasMore]);

  return {
    loading, error, wallz, hasMore,
  };
}
