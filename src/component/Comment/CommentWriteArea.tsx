import React from 'react';
import CommentArea from '../Base/CommentArea';
import Image from 'next/image';
import Avatar from '@/assets/logo/avatar.png';
import CommentDisplay from './CommentDisplay';

export default function Comment() {
  return (
    <div className=" gap-12 m-4 p-4 items-center bg-[#313131] rounded-sm">
      <span className="text-[#B7C6FF] font-bold text-2xl mx-4">2개</span>
      <CommentArea
        className="my-4"
        startContext={
          <Image
            alt=""
            src={Avatar}
            height={32}
            className="shadow-blue-500/50 shadow-lg rounded-full w-10 h-10 "
          />
        }
      ></CommentArea>
      <CommentDisplay />
    </div>
  );
}
