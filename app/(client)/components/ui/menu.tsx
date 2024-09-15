"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function Menu() {
  const { status } = useSession();

  const handleSignOut = async () => {
    try {
      signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (

<div className="relative group">
        <img
          src="/menu.png"
          alt="menu"
          className="h-12 hover:cursor-pointer"
          title="Menu"
        />
       <div className="bg-orange-50 font-manga h-fit w-fit border-black border rounded-md shadow-2xl absolute top-full left-0 hidden group-hover:block">
      <ul>
        {status === "authenticated" ? (
          <>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-t-md">
              <Link href="/account">
                <button className="w-full text-left whitespace-nowrap">Account</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <button className="w-full text-left whitespace-nowrap">My Orders</button>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <button className="w-full text-left whitespace-nowrap">Theme</button>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-b-md">
              <button onClick={handleSignOut} className="w-full text-left whitespace-nowrap">
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-t-md">
              <Link href="/api/auth/signin">
                <button className="w-full text-left whitespace-nowrap">Signin</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/signup">
                <button className="w-full text-left whitespace-nowrap">Signup</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-b-md">
              <button className="w-full text-left whitespace-nowrap">Theme</button>
            </li>
          </>
        )}
      </ul>
    </div>
      </div>

   
  );
}
