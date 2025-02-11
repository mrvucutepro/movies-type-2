import React from 'react';
import Input from './Base/Input';
import Image from 'next/image';
import SearchIcon from '@/assets/icons/search-icon.png';
import Logo from '@/assets/logo/logo.png';

export default function Header() {
  return (
    <div className="bg-[#191919] flex justify-between h-16 items-center px-6">
      <div className="flex-shrink-0">
        <Image src={Logo} alt="" />
      </div>
      <Input
        className=" rounded-full bg-[#323232] md:w-[15%] w-[50%] mx-8 h-[50%] text-sm "
        secondEndContext={
          <Image src={SearchIcon} height={18} alt="" className="" />
        }
      />
    </div>
  );
}
