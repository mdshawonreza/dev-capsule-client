"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import logo from "../public/assets/Logo 2 1.png";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Accomplishment', path: '/blog' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-sm md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 ">
            <Image
              src={logo}
              alt="Developer"
              className="w-[198px] md:w-[228px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.path === '/' && pathname === '/') return null;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === link.path
                      ? 'text-primary font-semibold '
                      : 'text-muted-foreground hover:text-primary   hover:bg-accent'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/appointment">
              <button className='bg-[#7412FF] hover:bg-[#6c0fee] px-6 py-2 rounded-2xl text-white text-lg font-semibold'>Book An Appointment</button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center justify-end space-x-2  ">
            <Button variant="ghost" onClick={toggleMenu} className='-mr-10' >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              if (link.path === '/' && pathname === '/') return null;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === link.path
                      ? 'text-primary font-semibold bg-accent/50'
                      : 'text-foreground hover:bg-accent hover:text-primary'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-2 w-full">
              <Link href="/appointment">
                <Button className="">Book An Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
