import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './Button';

const ExerciseCard = (props) => {
  console.log(props.format);
  return (
    <div
      className={`${
        props.format ? 'w-[300px]' : ' w-full'
      } border max-w-[300px] h-full mx-auto`}
    >
      {/* Image */}

      <Image
        draggable="false"
        src={props.gifUrl}
        alt={props.name}
        width={300}
        height={200}
        className=" object-cover border-t-4 border-red-500"
      />
      {/* Content */}
      <div className={`    m-3 capitalize text-[#444]`}>
        <p className="font-bold">{props.name}</p>
        <div className="flex gap-3 my-2">
          <p className="bg-green-400 text-xs font-bold text-white max-w-max  rounded-full p-2">
            {props.equipment}
          </p>
          <p className="bg-yellow-400 text-xs font-bold text-white max-w-max  rounded-full p-2">
            {props.target}
          </p>
        </div>
        <Link
          draggable="false"
          href={{ pathname: 'detail', query: { id: props.id } }}
        >
          <Button className="bg-transparent text-red-600 border-b-2 border-red-600">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExerciseCard;
