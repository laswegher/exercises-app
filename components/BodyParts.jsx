import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BodyPartCard from './BodyPartCard';

const BodyParts = () => {
  const [rightWidth, setRightWidth] = useState(0);
  const caurosel = useRef();

  useEffect(() => {
    setRightWidth(
      caurosel.current.scrollWidth - caurosel.current.offsetWidth
    );
  }, []);

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

  return (
    <motion.div
      ref={caurosel}
      className="overflow-hidden  text-red-500  px-8 py-10 shadow-xl"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -rightWidth }}
        className="flex"
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
      </motion.div>
    </motion.div>
  );
};

export default BodyParts;
