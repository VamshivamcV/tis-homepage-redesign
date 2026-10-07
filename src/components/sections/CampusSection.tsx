"use client";

import FadeIn from "@/components/animation/FadeIn";
import { CAMPUS_FEATURES } from "@/data/tisData";
import { ArrowRight, Building2, Coffee, Trophy } from "lucide-react";

export default function CampusSection() {
  return (
    <section id="campus" className="py-24 px-6 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28rem] text-amber-500">
            Campus Life
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            A campus designed for confidence, curiosity, and belonging.
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {CAMPUS_FEATURES.map((feature, index) => {
            const Icon = [Building2, Trophy, Coffee][index % 3];

            return (
              <FadeIn key={feature.title} delay={index * 0.12}>
                <article className="group h-full rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-amber-500/50">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-7 text-slate-400">{feature.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-500/5 p-8 md:p-10" delay={0.2}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.24rem] text-amber-500">
                Residential Excellence
              </p>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                A safe, vibrant home-away-from-home for every learner.
              </h3>
            </div>
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Book a Campus Visit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
