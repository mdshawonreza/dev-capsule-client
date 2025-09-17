"use client";

import { useState, useEffect } from 'react';
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
];

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://api.devcapsule.com/projects');
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter based on category
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="pb-16 pt-10 md:pb-20">
      <div className="max-w-[390px] md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading && <p className="text-center">Loading projects...</p>}
        {/* Error State */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id || project.slug}
                className="group bg-card rounded-[35px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={375}
                      className="w-[430px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="px-6 absolute bottom-14">
                  <div className="text-base font-medium mb-2 bg-[#7412FFBF] bg-opacity-50 px-4 py-1 rounded-full text-white">
                    <h3>{project.category}</h3>
                  </div>
                </div>

                <div className="px-6 absolute bottom-4">
                  <div className="text-base font-medium mb-2 bg-black bg-opacity-50 px-4 py-1 rounded-full text-white">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
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
