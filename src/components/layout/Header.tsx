"use client";

import { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import UserMenu from "../UserMenu";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full flex justify-between items-center p-4 md:justify-end md:gap-6 z-50 bg-black shadow-[0_10px_40px_rgba(5,5,5,5)]">
        <FaBars
          className="w-7 h-7 cursor-pointer text-[#E8E6E2] hover:text-yellow-300 transition-colors"
          onClick={() => setIsUserMenuOpen(true)}
        />
        <FaBell className="w-7 h-7 cursor-pointer text-[#E8E6E2] hover:text-yellow-300 transition-colors" />
      </header>
      {isUserMenuOpen && <UserMenu onClose={() => setIsUserMenuOpen(false)} />}
    </>
  );
}
