"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="font-bold text-lg tondu text-cyan-300">ZUHDI</div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative">
              <Link
                href={item === "Home" ? "/" : `#${item}`}
                className="group relative px-2 py-2
                transition-colors"
              >
                <span className="relative z-10 px-1 group-hover:text-black transition-colors">
                  {item}
                </span>
                <span
                  className="
                  pointer-events-none
                  absolute inset-0 
                  bg-white
                  scale-x-0 origin-left
                  group-hover:scale-x-100
                  transition-transform duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col px-6 pb-4 gap-4 bg-black"
          >
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 border-b border-white/10"
                >
                  {item}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
