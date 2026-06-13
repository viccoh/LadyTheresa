const pains = [
  { icon: <WorkIcon />, title: "Working Multiple Jobs", body: "Day shift, evening shift, weekend gig. You barely have time to rest." },
  { icon: <SavingsIcon />, title: "No Savings Account", body: "Money comes in and goes out. Nothing left to build long-term wealth." },
  { icon: <ClockIcon />, title: "Retirement Feels Impossible", body: "At this pace, you will be working well into your 70s." },
  { icon: <BurnoutIcon />, title: "Exhausted by the Hustle", body: "You want peace, time, freedom, and your life back." },
];

export default function PainPoints() {
  return (
    <section className="py-16 px-5 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs uppercase tracking-[0.2em] text-white/70">The Reality</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
          You didn't move to Canada <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">to struggle.</span>
        </h2>
        <p className="mt-3 text-white/60 text-sm max-w-lg mx-auto">These challenges are real. But they are not permanent.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {pains.map((p, i) => (
          <div key={i} className="group rounded-2xl p-5 bg-purple-900/20 border border-purple-500/20 hover:bg-purple-900/40 hover:border-purple-400/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 group-hover:bg-purple-400/30 grid place-items-center text-purple-200 transition">{p.icon}</div>
            <h3 className="mt-3 font-bold text-base">{p.title}</h3>
            <p className="mt-1.5 text-sm text-white/70">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function SavingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function BurnoutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
