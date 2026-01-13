"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portofolio() {
  return (
    <section
  id="Portofolio"
  className="w-full py-20 px-6 max-w-4xl mx-auto space-y-6"
>
  <div className="space-y-2">
    <h2 className="text-2xl md:text-3xl font-bold">Portfolio</h2>
    <p className="text-base md:text-lg leading-relaxed text-white/80">
      These are some of my projects that I have worked on, showcasing my skills
      in web development and design. Each project reflects my dedication to
      creating efficient and user-friendly applications.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 mt-8">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative p-6 bg-black rounded-xl border border-white/10 overflow-hidden"
    >
      {/* Hover background */}
      <span
        className="hidden md:block absolute inset-0 bg-white scale-x-0 origin-left 
                   group-hover:scale-x-100 transition-transform duration-300"
      />

      <div className="relative z-10 transition-colors md:group-hover:text-black">
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src="/images/portfolio.png"
            alt="Portfolio"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 md:group-hover:scale-105"
          />
        </div>

        <a
          href="https://drive.google.com/file/d/1GTh4WNrOaupxfS6J4xY1fUHb0znNsS8c/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 font-medium transition-colors md:group-hover:text-blue-700"
        >
          See Portfolio
        </a>
      </div>
    </motion.div>
  </div>
</section>

  );
}