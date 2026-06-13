import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Pathways from "./components/Pathways";
import Community from "./components/Community";
import QualifyForm from "./components/QualifyForm";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrolled(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0710] text-white overflow-x-hidden selection:bg-amber-300 selection:text-black">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-white to-purple-300 z-[60] transition-[width] duration-150"
        style={{ width: `${scrolled}%` }}
      />
      <CursorGlow />

      <nav className="fixed top-1.5 left-0 right-0 z-50 flex justify-center px-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2 flex items-center gap-4 sm:gap-6 shadow-lg shadow-black/40">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-white grid place-items-center text-black font-black text-sm group-hover:rotate-12 transition">
              L
            </div>
            <span className="font-semibold tracking-tight hidden sm:inline">Lady Theresa</span>
          </a>
          <div className="hidden md:flex items-center gap-5 text-sm text-white/70">
            <a href="#pathways" className="hover:text-white relative group">Pathways<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all" /></a>
            <a href="#community" className="hover:text-white relative group">Community<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all" /></a>
          </div>
          <a
            href="#apply"
            className="px-4 py-1.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            Apply →
          </a>
        </div>
      </nav>

      <div id="top" />
      <Hero />
      <PainPoints />
      <Pathways />
      <Community />
      <QualifyForm />
      <Footer />
    </div>
  );
}
