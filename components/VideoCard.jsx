import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';
const VideoCard = ({ video }) => {
  // console.log(video);

  const {
    channelName,
    publishedTimeText,
    title,
    thumbnails,
    videoId,
    viewCountText,
  } = video;

  const url = thumbnails[1]?.url || thumbnails[0].url;

  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={`https://www.youtube.com/watch?v=${videoId}`}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 500 }}
        className="shadow-xl  mx-auto cursor-pointer rounded-xl overflow-hidden"
      >
        <div>
          <Image
            src={url}
            alt="/"
            width={720}
            height={404}
          />
        </div>
        {/* Detail */}
        <div className="p-2">
          <p className="text-sm mb-4">{title.slice(0, 60)}</p>
          <p className="text-xs font-bold text-[#444]">
            {channelName}
          </p>
          <div className="flex flex-row item-center justify-between gap-10  text-[#666]">
            <p className="text-xs font-bold">{viewCountText}</p>
            <p className="text-xs font-bold">{publishedTimeText}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default VideoCard;
