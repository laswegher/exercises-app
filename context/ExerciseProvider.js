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

  //Current page state
  const [currentIndex, setCurrentIndex] = useState(1);

  //Items amount perpage
  const [amountItems, setAmountItems] = useState(9);

  return (
    <ExerciseContext.Provider
      value={{
        searchData,
        setSearchData,
        exercises,
        setExercises,
        selectedBodyPart,
        setSelectedBodyPart,
        currentIndex,
        setCurrentIndex,
        amountItems,
        setAmountItems,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContext;
