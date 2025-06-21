"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search, ChevronRight } from 'lucide-react';

// Blog categories
const categories = [
  'All',
  'Web Development',
  'Design',
  'Digital Marketing',
  // 'SEO',
  // 'Motion Graphics',
  // 'Industry News'
];

// Sample blog posts data
const blogPostsData = [
  {
    id: 1,
    title: '10 Web Design Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with our roundup of the most exciting web design trends that will dominate the digital landscape this year.',
    category: 'Design',
    date: 'May 15, 2025',
    author: 'Alex Rivera',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'web-design-trends-2025',
    featured: true
  },
  {
    id: 2,
    title: 'How to Create an Effective SEO Strategy',
    excerpt: 'Learn the key components of a successful SEO strategy that will improve your websites visibility and drive organic traffic.',
    category: 'SEO',
    date: 'April 28, 2025',
    author: 'Marcus Johnson',
    authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'effective-seo-strategy',
    featured: true
  },
  {
    id: 3,
    title: 'The Power of Motion Graphics in Marketing',
    excerpt: 'Discover how motion graphics can elevate your marketing campaigns and create more engaging content for your audience.',
    category: 'Motion Graphics',
    date: 'April 10, 2025',
    author: 'Priya Patel',
    authorImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image: 'https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'motion-graphics-marketing',
    featured: false
  },
  {
    id: 4,
    title: 'Mobile-First Design: Why It Matters',
    excerpt: 'With mobile users accounting for over 60% of web traffic, mobile-first design has never been more important. Heres why and how to implement it.',
    category: 'Web Development',
    date: 'March 22, 2025',
    author: 'Sarah Chen',
    authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'mobile-first-design',
    featured: false
  },
  {
    id: 5,
    title: "Understanding Google Analytics 5: A Beginner Guide ",
    excerpt: 'Get to grips with Google Analytics 5 and learn how to leverage its powerful new features to gain better insights about your website visitors.',
    category: 'Digital Marketing',
    date: 'March 15, 2025',
    author: 'Marcus Johnson',
    authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'google-analytics-5-guide',
    featured: false
  },
  {
    id: 6,
    title: 'The Future of Web Development: What to Expect in 2026',
    excerpt: 'From AI-powered coding assistants to WebAssembly, explore the emerging technologies that will shape web development in the coming year.',
    category: 'Web Development',
    date: 'March 5, 2025',
    author: 'Alex Rivera',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'future-web-development-2026',
    featured: false
  }
];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter posts based on active category and search term
  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Extract featured posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  return (
    <section className="pt-8 pb-16 md:pb-20 ">

      <div className="max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen z-20">
        {/* Featured Posts (only shown when no filters applied) */}
        {/* {(activeCategory === 'All' && !searchTerm) && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group bg-card rounded-lg overflow-hidden shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      </div>
                      <div>
                        <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium mb-4">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image 
                              src={post.authorImage} 
                              alt={post.author} 
                              width={32} 
                              height={32} 
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
        
        {/* Search and Categories */}
        <div className="mb-5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          
          <div className="flex flex-wrap gap-2 justify-center flex-1 ">
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
          <div className="relative max-w-xs mx-auto -mt-2">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* All Posts or Filtered Posts */}
        <div>
          {/* <h2 className="text-2xl font-bold mb-8">
            {searchTerm 
              ? `Search Results for "${searchTerm}"` 
              : activeCategory !== 'All' 
                ? `${activeCategory} Articles` 
                : 'All Articles'}
          </h2> */}
          
          <div className="grid grid-cols-1   gap-8">
            {(searchTerm || activeCategory !== 'All' ? filteredPosts : regularPosts).map((post) => (
              <div key={post.id} className="group  rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row p-5 z-10 bg-white">
                <div className="relative overflow-hidden md:w-2/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={375}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  {/* <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                      {post.category}
                    </span>
                  </div> */}
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {/* <Link href={`/blog/${post.slug}`}>{post.title}</Link> */}
                    {post.title}
                  </h3>
                  <p className="text-black text-base mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className='flex gap-3'>
                    {/* <button className="hover:bg-[#7412FF] text-[#7412FF] hover:text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Contact
                      </button> */}
                    <button className="bg-[#7412FF]  text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Adobe XD
                      </button>
                    <button className="bg-[#7412FF]  text-white px-3 md:px-4 py-1 md:py-1 rounded-full transition duration-300 border-2 border-[#7412FF] text-sm md:text-base font-semibold flex justify-center items-center gap-2">
                        Figma
                      </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image 
                          src={post.authorImage} 
                          alt={post.author} 
                          width={32} 
                          height={32} 
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm">{post.author}</span>
                    </div> */}
                    {/* <Button variant="link" className="p-0 h-auto font-medium text-primary" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-card rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                No articles matching your search criteria were found. Try adjusting your filters.
              </p>
              <Button onClick={() => {setActiveCategory('All'); setSearchTerm('');}}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}