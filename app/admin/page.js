"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Briefcase, FileText, Activity } from 'lucide-react';

export default function AdminDashboard() {
  // Mock data for demonstration
  const [stats, setStats] = useState([
    { name: 'Projects', value: 25, icon: Briefcase, color: 'bg-blue-500' },
    { name: 'Blog Posts', value: 14, icon: FileText, color: 'bg-purple-500' },
    { name: 'Team Members', value: 6, icon: Users, color: 'bg-amber-500' },
    { name: 'Active Clients', value: 12, icon: Activity, color: 'bg-green-500' },
  ]);
  
  const data = [
    { name: 'Jan', projects: 3 },
    { name: 'Feb', projects: 4 },
    { name: 'Mar', projects: 2 },
    { name: 'Apr', projects: 5 },
    { name: 'May', projects: 3 },
    { name: 'Jun', projects: 8 },
  ];
  
  const [recentProjects, setRecentProjects] = useState([
    { id: 1, name: 'TechHub E-commerce', client: 'TechHub Inc.', status: 'Completed', date: '2025-05-20' },
    { id: 2, name: 'Nomad Coffee Branding', client: 'Nomad Coffee', status: 'In Progress', date: '2025-05-15' },
    { id: 3, name: 'Altitude Athletic Campaign', client: 'Altitude Sports', status: 'In Progress', date: '2025-05-10' },
    { id: 4, name: 'Eco-Friendly Website', client: 'Green Earth', status: 'Planning', date: '2025-05-05' },
  ]);
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className={`${stat.color} rounded-full p-3 text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <h2 className="text-3xl font-bold">{stat.value}</h2>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Projects Overview</CardTitle>
            <CardDescription>Projects completed by month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Bar dataKey="projects" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Latest projects and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 p-4 font-medium text-sm bg-muted/50">
                <div className="col-span-2">Project</div>
                <div>Client</div>
                <div>Status</div>
                <div>Date</div>
              </div>
              <div className="divide-y">
                {recentProjects.map((project) => (
                  <div key={project.id} className="grid grid-cols-5 p-4 text-sm items-center">
                    <div className="col-span-2 font-medium">{project.name}</div>
                    <div className="text-muted-foreground">{project.client}</div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="text-muted-foreground">{project.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}