import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon from '../public/assets/icons/gym.png';
import ExerciseContext from '../context/ExerciseProvider';
import Link from 'next/link';

const BodyPartCard = ({ item }) => {
  const { selectedBodyPart, setSelectedBodyPart } =
    useContext(ExerciseContext);

  return (
    <motion.div
      style={{
        borderTop: `${
          selectedBodyPart === item ? '3px solid red' : 'none'
        }`,
      }}
      className="flex-1 w-[200px] h-40 sm:h-44 md:h-52 flex flex-col items-center justify-center shadow-lg  bg-white m-4"
    >
      {/* Icons */}
      <div className="w-10 h-10">
        <Image
          draggable="false"
          src={icon}
          alt={item}
          className="w-full  h-full object-cover"
        />
      </div>
      {/* Title */}
      <Link href="/#exercises">
        <motion.p
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
          onClick={() => {
            setSelectedBodyPart(item);
            window.scrollTo({ top: 1550 });
          }}
          className="border-b-2 border-red-600 text-center font-bold mt-10 text-[#333] capitalize cursor-pointer p-5 "
        >
          {item}
        </motion.p>
      </Link>
    </motion.div>
  );
};

export default BodyPartCard;
