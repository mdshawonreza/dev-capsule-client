import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectsGrid from '@/components/projects/projects-grid';
import TestimonialsSection from '@/components/home/testimonials-section';
import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';

export default function ServicesPage() {
    //  const [isVisible, setIsVisible] = useState(false);
    
    //   useEffect(() => {
    //     setIsVisible(true);
    //   }, []);
    //   const ref = useRef(null);
    //   const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        
        {/* Projects Hero */}
        <div className="md:max-w-2xl mx-auto text-center ">
          <div className="flex justify-center mt-6">
            <h3 className="text-sm md:text-xl text-[#7412FF] text-center font-medium px-6 py-2 bg-[#7412FF1A] rounded-full">
              Portfolio
            </h3>
          </div>
          <div className='flex justify-center mt-6'>
            <h3 className="text-sm md:text-5xl  text-[#7412FF] text-center font-semibold px-6 py-2 bg-[#7412FF1A] rounded-full">
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