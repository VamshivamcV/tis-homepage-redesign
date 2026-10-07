"use client";

import { ACADEMIC_PROGRAMS } from "@/data/tisData";
import FadeIn from "@/components/animation/FadeIn";
import { BookOpen, CheckCircle2 } from "lucide-react";

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">
          <BookOpen className="w-4 h-4" /> Educational Framework
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Nurturing Minds from Curiosity to Excellence
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Our holistic CBSE curriculum balances rigorous academic preparation with creative arts, sports, and character development.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ACADEMIC_PROGRAMS.map((program, idx) => (
          <FadeIn key={program.id} delay={idx * 0.15}>
            <div className="h-full p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>
              </div>
              <ul className="space-y-2 border-t border-slate-800/80 pt-6">
                {program.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}