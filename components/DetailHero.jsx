import React from 'react';
import Image from 'next/image';

// Images
import bodyPartImages from '../public/assets/icons/body-part.png';
import equipmentImages from '../public/assets/icons/equipment.png';
import targetImages from '../public/assets/icons/target.png';

//Components
import DetailCard from './DetailCard';

const DetailHero = ({ selectedExercise }) => {
  const { gifUrl, name, bodyPart, equipment, target } =
    selectedExercise;

  //Detail card items
  const detailCardArray = [
    { title: bodyPart, image: bodyPartImages },
    { title: equipment, image: equipmentImages },
    { title: target, image: targetImages },
  ];

  return (
    <div className="flex flex-col-reverse mt-10 sm:flex-row  items-center justify-center">
      {/* Image */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={gifUrl}
          alt="/"
          width={400}
          height={400}
        />
      </div>
      {/* Content */}
      <div className="flex-1 flex items-center flex-col justify-around">
        {/* Title */}
        <h3 className="capitalize">{name}</h3>

        {/* Text */}
        <p className="max-w-[400px] mt-5 mb-3">
          Exercises keep you strong{' '}
          <span className="italic font-medium border-b-2 border-red-400">
            {name}
          </span>{' '}
          is one of the best exercises to target your{' '}
          <span className="italic font-medium border-b-2 border-red-400">
            {target}
          </span>{' '}
          It will help you improve your mood and gain energy.
        </p>

        {/* Details */}
        <div>
          {detailCardArray.map((item, i) => {
            return (
              <DetailCard
                key={i}
                {...item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
