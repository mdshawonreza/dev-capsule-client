"use client";


import {
    Code,
    Palette,
    Search,
    Video,
    Zap,
    Users,
    Award,
    Target,
    CheckCircle,
    ArrowRight,
    Star,
    Globe,
    Lightbulb,
    Heart
} from 'lucide-react';
import Navbar from '@/components/navbar';
import TestimonialsSection from '@/components/home/testimonials-section';
import Footer from '@/components/footer';
import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";
import Image from 'next/image';
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('mission');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const services = [
        {
            icon: Code,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies"
        },
        {
            icon: Palette,
            title: "Graphics Design",
            description: "Creative visual solutions for branding, marketing, and digital media"
        },
        {
            icon: Search,
            title: "SEO Services",
            description: "Search engine optimization to boost your online visibility"
        },
        {
            icon: Video,
            title: "Video Editing",
            description: "Professional video production and post-production services"
        },
        {
            icon: Zap,
            title: "Motion Graphics",
            description: "Dynamic animations and motion design for engaging content"
        }
    ];

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "200+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" }
    ];

    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for perfection in every project we undertake"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Working closely with clients to achieve their vision"
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Staying ahead with cutting-edge technologies and trends"
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We love what we do and it shows in our work"
        }
    ];

    const teamMembers = [
        {
            name: "Alex Johnson",
            role: "Lead Developer",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
        },
        {
            name: "Sarah Chen",
            role: "Creative Director",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
        },
        {
            name: "Mike Rodriguez",
            role: "SEO Specialist",
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
        },
        {
            name: "Emma Wilson",
            role: "Video Editor",
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen ">
            <Navbar></Navbar>
            {/* Hero Section */}
            <div className="relative" >
                <div className=" hidden md:flex  absolute -bottom-[400px] md:top-1/2 -translate-y-[442px] right-0">
                    <Image
                        src={imgDesign2}
                        alt="Design Graphic"
                        className="w-[200px] md:w-[260px] -z-10"
                    />
                </div>
                <div className="-z-10 hidden md:flex   absolute top-40 md:top-80 left-3 md:left-5">
                    <Image
                        src={imgDesign}
                        alt="Design Graphic"
                        className="w-28 md:w-72 "
                    />
                </div>
                <div className='hidden md:flex  justify-end items-start absolute top-[300px] md:top-[300px] right-5 md:right-9'>
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





                <section className="relative pb-10 pt-24 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute  "></div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="relative max-w-7xl mx-auto text-center md:mt-10">
                        <div className="md:max-w-2xl mx-auto text-center ">
                            <div className='flex justify-center'>
                                <h3 className="text-sm md:text-4xl  text-[#7412FF] text-center font-semibold px-6 py-2 bg-[#7412FF1A] rounded-full">
                                    About Us
                                </h3>
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed md:mt-4">
                            We're a passionate team of digital innovators, transforming ideas into
                            exceptional digital experiences through cutting-edge technology and creative excellence.
                        </p>

                    </motion.div>

                </section>
                <div className="px-4 pt-4 pb-16 mx-auto sm:max-w-sm md:max-w-5xl md:px-24 lg:px-8 lg:pb-20">


                    <div className="grid max-w-5xl mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
                        <div className="space-y-6 sm:px-16">
                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">Custom Software</h6>
                                    <p className="text-sm text-gray-900">
                                        From concept to deployment, we build tailored software solutions that solve real business problems with scalability and performance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">Web Development</h6>
                                    <p className="text-sm text-gray-900">
                                        Our expert developers use modern frameworks like React, Next.js, and Node.js to build fast, secure, and responsive web apps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">UI/UX Design</h6>
                                    <p className="text-sm text-gray-900">
                                        We create user-focused designs that are both functional and visually appealing, ensuring seamless user experiences across all devices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 sm:px-16">
                            <div className="flex flex-col max-w-md sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">Cloud Solutions</h6>
                                    <p className="text-sm text-gray-900">
                                        Migrate, manage, and scale your infrastructure on the cloud with our expertise in AWS, Azure, and Google Cloud Platform.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col max-w-sm sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">Mobile App Development</h6>
                                    <p className="text-sm text-gray-900">
                                        We build powerful mobile applications using React Native and Flutter that deliver high performance and smooth user interaction.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col max-w-sm sm:flex-row">
                                <div className="mb-4 mr-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-xl font-bold leading-5">Ongoing Support</h6>
                                    <p className="text-sm text-gray-900">
                                        Our job doesn't end after delivery. We offer long-term support and maintenance to ensure your tech stays ahead of the curve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="py-10 px-4 sm:px-6 lg:px-8 ">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8">

                            <div className='flex justify-center'>
                                <div className="border-2 text-3xl md:text-4xl font-semibold border-[#7412FF] text-[#7412FF] md:px-8 px-6 py-2 md:py-2 rounded-full">
                                    <h3> What We Do</h3>
                                </div>
                            </div>
                            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto ">
                            Comprehensive digital solutions tailored to your needs
                        </p> */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Mission, Vision, Values Tabs */}
                <section className="pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 mt-14">
                            <div className='flex justify-center mb-3'>
                                <div className="border-2 text-3xl md:text-4xl font-semibold border-[#7412FF] text-[#7412FF] md:px-8 px-6 py-2 md:py-2 rounded-full">
                                    <h3> Our Foundation</h3>
                                </div>
                            </div>
                            {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Our Foundation
                            </h2> */}
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Built on strong principles that guide everything we do
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8">
                                    <div className="space-y-4">
                                        {['mission', 'vision', 'values'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeTab === tab
                                                    ? 'bg-white text-blue-600 shadow-lg'
                                                    : 'text-white hover:bg-white/10'
                                                    }`}
                                            >
                                                <div className="font-semibold text-lg capitalize">{tab}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:w-2/3 p-8 md:p-12">
                                    {activeTab === 'mission' && (
                                        <div className="space-y-6">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                To empower businesses and individuals with innovative digital solutions that
                                                drive growth, enhance user experiences, and create lasting impact in the digital world.
                                            </p>
                                            <div className="space-y-3">
                                                {[
                                                    "Deliver exceptional quality in every project",
                                                    "Foster long-term partnerships with our clients",
                                                    "Stay at the forefront of technological innovation"
                                                ].map((item, index) => (
                                                    <div key={index} className="flex items-center space-x-3">
                                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'vision' && (
                                        <div className="space-y-6">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                To be the leading digital agency that transforms how businesses connect with
                                                their audiences through innovative technology, creative design, and strategic thinking.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                                <div className="bg-blue-50 p-4 rounded-xl">
                                                    <Globe className="w-8 h-8 text-blue-600 mb-2" />
                                                    <h4 className="font-semibold text-gray-900">Global Impact</h4>
                                                    <p className="text-sm text-gray-600">Reaching clients worldwide</p>
                                                </div>
                                                <div className="bg-purple-50 p-4 rounded-xl">
                                                    <Star className="w-8 h-8 text-purple-600 mb-2" />
                                                    <h4 className="font-semibold text-gray-900">Industry Leader</h4>
                                                    <p className="text-sm text-gray-600">Setting new standards</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'values' && (
                                        <div className="space-y-6">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
                                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                                The core principles that guide our decisions and shape our culture.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {values.map((value, index) => (
                                                    <div key={index} className="flex items-start space-x-4">
                                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                                                            <value.icon className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                                                            <p className="text-sm text-gray-600">{value.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Stats Section */}
                {/* <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-gradient-to-br from-[#7412FF] to-[#5c21af] text-white rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                                        <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                                        <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Services Section */}


                {/* Team Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className='flex justify-center mb-3'>
                                <div className="border-2 text-3xl md:text-4xl font-semibold border-[#7412FF] text-[#7412FF] md:px-8 px-6 py-2 md:py-2 rounded-full">
                                    <h3> Meet Our Team</h3>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                               
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Talented professionals dedicated to bringing your vision to life
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="group text-center">
                                    <div className="relative mb-6">
                                        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}

            <TestimonialsSection></TestimonialsSection>

            <Footer />
        </div>
    );
}