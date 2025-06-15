"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";

import Image from 'next/image';
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function ContactPage() {
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
        <div className="   absolute bottom-10 right-0">
          <Image
            src={imgDesign2}
            alt="Design Graphic"
            className="md:w-[260px]"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/20 md:bg-[#7412FF]/40 top-52 -right-32 blur-3xl" />
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/30 top-40 -left-10 blur-3xl" />
        </div>

        {/* Contact Hero */}
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
                      Contact
                    </h3>
                  </div>
                  <h1 className="text-3xl md:text-3xl text-center font-bold text-gray-900">
                    Contact with Us <br></br> Whenever You Need
                  </h1>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-8 md:py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-start items-start gap-12 ">
              {/* Contact Form */}
              <div className=' w-full'>
                <Image
                  src={imgDesign}
                  alt="Design Graphic"
                  className="md:w-72"
                />

              </div>
              <div>
                <Card className="border border-border md:w-[480px]">
                  <CardContent className="p-6 md:p-8">

                    <form className="space-y-4">
                      <div className="mb-3">
                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                          <legend className="text-[#7412FF] font-semibold text-xl px-2">
                            Full Name
                          </legend>

                          <input
                            id="name"
                            type="text"


                            placeholder="Enter your full name"
                            className={`w-full  pr-4    
                             rounded-md focus:outline-none   transition-colors text-base`}
                          />
                        </fieldset>

                      </div>
                      <div className="mb-3">
                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                          <legend className="text-[#7412FF] font-semibold text-xl px-2">
                            Email Address
                          </legend>

                          <input
                            id="email"
                            type="email"


                            placeholder="Enter your email"
                            className={`w-full  pr-4    
                             rounded-md focus:outline-none   transition-colors text-base`}
                          />
                        </fieldset>

                      </div>

                      <div className="mb-3">
                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                          <legend className="text-[#7412FF] font-semibold text-xl px-2">
                            Service
                          </legend>

                          <select
                            id="service"
                            className="w-full pr-4  rounded-md focus:outline-none transition-colors text-base"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select service
                            </option>
                            <option value="web-development">Web Development</option>
                            <option value="seo">SEO</option>
                            <option value="ui-ux">UI/UX</option>
                            <option value="video-editing">Video Editing</option>
                            <option value="graphic-design">Graphic Design</option>
                          </select>
                        </fieldset>
                      </div>

                      <div className="mb-3">
                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                          <legend className="text-[#7412FF] font-semibold text-xl px-2">
                            Budget Range
                          </legend>

                          <select
                            id="budgetRange"
                            className="w-full pr-4  rounded-md focus:outline-none transition-colors  text-base"
                            defaultValue=""
                          >
                            <option className='' value="" disabled>
                              Select range
                            </option>
                            <option value="0-100">$0 - $100</option>
                            <option value="100-500">$100 - $500</option>
                            <option value="500-1000">$500 - $1000</option>
                            <option value="1000+">$1000+</option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="mb-3">
                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                          <legend className="text-[#7412FF] font-semibold text-xl px-2">
                            Project Description
                          </legend>

                          <input
                            id="name"
                            type="text"


                            placeholder="Optional"
                            className={`w-full  pr-4    
                             rounded-md focus:outline-none   transition-colors text-base`}
                          />
                        </fieldset>

                      </div>



                      {/* <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                      </div> */}

                      <div className="flex justify-end ">
                        <button className='w-full py-2 bg-[#7412FF] text-white flex justify-center items-center gap-1 rounded-xl'><Send className="w-4 h-4 mr-2" /> Submit </button>
                        
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className=' w-full'>
                <div className='flex justify-end items-start w-full'>
                  <div className="space-y-4 ">
                    <ImFacebook className="text-black text-xl font-semibold" />
                    <GrInstagram className="text-black text-xl font-semibold" />
                    <FaLinkedin className="text-black text-xl font-semibold" />
                    <FaSquareXTwitter className="text-black text-xl font-semibold" />

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Map */}



        <section className="md:pb-24 ">
          <div className="md:max-w-2xl mx-auto text-center ">
            <div className='flex justify-center'>
              <h3 className="text-sm md:text-4xl  text-[#7412FF] text-center font-semibold px-6 py-2 bg-[#7412FF1A] rounded-full">
                Our Work Speaks for Itself
              </h3>

            </div>
            <div className=' flex justify-center my-5'>
              <div>
                <div className='flex gap-2 items-center'>
                  <IoMdMail className="text-[#7412FF] md:text-xl font-semibold" />
                  <p className="md:text-xl  font-semibold text-[#000000]  "> contact@devcapsule.com</p>

                </div>
                <div className='flex gap-2 items-center mt-1'>
                  <FaPhone className="text-[#7412FF] md:text-xl font-semibold" />
                  <p className="md:text-xl font-semibold text-[#000000]  "> +1234 567 8901</p>

                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto relative">
            <div className='flex justify-between '>
              {/* <div className=' flex  items-center'> */}
              <h3 className='-rotate-90 text-[#7412FF] inline-block absolute font-semibold -left-40  top-1/2 text-3xl -translate-y-[18px]'>Follow our way</h3>
              {/* </div> */}
              <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden w-full">
                <div className="w-full h-full flex items-center justify-center bg-muted/60">
                  <p className="text-muted-foreground">Map Embed Placeholder</p>
                </div>
              </div>
              {/* <div className=' flex  items-center'>
              <h3 className='rotate-90 inline-block absolute  text-2xl'>To get us</h3>
              </div> */}
              <h3 className='rotate-90 inline-block absolute font-semibold -right-[116px] -translate-y-[18px] text-[#7412FF]  top-1/2 text-3xl'>To get us</h3>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
