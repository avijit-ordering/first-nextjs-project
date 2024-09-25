import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import { RiMicrosoftLoopFill } from 'react-icons/ri';
import logo from '../../../public/assets/images/logo.png';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'hidden' }) => {
  return (
    <Link className="flex cursor-pointer items-center gap-2" href="/home">
      {/* <RiMicrosoftLoopFill className="text-3xl text-primary" />{' '} */}
      <Image alt="logo" src={logo} width="80" height="80" />
      <span className={`${className} text-2xl font-bold`}></span>
    </Link>
  );
};

export default Logo;
