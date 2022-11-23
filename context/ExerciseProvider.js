import { createContext, useState } from 'react';

const ExerciseContext = createContext();

import React from 'react';

export const ExerciseProvider = ({ children }) => {
  // User search data state
  const [searchData, setSearchData] = useState('');

  //Filtered exercises data state
  const [exercises, setExercises] = useState([]);

  //Selected body part state
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');

  console.log(exercises);

  return (
    <ExerciseContext.Provider
      value={{
        searchData,
        setSearchData,
        exercises,
        setExercises,
        selectedBodyPart,
        setSelectedBodyPart,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContext;
