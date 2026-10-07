"use client";

import FadeIn from "@/components/animation/FadeIn";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute bottom-10 right-6 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl sm:right-10 sm:h-96 sm:w-96" />

      <div className="z-10 mx-auto max-w-5xl text-center">
        <FadeIn direction="down">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
            <Sparkles className="h-4 w-4" />
            Ranked #1 Boarding School in Dehradun
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mb-6 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            Where Modern Education Meets{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Traditional Values
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
            A premier co-educational CBSE boarding school empowering future leaders through academic excellence, character building, and world-class residential facilities.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#admissions"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] hover:bg-amber-600 sm:w-auto"
            >
              Explore Admissions 2026-27
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#campus"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-6 py-4 font-medium text-slate-200 transition-all hover:bg-slate-800 sm:w-auto"
            >
              Virtual Campus Tour
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 sm:mt-16">
          <div className="flex flex-col items-center gap-3 border-t border-slate-800/80 pt-6 text-[10px] text-slate-400 sm:flex-row sm:justify-center sm:gap-8 sm:text-xs">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> CBSE Affiliated
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> 22-Acre Campus
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> 100% Veg Boarding
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}