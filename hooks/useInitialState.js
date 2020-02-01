import { useState, useEffect } from 'react';

const useInitialState = (setIsLoading, API) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setVideos(data);
      });
  }, []);
  return videos;
};

export default useInitialState;
