import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/images/Logo.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full px-3 py-5 sm:p-10">
      {/* Container */}
      <div className="max-w-5xl mx-auto flex gap-12 md:gap-20 items-center justify-around sm:justify-start">
        {/* Logo */}
        <Link
          className="cursor-pointer focus:outline-none"
          href="/"
        >
          <div className="w-12 h-12">
            <Image
              src={logo}
              alt="/"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Navigation */}
        <ul className="flex items-end gap-5 text-xl font-medium text-[#3a1212]">
          <Link href="/">
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="border-b-[3px] border-red-600"
            >
              Home
            </motion.li>
          </Link>

          <Link href="/exercises">
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className=""
            >
              Exercises
            </motion.li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
