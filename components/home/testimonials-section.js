"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { FaPhone } from 'react-icons/fa6';
import img2 from '../../public/assets/Group 46.png';
import img1 from '../../public/assets/Group 47.png';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });



  return (
    <section id="contact" className="relative">
      <div className="md:max-w-[1080px] mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-[#E0D9FF] rounded-[50px] -mb-14  flex  justify-between ">
        <div className=' md:w-[170px]'>
          <Image
            src={img1}
            alt="Man working on laptop"
            className="rounded-xl"
          />


        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-6"
        >
          <div className='max-w-[300px] md:max-w-4xl mx-auto'>

          </div>
          <div className='flex justify-center'>
            <h3 className=" -mr-4 md:-mr-0   text-center text-2xl md:text-5xl font-semibold md:mb-3 md:px-10 py-2  ">
              Let’s Build Together
            </h3>
          </div>

          <div className='max-w-[350px] md:max-w-4xl mx-auto'>
            <p className="md:text-2xl font-normal text-[#000000] mb-4 ">Ready to elevate your digital presence?</p>

            <div className="mb-4 transition-shadow duration-300  lg:mb-6">
              <div className='flex justify-center'>
                <div className="space-x-4 flex -mr-10">
                  <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-6 py-1 md:py-2 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-xl font-semibold flex justify-center items-center gap-2 -ml-10">
                    <FaPhone /> Contact
                  </button>
                  <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-6 py-1 md:py-2 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-xl font-semibold flex justify-center items-center gap-2 -ml-10">
                    Free Consultancy
                  </button>


                </div>
              </div>

            </div>

          </div>
        </motion.div>
        <div className='-mb-10 md:-mb-10 -mr-4 md:-mr-8 flex items-end'>
          <Image
            src={img2}
            alt="Man working on laptop"
            className="rounded-xl w-[120px] md:w-full"
          />


        </div>



      </div>

    </section>
  );
}