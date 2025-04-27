'use client';

import { useState, useEffect } from 'react';
import { FaChevronRight, FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import config from '@/constants/config.json';
import { getImagePath } from '../utils/imagePath';

interface MenuItem {
  label: string;
  icon?: string;
  href?: string;
}

interface MenuSection {
  label: string;
  options: MenuItem[];
}

interface UserMenuProps {
  onClose: () => void;
}

export default function UserMenu({ onClose }: UserMenuProps) {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [isVisible, setIsVisible] = useState(false);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return <FaFacebook />;
      case 'instagram':
        return <FaInstagram />;
      default:
        return null;
    }
  }

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (label: string) => {
    setOpenSections(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50">
      <div
        className={`fixed left-0 top-0 h-full w-[300px] bg-black transform transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header Section */}
        <div className="relative flex justify-between items-center p-4">
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A155] to-transparent animate-pulse-glow opacity-80"></div>
          <div>
            <h2 className="text-2xl font-bold text-white">{config.userMenu.title}</h2>
            <div className="flex items-center gap-2">
              <Image
                src={getImagePath(config.userMenu.pointsIcon)}
                alt="Diamond"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <p className="text-[#D4A155] text-sm">10.000 {config.userMenu.points}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:text-[#D4A155] transition-colors"
          >
            <FaTimes className="w-8 h-8" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
          {config.userMenu.items.map((section: MenuSection) => (
            <div key={section.label} className="bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.label)}
                className="w-full flex items-center p-2 text-white hover:bg-[#D4A155]/20 rounded-lg transition-colors duration-200"
              >
                <span className={`mr-2 text-[white] transition-transform duration-200 ${
                  openSections[section.label] ? 'rotate-90' : ''
                }`}>
                  <FaChevronRight className="w-4 h-4" />
                </span>
                <span className="text-md">{section.label}</span>
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  openSections[section.label]
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3 pb-1 space-y-1">
                  {section.options.map((option: MenuItem) => (
                    <a
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-1.5 text-sm text-gray-300 hover:text-white hover:bg-[#D4A155]/20 rounded transition-colors duration-200 flex flex-row items-center gap-2"
                    >
                      {option.icon ? getIcon(option.icon) : null}
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with Logo */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-center">
            <Image
              src={getImagePath(config.userMenu.headerLogo)}
              alt="Logo"
              width={150}
              height={50}
              className="w-auto h-12 mb-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
