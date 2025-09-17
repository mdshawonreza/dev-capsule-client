import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectsGrid from '@/components/projects/projects-grid';
import TestimonialsSection from '@/components/home/testimonials-section';
import Image from 'next/image';
import imgDesign from "../../public/assets/Group 43.png";
import imgDesign2 from "../../public/assets/Group 44.png";
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import Link from 'next/link';


export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 relative">
        <div className="-z-10 hidden md:flex  absolute top-80 md:top-48 left-3 md:-left-32">
          <Image
            src={imgDesign}
            alt="Design Graphic"
            className="w-28 md:w-72 "
          />
        </div>
        <div className='flex justify-end items-start absolute top-[300px] md:top-[150px] lg:top-[300px] right-5 md:right-9'>
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
        <div className="-z-10 hidden md:flex  absolute top-1/2 md:top-[550px] right-0">
          <Image
            src={imgDesign2}
            alt="Design Graphic"
            className="w-[200px] md:w-[260px] "
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/20 md:bg-[#7412FF]/40 top-52 -right-32 blur-3xl" />
          <div className="absolute w-96 h-96 rounded-full bg-[#7412FF]/30 top-40 -left-10 blur-3xl" />
        </div>

        {/* Projects Hero */}
        <div className="md:max-w-2xl mx-auto text-center ">
          <div className="flex justify-center mt-6">
            <h3 className="text-sm md:text-xl text-[#7412FF] text-center font-medium px-6 py-2 bg-[#7412FF1A] rounded-full">
              Portfolio
            </h3>
          </div>
          <div className='flex justify-center mt-6'>
            <h3 className="text-2xl md:text-4xl  text-[#7412FF] text-center font-semibold px-6 py-2 bg-[#7412FF1A] rounded-full">
              Our Work Speaks for Itself
            </h3>
          </div>
        </div>
        {/* Projects Content */}
        <ProjectsGrid />

      </main>

      <TestimonialsSection></TestimonialsSection>

      <Footer />
    </div>
  );
}