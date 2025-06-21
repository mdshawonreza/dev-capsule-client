"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, MoreVertical, Pencil, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';

// Sample projects data (same as in the projects-grid.js)
const initialProjects = [
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
];

export default function AdminProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Filter projects based on search term and active tab
  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'published' && project.status === 'Published') ||
      (activeTab === 'drafts' && project.status === 'Draft');

    return matchesSearch && matchesTab;
  });

  // Delete a project
  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id));
    setDeleteConfirmId(null);
    toast.success('Project deleted successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <Button >
          {/* <Link href="/admin/projects/new"></Link>  asChild */}
         
            <Plus className="mr-2 h-4 w-4" /> Add New Project
          
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
        </div>

        {/* <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
        </Tabs> */}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="text-center py-16 bg-card rounded-lg border">
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm
              ? "No projects matching your search criteria."
              : "No projects in this category yet."}
          </p>
          <Button asChild>
            <Link href="/admin/projects/new">
              <Plus className="mr-2 h-4 w-4" /> Add New Project
            </Link>
          </Button>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirmId} onOpenChange={() => setDeleteConfirmId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this project?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the project.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => handleDelete(deleteConfirmId)}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}