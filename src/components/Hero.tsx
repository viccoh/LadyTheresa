import { useEffect, useState } from "react";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            For African Women in Canada | Ages 30–45
          </div>

          <h1 className="font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Live a <span className="bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent">Soft Life</span>
            <br />
            <span className="text-white/90">Without 2-3 Jobs in Canada</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
            I'm <span className="text-white font-semibold">Lady Theresa</span>. I help African women in Canada replace draining jobs with{" "}
            <span className="text-purple-300 font-medium">smart investments</span> and{" "}
            <span className="text-white font-medium">low-cost businesses</span> — so you can retire early and live well.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold overflow-hidden shadow-xl shadow-purple-500/30 hover:shadow-purple-500/60 transition-all hover:-translate-y-1"
            >
              <span className="relative z-10">Earn more with Lady Theresa</span>
              <span className="relative z-10 group-hover:translate-x-1 transition">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-[shimmer_3s_linear_infinite]" />
            </a>
            <a
              href="#pathways"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-900/30 border border-purple-500/30 hover:bg-purple-900/50 hover:border-purple-400/50 font-semibold backdrop-blur transition"
            >
              See the 2 Pathways
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
            <Stat label="Women coached" value="1,200+" />
            <Stat label="Jobs replaced" value="2-3" />
            <Stat label="Avg. returns" value="28%+" />
          </div>
        </div>

        <div className="relative perspective-1000">
          <div
            className="relative rounded-3xl overflow-hidden border border-purple-400/30 shadow-2xl shadow-purple-500/30 group hover:scale-[1.02] transition-transform duration-500"
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
          >
            <img
              src="/images/lady-theresa-hero.jpg"
              alt="Lady Theresa speaking at seminar"
              className="w-full h-[420px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-amber-300 text-sm font-semibold">@buildwith_ladytheresa</div>
              <div className="text-white font-bold text-lg">Investment & Business Coach</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-[float_5s_ease-in-out_infinite]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-white grid place-items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-white/70">Monthly passive income</div>
                <div className="font-bold text-white">$4,800+ CAD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </header>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group rounded-xl bg-purple-900/20 border border-purple-500/20 p-3 backdrop-blur hover:bg-purple-900/40 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
      <div className="font-black text-lg sm:text-xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:to-white transition">{value}</div>
      <div className="text-[10px] sm:text-xs text-white/60 mt-0.5">{label}</div>
    </div>
  );
}
