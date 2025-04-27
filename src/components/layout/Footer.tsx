"use client";

import Image from "next/image";
import config from '@/constants/config.json';
import { getImagePath } from '../../utils/imagePath';

export default function Footer() {
  return (
    <footer className="mt-auto py-4 text-center text-xs text-white/80 w-full">
      <div className="flex flex-col justify-center items-center w-full px-8 lg:px-16 gap-2">

        <div className="flex flex-col">
          <p className="text-xs">{config.footer.copyright}</p>
        </div>

        <Image
          src={getImagePath(config.footer.icon18)}
          alt="+18"
          width={40}
          height={40}
          priority
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    </footer>
  );
}
