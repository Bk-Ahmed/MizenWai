import { Navbar } from "../components/Navbar";
import { Link } from "react-router";

export function meta(_args: any) {
  return [{ title: "MWI Digital — Your Digital Growth Engine" }];
}

const services = [
  {
    icon: "video_camera_back", title: "Content Creation",
    desc: "Visual storytelling that converts audiences into loyal customers.",
    items: ["4 Videos/month", "8 Graphics/month", "Copywriting & Blog Posts", "Photography", "Motion Design", "Brand Storytelling"],
  },
  {
    icon: "hub", title: "Platform Management",
    desc: "Full-stack handling of your digital presence across 5 platforms.",
    items: ["Social Media Management", "Community Engagement", "Ad Campaign Management ($40–75 budget)", "Email Marketing", "Reputation Management", "Crisis Management"],
  },
  {
    icon: "analytics", title: "Strategy & Analytics",
    desc: "Quantifiable growth backed by hard data and continuous optimization.",
    items: ["SEO Optimization", "Conversion Optimization", "Audience Insights", "Competitor Analysis", "Monthly Reporting", "A/B Testing"],
  },
];

const caseStudies = [
  { tag: "E-Commerce", title: "Fashion Retailer Scale-Up", desc: "Tripled revenue through targeted data strategies and UX overhaul.", metric: "300%", metricLabel: "ROAS Increase", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
  { tag: "SaaS", title: "Tech Platform Launch", desc: "Go-to-market strategy for a B2B SaaS product, zero to launch.", metric: "10k+", metricLabel: "New Users", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80" },
  { tag: "Branding", title: "FinTech Rebrand", desc: "Complete identity overhaul for a legacy bank entering digital-first.", metric: "45%", metricLabel: "Brand Lift", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" },
];

export default function DigitalGrowth() {
  return (
    <div className="bg-[#f6f8f8] text-slate-900 overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="p-4 md:p-8">
          <div className="relative flex min-h-[580px] flex-col overflow-hidden rounded-3xl bg-slate-900 items-center justify-center p-8 md:p-16 text-center">
            <div className="absolute inset-0 z-0">
              <img alt="Digital office" className="h-full w-full object-cover opacity-25" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col gap-4 max-w-3xl items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-2">
                <span className="material-symbols-outlined text-[#13ecec] text-sm">auto_graph</span>
                <span className="text-[#13ecec] text-xs font-bold uppercase tracking-wider">Growth Engineered</span>
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ecec] to-cyan-200">Growth Engine</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mt-2">We don't guess—we engineer. Data-driven creative solutions designed to scale modern brands.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="flex min-w-[180px] items-center justify-center gap-2 rounded-lg h-12 px-6 bg-[#13ecec] hover:bg-cyan-300 text-slate-900 text-base font-bold transition-all shadow-[0_0_20px_rgba(19,236,236,0.3)]">
                  Book Strategy Call
                </Link>
                <Link to="/contact" className="flex min-w-[180px] items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white/20 text-white hover:bg-white/10 text-base font-medium transition-colors">
                  Get Free Audit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-4 py-20 md:px-16 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-1 bg-[#13ecec] rounded-full"></div>
              <h2 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight">The Science of Influence</h2>
              <p className="text-slate-600 text-lg leading-relaxed">Creativity without data is decoration. Data without creativity is noise. Our philosophy connects artistic excellence with rigorous data science.</p>
              <p className="text-slate-500 leading-relaxed">Using data, AI, and strategic creativity to grow your digital presence. We measure what matters and optimize continuously—every campaign, every piece of content.</p>
              <div className="flex gap-8 pt-2">
                {[["300%", "Avg. ROI Increase"], ["3.2×", "Marketing ROAS"], ["98%", "Client Retention"]].map(([val, label]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-3xl font-black text-[#13ecec]">{val}</span>
                    <span className="text-xs text-slate-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "psychology", title: "Behavioral Analysis", desc: "Understanding user intent before pixel one. We study your audience deeply before creating anything." },
                { icon: "query_stats", title: "Predictive Modeling", desc: "Forecasting trends to keep you ahead of the market and your competitors." },
                { icon: "brush", title: "Human-Centered Design", desc: "Every creative decision rooted in empathy and real user research." },
                { icon: "loop", title: "Continuous Optimization", desc: "We test, learn, and iterate—your campaigns get smarter every month." },
              ].map((item, i) => (
                <div key={item.title} className={`bg-[#f6f8f8] p-6 rounded-2xl border border-slate-100 hover:border-[#13ecec]/50 transition-all group hover:shadow-md ${i === 1 ? 'mt-6' : ''} ${i === 3 ? '-mt-6' : ''}`}>
                  <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-[#13ecec] transition-colors mb-3 block">{item.icon}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-4 py-20 md:px-16 bg-[#f6f8f8]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">Core Capabilities</span>
              <h2 className="text-slate-900 text-4xl font-bold mb-4">Full-Spectrum Digital Services</h2>
              <p className="text-slate-500 max-w-xl mx-auto">From 800 DT/month — Everything you need to grow, all managed under one roof.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map(({ icon, title, desc, items }) => (
                <div key={title} className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#13ecec]/30 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#13ecec]/10 flex items-center justify-center text-[#13ecec] group-hover:bg-[#13ecec] group-hover:text-slate-900 transition-all">
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 text-xl font-bold mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <ul className="mt-auto space-y-2 pt-4 border-t border-slate-50">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#13ecec] flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#13ecec] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 md:px-16 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-2 block">Proven Results</span>
                <h2 className="text-slate-900 text-4xl font-bold">Case Studies</h2>
              </div>
              <Link to="/client-stories" className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-700 hover:text-[#13ecec] transition-colors border-b border-[#13ecec] pb-0.5">
                View All Stories <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map(({ tag, title, desc, metric, metricLabel, img }) => (
                <div key={title} className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:border-[#13ecec]/20 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">{tag}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-slate-900 text-lg font-bold mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">{desc}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-medium">{metricLabel}</p>
                        <p className="text-2xl font-black text-[#13ecec]">{metric}</p>
                      </div>
                      <Link to="/client-stories" className="text-slate-900 text-sm font-bold flex items-center gap-1 hover:text-[#13ecec] transition-colors">
                        Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Story */}
        <section className="py-16 px-4 md:px-16 bg-[#f6f8f8]">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-3xl bg-slate-900 p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-slate-800">
              <div>
                <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">How It Connects</span>
                <h3 className="text-white text-3xl font-bold mb-4">Digital Campaigns Drive Physical Traffic</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Your digital campaigns drive traffic to your physical location. We track and optimize both. QR codes on print materials connect the physical and digital world seamlessly.</p>
                <div className="flex gap-4">
                  <Link to="/cbk" className="text-sm font-bold text-[#13ecec] border border-[#13ecec]/30 px-4 py-2 rounded-lg hover:bg-[#13ecec] hover:text-slate-900 transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">storefront</span> Physical Hub
                  </Link>
                  <Link to="/intelligence-systems" className="text-sm font-bold text-slate-400 border border-slate-700 px-4 py-2 rounded-lg hover:border-[#13ecec] hover:text-[#13ecec] transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">psychology</span> Intelligence
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[["Content Created", "8 Graphics + 4 Videos/mo"], ["Platforms Managed", "5 Channels"], ["Avg. Response Time", "Within 4 hours"], ["Monthly Reports", "Full Analytics"]].map(([label, val]) => (
                  <div key={label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                    <p className="text-slate-400 text-xs mb-1">{label}</p>
                    <p className="text-white font-bold text-sm">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing + CTA */}
        <section className="py-24 px-4 md:px-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#13ecec 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center gap-6">
            <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Monthly Retainers from<br /><span className="text-[#13ecec]">800 DT / month</span></h2>
            <p className="text-slate-300 text-lg max-w-2xl font-light">Custom packages available. Let's analyze your digital ecosystem and build a plan that fits your goals and budget.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#13ecec] hover:bg-cyan-300 text-slate-900 font-bold transition-all shadow-lg">Book Strategy Call</Link>
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold transition-all">Get Free Audit</Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-white border-t border-slate-200 py-12 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-slate-900 font-bold">MWI Digital Agency</span>
          <p className="text-slate-400 text-xs">© 2025 Mizan WAI. All rights reserved.</p>
          <Link to="/" className="text-xs text-[#13ecec] hover:underline">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}
