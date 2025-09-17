"use client";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import TestimonialsSection from '@/components/home/testimonials-section';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaLinkedin, FaPhone, FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import image1 from '../../public/assets/May 5, 2025, 10_45_16 PM 2 (4).png';
import image2 from '../../public/assets/May 5, 2025, 10_45_16 PM 2 (3).png';
import image3 from '../../public/assets/May 5, 2025, 10_45_16 PM 2 (1).png';
import image4 from '../../public/assets/May 5, 2025, 10_45_16 PM 2 (2).png';
import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import Link from 'next/link';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 relative">
        <div className="-z-10 hidden md:flex   absolute top-48 -left-28">
          <Image
            src={imgDesign}
            alt="Design Graphic"
            className="w-28 md:w-72 "
          />
        </div>
        <div className="-z-10 hidden md:flex  absolute top-[550px] right-0">
          <Image
            src={imgDesign2}
            alt="Design Graphic"
            className="w-[200px] md:w-[260px] "
          />
        </div>
        {/* <div className='flex justify-end items-start absolute top-[300px] right-3.5 md:right-9'>
          <div className="space-y-4  ">
          
                      <div>
                        <Link href="https://www.facebook.com/share/16YNTbkFNR/" target="_blank" rel="noopener noreferrer">
                          <ImFacebook className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
                        </Link>
                      </div>
                      <div>
                        <Link href="https://www.instagram.com/devcapsuleeu?igsh=d2djdDlidjdic3pz" target="_blank" rel="noopener noreferrer">
                          <GrInstagram className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
                        </Link>
                      </div>
                      <div>
                        <Link href="https://www.linkedin.com/company/dev-capsule/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
                        </Link>
                      </div>
                      <div>
                        <Link href="https://x.com/dev_capsuleeu?t=i48UEkQwyAMfym8GjvNSAQ&s=09" target="_blank" rel="noopener noreferrer">
                          <FaSquareXTwitter className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
                        </Link>
                      </div>
          
                    </div>

        </div> */}
        <div className="absolute z-40  w-full h-[100vh] flex justify-end items-center  -mt-28 md:-mt-24 -ml-3 md:-ml-10">
          <div className="space-y-4    ">

            <div>
              <Link href="https://www.facebook.com/share/16YNTbkFNR/" target="_blank" rel="noopener noreferrer">
                <ImFacebook className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/devcapsuleeu?igsh=d2djdDlidjdic3pz" target="_blank" rel="noopener noreferrer">
                <GrInstagram className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/dev-capsule/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
              </Link>
            </div>
            <div>
              <Link href="https://x.com/dev_capsuleeu?t=i48UEkQwyAMfym8GjvNSAQ&s=09" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className="text-black text-xl transition-all duration-300 hover:text-[#7412FF] hover:scale-110" />
              </Link>
            </div>

          </div>





        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/20 md:bg-[#7412FF]/40 top-52 -right-32 blur-3xl" />
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/30 top-40 -left-10 blur-3xl" />
        </div>

        {/* Projects Hero */}
        <div className="md:max-w-2xl mx-auto text-center ">
          <div className="flex justify-center mt-6">
            <div

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
            </div>
          </div>

        </div>

        <div className="relative  overflow-hidden  ">

          {/* Animated Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center ">
            <div className="absolute w-[450px] md:w-[1100px] h-[400px] md:h-[500px] rounded-full bg-[#7412FF]/40  blur-3xl bottom-28 md:bottom-64" />
            {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7412FF]/40 top-96 left-20 blur-3xl" /> */}
          </div>

          <div>
            <div

              className="text-center pt-10  space-y-4 relative z-10 "
            >



              <div className='max-w-[350px] md:max-w-4xl mx-auto space-y-6'>


                <div className="mb-4 transition-shadow duration-300  lg:mb-6">
                  <Image
                    src={image1}
                    width={1260}
                    height={750}
                    alt="Descriptive alt text"
                  />
                  <div className='flex justify-center'>
                    <h3 className="text-center text-xl md:text-5xl font-semibold mb-3 px-0 md:px-10 md:py-2">
                      UI/UX Design
                    </h3>
                  </div>
                  <p className="md:text-2xl font-normal text-[#000000] mb-4 ">
                    Deliver intuitive, engaging, and user-focused designs that bring digital experiences to life.
                    Our UI/UX design service transforms your business goals into streamlined interfaces
                    that are both beautiful and functional.</p>

                  <div className='text-center mb-4'>

                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >User Research & Analysis:</span> Empathy mapping, persona creation, and competitive analysis</p>
                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >Wireframing & Prototyping:</span> Low- and high-fidelity wireframes and interactive prototypes</p>
                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >User Interface Design:</span>Custom, responsive UI for web and mobile platforms</p>
                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >Usability Testing:</span> In-depth testing with real users to validate designs</p>
                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >Accessibility Optimization:</span>Compliance with WCAG guidelines for inclusive design</p>




                  </div>

                  <div className='flex justify-center mt-6'>
                    <div className="space-x-4 flex ">
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Adobe XD
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Figma
                      </button>




                    </div>
                  </div>

                </div>

              </div>


            </div>


          </div>
        </div>
        <div className="relative  overflow-hidden  ">

          {/* Animated Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center ">
            <div className="absolute w-[450px] md:w-[1100px] h-[400px] md:h-[500px] rounded-full bg-[#7412FF]/40  blur-3xl bottom-28 md:bottom-64" />
            {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7412FF]/40 top-96 left-20 blur-3xl" /> */}
          </div>

          <div>
            <div
              // ref={ref}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              // transition={{ duration: 0.5 }}
              className="text-center pt-10 space-y-4 relative z-10 "
            >



              <div className='max-w-[350px] md:max-w-4xl mx-auto space-y-6'>


                <div className="mb-4 transition-shadow duration-300  lg:mb-6">
                  <Image
                    src={image2}
                    width={1260}
                    height={750}
                    alt="Descriptive alt text"
                  />
                  <div className='flex justify-center'>
                    <h3 className="text-center text-xl md:text-5xl font-semibold mb-3 px-0 md:px-10 md:py-2">
                      Web Development
                    </h3>
                  </div>
                  <p className="md:text-2xl font-normal text-[#000000] mb-4 ">Build robust, scalable websites that perform flawlessly across platforms. Our web development
                    services bring your design vision to life with clean code, high performance,
                    and future-ready technology.</p>

                  <div className='text-center mb-4'>

                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >Frontend Development:</span> Pixel-perfect implementation of your UI using modern frameworks</p>
                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >Backend Development:</span> Secure, scalable, and modular code architecture</p>
                    <p className="md:text-2xl font-normal text-[#000000]  "><span className="text-[#7412FF] font-semibold" >CMS Integration:</span>  WordPress, Headless CMS, or custom solutions</p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Responsive & Cross-Browser Compatibility
                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Performance Optimization & SEO Readiness
                    </p>



                  </div>

                  <div className='flex justify-center mt-6'>
                    <div className="gap-4 flex flex-wrap justify-center">
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        HTMl 5
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        CSS 3
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        JavaScript
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        React
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Vue.js
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Next.js
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Node.js
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Express
                      </button>





                    </div>
                  </div>

                </div>

              </div>


            </div>


          </div>
        </div>
        <div className="relative  overflow-hidden  ">

          {/* Animated Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center ">
            <div className="absolute w-[450px] md:w-[1100px] h-[400px] md:h-[500px] rounded-full bg-[#7412FF]/40  blur-3xl bottom-28 md:bottom-64" />
            {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7412FF]/40 top-96 left-20 blur-3xl" /> */}
          </div>

          <div>
            <div
              // ref={ref}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              // transition={{ duration: 0.5 }}
              className="text-center pt-10  space-y-4 relative z-10 "
            >



              <div className='max-w-[350px] md:max-w-4xl mx-auto space-y-6'>


                <div className="mb-4 transition-shadow duration-300  lg:mb-6">
                  <Image
                    src={image3}
                    width={1260}
                    height={750}
                    alt="Descriptive alt text"
                  />
                  <div className='flex justify-center'>
                    <h3 className="text-center text-xl md:text-5xl font-semibold mb-3 px-0 md:px-10 md:py-2">
                      SaaS Development
                    </h3>
                  </div>
                  <p className="md:text-2xl font-normal text-[#000000] mb-4 ">Launch scalable and secure software-as-a-service products
                    tailored to your industry. Our SaaS development services cover
                    everything from MVP to enterprise-ready platforms.</p>

                  <div className='text-center mb-4'>


                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      MVP Planning & Roadmapping

                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      User Authentication & Role Management

                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Multi-Tenant Architecture


                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Billing & Subscription Management


                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Analytics & Reporting Dashboards


                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      API Development & Integration


                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Ongoing Support & Maintenance


                    </p>



                  </div>

                  <div className='flex justify-center mt-6'>
                    <div className=" gap-4 flex flex-wrap justify-center ">
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        React
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Angular
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Vue.js
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Node.js
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Python
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        MongoDB
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Firebase
                      </button>






                    </div>
                  </div>

                </div>

              </div>


            </div>


          </div>
        </div>
        <div className="relative  overflow-hidden  ">

          {/* Animated Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center ">
            <div className="absolute w-[450px] md:w-[1100px] h-[400px] md:h-[500px] rounded-full bg-[#7412FF]/40  blur-3xl bottom-28 md:bottom-64" />
            {/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7412FF]/40 top-96 left-20 blur-3xl" /> */}
          </div>

          <div>
            <div
              // ref={ref}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              // transition={{ duration: 0.5 }}
              className="text-center pt-10 pb-10 space-y-4 relative z-10 "
            >



              <div className='max-w-[350px] md:max-w-4xl mx-auto space-y-6'>


                <div className="mb-4 transition-shadow duration-300  lg:mb-6">
                  <Image
                    src={image4}
                    width={1260}
                    height={750}
                    alt="Descriptive alt text"
                  />
                  <div className='flex justify-center'>
                    <h3 className="text-center text-xl md:text-5xl font-semibold mb-3 px-0 md:px-10 md:py-2">
                      E-Commerce
                    </h3>
                  </div>
                  <p className="md:text-2xl font-normal text-[#000000] mb-4 ">Create high-converting e-commerce experiences that drive sales and
                    customer loyalty. Our e-commerce solutions are tailored to
                    your brand, products, and target market.</p>

                  <div className='text-center mb-4'>


                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Custom Storefront Design

                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Product & Inventory Management

                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Shopping Cart & Checkout Flow


                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Payment Gateway Integration


                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Shipping, Tax, and Order Management



                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Customer Accounts & Wishlist Features



                    </p>
                    <p className="md:text-2xl text-[#7412FF] font-semibold  ">
                      Analytics, SEO, and Marketing Tools


                    </p>



                  </div>

                  <div className='flex justify-center mt-6'>
                    <div className="space-x-4 flex ">
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Shopify
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        WooCommerce
                      </button>
                      <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Mailchimp
                      </button>







                    </div>
                  </div>

                </div>

              </div>


            </div>


          </div>
        </div>


      </main>

      <TestimonialsSection></TestimonialsSection>

      <Footer />
    </div>
  );
}