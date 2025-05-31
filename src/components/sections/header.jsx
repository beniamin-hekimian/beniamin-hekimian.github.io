'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  function handleScroll(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-secondary">
      <div className='container mx-auto px-4 lg:px-12 py-4 flex items-center justify-between'>
        <Image src="/logo.png" alt="logo" width="40" height="40" />
        <nav className='hidden md:block'>
          <ul className='flex gap-4'>
            <li onClick={() => handleScroll('about')} className='active:text-primary'>About</li>
            <li onClick={() => handleScroll('services')} className='active:text-primary'>Services</li>
            <li onClick={() => handleScroll('skills')} className='active:text-primary'>Skills</li>
            <li onClick={() => handleScroll('projects')} className='active:text-primary'>Projects</li>
          </ul>
        </nav>
        <div className='flex gap-4 items-center'>
          <ThemeToggle />
          <Button
            onClick={() => handleScroll('contact')}
            className="hover:cursor-pointer"
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
