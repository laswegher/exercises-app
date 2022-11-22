import React from 'react';
import { motion } from 'framer-motion';

const Button = (props) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 500 }}
      onClick={props.onClick}
      type={props.type || 'button'}
      className={`${props.className} bg-red-500 text-white px-3 py-1 rounded-sm`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
