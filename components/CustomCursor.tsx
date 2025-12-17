"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor(){
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorHover, setCursorHover] = useState(false);

    useEffect (() => {
        const move = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        const addHover = () => setCursorHover(true);
        const removeHover = () => setCursorHover(false);

        window.addEventListener("mousemove", move);

        // Detect Hover Link
        const links = document.querySelectorAll("a, button");
        links.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            links.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999
        bg-white mix-blend-difference"
        animate={{
            x: cursorPos.x - 1,
            y: cursorPos.y - 20,
            width: 2,
            height: 30,
        }}
        transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
            mass: 0.2,
        }}>
        </motion.div>
    );
}