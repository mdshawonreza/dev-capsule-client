// "use client";

// import { useAuth } from '@/lib/auth';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { Bell, Sun, Moon, Laptop, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useTheme } from '@/components/theme-provider';
// import { useState } from 'react';

// export default function AdminHeader({ onToggleSidebar }) {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { user } = useAuth();
//   const { theme, setTheme } = useTheme();

//   const toggleMobile = () => {
//     setMobileOpen(!mobileOpen);
//     if (onToggleSidebar) onToggleSidebar(); // optional: link with sidebar
//   };

//   return (
//     <header className="bg-background border-b border-border py-3 px-4 sticky top-0 z-20">
//       <div className="flex items-center justify-between">
//         {/* Mobile hamburger + logo */}
//         <div className="flex items-center lg:hidden">
//           <Button variant="ghost" size="icon" onClick={toggleMobile} className="mr-2">
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </Button>
//           <span className="text-xl font-bold">Dev Capsule</span>
//         </div>

//         {/* Title (always visible) */}
//         <h1 className="text-lg font-semibold text-red-800 flex-1 text-center lg:text-left">
//           Admin Panel
//         </h1>

//         {/* Right actions */}
//         <div className="flex items-center space-x-4">
//           {/* Theme toggle */}
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() =>
//               setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light")
//             }
//           >
//             {theme === "light" ? (
//               <Sun className="h-5 w-5" />
//             ) : theme === "dark" ? (
//               <Moon className="h-5 w-5" />
//             ) : (
//               <Laptop className="h-5 w-5" />
//             )}
//             <span className="sr-only">Toggle theme</span>
//           </Button>

//           {/* Notifications */}
//           <Button variant="ghost" size="icon">
//             <Bell className="h-5 w-5" />
//             <span className="sr-only">Notifications</span>
//           </Button>

//           {/* User avatar */}
//           <div className="flex items-center space-x-2">
//             <Avatar>
//               <AvatarFallback>{user?.name ? user.name.charAt(0) : 'A'}</AvatarFallback>
//             </Avatar>
//             <div className="hidden md:block text-sm">
//               <p className="font-medium">{user?.name || 'Admin'}</p>
//               <p className="text-xs text-muted-foreground">{user?.email}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Optional mobile open state info */}
//       {mobileOpen && (
//         <div className="lg:hidden mt-2 text-sm text-muted-foreground text-center">
//           Sidebar menu open
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import { useAuth } from "@/lib/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Sun, Moon, Laptop, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";
import { LayoutDashboard, Briefcase, FileText, Users, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from "next/navigation";
import Link from 'next/link';
// import { useAuth } from '@/lib/auth';


export default function AdminHeader({ onToggleSidebar }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
 const { logout } = useAuth();
  // const toggleMobile = () => {
  //   setMobileOpen(!mobileOpen);
  //   if (onToggleSidebar) onToggleSidebar();
  // };
    const routes = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Projects', path: '/admin/projects', icon: Briefcase },
    { name: 'Appointments', path: '/admin/appointment', icon: FileText },
    { name: 'Team', path: '', icon: Users },
    { name: 'Settings', path: '', icon: Settings }
  ];
    const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-background border-b border-border py-3 px-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        
        {/* === MOBILE HEADER LEFT SIDE === */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobile}
            className="mr-2"
          >
            {mobileOpen ? <X  size={20} /> : <Menu size={20} />}
          </Button>
          <aside className={cn(
                    "bg-card border-r border-border h-screen flex flex-col transition-all duration-300",
                    "w-64 lg:w-64",
                    mobileOpen ? "fixed top-0 left-0 z-50" : "hidden lg:flex lg:static"
                )}>
                  <nav className="flex-1 mt-10 overflow-y-auto relative">
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
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span>{route.name}</span>
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
            className="flex items-center text-muted-foreground w-full"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Log out</span>
          </Button>
        </div>
                </aside>
          <span className="text-xl font-bold">Dev Capsule</span>
        </div>
        

        {/* === PAGE TITLE (Always Visible) === */}
        <h1 className="text-lg font-semibold text-red-800 flex-1 text-center lg:text-left">
          Admin Panel
        </h1>

        {/* === RIGHT ACTION BUTTONS === */}
        <div className="flex items-center space-x-4">
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(
                theme === "light"
                  ? "dark"
                  : theme === "dark"
                  ? "system"
                  : "light"
              )
            }
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : theme === "dark" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Laptop className="h-5 w-5" />
            )}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Avatar + Info */}
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarFallback>
                {user?.name ? user.name.charAt(0) : "A"}
              </AvatarFallback>
            </Avatar>

            <div className="hidden md:block text-sm">
              <p className="font-medium">{user?.name || "Admin"}</p>
              <p className="text-xs text-muted-foreground">
                {user?.email || "admin@example.com"}
              </p>
            </div>
          </div>
        </div>
      </div>
      

      {/* Optional mobile info */}
      {/* {mobileOpen && (
        <div className="lg:hidden mt-2 text-sm text-muted-foreground text-center">
          Sidebar menu open
        </div>
      )} */}
      {mobileOpen && <div className="fixed inset-0 bg-black/40 lg:hidden" onClick={toggleMobile} />}
    </header>
  );
}
