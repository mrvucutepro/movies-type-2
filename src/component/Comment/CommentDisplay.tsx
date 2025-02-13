import React from 'react';
import Image from 'next/image';
import Avatar from '@/assets/logo/avatar.png';
export default function CommentDisplay() {
  return (
    <div className=" flex m-2 p-1 gap-4  border border-t-0 border-x-0 py-2 border-black">
      <Image
        alt=""
        src={Avatar}
        height={0}
        className="shadow-red-500/50 shadow-lg rounded-full w-10 h-10"
      />
      <div className="grid gap-2">
        <div className="flex items-center gap-4">
          <div className="text-[#FF8A00] font-bold">관리자 Jake</div>
          <div className="text-xs text-[#8C8C8C]">2 days ago</div>
        </div>
        <div className="text-xs">
          법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은
          헌법재판소에 제청하여 그 심판에 의하여 재판한다.{' '}
        </div>
        <div className="flex items-center gap-4 text-[#8C8C8C]">
          <div className="text-xs">Remove</div>
          <div className="text-xs">Repply</div>
        </div>
      </div>
    </div>
  );
}
