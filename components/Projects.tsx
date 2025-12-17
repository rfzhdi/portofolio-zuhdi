"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Projects() {
    return (
        <section id="Projects" className="w-full py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>

            <div className="grid gap-8 md:grid-cols-2">
                {/*-- Project 1 --*/}
                <motion.div
                whileHover={{ y: -6 }}
                className="group relative p-6 bg-black rounded-xl border border-white/10 overflow-hidden">
                    <span className="hidden md:block
                    absolute inset-0 bg-white
                    scale-x-0 origin-left
                    md:group-hover:scale-x-100
                    transition-transform duration-300"/>
                    <div className="relative z-10 md:group-hover:text-black transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Sistem Informasi Pengelolaan Rekam Medis</h3>
                        <p className="text-sm mb-4">Proyek ini bertujuan untuk mengelola rekam medis pasien Klinik Rumah Sehat Ibnu Sina.</p>
                        <div className="mb-4 overflow-hidden rounded-lg">
                            <Image
                            src="/images/proyek2.jpg"
                            alt="Login Page"
                            width={600}
                            height={400}
                            className="object-cover md:group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <a href="https://github.com/rfzhdi/sistem-pengelolaan-rekam-medis-ibnu-sina" className="text-blue-400 md:group-hover:text-blue-700 font-medium">Lihat Project</a>
                        </div>
                </motion.div>

                {/*-- Project 2 --*/}
                <motion.div
                whileHover={{ y: -6 }}
                className="group relative p-6 bg-black rounded-xl border border-white/10 overflow-hidden">
                    <span className="hidden md:block
                    absolute inset-0 bg-white
                    scale-x-0 origin-left
                    md:group-hover:scale-x-100
                    transition-transform duration-300"/>
                    <div className="relative z-10 md:group-hover:text-black transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Sistem Informasi Inventaris Aset</h3>
                    <p className="text-sm mb-4">Proyek ini bertujuan untuk mengelola inventaris aset Divisi FPG-1.</p>
                    <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                        src="/images/tugasakhir.png"
                        alt="Login Page"
                        width={600}
                        height={400}
                        className="object-cover md:group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <a href="https://github.com/rfzhdi/sistem-informasi-inventaris-aset-fpg1" className="text-blue-400 md:group-hover:text-blue-700 font-medium">Lihat Project</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}