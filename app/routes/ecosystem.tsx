import { Navbar } from "../components/Navbar";
import { Link } from "react-router";
import { useState } from "react";

export function meta(_args: any) {
  return [{ title: "Mizan WAI - Service Ecosystem & Tiers" }];
}

const tiers = [
  {
    name: "Essentials", tier: "Tier 1",
    bg: "bg-[#F2E8DF]", border: "border border-[#E5D0C0]", textColor: "text-slate-900",
    price: "Project-based", period: "| Pay-per-service", icon: "spa",
    tagline: "Flawless execution for everyday business",
    features: [
      "Professional printing & office supplies",
      "Landing page website",
      "Social media setup",
      "Basic brand identity",
      "In-person consultation",
      "48-hour turnaround",
    ],
    btn: "Start Essentials", btnStyle: "bg-slate-900 text-white hover:bg-slate-800",
    ideal: "Startups, freelancers, local shops",
    accentText: "text-[#b08968]",
  },
  {
    name: "Growth Suite", tier: "Tier 2",
    bg: "bg-white", border: "border-2 border-[#13ecec]", textColor: "text-slate-900",
    price: "800 DT", period: "/ month", icon: "trending_up", popular: true,
    tagline: "Intelligent growth through data and design",
    features: [
      "All Essentials services + 10% supply discount",
      "4 videos + 8 graphics / month",
      "5-platform social media management",
      "SEO optimization & ad management",
      "Smart inventory & Client CRM setup",
      "Basic analytics & monthly reporting",
    ],
    btn: "Start Growing", btnStyle: "bg-[#13ecec] text-slate-900 hover:bg-cyan-300 shadow-lg shadow-[#13ecec]/20",
    ideal: "Growing SMEs, professional firms, e-commerce",
    accentText: "text-[#13ecec]",
  },
  {
    name: "Intelligence Guardian", tier: "Tier 3",
    bg: "bg-[#0F172A]", border: "border border-slate-800", textColor: "text-white",
    price: "1200 DT", period: "/ month", icon: "security",
    tagline: "Conscious business infrastructure",
    features: [
      "All Essentials + Growth Suite services",
      "IoT sensors & predictive maintenance",
      "Custom software & AI analytics dashboard",
      "Blockchain doc security & GDPR/HIPAA compliance",
      "Dedicated account guardian",
      "Weekly reporting & 24/7 priority support",
    ],
    btn: "Book Guardian Consultation", btnStyle: "border border-[#13ecec] text-[#13ecec] hover:bg-[#13ecec] hover:text-slate-900",
    ideal: "Export businesses, clinics, legal firms, manufacturers",
    accentText: "text-[#13ecec]",
  },
];

const services = [
  {
    title: "MWI Hub", tagline: "Your physical business partner",
    desc: "Professional printing, office supplies, bill payment services, and NFC cards & badges.",
    to: "/cbk", icon: "storefront", color: "bg-[#F2E8DF]", iconColor: "text-[#b08968]",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "MWI Digital", tagline: "Your digital growth engine",
    desc: "Content creation, social media management, SEO optimization, and performance ads.",
    to: "/digital-growth", icon: "bolt", color: "bg-slate-900", iconColor: "text-[#13ecec]",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "MWI Intelligence", tagline: "Your intelligent systems guardian",
    desc: "IoT monitoring, custom software, compliance infrastructure, and AI analytics.",
    to: "/intelligence-systems", icon: "psychology", color: "bg-[#13ecec]", iconColor: "text-slate-900",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Ecosystem() {
  const [employees, setEmployees] = useState(10);
  const [marketing, setMarketing] = useState(500);
  const [it, setIt] = useState(300);
  const [print, setPrint] = useState(200);

  const savings = Math.round((marketing * 0.35 + it * 0.4 + print * 0.2) * employees / 10);
  const timeSaved = Math.round(employees * 2.5);
  const revPotential = Math.round(marketing * 2.8);
  const recommendedTier = employees < 5 ? "Essentials" : employees < 20 ? "Growth Suite" : "Intelligence Guardian";

  return (
    <div className="bg-[#f6f8f8] text-slate-900 antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 px-6 text-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-4 block">The Ecosystem</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Choose Your Path to<br /><span className="text-[#13ecec]">Conscious Business</span></h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Three integrated tiers. One seamless journey. Start where you are, grow with confidence.</p>
          </div>
        </section>

        {/* Ecosystem Map */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">How It Works</span>
              <h2 className="text-4xl font-bold mb-4">The Integrated Service Map</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Three service brands, one seamless ecosystem—all roads lead to an integrated client experience.</p>
            </div>

            {/* Visual Map */}
            <div className="flex flex-col items-center gap-6">
              {/* Top Node */}
              <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-xl">
                <div className="w-8 h-8 text-[#13ecec]">
                  <svg fill="none" viewBox="0 0 48 48"><path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="font-black text-lg">MIZAN WAI</p>
                  <p className="text-slate-400 text-xs tracking-widest">The Philosophy · The Intelligence</p>
                </div>
              </div>

              {/* Branches */}
              <div className="flex items-start gap-0 relative w-full max-w-3xl">
                <div className="absolute top-0 left-1/2 -translate-x-0.5 w-0.5 h-6 bg-slate-300"></div>
                <div className="absolute top-6 left-1/6 right-1/6 h-0.5 bg-slate-300" style={{ left: '16.5%', right: '16.5%' }}></div>
                <div className="absolute top-6 left-1/6 w-0.5 h-6 bg-slate-300" style={{ left: '16.5%' }}></div>
                <div className="absolute top-6 left-1/2 -translate-x-0.5 w-0.5 h-6 bg-slate-300"></div>
                <div className="absolute top-6 right-1/6 w-0.5 h-6 bg-slate-300" style={{ right: '16.5%' }}></div>
              </div>

              {/* Three Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                {services.map((svc) => (
                  <Link key={svc.title} to={svc.to} className="group relative rounded-2xl overflow-hidden aspect-[4/3] block">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${svc.img}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <div className={`w-10 h-10 ${svc.color} rounded-xl flex items-center justify-center ${svc.iconColor}`}>
                        <span className="material-symbols-outlined">{svc.icon}</span>
                      </div>
                      <div>
                        <p className="text-white font-black text-xl mb-1">{svc.title}</p>
                        <p className="text-white/70 text-xs mb-3">{svc.tagline}</p>
                        <span className="text-[#13ecec] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Converge arrow */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-slate-300 text-xs font-bold tracking-widest uppercase">All paths lead to</div>
                <div className="w-0.5 h-8 bg-[#13ecec]/40"></div>
                <div className="bg-[#13ecec] text-slate-900 px-8 py-4 rounded-2xl text-center shadow-lg shadow-[#13ecec]/20">
                  <p className="font-black text-lg">Integrated Client Experience</p>
                  <p className="text-slate-700 text-xs mt-1">One partner. Total harmony.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-24 px-6 bg-[#f6f8f8]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">Pricing</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Service Tiers</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Choose your level of engagement. From foundational execution to full-scale intelligence management.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {tiers.map((t) => (
                <div key={t.name} className={`group relative flex flex-col rounded-2xl ${t.bg} p-8 transition-all hover:-translate-y-2 hover:shadow-2xl ${t.border}`}>
                  {t.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#13ecec] text-slate-900 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow">Most Popular</div>
                  )}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${t.name === "Intelligence Guardian" ? "bg-slate-800 text-[#13ecec]" : t.name === "Growth Suite" ? "bg-[#13ecec]/10 text-[#13ecec]" : "bg-white/70 text-[#b08968]"}`}>{t.tier}</div>
                      <h3 className={`text-2xl font-bold mb-1 ${t.textColor}`}>{t.name}</h3>
                      <p className={`text-sm mb-4 ${t.name === "Intelligence Guardian" ? "text-slate-400" : "text-slate-500"}`}>{t.tagline}</p>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-black ${t.textColor}`}>{t.price}</span>
                        <span className={`text-sm ${t.name === "Intelligence Guardian" ? "text-slate-400" : "text-slate-500"}`}>{t.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {t.features.map((f) => (
                        <li key={f} className={`flex items-start gap-3 ${t.name === "Intelligence Guardian" ? "text-slate-300" : "text-slate-700"}`}>
                          <span className={`material-symbols-outlined text-lg ${t.accentText}`}>{t.name === "Intelligence Guardian" ? "verified_user" : "check_circle"}</span>
                          <span className="text-sm leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className={`text-xs italic mb-6 ${t.name === "Intelligence Guardian" ? "text-slate-500" : "text-slate-400"}`}>Perfect for: {t.ideal}</p>
                    <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all text-center block ${t.btnStyle}`}>{t.btn}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">ROI Calculator</span>
              <h2 className="text-4xl font-bold mb-4">See Your Savings</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Estimate the value Mizan WAI brings to your business. Adjust the sliders to match your situation.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Inputs */}
              <div className="bg-[#f6f8f8] rounded-2xl p-8 space-y-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Your Business Profile</h3>
                {[
                  { label: "Number of Employees", value: employees, setter: setEmployees, min: 1, max: 100, unit: "people", color: "accent-[#13ecec]" },
                  { label: "Monthly Marketing Spend", value: marketing, setter: setMarketing, min: 100, max: 5000, unit: "DT", color: "accent-[#13ecec]" },
                  { label: "Monthly IT / Software Costs", value: it, setter: setIt, min: 100, max: 3000, unit: "DT", color: "accent-[#13ecec]" },
                  { label: "Monthly Print / Office Supply Spend", value: print, setter: setPrint, min: 50, max: 2000, unit: "DT", color: "accent-[#13ecec]" },
                ].map(({ label, value, setter, min, max, unit }) => (
                  <div key={label}>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-slate-700">{label}</label>
                      <span className="text-[#13ecec] font-bold text-sm">{value} {unit}</span>
                    </div>
                    <input
                      type="range" min={min} max={max} value={value}
                      onChange={(e) => setter(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#13ecec] bg-slate-200"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>{min}</span><span>{max}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Your Estimated Results</h3>
                {[
                  { label: "Estimated Monthly Savings", value: `${savings} DT`, icon: "savings", color: "bg-[#13ecec]/10 text-[#13ecec]" },
                  { label: "Time Saved per Month", value: `${timeSaved} hours`, icon: "schedule", color: "bg-purple-50 text-purple-600" },
                  { label: "Revenue Potential from Integration", value: `${revPotential} DT`, icon: "trending_up", color: "bg-green-50 text-green-600" },
                  { label: "Recommended Tier", value: recommendedTier, icon: "recommend", color: "bg-orange-50 text-orange-600" },
                ].map(({ label, value, icon, color }) => (
                  <div key={label} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-500 text-sm">{label}</p>
                      <p className="text-2xl font-black text-slate-900 truncate">{value}</p>
                    </div>
                  </div>
                ))}
                <Link to="/contact" className="w-full mt-4 bg-[#13ecec] text-slate-900 py-4 rounded-xl font-bold text-sm text-center block hover:bg-cyan-300 transition-colors shadow-lg shadow-[#13ecec]/20">
                  Book a Strategy Call — Let's Confirm Your Numbers
                </Link>
                <p className="text-xs text-slate-400 text-center">* Estimates based on average client data. Actual results vary by industry and scale.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 text-[#13ecec]">
                <svg fill="none" viewBox="0 0 48 48"><path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" /></svg>
              </div>
              <span className="text-xl font-bold text-white">Mizan WAI</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">Science. Work. Mastery.</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-6 text-sm font-medium text-slate-400">
              {["Privacy", "Terms", "Contact"].map((l) => <a key={l} href="#" className="hover:text-[#13ecec] transition-colors">{l}</a>)}
            </div>
            <p className="text-xs text-slate-600">© 2025 Mizan WAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
