import React, { useEffect } from 'react';
import { useContext } from 'react';
import ExerciseContext from '../context/ExerciseProvider';
import { options, fetchData } from '../utils/FETCH_DATA';

const Exercises = () => {
  const { selectedBodyPart } = useContext(ExerciseContext);
  console.log(selectedBodyPart);
  const { exercises, setExercises } = useContext(ExerciseContext);

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

      setExercises(exercisesData);
    };

    // Delete it after
    setExercises([
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1403.gif',
        id: '1403',
        name: 'neck side stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0716.gif',
        id: '0716',
        name: 'side push neck stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1403.gif',
        id: '1403',
        name: 'neck side stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0716.gif',
        id: '0716',
        name: 'side push neck stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1403.gif',
        id: '1403',
        name: 'neck side stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0716.gif',
        id: '0716',
        name: 'side push neck stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1403.gif',
        id: '1403',
        name: 'neck side stretch',
        target: 'levator scapulae',
      },
      {
        bodyPart: 'neck',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0716.gif',
        id: '0716',
        name: 'side push neck stretch',
        target: 'levator scapulae',
      },
    ]);

    //uncomment after
    // getApiData();
  }, [selectedBodyPart]);

  return <div className="max-w-5xl mx-auto my-28">Exercises</div>;
};

export default Exercises;
