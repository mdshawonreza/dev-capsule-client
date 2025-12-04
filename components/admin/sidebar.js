// "use client"

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { LayoutDashboard, Briefcase, FileText, Users, Settings, LogOut, ChevronRight, ChevronLeft } from 'lucide-react';
// import { useAuth } from '@/lib/auth';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// export default function AdminSidebar() {
//   const pathname = usePathname();
//   const { logout } = useAuth();
//   const [collapsed, setCollapsed] = useState(false);
  
//   const toggleSidebar = () => setCollapsed(!collapsed);
  
//   const routes = [
//     {
//       name: 'Dashboard',
//       path: '/admin',
//       icon: LayoutDashboard
//     },
//     {
//       name: 'Projects',
//       path: '/admin/projects',
//       icon: Briefcase
//     },
//     {
//       name: 'Appointments',
//       path: '/admin/appointment',
//       icon: FileText
//     },
//     {
//       name: 'Team',
//       path: '',
//       icon: Users
//     },
//     {
//       name: 'Settings',
//       path: '',
//       icon: Settings
//     }
//   ];
  
//   return (
//     <aside className={cn(
//       "bg-card border-r border-border h-screen transition-all duration-300 flex flex-col",
//       collapsed ? "w-20" : "w-64"
//     )}>
//       <div className="flex items-center justify-between p-4 border-b border-border">
//         <Link href="/admin" className={cn(
//           "flex items-center",
//           collapsed && "justify-center"
//         )}>
//           {collapsed ? (
//             <span className="text-xl font-bold">DC</span>
//           ) : (
//             <span className="text-xl font-bold">Dev Capsule</span>
//           )}
//         </Link>
//         <Button variant="ghost" size="icon" onClick={toggleSidebar}>
//           {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//         </Button>
//       </div>
      
//       <nav className="flex-1 pt-4 overflow-y-auto">
//         <ul className="space-y-2 px-3">
//           {routes.map((route) => {
//             const Icon = route.icon;
//             const isActive = pathname === route.path;
            
//             return (
//               <li key={route.path}>
//                 <Link 
//                   href={route.path}
//                   className={cn(
//                     "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
//                     isActive 
//                       ? "bg-primary/10 text-primary" 
//                       : "text-muted-foreground hover:bg-muted hover:text-foreground",
//                     collapsed && "justify-center"
//                   )}
//                 >
//                   <Icon className={cn("h-5 w-5", collapsed ? "mx-0" : "mr-3")} />
//                   {!collapsed && <span>{route.name}</span>}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
      
//       <div className="p-4 border-t border-border">
//         <Button 
//           variant="ghost" 
//           onClick={logout} 
//           className={cn(
//             "flex items-center text-muted-foreground w-full", 
//             collapsed && "justify-center"
//           )}
//         >
//           <LogOut className={cn("h-5 w-5", collapsed ? "mx-0" : "mr-3")} />
//           {!collapsed && <span>Log out</span>}
//         </Button>
//       </div>
//     </aside>
//   );
// }


"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, FileText, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const routes = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Projects', path: '/admin/projects', icon: Briefcase },
    { name: 'Appointments', path: '/admin/appointment', icon: FileText },
    { name: 'Team', path: '', icon: Users },
    { name: 'Settings', path: '', icon: Settings }
  ];

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile top bar with smaller menu icon */}
      {/* <div className="  lg:hidden flex  justify-between  border-b border-border bg-card">
        <Button variant="ghost" size="icon" onClick={toggleMobile} className="mr-2">
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
        <span className="text-xl hidden md:flex font-bold">Dev Capsule</span>
      </div> */}

      {/* Sidebar for medium/large and mobile overlay */}
      <aside className={cn(
          "bg-card border-r border-border h-screen flex flex-col transition-all duration-300",
          "w-64 lg:w-64",
          mobileOpen ? "fixed top-0 left-0 z-50" : "hidden lg:flex lg:static"
      )}>
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-border">
          <Link href="/admin" className="flex items-center">
            <span className="text-xl font-bold ">Dev Capsule</span>
          </Link>
        </div>

        {/* Nav */}
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

        {/* Logout */}
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

      {/* Mobile backdrop */}
      {mobileOpen && <div className="fixed inset-0 bg-black/40 lg:hidden" onClick={toggleMobile} />}
    </>
  );
}