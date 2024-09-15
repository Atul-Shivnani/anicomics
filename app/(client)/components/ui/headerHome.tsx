"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu } from "./menu";
import { useState, useEffect } from "react";
import LikeAndBag from "./likeAndBag";

export default function HeaderHome() {
  const { status: isSignedin } = useSession();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={
        scroll > 10
          ? "flex justify-between items-center w-dvw h-20 px-4 fixed bg-orange-50 hover:border-b border-orange-300 z-20"
          : "flex justify-between items-center w-dvw h-20 px-4 transparent fixed z-20"
      }
    >
      <Menu/>
      <div
        className={
          scroll > 10
            ? "text-orange-400 font-manga font-extrabold h-full items-center justify-center flex text-5xl opacity-100 transition-all duration-500 ease-in-out"
            : "text-orange-400 font-manga font-extrabold h-full items-center justify-center flex text-8xl mt-16 opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out"
        }
      >
        <Link href="/" className="">Anicomics</Link>
      </div>
      <LikeAndBag/>
    </div>
  );
}
