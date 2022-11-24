import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ExerciseCard = (props) => {
  return (
    <Link href={{ pathname: 'exercises', query: { id: props.id } }}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 500 }}
        className="border h-[430px]"
      >
        {/* Image */}
        <Image
          src={props.gifUrl}
          alt={props.name}
          width={300}
          height={300}
          className=" object-cover border-t-4 border-red-500"
        />
        {/* Content */}
        <div className="m-3 capitalize text-[#333]">
          <p className="font-bold">{props.name}</p>
          <p className="">Equipment: {props.equipment}</p>
          <p className="">Target: {props.target}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ExerciseCard;
