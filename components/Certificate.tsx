"use client";

import { motion } from "framer-motion";

const certificate = [
    { id: "copywriting", name: "Creative Copywriting", url: "https://drive.google.com/file/d/1u6h0ZVYnb_z6UQNSpuY2X3SW0UK_S9Vk/view?usp=drive_link" },
    { id: "figma", name: "Figma for UI/UX Design", url: "https://drive.google.com/file/d/1pe7_8P-uzXq9GcaW3mWB92zk0F79iOtW/view?usp=sharing" },
    { id: "sap", name: "SAP Overview", url: "https://drive.google.com/file/d/1WPhoORV5MUHe9o7sIc3ndyKlveAiWDs6/view?usp=sharing" },
    { id: "abap", name: "ABAP Workbench", url: "https://drive.google.com/file/d/1X4_SDJn63qGAZJRN5dW9DiT_pDl55COj/view?usp=sharing" },
    { id: "toeic", name: "Prediction Test TOEIC", url: "https://drive.google.com/file/d/1OxFZa6iXCNGPg35e24diIzQy75i3kLti/view?usp=drive_link" },
];

export default function Certificate() {
  return (
    <section id="Certificate" className="w-full py-16 md:py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Certificates
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base">
        {certificate.map((cert) => (
          <motion.li
            key={cert.id}
            whileHover={{ y: -4 }}
            className="p-3 group bg-black/80 rounded-lg text-center"
          >
        <span
        className="hidden md:block absolute inset-0 bg-white scale-x-0 origin-left 
                   group-hover:scale-x-100 transition-transform duration-300"
        />
        <div className="relative z-10 transition-colors md:group-hover:text-black">
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.name}
            </a>
        </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}