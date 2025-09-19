"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/assets/May 5, 2025, 10_45_16 PM 2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { cn } from "@/lib/utils";
import { MdArrowOutward } from "react-icons/md";
import { LuArrowDownRight } from "react-icons/lu";
import "swiper/css";
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';


const NavigationButton = ({ direction, onClick }) => (
  <div>

    <button
      onClick={onClick}
      className={cn(
        "absolute z-10 flex items-center justify-center ml-5",
        "w-8 md:w-12 h-8 md:h-12 rounded-full bg-[#7412FF] backdrop-blur-md",
        "text-white border border-[#7412FF] shadow-lg",
        "transform transition-all duration-300",
        "hover:bg-[#7412FF]  hover:scale-110 focus:outline-none",
        direction === "next" ? "top-1/2 -translate-y-[52px] md:-translate-y-[112px] right-2 md:right-3" : "top-1/2 right-2 md:right-3 -translate-y-[52px] md:-translate-y-[112px]"
      )}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    >
      {direction === "next" ? (
        <LuArrowDownRight className="w-6 h-6 " />
      ) : (
        <MdArrowOutward className="w-6 h-6 " />
      )}
    </button>
  </div>
);

const slidesData = [
  { id: 1, image: img1, title: "Website Design & Development", description: "At We craft responsive, high-converting websites tailored to your business goals." },
  { id: 2, image: img1, title: "Website Design & Development", description: "At We craft responsive, high-converting websites tailored to your business goals." },
  { id: 3, image: img1, title: "Website Design & Development", description: "At We craft responsive, high-converting websites tailored to your business goals." },
  { id: 4, image: img1, title: "Website Design & Development", description: "At We craft responsive, high-converting websites tailored to your business goals." },
  { id: 5, image: img1, title: "Website Design & Development", description: "At We craft responsive, high-converting websites tailored to your business goals." },
];

// const SlideContent = ({index, slide }) => {
//   return (
//     <div className="w-full  flex flex-col items-center z-20 justify-center">
//       <Image src={img1} width={1260}  alt="Descriptive alt text" />
// <h4 className="text-lg md:text-xl font-semibold mt-4">{slide.title}</h4>
//       <p className="text-sm md:text-base text-gray-600">{slide.description}</p>
// </div>
//   );
// };
const SlideContent = ({ slide }) => {
  return (
    <div className="w-full flex flex-col items-center z-20 justify-center p-4 text-center md:-mt-[17px]">
      <div className="hidden md:flex items-center justify-center w-11 h-11 border-2  border-[#7412FF] rounded-full animate-ping1 absolute right-[5.5px] md:right-[15px] -mt-[94px] md:-mt-[180.3px]">

      </div>
      <Image
        src={slide.image}
        alt={slide.title}
        width={1260}
        priority
      />
      <div className="flex justify-center mt-4 ">
        <div className="md:max-w-4xl mx-auto" >
          <h3 className="text-center text-xl md:text-5xl font-semibold mb-3 px-0 md:px-10 md:py-2">
            {slide.title}
          </h3>
          <p className="text-sm md:text-2xl font-normal text-[#000000] mb-4">
            {slide.description}
          </p>
        </div>

      </div>

      {/* <p className="text-sm md:text-base text-gray-600">{slide.description}</p> */}
    </div>
  );
};

export default function ContactSection({ slides = slidesData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const updateSlideState = () => {
    if (!swiperInstance) return;
    setActiveIndex(swiperInstance.activeIndex);
    setIsLastSlide(swiperInstance.isEnd);
    setIsFirstSlide(swiperInstance.isBeginning);
  };

  const handleNext = () => {
    if (swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.slidePrev();
    }
  };

  useEffect(() => {
    if (!swiperInstance) return;

    swiperInstance.on("slideChange", updateSlideState);
    swiperInstance.on("touchEnd", updateSlideState);

    return () => {
      swiperInstance.off("slideChange", updateSlideState);
      swiperInstance.off("touchEnd", updateSlideState);
    };
  }, [swiperInstance]);

  return (
    <section id="contact" className="relative pb-10 -mb-10 md:-mb-0 md:pb-0">
       <div className="absolute flex md:hidden inset-0 overflow-hidden pointer-events-none  justify-center ">
            <div className="absolute w-[450px] md:w-[1100px] h-[200px] md:h-[500px] rounded-full bg-[#7412FF]/40  blur-3xl bottom-20 md:bottom-64" />
            {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7412FF]/40 top-96 left-20 blur-3xl" /> */}
          </div>
      <div className="max-w-sm md:max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="h-[340px] md:h-[755px] lg:[800px]  w-full relative max-w-4xl mx-auto">
            <Swiper
              direction="vertical"
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={{ releaseOnEdges: true }}
              speed={800}
              modules={[Mousewheel]}
              className="w-full h-full"
              onSwiper={setSwiperInstance}
            >
              {/* {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="text-center flex justify-center items-center "
                >
                  <SlideContent index={index} slide={slide}/>
                </SwiperSlide>
              ))} */}
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center  ">
                  <SlideContent slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Bullet Pagination */}
            <div className="absolute -right-4 md:-right-7 top-1/2 -translate-y-[70px]  md:-translate-y-[135px] flex flex-col gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperInstance?.slideTo(index)}
                  className={cn(
                    "w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 bg-[#7412FF]",
                    activeIndex === index
                      ? "bg-[#7412FF] scale-125"
                      : "bg-gray-500/50"
                  )}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            {isLastSlide ? (
              <NavigationButton direction="prev" onClick={handlePrev} />
            ) : (
              <NavigationButton direction="next" onClick={handleNext} />
            )}
          </div>

          

          <div className="max-w-4xl mx-auto">


            <div className="mb-4  transition-shadow duration-300 lg:mb-6">
              <div className="flex justify-center mt-0 md:mt-0">
                <div className="space-x-4 flex ">
                  <Link  href="/contact">
                  <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-6 py-1 md:py-2 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-xl font-semibold flex justify-center items-center gap-2">
                    <FaPhone /> Contact
                  </button>
                  </Link>
                  <Link  href="/appointment">
                  <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-6 py-1 md:py-2 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-xl font-semibold flex justify-center items-center gap-2">
                    Free Consultancy
                  </button>
                  </Link>


                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


