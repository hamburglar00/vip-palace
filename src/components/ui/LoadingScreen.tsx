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
      ${isExiting ? 'animate-fade-out' : ''}`}
      style={{
        backgroundImage: `url('${getImagePath('/assets/Fondo_h.webp')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        mixBlendMode: 'normal'
      }}
    >
      <div className={`relative flex flex-col items-center ${isExiting ? 'animate-scale-down-fade-out' : ''}`}>
        <Image
          src={getImagePath(config.site.loadingImage)}
          alt="Vip Palace Loading"
          width={100}
          height={100}
          priority
          className="animate-pulse-glow-logo"
        />
      </div>
    </div>
  );
}
