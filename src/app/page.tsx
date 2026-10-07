import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import AcademicsSection from "@/components/sections/AcademicsSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import CampusSection from "@/components/sections/CampusSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AcademicsSection />
        <CampusSection />
        <AdmissionsSection />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        © 2026 Tula&apos;s International School, Dehradun. All Rights Reserved. Redesign Project.
      </footer>
    </div>
  );
}