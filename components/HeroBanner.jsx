import Image from 'next/image';
import React from 'react';
import Button from './Button';
import heroImage from '../public/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <div className="px-3 sm:px-10">
      {/* Container */}
      <div className="relative h-full max-w-5xl mx-auto">
        <h4 className="text-red-500 md:pt-10 lg:pt-20">
          Fitness Club
        </h4>
        <h1 className="mt-6 mb-8 md:mt-6 md:mb-10 lg:mt-8 lg:mb-12">
          Sweat, Smile <br /> And Repeat
        </h1>
        <p className="max-w-[250px]">
          Check ut the most effective exercises person
        </p>
        <Button className="mt-2">Explore</Button>
        <div className="hidden sm:block sm:text-[120px] md:text-[140px] lg:text-[190px] text-gray-200 tracking-widest ">
          Exercises
        </div>
        <div className="absolute h-full rounded-bl-[70px] hidden sm:block sm:w-[300px] md:w-[390px] lg:w-[500px] right-0 top-[-128px]">
          <Image
            className="w-full h-full object-cover"
            src={heroImage}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
