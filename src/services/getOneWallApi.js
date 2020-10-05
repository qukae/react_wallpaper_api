import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetOneWall(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [wallData, setWallData] = useState();

  // useEffect(() => setWallData([]));

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/w/${id}`,
      cancelToken: new axios.CancelToken((c) => { cancel = c; return c; }),
    }).then((res) => {
      console.log(res);
      setWallData(res);
      setLoading(false);
    }).catch((e) => {
      if (axios.isCancel(e)) {
        return;
      }
      setError(true);
      setLoading(false);
    });
    return () => cancel();
  }, [id]);

  return {
    loading, error, wallData,
  };
}
