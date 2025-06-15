'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import img1 from '../../public/assets/May 5, 2025, 10_45_16 PM 1.png';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';

const aboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <div className="relative  overflow-hidden md:-mt-5 ">

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center ">
                <div className="absolute w-[450px] md:w-[1100px] h-[400px] md:h-[500px] rounded-full bg-[#7412FF]/40  blur-3xl bottom-28 md:bottom-36" />
                {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7412FF]/40 top-96 left-20 blur-3xl" /> */}
            </div>

            <div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center pt-10 pb-20 space-y-4 relative z-10 "
                >

                    <div className='flex justify-center'>
                        <h3 className="   text-white text-center text-3xl md:text-4xl font-semibold mb-2 px-10 py-2 bg-[#7412FF] rounded-full">
                            Who We Are
                        </h3>
                    </div>

                    <div className='max-w-sm md:max-w-4xl mx-auto space-y-6'>
                        <p className="md:text-2xl font-normal text-[#000000] mb-4 ">At DevCapsule, we specialize in creating high-performing websites and digital products
                            that are both beautiful and functional. With a deep understanding of user behavior and
                            design trends, our team transforms your ideas into exceptional UI/UX experiences tailored
                            for the European market.</p>

                        <div className="mb-4 transition-shadow duration-300  lg:mb-6">
                            <div className='flex justify-center mb-6'>
                                <div className="space-x-4 flex ">
                                    <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-6 py-1 md:py-2 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-xl font-semibold flex justify-center items-center gap-2">
                                        <FaPhone /> Contact
                                    </button>

                                    <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-6 py-1 md:py-2 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-xl font-semibold flex justify-center items-center gap-2">
                                        Free Consultancy
                                    </button>



                                </div>
                            </div>
                            <Image
                                src={img1}
                                width={1260}
                                height={750}
                                alt="Descriptive alt text"
                            />
                        </div>

                    </div>


                </motion.div>


            </div>
        </div>
    );
};

export default aboutUs;