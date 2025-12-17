"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Laravel",
  "SQL",
  "Figma",
  "Next.js",
];

export default function Skills() {
  return (
    <section className="w-full py-16 md:py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Skills
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base">
        {skills.map((skill) => (
          <motion.li
            key={skill}
            whileHover={{ y: -4 }}
            className="p-3 bg-black/80 rounded-lg text-center"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}