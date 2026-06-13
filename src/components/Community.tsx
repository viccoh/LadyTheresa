export default function Community() {
  const perks = [
    { icon: <CommunityIcon />, t: "Private Community", d: "Network of African women building wealth together." },
    { icon: <CallIcon />, t: "Weekly Live Calls", d: "Coaching, Q&A, and accountability sessions every week." },
    { icon: <TemplatesIcon />, t: "Templates & Resources", d: "Done-for-you scripts, trackers, and business SOPs." },
    { icon: <SprintIcon />, t: "Action Sprints", d: "30-day sprints to launch and earn your first $1,000." },
  ];

  return (
    <section id="community" className="py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-white/15 relative">
          <div className="absolute inset-0 -z-10">
            <img src="https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200" alt="" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1d]/95 via-[#0b0710]/90 to-[#1d0a14]/95" />
          </div>

          <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs uppercase tracking-[0.2em] text-white/70">The Community</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                You will not do this <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">alone.</span>
              </h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Inside the community, you will find African women across Toronto, Calgary, and Edmonton building the same dream. Shared wins, resources, and real accountability.
              </p>
              <a href="#apply" className="group mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40 transition">
                Join the community
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p.t} className="group rounded-xl p-4 bg-purple-900/20 border border-purple-500/20 hover:bg-purple-900/40 hover:border-purple-400/40 hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 group-hover:bg-purple-400/30 grid place-items-center text-purple-200 transition">{p.icon}</div>
                  <div className="mt-2 font-bold text-sm text-white">{p.t}</div>
                  <div className="text-xs text-white/60 mt-1">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function TemplatesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function SprintIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
