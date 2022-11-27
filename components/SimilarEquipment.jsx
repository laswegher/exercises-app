import React, { useEffect, useState } from 'react';
import { fetchData, options } from '../utils/FETCH_DATA';

import HorizontalSlider from './HorizontalSlider';

const SimilarEquipment = ({ equipment, name }) => {
  // Similar Equipment
  const [similarEquipment, setSimilarEquipment] = useState([]);

  //Similar TargetsimilarTarget
  useEffect(() => {
    const getApiData = async () => {
      const getSimilarEquipment = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
        options
      );
      setSimilarEquipment(getSimilarEquipment.slice(0, 9));
    };
    getApiData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="my-10">
        <h4 className="mb-5">
          Similar Muscle Equipment for{' '}
          <span className="text-red-500 border-b-2 border-black capitalize italic">
            ${name}
          </span>
        </h4>

        <HorizontalSlider
          format
          targetId="equipment"
          data={similarEquipment}
        />
      </div>
    </div>
  );
};

export default SimilarEquipment;
