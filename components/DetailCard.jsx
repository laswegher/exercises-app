import Image from 'next/image';
import React from 'react';

const DetailCard = ({ image, title }) => {
  return (
    <div className="capitalize flex items-center gap-5 rounded-l-full  shadow-xl my-2">
      <div className=" p-3 bg-[#fff2db] rounded-full">
        <Image
          className="w-10 h-10"
          src={image}
          alt="/"
        />
      </div>
      <p className="mx-4 font-semibold">{title}</p>
    </div>
  );
};

export default DetailCard;
