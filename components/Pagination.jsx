import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ExerciseContext from '../context/ExerciseProvider';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
              window.scrollTo({ top: 1500 });
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: 'spring',
              stiffness: 500,
            }}
          >
            <FaLongArrowAltLeft
              size={30}
              className="text-red-500"
            />
          </motion.div>
        )}

        <p
          className="
          border flex items-center justify-center w-10 h-10 rounded-full
          cursor-pointer font-bold bg-red-500 text-white"
        >
          {currentIndex}
        </p>

        {/* Right Arrow*/}
        {currentIndex !== totalPages && (
          <motion.div
            onClick={() => {
              incriment();
              window.scrollTo({ top: 1500 });
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: 'spring',
              stiffness: 500,
            }}
          >
            <FaLongArrowAltRight
              size={30}
              className="text-red-500"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
