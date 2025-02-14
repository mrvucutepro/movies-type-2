'use client';

import React from 'react';
import Input from './Base/Input';
import Image from 'next/image';
import SearchIcon from '@/assets/icons/search-icon.png';
import Logo from '@/assets/logo/logo.png';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleDirection = async () => {
    try {
      await router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#191919] flex justify-between h-16 items-center px-6">
      <button className="flex-shrink-0" onClick={handleDirection}>
        <Image src={Logo} alt="" />
      </button>
      <Input
        className=" rounded-full bg-[#323232] md:w-[15%] w-[50%] mx-16 h-[50%] text-sm "
        secondEndContext={
          <Image src={SearchIcon} height={18} alt="" className="" />
        }
      />
    </div>
  );
}
