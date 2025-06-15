"use client";
import Image from 'next/image';
import React, { useState } from 'react';

import Img1 from '../../public/assets/Group 37.png'
import Img2 from '../../public/assets/g3013.png'
import Img3 from '../../public/assets/Group 36.png'
import Img4 from '../../public/assets/Group30.png'
import Img5 from '../../public/assets/Group 38.png'
import Img6 from '../../public/assets/Vector (1).png'
import Img7 from '../../public/assets/Vector6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Breaking = () => {
  const [middleIndex, setMiddleIndex] = useState(0);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const updateMiddleSlide = (swiper) => {
    const slidesPerView = 5; // Fixed for all screens
    const middleOffset = Math.floor(slidesPerView / 2); // Middle index
    const middle = (swiper.realIndex + middleOffset) % images.length;
    setMiddleIndex(middle);
  };

  return (
    <div className='relative pt-10'>
      <div className='max-w-[380px] md:max-w-[750px] lg:max-w-7xl mx-auto'>
        <div className='flex justify-center'>
          <div className="border-2 text-3xl md:text-4xl font-semibold border-[#7412FF] text-[#7412FF] md:px-8 px-6 py-2 md:py-2 rounded-full">
            <h3>Tools We Trust</h3>
          </div>
        </div>

        <div className='mt-10 mb-20 px-4 md:px-0'>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={5} // Fixed for all breakpoints
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={updateMiddleSlide}
            onSlideChange={updateMiddleSlide}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`w-full h-[100px] md:h-[200px] flex justify-center items-center transition-all duration-500 ${
                    index === middleIndex ? 'opacity-100 scale-110' : 'opacity-30 scale-100'
                  }`}
                >
                  <figure className="px-0 md:px-10  ">
                    <Image
                      src={img}
                      alt={`Tool ${index + 1}`}
                      width={100}
                      height={100}
                      className="rounded-xl  w-[40px] md:w-[100px]"
                    />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Breaking;
