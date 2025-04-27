"use client";

import { cn } from "@/lib/utils";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import Image from "next/image";
import { ContactButtonType } from "@/types/contact";
import { getImagePath } from '../../utils/imagePath';

const getIcon = (icon: string) => {
  switch (icon) {
    case "whatsapp":
      return <BsWhatsapp className="w-8 h-8 text-white" />;
    case "telegram":
      return <FaTelegramPlane className="w-8 h-8 text-white" />;
    case "chat":
      return <SiWechat className="w-8 h-8 text-white" />;
    default:
      return null;
  }
};

export default function ContactButton({
  label,
  icon,
  bonus,
  href,
  delay = 0,
}: ContactButtonType & { delay?: number }) {
  return (
    <div className="relative w-[250px] h-[60px]">
      {bonus && (
        <div className="absolute -top-4 -right-6 z-10 animate-gentle-scale">
          <Image
            src={getImagePath(`/assets/bono-${bonus}.png`)}
            alt={`Bono ${bonus}%`}
            width={50}
            height={50}
            priority
            className="w-150 h-auto"
          />
        </div>
      )}
      <button
        onClick={() => window.open(href, "_blank")}
        className={cn(
          "relative w-full h-full flex items-center justify-center gap-3 px-6",
          "border-[.4rem] border-[#E2AC68]",
          "bg-gradient-to-b from-black to-[#8A4B12]",
          "transition-transform hover:scale-105",
          "skew-x-[-20deg]",
          "rounded-[14px]"
        )}
        style={{
          animation: `pulse-glow 2s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <div className="flex items-center gap-3 skew-x-[20deg]">
          {getIcon(icon)}
          <span className="font-extrabold text-white">{label}</span>
        </div>
      </button>
    </div>
  );
}
