'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div id="preloder" className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
