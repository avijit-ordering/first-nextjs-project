import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSearch } from "react-icons/fa";

import avatar from '@/images/avatar.png';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';

import CartSideBar from '../CartSideBar';

import Language from '../Language';

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between py-4">
 
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex">
          <Input
            type="text"
            className="border-transparent bg-white placeholder:text-neutral-500 focus:border-transparent"
            placeholder="Search your product..."
          />
          <Link href="/products" >
          <FaSearch  className="text-2xl text-neutral-500" />
          </Link>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        {/* <div className="relative hidden lg:block">
          <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-full bg-red-600" />
          <FaRegBell className="text-2xl" />
        </div> */}

        <div className="flex items-center  divide-neutral-300">
          <CartSideBar />
          <div className="flex items-center gap-3 pl-5">
            <ButtonCircle3 className="overflow-hidden bg-gray" size="w-10 h-10">
              <Image
                src={avatar}
                alt="avatar"
                className="h-full w-full object-cover object-center"
              />
            </ButtonCircle3>
            <Link href="/signup" className="hidden text-sm lg:block">
              Clark Kent
            </Link>
            <Language/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
