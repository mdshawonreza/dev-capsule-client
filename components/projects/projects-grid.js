"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Project categories
const categories = [
  'All',
  'UI/UX Design',
  'Web Development',
  'SaaS',
  'E-Commerce',
  // 'Graphic Design',
  // 'Motion Graphics',
  // 'Video Editing',
  // 'SEO & Marketing'
];

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: 'TechHub E-commerce ',
    category: 'Web Development',
    description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
    image: 'https://i.ibb.co/tRxDP7X/Rectangle-15.png',
    slug: 'techhub-ecommerce'
  },
  {
    id: 2,
    title: 'Nomad  Branding',
    category: 'UI/UX Design',
    description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
    image: 'https://i.ibb.co/k2C8WV2T/Rectangle-14.png',
    slug: 'nomad-coffee-branding'
  },
  {
    id: 3,
    title: 'Altitude Athletic ',
    category: 'SaaS',
    description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
    image: 'https://i.ibb.co/Pv1d5TGp/Rectangle-11.png',
    slug: 'altitude-athletic-campaign'
  },
  {
    id: 4,
    title: 'Eco-Friendly Website',
    category: 'Web Development',
    description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
    image: 'https://i.ibb.co/NddHvYhB/Rectangle-12.png',
    slug: 'eco-friendly-website'
  },
  {
    id: 5,
    title: 'Urban  Promotion',
    category: 'E-Commerce',
    description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
    image: 'https://i.ibb.co/MxkmSTf7/Rectangle-13.png',
    slug: 'urban-festival-promotion'
  },
  {
    id: 6,
    title: 'Healthify App',
    category: 'Web Development',
    description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
    image: 'https://i.ibb.co/tRxDP7X/Rectangle-15.png',
    slug: 'healthify-app'
  },
  // {
  //   id: 7,
  //   title: 'Luxury Resort Rebrand',
  //   category: 'UI/UX Design',
  //   description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
  //   image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   slug: 'luxury-resort-rebrand'
  // },
  // {
  //   id: 8,
  //   title: 'E-learning Platform SEO',
  //   category: 'E-Commerce',
  //   description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
  //   image: 'https://images.pexels.com/photos/5428027/pexels-photo-5428027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   slug: 'elearning-platform-seo'
  // },
  // {
  //   id: 9,
  //   title: 'Product Animation Series',
  //   category: 'SaaS',
  //   description: "A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.",
  //   image: 'https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   slug: 'product-animation-series'
  // }
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="pb-16 pt-10 md:pb-20 ">
      <div className="max-w-[390px] md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2 "
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-card rounded-[35px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] bg-muted ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={375}
                    className="w-[430px]  object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              
              <div className="px-6 absolute bottom-14">



               <div className='text-base font-medium mb-2   bg-[#7412FFBF] bg-opacity-50 px-4 py-1 rounded-full text-white '>
                <h3 className="">
                  {project.category}
                </h3>

              </div>


              </div>

              <div className="px-6 absolute bottom-4">



                <div className='text-base font-medium mb-2  transition-colors bg-black bg-opacity-50 px-4 py-1 rounded-full text-white '>
                  <h3 className="">
                    {project.title}
                  </h3>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">No projects matching the selected category were found.</p>
            <Button onClick={() => setActiveCategory('All')}>View All Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
}