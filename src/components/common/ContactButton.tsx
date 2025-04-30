"use client";

import Image from "next/image";
import { ContactButtonType } from "@/types/contact";
import { getImagePath } from '../../utils/imagePath';
import toast from 'react-hot-toast';
import config from '@/constants/config.json';

const getButtonImage = (icon: string) => {
  switch (icon) {
    case "whatsapp":
      return "/assets/icon.wap.png";
    case "telegram":
      return "/assets/icon-teleg.png";
    case "chat":
      return "/assets/icon-chat.png";
    default:
      return null;
  }
};

export default function ContactButton({
  icon,
  bonus,
  href,
  delay = 0,
}: Omit<ContactButtonType, 'label'> & { delay?: number }) {
  const buttonImage = getButtonImage(icon);
  if (!buttonImage) return null;

  const handleClick = () => {
    if (!href) {
      toast.error(config.notifications.unavailable, {
        style: {
          background: '#333',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        icon: '⚠️',
      });
      return;
    }
    window.open(href, "_blank");
  };

  return (
    <div className="relative">
      {bonus && (
        <div className="absolute -bottom-[-.5rem] -right-[1.5rem] z-0 animate-gentle-scale"
        style={{
          animation: `pulse-glow-logo 2s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
        >
          <Image
            src={getImagePath(`/assets/icon${bonus}.png`)}
            alt={`Bono ${bonus}%`}
            width={50}
            height={50}
            priority
            className="w-[4.5rem] h-auto"
          />
        </div>
      )}
      <button
        onClick={handleClick}
        className="relative transition-transform hover:scale-105 z-10"
        style={{
          animation: `pulse-glow-logo 2s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <Image
          src={getImagePath(buttonImage)}
          alt={icon}
          width={30}
          height={30}
          priority
          className="w-[6rem] h-[6rem]"
        />
      </button>
    </div>
  );
}
