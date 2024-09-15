"use client";
import Link from "next/link";

export default function Category() {
  return (
    <div className="flex space-x-8 font-manga justify-evenly w-full border-t border-orange-300 shadow-2xl sticky top-20 bg-orange-50 z-10">
      <div className="relative group hover:text-orange-400 hover:bg-orange-100 py-3 px-2">
        <Link href="/" className="text-lg">
          Collection
        </Link>
        <div className="absolute left-0 top-full w-fit min-w-full group-hover:block hidden justify-center border-black border rounded-b-md bg-orange-50 border-t-4 border-t-orange-400 shadow-2xl">
          <ul>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 ">
              <Link href="/collection/one piece">
                <button className="w-full text-left whitespace-nowrap">Demon Slayer</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/collection/one piece">
                <button className="w-full text-left whitespace-nowrap">One Piece</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/collection/one piece">
                <button className="w-full text-left whitespace-nowrap">Attack on Titan</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-b-md">
              <Link href="/collection/one piece">
                <button className="w-full text-left whitespace-nowrap">Naruto</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative group hover:text-orange-400 hover:bg-orange-100 py-3 px-2">
        <Link href="/category/oversized t-shirt" className="text-lg">
          Topwear
        </Link>
        <div className="absolute left-0 top-full w-fit min-w-full group-hover:block hidden border-black border rounded-b-md bg-orange-50 border-t-4 border-t-orange-400 shadow-2xl">
          <ul>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 ">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">Oversized T-shirt</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">polos</button>
              </Link>
            </li>

            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-b-md">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">Shirt</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative group hover:text-orange-400 hover:bg-orange-100 py-3 px-2">
        <Link href="/category/oversized t-shirt" className="text-lg">
          Bottomwear
        </Link>
        <div className="absolute left-0 top-full w-fit min-w-full group-hover:block hidden border-black border rounded-b-md bg-orange-50 border-t-4 border-t-orange-400 shadow-2xl">
          <ul>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 ">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">Cargo</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">Joggers</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-b-md">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">Denims</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative group hover:text-orange-400 hover:bg-orange-100 py-3 px-2">
        <Link href="/category/oversized t-shirt" className="text-lg">
          Bestseller
        </Link>
        <div className="absolute left-0 top-full w-fit min-w-full group-hover:block hidden border-black border rounded-b-md bg-orange-50 border-t-4 border-t-orange-400 shadow-2xl">
          <ul>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 ">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">oversized t-shirts</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">shirts</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">cargos</button>
              </Link>
            </li>
            <li className="hover:text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-b-md">
              <Link href="/category/oversized t-shirt">
                <button className="w-full text-left whitespace-nowrap">Denims</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
