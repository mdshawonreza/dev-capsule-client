"use client"

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideMonitorSmartphone, PenTool, Video, BarChart3, FilmIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Service card component
const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card hover:bg-accent/50 border border-border hover:border-primary/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
    >
      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="link" className="p-0 h-auto font-medium text-primary">
        Learn more →
      </Button>
    </motion.div>
  );
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const services = [
    {
      icon: LucideMonitorSmartphone,
      title: "Web Development",
      description: "Responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
      delay: 0.1
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Stunning visuals including logos, branding materials, marketing assets, and UI/UX design to elevate your brand.",
      delay: 0.2
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services to create compelling content for marketing, social media, and promotional purposes.",
      delay: 0.3
    },
    {
      icon: FilmIcon,
      title: "Motion Graphics",
      description: "Eye-catching animations and motion graphics that bring your brand and messages to life with movement and style.",
      delay: 0.1
    },
    {
      icon: Sparkles,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your visibility online and drive organic traffic to your website.",
      delay: 0.2
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns across multiple channels to connect with your audience and grow your business.",
      delay: 0.3
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}