import React, { useEffect, useRef, useState } from 'react';

import BodyPartCard from './BodyPartCard';
import ExerciseCard from './ExerciseCard';

import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from 'react-icons/fa';

const HorizontalSlider = ({
  data,
  isBodyParts,
  format,
  targetId,
}) => {
  const [width, setWidth] = useState(0);
  const caurosel = useRef();
  console.log(targetId);

  useEffect(() => {
    setWidth(caurosel.current.offsetWidth - 60);
    console.log(caurosel);
  }, []);

  const left = (e) => {
    let left = document.getElementById(
      isBodyParts ? 'bodyID' : targetId
    );
    left.scrollBy(-width, 0);
  };
  const right = (e) => {
    let right = document.getElementById(
      isBodyParts ? 'bodyID' : targetId
    );
    right.scrollBy(width, 0);
  };

  return (
    <div className="relative ">
      <div
        ref={caurosel}
        className="flex flex-row overflow-x-scroll"
        id={isBodyParts ? 'bodyID' : targetId}
      >
        {data?.map((item) => {
          return (
            <div
              itemID={item.id || item}
              title={item.id || item}
              key={item.id || item}
            >
              {isBodyParts ? (
                <BodyPartCard item={item} />
              ) : (
                <ExerciseCard
                  format={format}
                  {...item}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex px-4 items-center justify-between">
        {/* Left */}
        <div
          className="text-red-500 p-2 cursor-pointer"
          onClick={left}
        >
          <FaLongArrowAltLeft size={25} />
        </div>

        {/* Right */}
        <div
          className="text-red-500 p-2 cursor-pointer"
          onClick={right}
        >
          <FaLongArrowAltRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
