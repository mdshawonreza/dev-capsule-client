"use client"

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

// Team member card component
const TeamMemberCard = ({ image, name, role, bio, social, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] bg-muted">
          <Image
            src={image}
            alt={name}
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary mt-1">{role}</p>
        <p className="text-muted-foreground mt-3 text-sm">{bio}</p>
        <div className="flex space-x-3 mt-4">
          {social.twitter && (
            <Link href={social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
          {social.linkedin && (
            <Link href={social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
          {social.github && (
            <Link href={social.github} className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const teamMembers = [
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Alex Rivera",
      role: "Creative Director",
      bio: "With over 10 years of experience in design and branding, Alex leads our creative vision and strategy.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sarah Chen",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in React and Node.js with a passion for clean, efficient code.",
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Marcus Johnson",
      role: "SEO Specialist",
      bio: "Digital marketing expert focused on driving organic growth through data-driven SEO strategies.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Priya Patel",
      role: "Motion Designer",
      bio: "Award-winning motion graphics artist with expertise in 2D/3D animation and visual storytelling.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
  ];
  
  return (
    <section id="team" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our talented team of digital experts combines creativity, technical expertise, and strategic thinking to deliver exceptional results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}