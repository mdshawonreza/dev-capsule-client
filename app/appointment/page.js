"use client";



import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";
import Swal from 'sweetalert2'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Send } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import emailjs from "@emailjs/browser";


export default function AppointmentPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState(1);
    

    // Step 1 form states
    const [area, setArea] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [date, setDate] = useState(null);

    // Step 2 form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleNext = () => {
        if (!area || !timeZone || !preferredTime || !date) {
            setMessage('⚠️ Please fill all fields in Step 1.');
            return;
        }
        setMessage('');
        setStep(2);
    };

    const handleSchedule = async () => {
        if (!name || !email || !details) {
            setMessage('⚠️ Please fill all fields in Step 2.');
            return;
        }
        setMessage('');
        setLoading(true);

        const appointmentData = {
            area,
            timeZone,
            preferredTime,
            date: date.toISOString().split('T')[0],
            name,
            email,
            details,
            status: 'pending',
        };
        console.log(appointmentData)

        //     emailjs.send(
        //   'service_z9grx78',     // e.g. service_abc123
        //   'YOUR_TEMPLATE_ID',    // e.g. template_xyz789
        //   appointmentData,
        //   '_kJS9IiTVrRw4fRz3'      // e.g. _Gx3T3LAbCdEfGH
        // ).then((result) => {
        //   alert('Message sent successfully!');
        // //   setFormData({
        // //     full_name: '',
        // //     email: '',
        // //     service: '',
        // //     budget: '',
        // //     description: '',
        // //   });
        // }).catch((error) => {
        //   alert('Failed to send message.');
        //   console.error(error);
        // });
        emailjs
            .send(
                "service_lqk4fnc",       // তোমার Service ID
                "template_sl2dvc8",      // তোমার Template ID
                appointmentData,
                "Lll9_5TRi66kgrqgP"      // তোমার Public Key
            )
            .then((result) => {
                // Swal.fire({
                //     icon: "success",
                //      position: "center",
                //     title: "✅ Appointment request sent!",
                //     text: "Thank you for scheduling with us. We’ll contact you soon.",
                //     showConfirmButton: false,
                //     timer: 1500,
                // });

                // ফর্ম রিসেট
                setArea("");
                setTimeZone("");
                setPreferredTime("");
                setDate(null);
                setName("");
                setEmail("");
                setDetails("");

                // setTimeout(() => {
                //     router.push("/");
                // }, 2000);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                     position: "center",
                    title: " Failed to send request",
                    text: "Something went wrong. Please try again later.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });

        try {
            const res = await fetch('http://api.devcapsule.com/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appointmentData),
            });

            if (res.ok) {
                // alert('Appointment scheduled successfully!');
                // Swal.fire({
                //     // position: "top-end",
                //     icon: "success",
                //     title: "Appointment scheduled successfully!",
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                 Swal.fire({
                    icon: "success",
                     position: "center",
                    title: " Appointment request sent!",
                    text: "Thank you for scheduling with us. We’ll contact you soon.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push('/');
            } else {
                setMessage('Failed to schedule appointment. Please try again.');
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />





            <main className="flex-1 relative pb-16">
                <div className="   absolute -bottom-80 right-0">
                    <Image
                        src={imgDesign2}
                        alt="Design Graphic"
                        className="w-[200px] md:w-[260px] -z-10"
                    />
                </div>
                <div className="-z-10   absolute top-80 left-5">
                    <Image
                        src={imgDesign}
                        alt="Design Graphic"
                        className="w-28 md:w-72 "
                    />
                </div>
                <div className='hidden md:flex justify-end items-start absolute top-[300px] right-9'>
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

                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/20 md:bg-[#7412FF]/40 top-52 -right-32 blur-3xl" />
                    <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/30 top-40 -left-10 blur-3xl" />
                </div>



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

                                    {/* <h1 className="text-3xl font-bold text-gray-900 mt-4">
                                        {step === 1 ? 'Schedule a 30 Minutes Meeting' : 'Enter Your Details'}
                                    </h1> */}
                                </div>
                            </motion.div>
                        </div>


                    </div>
                    {message && (
                        <p className={`mb-6 text-center ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                            {message}
                        </p>
                    )}
                </section>


                <div className=' max-w-[370px] md:max-w-3xl mx-auto pt-5 md:pt-5 mb-8 bg-white  shadow-xl rounded-2xl px-4 md:px-10 z-40 mt-7 pb-9'>

                    {step === 1 && (
                        <div>
                            <div className="max-w-sm md:max-w-4xl text-center ">

                                <h1 className="text-3xl md:text-3xl text-center font-bold text-[#7412FF] mb-7">
                                    Select Date and Time
                                </h1>
                            </div>
                            <div className='flex justify-center'>

                                <div className="flex  flex-col md:flex-row  gap-12 justify-between items-start w-full">

                                    <div className="space-y-5 -mt-4 w-full  md:w-2/3 ">
                                        {/* Area */}
                                        <div className="mb-3 w-full">
                                            <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                                <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                                    Area
                                                </legend>
                                                <select
                                                    className="w-full pr-4 rounded-md focus:outline-none transition-colors text-base"
                                                    // defaultValue=""
                                                    value={area}
                                                    onChange={e => setArea(e.target.value)}
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
                                                    // defaultValue=""
                                                    value={timeZone}
                                                    onChange={e => setTimeZone(e.target.value)}
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
                                                    // 
                                                    value={preferredTime}
                                                    onChange={e => setPreferredTime(e.target.value)}
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
                                    <div className="w-full md:w-1/3 flex justify-center">
                                        <DatePicker
                                            //    selected={selectedDate}
                                            //    onChange={(date) => setSelectedDate(date)}
                                            // inline
                                            // className="text-base"
                                            selected={date}
                                            onChange={date => setDate(date)}
                                            inline
                                            className="text-base"
                                            minDate={new Date()}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button onClick={handleNext} className='w-full py-2 bg-[#7412FF] text-white flex justify-center items-center gap-1 rounded-xl'><Send className="w-4 h-4 mr-2" /> Next </button>

                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="">
                            <div className="max-w-sm md:max-w-4xl text-center ">

                                <h1 className="text-3xl md:text-3xl text-center font-bold text-[#7412FF] mb-7">
                                    Enter Details
                                </h1>
                            </div>
                            <div className="flex flex-col-reverse md:flex-row justify-between gap-7 md:gap-0">
                                <div className="space-y-6 md:w-2/3">
                                    <div className="mb-3">
                                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                            <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                                Full Name
                                            </legend>

                                            <input
                                                id="name"
                                                type="text"

                                                value={name}
                                                onChange={e => setName(e.target.value)}

                                                placeholder="Enter your full name"
                                                className={`w-full  pr-4    
                             rounded-md focus:outline-none   transition-colors text-base`}
                                            />
                                        </fieldset>

                                    </div>
                                    {/* <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7412FF]"
                                    /> */}

                                    <div className="mb-3">
                                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                            <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                                Email Address
                                            </legend>

                                            <input
                                                id="email"
                                                type="email"

                                                value={email}
                                                onChange={e => setEmail(e.target.value)}


                                                placeholder="Enter your email"
                                                className={`w-full  pr-4    
                             rounded-md focus:outline-none   transition-colors text-base`}
                                            />
                                        </fieldset>

                                    </div>
                                    {/* <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7412FF]"
                                    /> */}

                                    <div className="mb-3">
                                        <fieldset className="border-2 border-[#7412FF] rounded-xl px-4 pt-1 pb-3">
                                            <legend className="text-[#7412FF] font-semibold text-xl px-2">
                                                Project Description
                                            </legend>

                                            <textarea
                                                id="name"
                                                type="text"
                                                placeholder="Details"
                                                value={details}
                                                onChange={e => setDetails(e.target.value)}
                                                rows={2}



                                                className={`w-full  pr-4    
                             rounded-md focus:outline-none   transition-colors text-base`}
                                            />
                                        </fieldset>

                                    </div>
                                    {/* <textarea
                                        placeholder="Details"
                                        value={details}
                                        onChange={e => setDetails(e.target.value)}
                                        rows={4}
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7412FF]"
                                    /> */}

                                    <div className="flex justify-between mt-4">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="px-6 py-2 rounded-xl border border-[#7412FF] text-[#7412FF] hover:bg-[#7412FF]/10 transition"
                                            disabled={loading}
                                        >
                                            Back
                                        </button>

                                        <button
                                            onClick={handleSchedule}
                                            disabled={loading}
                                            className="px-6 py-2 bg-[#7412FF] text-white rounded-xl flex items-center gap-2 hover:bg-[#5e0fdb] transition disabled:opacity-60"
                                        >
                                            {loading ? 'Scheduling...' : 'Schedule'} <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-1/3  flex justify-center md:justify-start">
                                    <div className="md:pl-8 md:pt-4">
                                        <div>
                                            <h3 className="text-base font-bold text-[#7412FF]">Selected Date</h3>
                                            <h3 className="text-xl font-semibold mt-1">
                                                {date ? date.toLocaleDateString() : 'No date selected'}
                                            </h3>
                                        </div>

                                        <div className="mt-4">
                                            <h3 className="text-base font-bold  text-[#7412FF]">Selected Time</h3>
                                            <h3 className="text-xl font-semibold mt-1">
                                                {preferredTime ? preferredTime.toUpperCase() : 'No time selected'}
                                            </h3>
                                        </div>

                                        <div className="mt-4">
                                            <h3 className="text-base font-bold  text-[#7412FF] ">Time Zone</h3>
                                            <h3 className="text-xl font-semibold mt-1">
                                                {timeZone
                                                    ? timeZone === 'gmt6'
                                                        ? 'GMT+6 (Dhaka)'
                                                        : timeZone === 'gmt1'
                                                            ? 'GMT+1 (Berlin)'
                                                            : timeZone === 'gmt-5'
                                                                ? 'GMT-5 (New York)'
                                                                : timeZone
                                                    : 'No timezone selected'}
                                            </h3>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    )}
                </div>





            </main>
            <Footer />
        </div>
    );
}
