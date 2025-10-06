"use client";

import { CgMenuRight, CgClose } from "react-icons/cg";
import { useCallback, useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [bg, setBg] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setBg(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed left-0 w-full py-8 z-20 transition-colors duration-200",
        bg ? "py-4 lg:py-6 bg-primary" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <button
          className="text-white md:hidden"
          onClick={() => setMobileNav((prev) => !prev)}
          aria-label={
            mobileNav ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {mobileNav ? <CgClose size={24} /> : <CgMenuRight size={24} />}
        </button>
        <Nav
          containerStyles="hidden md:block"
          listStyles="flex items-center gap-x-12"
          linkStyles="capitalize text-white hover:border-b transition-all cursor-pointer"
        />
        <Nav
          containerStyles={cn(
            "md:hidden fixed bottom-0 w-full max-w-[80%] h-screen bg-white transition-all",
            mobileNav ? "left-0" : "-left-full"
          )}
          listStyles="h-full p-4 flex flex-col justify-center items-center gap-y-6 text-center"
          linkStyles="capitalize text-xl font-medium cursor-pointer"
          setMobileNav={() => setMobileNav(false)}
        />
      </div>
    </header>
  );
};
