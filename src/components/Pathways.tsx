import { useState } from "react";

const pathways = [
  {
    key: "invest",
    label: "Investments",
    tag: "PATHWAY 01",
    title: "Make your money work while you rest.",
    color: "from-purple-400 to-white",
    bullets: ["TFSA, RRSP & FHSA optimization", "Beginner-friendly ETFs & index funds", "Dividend portfolios that pay monthly", "Real estate strategies for newcomers"],
    stat: "18–28% annual returns",
  },
  {
    key: "biz",
    label: "Business",
    tag: "PATHWAY 02",
    title: "Low-cost. High-margin. Built for busy women.",
    color: "from-white to-purple-300",
    bullets: ["Service businesses to start this weekend", "Digital products & online stores", "Plug-and-play templates & suppliers", "Systems to run in 5–10 hrs/week"],
    stat: "$2k–$10k CAD/month in 90 days",
  },
];

export default function Pathways() {
  const [active, setActive] = useState(0);
  const p = pathways[active];

  return (
    <section id="pathways" className="py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs uppercase tracking-[0.2em] text-white/70">Two Pathways</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
            Choose your path to <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">freedom.</span>
          </h2>
        </div>

        <div className="inline-flex p-1.5 bg-purple-900/30 border border-purple-500/30 rounded-full backdrop-blur mb-6">
          {pathways.map((pw, i) => (
            <button
              key={pw.key}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition ${active === i ? "text-black" : "text-white/70 hover:text-white"}`}
            >
              {active === i && <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${pw.color}`} />}
              <span className="relative">{pw.label}</span>
            </button>
          ))}
        </div>

        <div key={p.key} className="group/grid grid lg:grid-cols-2 gap-6 rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-purple-900/10 backdrop-blur-xl animate-[fadeSlide_.4s_ease] hover:border-purple-400/40 transition-colors duration-300">
          <div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-black bg-gradient-to-r ${p.color} mb-3`}>{p.tag}</div>
            <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">{p.title}</h3>
            <ul className="mt-4 space-y-2">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r ${p.color} grid place-items-center text-black text-[10px] font-black`}>✓</span>
                  <span className="text-white/85 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-purple-300 font-semibold text-sm">{p.stat}</div>
          </div>
          <div className="relative rounded-xl overflow-hidden min-h-[200px]">
            <img
              src={p.key === "invest" 
                ? "https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                : "https://images.pexels.com/photos/6969653/pexels-photo-6969653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
              }
              alt={p.label}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeSlide { from { opacity:0; transform: translateY(10px) } to { opacity:1; transform: translateY(0) } }`}</style>
    </section>
  );
}
