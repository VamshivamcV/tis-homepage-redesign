"use client";

import FadeIn from "@/components/animation/FadeIn";
import { ADMISSION_STEPS } from "@/data/tisData";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <FadeIn>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28rem] text-amber-500">
                Admissions 2026-27
              </p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Begin your child’s next chapter with Tula&apos;s.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                Discover a nurturing environment where academic ambition, life skills, and values-based education come together to shape confident, future-ready learners.
              </p>

              <div className="mt-8 space-y-4">
                {ADMISSION_STEPS.map((step) => (
                  <div key={step} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-slate-800 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.24rem] text-amber-400">Admissions Office</p>
              <h3 className="mt-4 text-3xl font-bold text-white">Enroll With Confidence</h3>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/80 p-4">
                <div className="flex items-center gap-3 text-slate-200">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <span>+91 98765 43210</span>
                </div>
              </div>

              <a
                href="mailto:admissions@tis.edu.in"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Request Prospectus
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
