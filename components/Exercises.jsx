import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ExerciseContext from '../context/ExerciseProvider';
import { options, fetchData } from '../utils/FETCH_DATA';
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';

const Exercises = () => {
  const {
    selectedBodyPart,
    exercises,
    setExercises,
    currentIndex,
    amountItems,
  } = useContext(ExerciseContext);

  // Taking data from api
  useEffect(() => {
    const getApiData = async () => {
      const exercisesData = await fetchData(
        `
        ${
          selectedBodyPart === 'all'
            ? `https://exercisedb.p.rapidapi.com/exercises`
            : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`
        }
        
        `,
        options
      );
      localStorage.setItem('data', JSON.stringify(exercisesData));
      setExercises(exercisesData);
    };

    setExercises(JSON.parse(localStorage.getItem('data')));
    //uncomment after
    // getApiData();
  }, [selectedBodyPart]);

  // Slicing Exercises arry useing .slice() method
  const lastIndex = currentIndex * amountItems;
  const firstIndex = lastIndex - amountItems;
  const showenItems = exercises.slice(firstIndex, lastIndex);

  return (
    <div id="exercises mt-10">
      <div className="max-w-5xl mx-auto my-28 px-3 sm:px-10">
        <h3 className="mb-5">Showing Results</h3>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {showenItems.map((exercise, i) => {
            return (
              <div key={i}>
                <ExerciseCard {...exercise} />
              </div>
            );
          })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Exercises;
