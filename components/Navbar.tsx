'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/#about', label: 'ABOUT US' },
    { href: '/#clubs', label: 'CLUBS' },
    { href: '/#events', label: 'EVENTS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/faq', label: 'FAQ' },
    { href: '/office-bearers', label: 'OFFICE BEARERS' },
    { href: '/open-house', label: 'OPEN HOUSE' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
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
      <div className="max-w-7xl mx-auto px-4">
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
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'text-blue-600'
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
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
     {/* Mobile Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ${
    isMenuOpen ? 'max-h-screen border-t border-gray-300' : 'max-h-0'
  }`}
>
  <nav className="bg-gray-200">
    <ul className="flex flex-col">
      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <li
            key={link.href}
            className={`relative border-b border-gray-400`}
          >
            <Link
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-5 text-sm font-semibold tracking-wide
                ${active ? 'text-emerald-600' : 'text-black'}
                hover:text-emerald-600
              `}
            >
              {link.label}

              {/* Green bar (hover + active) */}
              <span
                className={`absolute left-0 bottom-0 h-2 w-full bg-emerald-600
                  transform origin-left transition-transform duration-300
                  ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
</div>

    </header>
  );
}
