'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      if (pathname === '/') {
        const sections = ['events', 'clubs', 'about'];
        let current = '';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) { // Offset for navbar
              current = section;
              break;
            }
          }
        }
        if (!current && window.scrollY < 100) {
          current = ''; // Top of page
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/#about', label: 'ABOUT US' },
    { href: '/#clubs', label: 'CLUBS' },
    { href: '/#events', label: 'EVENTS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/faq', label: 'FAQ' },
    { href: '/office-bearers', label: 'OFFICE BEARERS' },
    // { href: '/open-house', label: 'OPEN HOUSE' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && activeSection === '';
    if (href.startsWith('/#')) {
      const section = href.substring(2);
      return pathname === '/' && activeSection === section;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto  px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="IIT Patna Gymkhana Logo"
              width={130}
              height={70}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li
                    key={link.href}
                    className="relative group"
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold transition-colors
                        ${active ? 'text-emerald-600' : 'text-gray-800 hover:text-emerald-600'}
                      `}
                    >
                      {link.label}
                    </Link>
                    <span 
                      className={`absolute left-0 -bottom-2 h-[2px] bg-emerald-600 transition-all duration-300
                        ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                      `}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-gray-300 bg-gray-200"
          >
            <nav>
              <ul className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="relative border-b border-gray-300"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-6 py-5 text-sm font-semibold tracking-wide
                          ${active ? 'text-emerald-600' : 'text-gray-800'}
                          hover:text-emerald-600 hover:bg-gray-100 transition-colors
                        `}
                      >
                        {link.label}

                        {/* Green bar (hover + active) */}
                        <span
                          className={`absolute left-0 bottom-0 h-1 w-full bg-emerald-600
                            transform origin-left transition-transform duration-300
                            ${active ? 'scale-x-100' : 'scale-x-0'}
                          `}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
