import React from 'react';

import { footerBannerData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import ButtonPrimary from '../Button/ButtonPrimary';

import bgProducts from '../../../public/bgProducts.jpg';

const FooterBanner = () => {
  return (
    

    
    <div style={{
      backgroundImage: `url(${bgProducts.src})`,
      
    }} className="rounded-2xl  bg-cover bg-center bg-no-repeat py-16 text-white">
      <Heading className="mb-0" isMain isCenter>
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-[80%] text-center md:w-[50%]">
        {footerBannerData.description}
      </p>
      <div className="mt-10 flex items-center justify-center">
        <ButtonPrimary sizeClass="px-6 py-4" className='textcolo'>More about us</ButtonPrimary>
      </div>
    </div>
   
  );
};

export default FooterBanner;
