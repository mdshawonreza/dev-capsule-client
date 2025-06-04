"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, FileText, Users, Settings, LogOut, ChevronRight, ChevronLeft } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => setCollapsed(!collapsed);
  
  const routes = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: LayoutDashboard
    },
    {
      name: 'Projects',
      path: '/admin/projects',
      icon: Briefcase
    },
    {
      name: 'Blog Posts',
      path: '/admin/blog',
      icon: FileText
    },
    {
      name: 'Team',
      path: '/admin/team',
      icon: Users
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: Settings
    }
  ];
  
  return (
    <aside className={cn(
      "bg-card border-r border-border h-screen transition-all duration-300 flex flex-col",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link href="/admin" className={cn(
          "flex items-center",
          collapsed && "justify-center"
        )}>
          {collapsed ? (
            <span className="text-xl font-bold">PP</span>
          ) : (
            <span className="text-xl font-bold">PixelPulse Admin</span>
          )}
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = pathname === route.path;
            
            return (
              <li key={route.path}>
                <Link 
                  href={route.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    collapsed && "justify-center"
                  )}
                >
                  <Icon className={cn("h-5 w-5", collapsed ? "mx-0" : "mr-3")} />
                  {!collapsed && <span>{route.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <Button 
          variant="ghost" 
          onClick={logout} 
          className={cn(
            "flex items-center text-muted-foreground w-full", 
            collapsed && "justify-center"
          )}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "mx-0" : "mr-3")} />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </aside>
  );
}