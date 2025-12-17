"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Skills() {
    return (
        <section className="w-full py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
                <motion.li
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">HTML</motion.li>
                <motion.li 
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">CSS</motion.li>
                <motion.li
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">JavaScript</motion.li>
                <motion.li
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">Laravel</motion.li>
                <motion.li
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">SQL</motion.li>
                <motion.li
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">Figma</motion.li>
                <motion.li
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="p-3 bg-black rounded-lg">Next.Js</motion.li>
            </ul>
        </section>
    );
} 