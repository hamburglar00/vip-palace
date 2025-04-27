'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import config from '@/constants/config.json';
import { getImagePath } from '../../utils/imagePath';
import '@/styles/animations.css';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShow(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500
      before:absolute before:inset-0 before:bg-[url('/assets/Fondo_h.png')] before:bg-cover before:bg-center before:opacity-50 before:mix-blend-normal
      ${isExiting ? 'animate-fade-out' : ''}`}
    >
      <div className={`relative flex flex-col items-center ${isExiting ? 'animate-scale-down-fade-out' : ''}`}>
        <Image
          src={getImagePath(config.site.loadingImage)}
          alt="Vip Palace Loading"
          width={250}
          height={250}
          priority
          className="animate-pulse-glow-logo"
        />
      </div>
    </div>
  );
}
