"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/tisData";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-lg backdrop-blur-md py-3 dark:border-slate-800 dark:bg-slate-900/90"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight text-slate-900 leading-none dark:text-white">TULA&apos;S</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-500">
              International School
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#admissions"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Apply Now
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-slate-700 transition hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-slate-700 hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 rounded-xl bg-amber-500 px-4 py-3 text-center font-semibold text-slate-950"
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}