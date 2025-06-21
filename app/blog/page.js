"use client";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogGrid from '@/components/blog/blog-grid';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import TestimonialsSection from '@/components/home/testimonials-section';
import Image from 'next/image';
import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 relative">
        <div className="-z-10 hidden md:flex   absolute top-96 md:top-48 left-3 md:-left-32">
          <Image
            src={imgDesign}
            alt="Design Graphic"
            className="w-28 md:w-72 "
          />
        </div>
        <div className="-z-10 hidden md:flex  absolute bottom-10 right-0">
          <Image
            src={imgDesign2}
            alt="Design Graphic"
            className="w-[200px] md:w-[260px] "
          />
        </div>
        <div className='hidden md:flex  justify-end items-start absolute top-[300px] right-3.5 md:right-9'>
          <div className="space-y-4 ">
            <ImFacebook className="text-black text-xl font-semibold" />
            <GrInstagram className="text-black text-xl font-semibold" />
            <FaLinkedin className="text-black text-xl font-semibold" />
            <FaSquareXTwitter className="text-black text-xl font-semibold" />

          </div>

        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/20 md:bg-[#7412FF]/40 top-52 -right-32 blur-3xl" />
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/30 top-40 -left-10 blur-3xl" />
        </div>


        {/* Blog Hero */}
        <section className=" pt-16">
          <div className="md:max-w-2xl mx-auto text-center ">
            <div className="flex justify-center mt-6">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center">
                <div className="max-w-sm md:max-w-4xl text-center space-y-4">
                  <div className="flex justify-center mt-4">
                    <h3 className="text-sm md:text-xl text-[#7412FF] text-center font-medium px-4 py-1.5 bg-[#7412FF1A] rounded-full">
                      Your Vision. Our Precision.
                    </h3>
                  </div>
                  <h1 className="text-3xl md:text-3xl text-center font-bold text-gray-900">
                    Crafting seamless digital experiences <br />  with design that converts
                  </h1>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Blog Content */}
        <BlogGrid />
      </main>
      <TestimonialsSection></TestimonialsSection>

      <Footer />
    </div>
  );
}