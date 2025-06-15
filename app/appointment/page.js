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
import DatePickerWrapper from '../../components/ui/DatePickerWrapper';
import DatePicker from 'react-datepicker';

export default function AppointmentPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 relative pb-16">
                <div className="   absolute -bottom-80 right-0">
                    <Image
                        src={imgDesign2}
                        alt="Design Graphic"
                        className="md:w-[260px] -z-10"
                    />
                </div>
                <div className="-z-10   absolute top-80 left-5">
                    <Image
                        src={imgDesign}
                        alt="Design Graphic"
                        className="md:w-72 "
                    />
                </div>
                <div className='flex justify-end items-start absolute top-[300px] right-9'>
                    <div className="space-y-4 ">
                        <ImFacebook className="text-black text-xl font-semibold" />
                        <GrInstagram className="text-black text-xl font-semibold" />
                        <FaLinkedin className="text-black text-xl font-semibold" />
                        <FaSquareXTwitter className="text-black text-xl font-semibold" />

                    </div>

                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
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
                                            Appointment
                                        </h3>
                                    </div>
                                    <h1 className="text-3xl md:text-3xl text-center font-bold text-gray-900">
                                        Schedule a 30 Minutes Meeting
                                    </h1>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* Contact Form & Info */}
                {/* <section className="py-8 md:py-12 mb-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        <div className="flex justify-center items-start gap-12 ">

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



                                          

                                            <div className="flex justify-end ">
                                                <button className='w-full py-2 bg-[#7412FF] text-white flex justify-center items-center gap-1 rounded-xl'><Send className="w-4 h-4 mr-2" /> Submit </button>

                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                           

                        </div>
                    </div>
                </section> */}
                <div className='max-w-3xl mx-auto pt-5 md:pt-5 mb-8 bg-white  shadow-xl rounded-2xl px-10 z-40 mt-7 pb-9'>
                    <div className="max-w-sm md:max-w-4xl text-center ">

                        <h1 className="text-3xl md:text-3xl text-center font-bold text-[#7412FF] mb-7">
                            Select Date and Time
                        </h1>
                    </div>
                    <div className="flex   gap-12 items-start">
                        <div className="space-y-5 -mt-4 flex-1">
                            {/* Area */}
                            <div className="mb-3">
                                <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                    <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                        Area
                                    </legend>
                                    <select
                                        className="w-full pr-4 rounded-md focus:outline-none transition-colors text-base"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select area</option>
                                        <option value="asia">Asia</option>
                                        <option value="europe">Europe</option>
                                        <option value="north-america">North America</option>
                                    </select>
                                </fieldset>
                            </div>

                            {/* Time Zone */}
                            <div className="mb-3">
                                <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                    <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                        Time Zone
                                    </legend>
                                    <select
                                        className="w-full pr-4 rounded-md focus:outline-none transition-colors text-base"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select time zone</option>
                                        <option value="gmt6">GMT+6 (Dhaka)</option>
                                        <option value="gmt1">GMT+1 (Berlin)</option>
                                        <option value="gmt-5">GMT-5 (New York)</option>
                                    </select>
                                </fieldset>
                            </div>

                            {/* Preferred Time */}
                            <div className="mb-3">
                                <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                    <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                        Preferred Time
                                    </legend>
                                    <select
                                        className="w-full pr-4 rounded-md focus:outline-none transition-colors text-base"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select time</option>
                                        <option value="10am">10:00 AM</option>
                                        <option value="2pm">2:00 PM</option>
                                        <option value="6pm">6:00 PM</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>

                        {/* React Date Picker Component */}
                        <div className="">
                            <DatePicker
                                //    selected={selectedDate}
                                //    onChange={(date) => setSelectedDate(date)}
                                inline
                                className="text-base"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className='w-full py-2 bg-[#7412FF] text-white flex justify-center items-center gap-1 rounded-xl'><Send className="w-4 h-4 mr-2" /> Next </button>

                    </div>
                </div>








            </main>

            <Footer />
        </div>
    );
}
