import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';
import ProjectsSection from '@/components/home/projects-section';
import TeamSection from '@/components/home/team-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import BlogSection from '@/components/home/blog-section';
import ContactSection from '@/components/home/contact-section';
import AboutSection from '@/components/home/about-section';
import BreakingSection from '@/components/home/breaking-section';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection></AboutSection>
      
      <div className='relative '>
        <ProjectsSection />
        <BreakingSection></BreakingSection>
        <ContactSection />
        <div className="absolute inset-0  overflow-hidden pointer-events-none   top-[84%] md:top-1/2 md:translate-y-[100px]">
          <div className="absolute w-[700px] md:w-[650px] h-[350px] md:h-[400px] rounded-full bg-[#7412FF]/20 top-40 md:-right-10 blur-3xl" />
          <div className="absolute w-[300px] md:w-[650px] h-[250px] md:h-[400px] rounded-full bg-[#7412FF]/20 top-40 md:-left-10 blur-3xl" />
        </div>


      </div>

      <TestimonialsSection />
      <Footer />
    </main>
  );
}