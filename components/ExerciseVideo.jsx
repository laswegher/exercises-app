import React, { useEffect, useState } from 'react';
import { fetchData, youtube_options } from '../utils/FETCH_DATA';
import Loader from './Loader';
import VideoCard from './VideoCard';

const ExerciseVideo = ({ name }) => {
  //Videos State
  const [videos, setVideos] = useState([]);

  console.log(videos);

  useEffect(() => {
    const getApiData = async () => {
      const getVideos = await fetchData(
        ` https://youtube-search-and-download.p.rapidapi.com/search?query=${name}`,
        youtube_options
      );
      setVideos(getVideos.contents);
    };
    getApiData();
  }, [name]);
  //Related Videos

  return (
    <div className="my-24">
      <h4 className="mb-7 max-w-max  border-b-2 border-red-500">
        Related '
        <span className="capitalize italic border-t-2 border-black text-red-600 pt-2">
          {name}
        </span>
        ' Youtube Videos
      </h4>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {videos.slice(0, 9).map((video) => {
          return <VideoCard {...video} />;
        })}
      </div>
    </div>
  );
};

export default ExerciseVideo;
