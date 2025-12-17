"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
        id="Contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity:0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            className="space-y-3 text-lg">
                <motion.p
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                className="group">
                    Email:
                    <a href="rafizuhdi09@gmail.com"
                    className="relative ml-2 inline-block font-medium text-white
                    transition-all duration-300 group
                    group-hover:decoration-blue-600 underline-offset-4">
                        <span
                        className="relative z-10 px-1
                        group-hover:text-black transition-colors duration-300">
                            rafizuhdi09@gmail.com
                        </span>
                        <span
                        className="absolute inset-0 
                        bg-white
                        scale-x-0 origin-left 
                        group-hover:scale-x-100
                        transition-transform duration-200">
                        </span>
                        </a>
                </motion.p>
                <motion.p 
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                className="group">
                    WhatsApp:
                    <a href="https://wa.me/+6285658266694"
                    className="relative ml-2 inline-block font-medium text-white
                    transition-all duration-300 group
                    group-hover:decoration-blue-600 underline-offset-4">
                        <span
                        className="relative z-10 px-1
                        group-hover:text-black transition-colors duration-300">
                            0856-5826-6694
                        </span>
                        <span
                        className="absolute inset-0 
                        bg-white
                        scale-x-0 origin-left 
                        group-hover:scale-x-100
                        transition-transform duration-200">
                        </span>
                        </a>
                </motion.p>
                <motion.p
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                className="group">
                    LinkedIn:
                    <a href="https://linkedin.com/in/rafizuhdi/"
                    className="relative ml-2 inline-block font-medium text-white
                    transition-all duration-300 group
                    group-hover:decoration-blue-600 underline-offset-4">
                        <span
                        className="relative z-10 px-1
                        group-hover:text-black transition-colors duration-300">
                            Linkedin/zuhdi
                        </span>
                        <span
                        className="absolute inset-0 
                        bg-white
                        scale-x-0 origin-left 
                        group-hover:scale-x-100
                        transition-transform duration-200">
                        </span>
                        </a>
                </motion.p>
            </motion.div>
        </motion.section>
    );
}