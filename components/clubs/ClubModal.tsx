'use client';

import { X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Club } from './clubs.data';

export default function ClubModal({
  club,
  onClose,
}: {
  club: Club;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-900"
        >
          <X />
        </button>

        <h3 className="mb-4 text-2xl font-bold">{club.name}</h3>
        <p className="mb-6 text-gray-700">{club.description}</p>

        <div className="flex gap-4">
          {club.facebook && (
            <a href={club.facebook} target="_blank">
              <Facebook />
            </a>
          )}
          {club.instagram && (
            <a href={club.instagram} target="_blank">
              <Instagram />
            </a>
          )}
          {club.linkedin && (
            <a href={club.linkedin} target="_blank">
              <Linkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
