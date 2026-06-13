import { useMemo, useState } from "react";

const WHATSAPP_URL = "https://wa.link/i60ny1";

type Form = {
  name: string;
  email: string;
  city: string;
  age: string;
  jobs: string;
  savings: string;
  pathway: string;
  ready: string;
};

const initial: Form = { name: "", email: "", city: "", age: "", jobs: "", savings: "", pathway: "", ready: "" };

const steps = [
  { title: "About you", fields: ["name", "email", "city"] as (keyof Form)[] },
  { title: "Where you are", fields: ["age", "jobs", "savings"] as (keyof Form)[] },
  { title: "Your path", fields: ["pathway", "ready"] as (keyof Form)[] },
];

export default function QualifyForm() {
  const [form, setForm] = useState<Form>(initial);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [disqualified, setDisqualified] = useState(false);

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);
  const update = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const canNext = useMemo(() => steps[step].fields.every((f) => form[f].trim().length > 0), [step, form]);

  const isQualified = (f: Form) => {
    if (f.ready !== "Yes, ready now") return false;
    if (f.age === "Under 30" || f.age === "Over 45") return false;
    return true;
  };

  const submit = () => {
    if (!isQualified(form)) {
      setDisqualified(true);
      setSubmitted(true);
      return;
    }
    const msg = `Hi Lady Theresa! I just applied for the Soft Life Blueprint 🌸

• Name: ${form.name}
• Email: ${form.email}
• City: ${form.city}
• Age: ${form.age}
• Current jobs: ${form.jobs}
• Savings account: ${form.savings}
• Pathway: ${form.pathway}
• Ready: ${form.ready}`;
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener");
  };

  return (
    <section id="apply" className="py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs uppercase tracking-[0.2em] text-white/70">Apply Now</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
            Ready for your <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">Soft Life?</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-purple-900/10 backdrop-blur-xl p-5 sm:p-8 shadow-2xl shadow-purple-500/20">
          {!submitted && (
            <>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-white/60">Step {step + 1} of {steps.length} — <span className="text-white font-semibold">{steps[step].title}</span></div>
                <div className="text-sm text-amber-300 font-semibold">{Math.round(progress)}%</div>
              </div>
              <div className="h-1.5 bg-purple-900/50 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-gradient-to-r from-purple-400 to-white transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>

              <div className="space-y-4">
                {step === 0 && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} placeholder="Amaka Okafor" />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@email.com" />
                    <Field label="City in Canada" value={form.city} onChange={(v) => update("city", v)} placeholder="Toronto, Calgary..." full />
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <Choices label="Your age" value={form.age} onChange={(v) => update("age", v)} options={["Under 30", "30–35", "36–40", "41–45", "Over 45"]} />
                    <Choices label="Current jobs" value={form.jobs} onChange={(v) => update("jobs", v)} options={["1 job", "2 jobs", "3+ jobs"]} />
                    <Choices label="Savings account?" value={form.savings} onChange={(v) => update("savings", v)} options={["No, not yet", "Basic savings", "TFSA / RRSP", "I invest already"]} />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <Choices label="Which pathway?" value={form.pathway} onChange={(v) => update("pathway", v)} options={["Investments", "Business", "Both", "Not sure"]} />
                    <Choices label="Ready to act now?" value={form.ready} onChange={(v) => update("ready", v)} options={["Yes, ready now", "Maybe in 1–3 months", "Just exploring"]} />
                  </div>
                )}

                <div className="flex items-center justify-between pt-3">
                  <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2.5 rounded-full border border-white/15 text-white/80 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition text-sm">
                    ← Back
                  </button>
                  {step < steps.length - 1 ? (
                    <button onClick={() => canNext && setStep((s) => s + 1)} disabled={!canNext} className="px-6 py-2.5 rounded-full bg-white text-black font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 transition disabled:opacity-40 disabled:cursor-not-allowed text-sm">
                      Next →
                    </button>
                  ) : (
                    <button onClick={submit} disabled={!canNext} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-400 to-white text-black font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 text-sm">
                      <WhatsAppIcon /> Send to WhatsApp
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {submitted && !disqualified && (
            <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-white grid place-items-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h3 className="mt-4 text-2xl font-black text-white">Application Received</h3>
              <p className="mt-2 text-white/70 text-sm max-w-sm mx-auto">WhatsApp has opened. Please send the pre-filled message to complete your application.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 transition">
                <WhatsAppIcon /> Open WhatsApp
              </a>
              <button onClick={() => { setSubmitted(false); setForm(initial); setStep(0); }} className="block mx-auto mt-3 text-xs text-white/50 hover:text-white">Submit another application</button>
            </div>
          )}

          {submitted && disqualified && (
            <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-rose-500 grid place-items-center text-3xl">🌸</div>
              <h3 className="mt-4 text-2xl font-black">Thank you for applying.</h3>
              <p className="mt-2 text-white/70 text-sm max-w-sm mx-auto">This program is for African women in Canada (ages 30–45) ready to take action immediately. Follow me on Instagram for free content!</p>
              <a href="https://www.instagram.com/buildwith_ladytheresa" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition text-sm">
                Follow on Instagram
              </a>
              <button onClick={() => { setSubmitted(false); setDisqualified(false); setStep(0); }} className="block mx-auto mt-3 text-xs text-white/50 hover:text-white">Edit answers</button>
            </div>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-white/40"> Your info stays private. Only Lady Theresa will respond.</p>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", full = false }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block text-sm font-semibold text-white/80 mb-1.5">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-xl bg-purple-900/20 border border-purple-500/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 outline-none p-3 text-white placeholder:text-white/40 transition text-sm" />
    </div>
  );
}

function Choices({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/80 mb-1.5">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button key={o} type="button" onClick={() => onChange(o)} className={`px-3 py-2 rounded-full text-xs font-medium border transition ${active ? "bg-white text-black border-white shadow-lg shadow-purple-500/30" : "bg-purple-900/20 text-white/80 border-purple-500/20 hover:bg-purple-900/40 hover:border-purple-400/40"}`}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
