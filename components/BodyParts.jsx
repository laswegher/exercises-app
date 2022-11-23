import React from 'react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi';

import {
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import BodyPartCard from './BodyPartCard';

const BodyParts = () => {
  // Array of Body parts
  const bodyParts = [
    'all',
    'back',
    'cardio',
    'chest',
    'lower arms',
    'lower legs',
    'neck',
    'shoulders',
    'upper arms',
    'upper legs',
    'waist',
  ];

  {
    /* Left Arrow Function */
  }
  function LeftArrow() {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', striffness: 600 }}
        className="text-3xl sm:text-4xl cursor-pointer absolute bottom-2"
        onClick={() => scrollPrev()}
      >
        <HiArrowNarrowLeft />
      </motion.div>
    );
  }

  {
    /* Right Arrow Function */
  }

  function RightArrow() {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', striffness: 600 }}
        className="text-3xl sm:text-4xl cursor-pointer absolute bottom-2 right-8"
        onClick={() => scrollNext()}
      >
        <HiArrowNarrowRight />
      </motion.div>
    );
  }

  return (
    <div className="relative text-red-500  px-8 py-10 shadow-xl">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {bodyParts.map((item) => {
          return (
            <div
              itemID={item.id || item}
              title={item.id || item}
              key={item.id || item}
            >
              <BodyPartCard item={item} />
            </div>
          );
        })}
      </ScrollMenu>
    </div>
  );
};

export default BodyParts;
