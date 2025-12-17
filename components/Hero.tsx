"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center px-8">
      <div className="flex items-center gap-12">

        {/* FOTO KIRI */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="rounded-2xl overflow-hidden">
        <Image
          src="/images/fotoku1.jpg"
          alt="Foto"
          width={200}
          height={300}
          className="rounded-xl object-cover"
        />
        </motion.div>

        {/* TEKS KANAN */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Mohamad Rafi Zuhdi
          </h1>
          <p className="text-xl text-gray-300">
            Web Developer · UI/UX Designer · System Analyst
          </p>
          
          <Link
          href="/zuhdi-resume.pdf"
          download="CV_Zuhdi"
          className="relative group inline-block mt-2">
            <span
            className="relative z-10 mt-6 px-6 py-2 text-base font-medium
            border border-white/40 rounded-lg
            group-hover:text-black transition-colors">
              Download CV!
            </span>
            {/* Hover background animation */}
            <span
            className="absolute inset-0 rounded bg-white
            scale-x-0 origin-left
            group-hover:scale-x-100 scale-y-150
            transition-transform duration-300">
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

