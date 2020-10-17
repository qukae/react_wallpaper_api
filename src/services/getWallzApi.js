import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetWallz(q, categories, colors, resolutions, atleast, ratios, sorting, page, getWallz) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setData([]);
    setHasMore(true);
  }, [getWallz]);

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
      url: 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search',
      params: {
        q, categories, colors, resolutions, atleast, ratios, sorting, page,
      },
      cancelToken: new axios.CancelToken((c) => { cancel = c; return c; }),
    }).then((res) => {
      setData(res.data.data);
      // console.log(res);
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
  }, [page, getWallz, hasMore]);

  return {
    loading, error, hasMore, data,
  };
}
