import { Skeleton } from '@heroui/skeleton';
import React from 'react';
const SkeleTonMovie = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative after:content-[''] after:w-full after:block after:flex-1 after:h-[1px] after:bg-black after:mb-4 after:mt-2">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[80px] rounded-lg h-[19px]" />
          <Skeleton className="w-[80px] rounded-lg h-[40px]" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
            key={index}
          >
            <Skeleton className="h-[327px] rounded-lg " />
            <Skeleton className="rounded-lg h-[19px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeleTonMovie;
