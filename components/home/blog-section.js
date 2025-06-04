"use client"

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar } from 'lucide-react';

// Blog card component
const BlogCard = ({ image, title, excerpt, date, slug, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="mt-2 text-muted-foreground line-clamp-2">{excerpt}</p>
        <Button variant="link" className="p-0 h-auto mt-2 font-medium text-primary" asChild>
          <Link href={`/blog/${slug}`}>
            Read More <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const posts = [
    {
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "10 Web Design Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with our roundup of the most exciting web design trends that will dominate the digital landscape this year.",
      date: "May 15, 2025",
      slug: "web-design-trends-2025"
    },
    {
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How to Create an Effective SEO Strategy",
      excerpt: "Learn the key components of a successful SEO strategy that will improve your website's visibility and drive organic traffic.",
      date: "April 28, 2025",
      slug: "effective-seo-strategy"
    },
    {
      image: "https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The Power of Motion Graphics in Marketing",
      excerpt: "Discover how motion graphics can elevate your marketing campaigns and create more engaging content for your audience.",
      date: "April 10, 2025",
      slug: "motion-graphics-marketing"
    }
  ];
  
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with our latest articles, tips, and insights on web development, design, and digital marketing.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}