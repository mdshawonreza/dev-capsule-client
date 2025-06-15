"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MonitorSmartphone,
  PenTool,
  Film,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import heroImage from "../../public/assets/Vector.png";
import img1 from "../../public/assets/Group 15.png";
import img2 from "../../public/assets/Group 14.png";
import img3 from "../../public/assets/Group 13.png";
import img4 from "../../public/assets/Group.png";
import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";
import { useInView } from 'framer-motion';

import { useRef } from 'react';
import { FaArrowDown, FaArrowRight, FaFacebook, FaPhone } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });



  return (
    <div className="relative z-10 mx-auto overflow-hidden pt-20 ">
      <div className="absolute z-20  w-full h-[100vh] flex justify-center items-end -mt-72 md:-mt-28">
        <div>
         
          <div className="flex items-center justify-center w-10 h-10 border-2  border-[#7412FF] rounded-full animate-ping1">

          </div>
          <button

            className=" flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform rounded-full bg-[#7412FF] hover:text-deep-purple-accent-400 hover:border-[#7412FF] hover:shadow hover:scale-110 -mt-10"
          >
            <FaArrowDown className="" />
          </button>
        </div>
      </div>
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
            Crafting seamless digital experiences <br/>  with design that converts
          </h1>


          <div className="flex justify-center gap-4 relative z-20 flex-wrap">
            <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base  font-semibold flex justify-center items-center gap-2">
              Hire Us <FaArrowRight />
            </button>
            <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base  font-semibold flex justify-center items-center gap-2">
              Free Consultancy
            </button>
            <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
              <FaPhone /> Contact
            </button>

          </div>
        </div>
      </motion.div>

      <div className="md:hidden  pt-16 pr-6">
        <div className="flex justify-end  gap-10 -mb-20">
          <div></div>
          <Image
            src={imgDesign}
            alt="Design Graphic"
            className="w-28"
          />
          <div className="space-y-4 ">
            <ImFacebook className="text-black text-xl font-semibold" />
            <GrInstagram className="text-black text-xl font-semibold" />
            <FaLinkedin className="text-black text-xl font-semibold" />
            <FaSquareXTwitter className="text-black text-xl font-semibold" />

          </div>
        </div>
      </div>
      <div className="relative flex justify-between z-10 w-full -pt-16 ">
        <div className="relative md:-mt-[220px]  flex justify-start md:justify-end  items-center  ">
          <Image
            src={heroImage}
            alt="Man working on laptop"
            className="rounded-xl w-5/6 md:w-[800px]"
          />

          

        </div>
        <div className=" hidden md:flex flex-col space-y-16  w-[500px]  ">
          <div className="flex justify-around">
            <div></div>
            <div className="pt-8">
            <Image
              src={imgDesign}
              alt="Design Graphic"
              className="md:w-52"
            />
            </div>
            <div className="space-y-4 -mt-4">
              <ImFacebook className="text-black text-2xl font-semibold" />
              <GrInstagram className="text-black text-2xl font-semibold" />
              <FaLinkedin className="text-black text-2xl font-semibold" />
              <FaSquareXTwitter className="text-black text-2xl font-semibold" />

            </div>
          </div>

          <div className=" w-full flex justify-start relative pb-10  pt-20">
            <div className="-mt-3 space-y-6 md:ml-8">
              <div className="flex items-center gap-5 md:-mr-32 md:w-80 ">
                <div>
                  <Image
                    src={img1}
                    alt="Industries"
                    className=" md:w-[110px]"
                  />
                </div>
                <div className="flex w-full justify-end">
                  <div>
                    <div className="text-5xl text-[#7412FF] font-bold text-end">
                      20+
                    </div>
                    <p className="text-[18px] font-medium">Industries Served</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 md:-ml-16 md:w-80 ">
                <div>
                  <Image
                    src={img2}
                    alt="Experience"
                    className=" md:w-[200px]"
                  />
                </div>
                <div className="flex w-full justify-end">
                  <div>
                    <div className="text-5xl text-[#7412FF] font-bold text-end">
                      6+
                    </div>
                    <p className="text-[18px] font-medium">Years of Experience</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 md:-ml-44  md:w-96 ">
                <div>
                  <Image
                    src={img3}
                    alt="Clients"
                    className=" md:last:w-[100px]"
                  />
                </div>
                <div>
                  <div className="text-5xl text-[#7412FF] font-bold text-end">
                    40+
                  </div>
                  <p className="text-[18px] font-medium">
                    Active Clients Across Europe
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:-ml-60 md:w-96 ">
                <div>
                  <Image
                    src={img4}
                    alt="Projects"
                    className=" md:w-[85px]"
                  />
                </div>
                <div>
                  <div className="text-5xl text-[#7412FF] font-bold text-end">
                    120+
                  </div>
                  <p className="text-[18px] font-medium">
                    Projects Successfully Delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="   absolute -top-24 right-0">
              <Image
                src={imgDesign2}
                alt="Design Graphic"
                className="md:w-[260px]"
              />
            </div>
          </div>
        </div>

      </div>
      <div className="md:hidden w-full flex justify-center relative pb-10 -mt-20">
        <div className="space-y-5 md:ml-8">
          <div className="flex items-center gap-5 ml-24 w-48 ">
            <div>
              <Image
                src={img1}
                alt="Industries"
                className=" md:w-[35px]"
              />
            </div>
            <div className="flex w-full justify-end">
              <div>
                <div className="text-3xl text-[#7412FF] font-bold text-end">
                  20+
                </div>
                <p className="text-[12px] font-medium">Industries Served</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5  ml-10 w-52 ">
            <div>
              <Image
                src={img2}
                alt="Experience"
                className=" md:w-[35px]"
              />
            </div>
            <div className="flex w-full justify-end">
              <div>
                <div className="text-3xl text-[#7412FF] font-bold text-end">
                  6+
                </div>
                <p className="text-[12px] font-medium">Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 -ml-10   w-64 ">
            <div>
              <Image
                src={img3}
                alt="Clients"
                className=" w-[55px]"
              />
            </div>
            <div>
              <div className="text-3xl text-[#7412FF] font-bold text-end">
                40+
              </div>
              <p className="text-[12px] font-medium">
                Active Clients Across Europe
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3  -ml-16 w-64 ">
            <div>
              <Image
                src={img4}
                alt="Projects"
                className=" w-[45px]"
              />
            </div>
            <div>
              <div className="text-3xl text-[#7412FF] font-bold text-end">
                120+
              </div>
              <p className="text-[12px] font-medium">
                Projects Successfully Delivered
              </p>
            </div>
          </div>
        </div>

        <div className="   absolute -top-10 right-0">
          <Image
            src={imgDesign2}
            alt="Design Graphic"
            className="w-36"
          />
        </div>
      </div>




      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/20 md:bg-[#7412FF]/40 top-52 -right-32 blur-3xl" />
        <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/30 top-40 -left-10 blur-3xl" />
      </div>

      
    </div>
  );
}
