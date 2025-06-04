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
    title: 'TechHub E-commerce Platform',
    category: 'Web Development',
    description: 'A fully responsive e-commerce website with modern UI/UX design, seamless checkout process, and admin dashboard.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'techhub-ecommerce',
    status: 'Published',
    date: '2025-05-20'
  },
  {
    id: 2,
    title: 'Nomad Coffee Branding',
    category: 'Graphic Design',
    description: 'Complete brand identity design including logo, packaging, marketing materials, and social media assets.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'nomad-coffee-branding',
    status: 'Published',
    date: '2025-05-15'
  },
  {
    id: 3,
    title: 'Altitude Athletic Campaign',
    category: 'Motion Graphics',
    description: 'Dynamic motion graphics for a sports brand campaign, including animated logo reveals and social media content.',
    image: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'altitude-athletic-campaign',
    status: 'Draft',
    date: '2025-05-10'
  },
  {
    id: 4,
    title: 'Eco-Friendly Website',
    category: 'Web Development',
    description: 'A sustainable-themed website for an environmental organization, optimized for performance and accessibility.',
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'eco-friendly-website',
    status: 'Published',
    date: '2025-05-05'
  },
  {
    id: 5,
    title: 'Urban Festival Promotion',
    category: 'Video Editing',
    description: 'Promotional video content for a city-wide arts festival, including teasers, highlights, and social media clips.',
    image: 'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'urban-festival-promotion',
    status: 'Draft',
    date: '2025-04-28'
  }
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
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" /> Add New Project
          </Link>
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm rounded-full h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/projects/${project.id}`}>
                        <Pencil className="mr-2 h-4 w-4" /> Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/projects/${project.slug}`} target="_blank">
                        <Eye className="mr-2 h-4 w-4" /> Preview
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-destructive focus:text-destructive"
                      onClick={() => setDeleteConfirmId(project.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
                <span className="text-xs text-muted-foreground">{project.date}</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
              <p className="text-sm line-clamp-2">{project.description}</p>
            </div>
          </Card>
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