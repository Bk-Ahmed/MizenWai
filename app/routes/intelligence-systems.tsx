import { Navbar } from "../components/Navbar";
import { Link } from "react-router";

export function meta(_args: any) {
  return [{ title: "MWI Intelligence — Your Intelligent Systems Guardian" }];
}

const services = [
  {
    icon: "sensors", title: "IoT & Automation",
    desc: "Complete ecosystem management for industrial hardware and smart environments.",
    items: ["Equipment Monitoring", "Smart Sensor Networks", "Predictive Maintenance", "Environmental Monitoring", "Asset Tracking", "Process Automation"],
  },
  {
    icon: "code", title: "Software Solutions",
    desc: "Intelligence layers that turn raw data into actionable business insights.",
    items: ["Custom CRM Development", "AI Analytics Dashboard", "Inventory Management Systems", "Business Intelligence Dashboards", "API Integrations", "Cloud Migration"],
  },
  {
    icon: "shield_lock", title: "Compliance & Security",
    desc: "Fortified digital perimeters and compliance frameworks for sensitive data.",
    items: ["Blockchain Document Security", "Secure Cloud Storage", "GDPR / HIPAA Compliance", "Digital Audit Trails", "Data Redaction Tools", "Access Control Systems"],
  },
];

export default function IntelligenceSystems() {
  return (
    <div className="bg-[#050a0a] text-slate-100 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        {/* Hero */}
        <section className="relative min-h-[620px] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(5,10,10,0.8) 0%, rgba(5,10,10,0.96) 100%), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')` }}></div>
          <div className="absolute inset-0 z-0 opacity-8" style={{ backgroundImage: "radial-gradient(#13ecec 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          <div className="relative z-10 flex flex-col items-center max-w-4xl text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#13ecec]/30 bg-[#13ecec]/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13ecec] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13ecec]"></span>
              </span>
              <span className="text-xs font-medium text-[#13ecec] uppercase tracking-wider">Systems Online · 99.9% Uptime</span>
            </div>
            <h1 className="text-white text-5xl sm:text-7xl font-bold leading-[1.1] tracking-tight">
              Your Intelligent <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ecec] to-teal-400">Systems Guardian</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
              Smart systems for conscious business. The integration of cutting-edge IoT, custom software, and compliance infrastructure that thinks, protects, and adapts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/contact" className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-[#13ecec] hover:bg-cyan-300 text-[#050a0a] text-base font-bold transition-all shadow-[0_0_20px_rgba(19,236,236,0.3)]">
                <span className="material-symbols-outlined text-base">calendar_month</span>
                Schedule Discovery Call
              </Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-[#0d1616] border border-[#1f3333] hover:border-[#13ecec]/50 text-white text-base font-medium transition-all">
                <span className="material-symbols-outlined text-[#13ecec] text-base">download</span>
                Capabilities Deck
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="border-y border-[#1f3333] bg-[#0d1616]">
          <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[["99.9%", "Uptime Guaranteed"], ["24/7", "AI Monitoring"], ["100%", "Compliance Rate"], ["0", "Data Breaches"]].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center md:items-start border-r border-[#1f3333] last:border-0 md:pl-4">
                <span className="text-3xl font-black text-[#13ecec]">{val}</span>
                <span className="text-sm text-slate-400 mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <section className="py-24 px-4 sm:px-10 bg-[#050a0a]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
            <div className="text-center">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">Core Capabilities</span>
              <h2 className="text-white text-4xl font-bold mb-4">Intelligent Services</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Enterprise-grade solutions starting at 1200 DT/month. Built for export businesses, clinics, legal firms, and manufacturers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map(({ icon, title, desc, items }) => (
                <div key={title} className="group relative flex flex-col gap-6 rounded-2xl border border-[#1f3333] bg-[#0d1616] p-8 transition-all hover:border-[#13ecec]/50 hover:shadow-[0_0_30px_rgba(19,236,236,0.08)] hover:-translate-y-1">
                  <div className="size-14 rounded-xl bg-[#13ecec]/10 flex items-center justify-center text-[#13ecec] group-hover:bg-[#13ecec] group-hover:text-[#050a0a] transition-all">
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
                    <ul className="flex flex-col gap-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#13ecec] flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#13ecec] transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 px-4 sm:px-10 bg-[#0d1616]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center rounded-2xl bg-[#050a0a] border border-[#1f3333] p-8 sm:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#13ecec]/5 to-transparent pointer-events-none"></div>
              <div className="flex flex-col gap-6 flex-1 z-10">
                <div className="inline-flex items-center gap-2 text-[#13ecec] font-bold tracking-wide uppercase text-sm">
                  <span className="material-symbols-outlined text-sm">business_center</span> Case Study
                </div>
                <h2 className="text-white text-3xl font-bold leading-tight">Predictive Maintenance at Scale for Heavy Manufacturing</h2>
                <p className="text-slate-400 text-base leading-relaxed">By implementing WAI's IoT sensor network, a leading automotive parts manufacturer reduced critical equipment failure by predicting issues 72 hours in advance—with zero unplanned downtime in Q3.</p>
                <div className="grid grid-cols-2 gap-6 mt-2">
                  {[["40%", "Downtime Reduction"], ["3.5×", "ROI in Year One"], ["72hrs", "Advance Warning"], ["100%", "Compliance Maintained"]].map(([val, label]) => (
                    <div key={label} className="flex flex-col gap-1 border-l-2 border-[#13ecec] pl-4">
                      <span className="text-2xl font-black text-[#13ecec]">{val}</span>
                      <span className="text-xs text-slate-400 uppercase tracking-wide">{label}</span>
                    </div>
                  ))}
                </div>
                <Link to="/client-stories" className="inline-flex items-center text-[#13ecec] font-bold hover:underline mt-2">
                  Read Full Case Study <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
              <div className="flex-1 w-full lg:max-w-md z-10">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1f3333] shadow-2xl relative">
                  <img alt="Industrial automation" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80" />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400 uppercase">Client</div>
                    <div className="text-white font-bold text-sm">MedTech Factory Group</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Story */}
        <section className="py-16 px-4 sm:px-10 bg-[#050a0a]">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-2xl border border-[#1f3333] bg-[#0d1616] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">Integration Story</span>
                <h3 className="text-white text-3xl font-bold mb-4">Smart Systems Inform Your Entire Strategy</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Your IoT data reveals operational insights that guide marketing and purchasing decisions. Intelligence doesn't just protect—it enlightens your entire business ecosystem.</p>
                <div className="flex gap-4">
                  <Link to="/digital-growth" className="text-sm font-bold text-[#13ecec] border border-[#13ecec]/30 px-4 py-2 rounded-lg hover:bg-[#13ecec] hover:text-slate-900 transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">bolt</span> Digital Agency
                  </Link>
                  <Link to="/cbk" className="text-sm font-bold text-slate-400 border border-[#1f3333] px-4 py-2 rounded-lg hover:border-[#13ecec] hover:text-[#13ecec] transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">storefront</span> Physical Hub
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "sensors", label: "IoT Data Collection", desc: "24/7 real-time sensor feeds from your physical environment" },
                  { icon: "analytics", label: "AI Analysis", desc: "Machine learning surfaces patterns invisible to the human eye" },
                  { icon: "lightbulb", label: "Business Intelligence", desc: "Insights flow into marketing, operations, and procurement" },
                  { icon: "shield_lock", label: "Compliance Audit Trail", desc: "Every action logged, verified, and secured by blockchain" },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl border border-[#1f3333] bg-[#050a0a]">
                    <div className="w-10 h-10 rounded-lg bg-[#13ecec]/10 flex items-center justify-center text-[#13ecec] flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">{icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{label}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing + CTA */}
        <section className="py-24 px-4 sm:px-10 bg-gradient-to-b from-[#050a0a] to-[#081212] border-t border-[#1f3333]">
          <div className="max-w-[800px] mx-auto text-center flex flex-col gap-6 items-center">
            <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase">Pricing</span>
            <h2 className="text-white text-4xl sm:text-5xl font-bold">Enterprise Solutions from<br /><span className="text-[#13ecec]">1200 DT / month</span></h2>
            <p className="text-slate-400 text-lg max-w-xl font-light">Custom integration pricing available. Let's scope your infrastructure and build a guardian system tailored to your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#13ecec] hover:bg-cyan-300 text-[#050a0a] font-bold transition-all shadow-[0_0_25px_rgba(19,236,236,0.2)]">
                Schedule Discovery Call
              </Link>
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border border-[#1f3333] hover:border-slate-500 text-white font-medium transition-all">
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#020404] border-t border-[#1f3333] py-12 px-4 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-[#13ecec]">psychology</span>
            <span className="font-bold">MWI Intelligence</span>
          </div>
          <p>© 2025 Mizan WAI. All rights reserved.</p>
          <Link to="/" className="text-[#13ecec] hover:underline">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}
