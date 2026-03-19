import { Navbar } from "../components/Navbar";
import { Link } from "react-router";
import { useState } from "react";

export function meta(_args: any) {
  return [{ title: "Mizan WAI - Client Stories" }];
}

const stories = [
  { industry: "Retail & E-Commerce", name: "Artisan Fashion Boutique", result: "Revenue tripled through targeted data strategies and UX overhaul.", metric1: "300%", m1Label: "ROAS Increase", metric2: "40%", m2Label: "Cost Reduction", metric3: "2×", m3Label: "Organic Traffic", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80", tier: "Growth Suite", featured: true, quote: "Mizan WAI transformed how we think about our digital presence—every decision is now data-driven." },
  { industry: "Professional Services", name: "Tunis Law Associates", result: "Complete compliance infrastructure and digital document management.", metric1: "100%", m1Label: "Compliance Achieved", metric2: "60%", m2Label: "Admin Time Saved", metric3: "98%", m3Label: "Document Accuracy", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80", tier: "Intelligence Guardian", quote: "The compliance peace of mind is invaluable." },
  { industry: "Manufacturing", name: "MedTech Factory Group", result: "IoT monitoring reduced downtime and cut operational costs significantly.", metric1: "40%", m1Label: "Cost Reduction", metric2: "65%", m2Label: "Less Downtime", metric3: "3×", m3Label: "Efficiency Gain", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80", tier: "Intelligence Guardian", quote: "Predictive maintenance changed our operations completely." },
  { industry: "Startups", name: "FinTech Startup Launch", result: "Go-to-market strategy for a B2B SaaS product from zero.", metric1: "10k+", m1Label: "New Users in 90 Days", metric2: "45%", m2Label: "Brand Lift", metric3: "5×", m3Label: "Investor Interest", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80", tier: "Growth Suite", quote: "We launched with confidence because Mizan WAI had our entire brand ecosystem ready." },
  { industry: "Healthcare", name: "MedClinic Network", result: "Patient data security and HIPAA compliance across 5 locations.", metric1: "100%", m1Label: "HIPAA Compliant", metric2: "50%", m2Label: "Patient Wait Reduction", metric3: "4.9★", m3Label: "Patient Satisfaction", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80", tier: "Intelligence Guardian", quote: "Patient trust is everything—Mizan WAI gave us the infrastructure to earn it." },
  { industry: "Retail & E-Commerce", name: "Office Supply Chain", result: "Brand revamp and digital presence that expanded to 3 cities.", metric1: "200%", m1Label: "Online Revenue", metric2: "3", m2Label: "Cities Expanded", metric3: "85%", m3Label: "Customer Retention", img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80", tier: "Growth Suite", quote: "Starting with Essentials and growing to Growth Suite was seamless." },
];

const filters = ["All Industries", "Retail & E-Commerce", "Professional Services", "Manufacturing", "Healthcare", "Startups"];

export default function ClientStories() {
  const [activeFilter, setActiveFilter] = useState("All Industries");
  const featured = stories.find((s) => s.featured)!;
  const rest = stories.filter((s) => !s.featured);
  const filtered = activeFilter === "All Industries" ? rest : rest.filter((s) => s.industry === activeFilter);

  return (
    <div className="bg-[#f6f8f8] text-slate-900 antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="relative py-24 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 opacity-5 pointer-events-none">
            {stories.map((s) => (
              <div key={s.name} className="bg-cover bg-center" style={{ backgroundImage: `url('${s.img}')` }}></div>
            ))}
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-4 block">Client Stories</span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Businesses Transformed<br /><span className="text-[#13ecec]">by Conscious Integration</span></h1>
            <p className="text-slate-500 text-lg">Real results from real partnerships.</p>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-white border-y border-slate-100 py-12 px-6">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[["98%","Client Retention Rate"],["3.2×","Avg. Marketing ROI"],["40%","Avg. Cost Savings"],["4+","Industries Served"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black text-[#13ecec] mb-1">{val}</div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Story */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-slate-900">Featured Story</h2>
            <div className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-end">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('${featured.img}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="relative z-10 p-10 md:p-16 max-w-3xl">
                <span className="text-[#13ecec] text-xs font-bold tracking-widest uppercase mb-3 block">{featured.industry}</span>
                <blockquote className="text-white text-2xl md:text-3xl font-medium italic leading-snug mb-6">"{featured.quote}"</blockquote>
                <p className="text-white font-bold text-xl mb-1">{featured.name}</p>
                <p className="text-white/60 text-sm mb-8">{featured.result}</p>
                <div className="flex gap-6 mb-8">
                  {[[featured.metric1, featured.m1Label],[featured.metric2, featured.m2Label],[featured.metric3, featured.m3Label]].map(([val, label]) => (
                    <div key={label} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                      <div className="text-2xl font-black text-[#13ecec]">{val}</div>
                      <div className="text-white/70 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-[#13ecec] text-sm font-bold">
                  <span className="material-symbols-outlined text-base">{featured.tier === "Intelligence Guardian" ? "verified_user" : "trending_up"}</span>
                  {featured.tier} · Ongoing Partnership
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-16 px-6 bg-[#f6f8f8]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === f ? "bg-[#13ecec] text-slate-900" : "bg-white border border-slate-200 text-slate-600 hover:border-[#13ecec] hover:text-[#13ecec]"}`}>{f}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((s) => (
                <div key={s.name} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#13ecec]/30 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${s.img}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-bold text-[#13ecec] bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">{s.industry}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${s.tier === "Intelligence Guardian" ? "bg-[#0F172A] text-[#13ecec]" : s.tier === "Growth Suite" ? "bg-[#13ecec] text-slate-900" : "bg-[#F2E8DF] text-[#b08968]"}`}>{s.tier}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{s.name}</h3>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">{s.result}</p>
                    <div className="flex gap-4">
                      {[[s.metric1, s.m1Label],[s.metric2, s.m2Label]].map(([val, label]) => (
                        <div key={label} className="flex-1 bg-slate-50 rounded-xl p-3 text-center">
                          <div className="text-xl font-black text-[#13ecec]">{val}</div>
                          <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>
                    <blockquote className="text-slate-500 text-sm italic mt-4 border-l-2 border-[#13ecec] pl-3">"{s.quote}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">The Difference</span>
              <h2 className="text-4xl font-bold">The Mizan WAI Effect</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-300">cancel</span> Before Mizan WAI
                </h3>
                <ul className="space-y-4">
                  {["Fragmented vendors & inconsistent branding","Technology headaches & compliance anxiety","No visibility into what's working","Siloed systems that don't talk to each other"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-500">
                      <span className="material-symbols-outlined text-slate-300 mt-0.5 text-base flex-shrink-0">remove_circle</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 rounded-2xl p-8 border border-[#13ecec]/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#13ecec]">verified</span> After Mizan WAI
                </h3>
                <ul className="space-y-4">
                  {["Single integrated partner, coherent brand experience","Smart, simple systems with real peace of mind","Data-driven decisions with clear attribution","One ecosystem that thinks, acts, and grows together"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <span className="material-symbols-outlined text-[#13ecec] mt-0.5 text-base flex-shrink-0">check_circle</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#13ecec]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Write Your Story?</h2>
            <p className="text-slate-700 text-lg mb-8">Join our growing list of conscious businesses. Book a consultation and discover your transformation path.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">Book Consultation</Link>
              <Link to="/ecosystem" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">Explore Service Tiers</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-6 text-center">
        <p className="text-sm text-slate-400">© 2025 Mizan WAI. All rights reserved. <Link to="/" className="hover:text-[#13ecec] transition-colors">Home</Link></p>
      </footer>
    </div>
  );
}
