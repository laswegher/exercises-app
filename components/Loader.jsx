import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center">
      <ColorRing />
    </div>
  );
};

export default Loader;
