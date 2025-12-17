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
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="group p-6 bg-black rounded-xl shadow">
                    <span className="relative z-10 group-hover:text-black transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Sistem Informasi Pengelolaan Rekam Medis Klinik Rumah Sehat Ibnu Sina</h3>
                        <p className="text-m mb-3">Proyek ini bertujuan untuk mengelola rekam medis pasien Klinik Rumah Sehat Ibnu Sina.</p>
                        <div className="mb-4 overflow-hidden rounded-lg">
                            <Image
                            src="/images/proyek2.jpg"
                            alt="Login Page"
                            width={600}
                            height={400}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <a href="https://github.com/rfzhdi/sistem-pengelolaan-rekam-medis-ibnu-sina" className="text-blue-600 font-medium">Lihat Project</a>
                    </span>
                    <span className="absolute inset-0 bg-white
                    scale-x-0 origin-left
                    rounded
                    group-hover:scale-x-100
                    transition-transform duration-300"></span>
                </motion.div>

                {/*-- Project 2 --*/}
                <motion.div
                whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="group p-6 bg-black rounded-xl shadow">
                    <span className="relative z-10 group-hover:text-black transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Sistem Informasi Inventaris Aset Divisi FPG-1</h3>
                    <p className="text-m mb-3">Proyek ini bertujuan untuk mengelola inventaris aset Divisi FPG-1.</p>
                    <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                        src="/images/tugasakhir.png"
                        alt="Login Page"
                        width={600}
                        height={400}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <a href="https://github.com/rfzhdi/sistem-informasi-inventaris-aset-fpg1" className="text-blue-600 font-medium">Lihat Project</a>
                    </span>
                    <span className="absolute inset-0 bg-white
                    scale-x-0 origin-left
                    rounded
                    group-hover:scale-x-100
                    transition-transform duration-300"></span>
                </motion.div>
            </div>
        </section>
    );
}