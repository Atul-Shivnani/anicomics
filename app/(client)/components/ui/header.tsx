"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu } from "./menu";
import { useState, useEffect } from "react";
import LikeAndBag from "./likeAndBag";

export default function Header() {
  return (
    <div
      className=
           "flex justify-between items-center w-dvw h-20 px-4 fixed bg-orange-50 hover:border-b border-orange-300 z-20"
    >
      <Menu/>
      <div
        className=
          "text-orange-400 font-manga font-extrabold h-full items-center justify-center flex text-5xl opacity-100 transition-all duration-500 ease-in-out"
      >
        <Link href="/" className="">Anicomics</Link>
      </div>
      <LikeAndBag/>
    </div>
  );
}
