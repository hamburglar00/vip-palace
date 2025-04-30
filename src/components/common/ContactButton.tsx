"use client";

import Image from "next/image";
import { ContactButtonType } from "@/types/contact";
import { getImagePath } from '../../utils/imagePath';

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
        onClick={() => window.open(href, "_blank")}
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
