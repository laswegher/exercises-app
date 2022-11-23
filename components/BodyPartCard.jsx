import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon from '../public/assets/icons/gym.png';
import { useContext } from 'react';
import ExerciseContext from '../context/ExerciseProvider';

const BodyPartCard = ({ item }) => {
  const { selectedBodyPart, setSelectedBodyPart } =
    useContext(ExerciseContext);

  return (
    <motion.div
      style={{
        borderTop: `${
          selectedBodyPart === item ? '3px solid red' : ''
        }`,
      }}
      onClick={() => {
        setSelectedBodyPart(item);
        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: 'smooth',
        });
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 500 }}
      className="w-[200px] sm:w-[250px] md:w-[326px] h-40 sm:h-44 md:h-52 flex flex-col items-center justify-center shadow-lg cursor-pointer bg-white  m-4"
    >
      {/* Icons */}
      <div className="w-10 h-10">
        <Image
          src={icon}
          alt={item}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Title */}
      <p className="text-center font-bold mt-10 text-[#333] capitalize">
        {item}
      </p>
    </motion.div>
  );
};

export default BodyPartCard;
