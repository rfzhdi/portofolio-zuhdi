"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const [onNavbar, setOnNavbar] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setCursorHover(true);
    const removeHover = () => setCursorHover(false);

    window.addEventListener("mousemove", move);

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
  }, [isDesktop]);

  // Tidak render cursor di HP
  if (!isDesktop) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-9999
      bg-white
      ${onNavbar ? "" : "mix-blend-difference"}`}
      animate={{
        x: cursorPos.x - 3,
        y: cursorPos.y - 15,
        width: cursorHover ? 2 : 2,
        height: cursorHover ? 30 : 30,
        borderRadius: onNavbar ? "50%" : "2px",
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.2,
      }}
    />
  );
}
