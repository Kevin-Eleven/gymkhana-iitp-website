'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f2a44] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Students' Gymkhana IIT Patna"
              width={80}
              height={80}
            />
            <p className="text-sm leading-relaxed text-gray-200">
              The Students’ Gymkhana of IIT Patna is the governing council of
              students consisting of elected representatives working for the
              overall well being and holistic development of students.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest mb-4">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="https://www.iitp.ac.in/hostel/">Guest Houses</a></li>
              <li><a href="https://www.iitp.ac.in/">Medical Unit</a></li>
              <li><a href="#">TPC</a></li>
              <li><a href="#">SAC</a></li>
              <li><a href="http://www.eclubiitp.org/">Entrepreneurship</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="https://www.iitp.ac.in/">IIT Patna</a></li>
              <li><a href="https://www.iitp.ac.in/hostel">Hostels</a></li>
              <li><a href="https://www.iitp.ac.in/hostel/reachIITP.html">Reaching IIT</a></li>
              <li><Link href="/office-bearers">Office Bearers</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest mb-4">
              VISIT OUR CAMPUS
            </h3>
            <div className="w-full h-[220px] rounded-md overflow-hidden">
              <iframe
                loading="lazy"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721"
                title="IIT Patna Map"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-14 text-center">
          <p className="mb-4 font-semibold tracking-wide">Follow Us!</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/gymkhana.iitp" aria-label="Facebook">
              <Facebook className="hover:text-emerald-400 transition" />
            </a>
            <a href="https://www.instagram.com/iitpatna_gymkhana/" aria-label="Instagram">
              <Instagram className="hover:text-emerald-400 transition" />
            </a>
            <a href="https://twitter.com/stc_iitp" aria-label="Twitter">
              <Twitter className="hover:text-emerald-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <span>
            © Students&apos; Gymkhana, IIT Patna.
          </span>
          <span className="text-gray-300">
            Developed by NJACK and MoodBoard
          </span>
        </div>
      </div>
    </footer>
  );
}
