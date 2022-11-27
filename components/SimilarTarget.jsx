import React, { useEffect, useState } from 'react';
import { fetchData, options } from '../utils/FETCH_DATA';
import HorizontalSlider from './HorizontalSlider';

const SimilarTarget = ({ target, name }) => {
  // Similar Target
  const [similarTarget, setSimilarTarget] = useState([]);
  console.log(similarTarget);
  useEffect(() => {
    const getApiData = async () => {
      const getSimilarTarget = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
        options
      );
      setSimilarTarget(getSimilarTarget.slice(0, 9));
    };
    getApiData();
  }, [target]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="my-10">
        <h4 className="mb-5">
          Similar Target Muscle for{' '}
          <span className="text-red-500 border-b-2 border-black capitalize italic">
            ${name}
          </span>
        </h4>
        <div>
          <HorizontalSlider
            format
            targetId="target"
            data={similarTarget}
          />
        </div>
      </div>
    </div>
  );
};

export default SimilarTarget;
