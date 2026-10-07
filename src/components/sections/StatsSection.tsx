"use client";

import { SCHOOL_STATS } from "@/data/tisData";
import FadeIn from "@/components/animation/FadeIn";

export default function StatsSection() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SCHOOL_STATS.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-amber-500/40 transition-colors group">
                <p className="text-4xl lg:text-5xl font-extrabold text-amber-500 mb-2 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </p>
                <h3 className="text-white font-semibold text-lg mb-1">{stat.label}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{stat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}