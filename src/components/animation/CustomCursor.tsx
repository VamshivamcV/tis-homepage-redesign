"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useSpring } from "framer-motion";

function subscribePointerMode(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(pointer: coarse)");
  const handleChange = () => callback();

  mediaQuery.addEventListener("change", handleChange);
  return () => mediaQuery.removeEventListener("change", handleChange);
}

function getPointerModeSnapshot() {
  if (typeof window === "undefined") return "fine";
  return window.matchMedia("(pointer: coarse)").matches ? "coarse" : "fine";
}

export default function CustomCursor() {
  const pointerMode = useSyncExternalStore(
    subscribePointerMode,
    getPointerModeSnapshot,
    () => "fine",
  );

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (pointerMode === "coarse") return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, pointerMode]);

  if (pointerMode === "coarse") return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 hidden h-6 w-6 rounded-full border-2 border-amber-500 pointer-events-none mix-blend-difference md:block"
      style={{ x: cursorX, y: cursorY }}
    />
  );
}