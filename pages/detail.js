import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchData, options } from '../utils/FETCH_DATA';

import DetailHero from '../components/DetailHero';
import SimilarExercises from '../components/SimilarEquipment';
import ExerciseVideo from '../components/ExerciseVideo';
import Loader from '../components/Loader';
import SimilarTarget from '../components/SimilarTarget';
import SimilarEquipment from '../components/SimilarEquipment';

const detail = () => {
  //Taking id from url
  const router = useRouter();
  const { id } = router.query;

  //Selected exercise State
  const [selectedExercise, setSelectedExercise] = useState({});

  // Similar Target
  const [similarTarget, setSimilarTarget] = useState([]);

  //Getting api data and setting to state
  useEffect(() => {
    const getApiData = async () => {
      // Exercise Detail Api
      const getselectedExercise = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      setSelectedExercise(getselectedExercise);
    };

    getApiData();
  }, [id]);

  console.log(selectedExercise.name);

  return (
    <div className="p-3">
      <div className="max-w-5xl mx-auto">
        <DetailHero selectedExercise={selectedExercise} />

        {selectedExercise.name ? (
          <ExerciseVideo name={selectedExercise.name} />
        ) : (
          <Loader />
        )}

        {selectedExercise.target ? (
          <SimilarEquipment
            name={selectedExercise.name}
            target={selectedExercise.target}
            equipment={selectedExercise.equipment}
          />
        ) : (
          <Loader />
        )}

        {selectedExercise.target ? (
          <SimilarTarget
            name={selectedExercise.name}
            target={selectedExercise.target}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default detail;
