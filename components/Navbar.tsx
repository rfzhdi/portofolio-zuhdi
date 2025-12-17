"use client";

import motion from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between py-4 px-6 border-b bg-black">
      <div className="font-bold text-lg tondu text-cyan-300">ZUHDI</div>

      <ul className="flex gap-6">
        <li>
          <Link href="/" className="group relative z-10 px-2 py-2
          group-hover:text-black
          transition-colors">
          <span className="relative z-10 px-1 group-hover:text-black transition-colors">
            Home
          </span>
          <span className="absolute inset-0 bg-white
          scale-x-0 origin-left
          group-hover:scale-x-100
          transition-transform duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="#About" scroll={true} className="group relative z-10 px-2 py-2
          group-hover:text-black
          transition-colors">
          <span className="relative z-10 px-1 group-hover:text-black transition-colors">
            About
          </span>
          <span className="absolute inset-0 bg-white
          scale-x-0 origin-left
          group-hover:scale-x-100
          transition-transform duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="#Projects" scroll={true} className="group relative z-10 px-2 py-2
          group-hover:text-black
          transition-colors">
          <span className="relative z-10 px-1 group-hover:text-black transition-colors">
            Projects
          </span>
          <span className="absolute inset-0 bg-white
          scale-x-0 origin-left
          group-hover:scale-x-100
          transition-transform duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="#Contact" scroll={true} className="group relative z-10 px-2 py-2
          group-hover:text-black
          transition-colors">
          <span className="relative z-10 px-1 group-hover:text-black transition-colors">
            Contact
          </span>
          <span className="absolute inset-0 bg-white
          scale-x-0 origin-left
          group-hover:scale-x-100
          transition-transform duration-300"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
