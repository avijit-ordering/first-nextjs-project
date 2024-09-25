'use client';
import Image from 'next/image';
import React from 'react';



import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from '../../../public/assets/images/banner1.jpg';
import banner2 from '../../../public/assets/images/banner2.jpg';

const SectionHeader = () => {

  let images:string[]; 
  images = [
    banner1.src,
    banner2.src
  ] 

  return (
    <div className="container items-stretch gap-y-5 lg:flex lg:gap-5 lg:gap-y-0">
      <Carousel
      infiniteLoop={true}
      interval={3000}
      autoPlay={true}
      >
        {images.map((img:string) => {
          return(

          
          <>
          <div>
            {img && (

              <img src={img} alt='banner' width={300} height={300}/>
            )}

          </div>
          </>
          )

        })}
       
      </Carousel>
   
    </div>
  );
};

export default SectionHeader;
