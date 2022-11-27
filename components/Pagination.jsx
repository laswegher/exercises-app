import React, { useContext } from 'react';
import ExerciseContext from '../context/ExerciseProvider';
import { motion } from 'framer-motion';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from 'react-icons/fa';

const Pagination = () => {
  const { exercises, setCurrentIndex, currentIndex, amountItems } =
    useContext(ExerciseContext);

  const totalPages = Math.ceil(exercises.length / amountItems);

  const incriment = () => {
    if (currentIndex < totalPages) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const decriment = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="flex gap-5 items-center justify-center mt-5">
      <div className="flex items-center gap-10">
        {/* Left Arrow*/}
        {currentIndex !== 1 && (
          <motion.div
            onClick={() => {
              decriment();
              window.scrollTo({ top: 1300 });
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: 'spring',
              stiffness: 500,
            }}
            className="p-2"
          >
            <FaLongArrowAltLeft
              size={20}
              className="text-red-500"
            />
          </motion.div>
        )}

        <p
          className="
          border flex items-center justify-center w-8 h-8 rounded-full
          cursor-pointer font-bold bg-red-500 text-white"
        >
          {currentIndex}
        </p>

        {/* Right Arrow*/}
        {currentIndex !== totalPages && (
          <motion.div
            onClick={() => {
              incriment();
              window.scrollTo({ top: 1450 });
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: 'spring',
              stiffness: 500,
            }}
            className="p-2"
          >
            <FaLongArrowAltRight
              size={20}
              className="text-red-500"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
