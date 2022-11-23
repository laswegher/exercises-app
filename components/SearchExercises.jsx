import React, { useEffect } from 'react';
import { options, fetchData } from '../utils/FETCH_DATA';
import { useContext } from 'react';
import ExerciseContext from '../context/ExerciseProvider';

import Button from '../components/Button';
import BodyParts from '../components/BodyParts';

const SearchExercises = () => {
  // User search data state
  const { searchData, setSearchData } = useContext(ExerciseContext);

  //Filtered exercises data state
  const { setExercises } = useContext(ExerciseContext);

  // Handling onSubmit event
  const handleSubmit = async (e) => {
    // Avoiding refresh the page
    e.preventDefault();
    // Checking data and fetching
    if (searchData) {
      const data = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        options
      );

      // Filtering using user search data
      const resultData = data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchData) ||
          exercise.bodyPart.toLowerCase().includes(searchData) ||
          exercise.target.toLowerCase().includes(searchData) ||
          exercise.equipment.toLowerCase().includes(searchData)
      );
      // Saving filtered data to useState
      setExercises(resultData);
      // Cleaning search input field
      setSearchData('');
    }
  };

  return (
    <div className="py-10 px-3 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-center mb-5 sm:mb-10">
          Awesome Exercises <br /> You Should Know
        </h3>
        {/* Search Input */}
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center w-full mb-20"
        >
          <input
            className="w-full border border-[#3a1212] px-4 py-1 focus:outline-none rounded-sm"
            type="text"
            value={searchData}
            onChange={(e) =>
              setSearchData(e.target.value.toLowerCase())
            }
            placeholder="Search Exercises"
          />
          <Button
            onClick={handleSubmit}
            className="absolute right-0 p-5 sm:px-10 sm:py-[5px]"
          >
            Search
          </Button>
        </form>

        <BodyParts />
      </div>
    </div>
  );
};

export default SearchExercises;
