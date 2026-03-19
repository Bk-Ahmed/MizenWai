import { Navbar } from "../components/Navbar";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
export function meta(_args: any) {
  return [
    { title: "Mizan WAI - Conscious Business Begins Here" },
    { name: "description", content: "Where physical excellence meets digital intelligence." },
  ];
}

const serviceCards = [
  {
    color: "bg-[#F2E8DF]", accent: "text-[#b08968]", iconBg: "bg-[#d4a373]/20", icon: "storefront",
    title: "Physical Hub", tagline: "Flawless execution for everyday business",
    desc: "Premium printing, office supplies, and bill payment services. Your tangible business partner.", to: "/cbk", linkColor: "text-[#b08968]",
  },
  {
    color: "bg-white border-2 border-[#13ecec]", accent: "text-[#13ecec]", iconBg: "bg-[#13ecec]/20", icon: "bolt",
    title: "Digital Agency", tagline: "Data-driven growth, human-centered design",
    desc: "Content creation, social media, SEO, and ad management engineered to scale modern brands.", to: "/digital-growth", linkColor: "text-[#13ecec]",
  },
  {
    color: "bg-[#0F172A]", accent: "text-[#13ecec]", iconBg: "bg-[#13ecec]/10", icon: "psychology",
    title: "WAI Intelligence", tagline: "Smart systems for conscious business",
    desc: "IoT monitoring, custom software, and compliance infrastructure that thinks, protects, and adapts.", to: "/intelligence-systems", linkColor: "text-[#13ecec]",
  },
];

const tiers = [
  { name: "Essentials", phrase: "Work. Execution. Basics.", price: "From project fee", bg: "bg-[#F2E8DF]", text: "text-slate-900", tag: "text-[#b08968]" },
  { name: "Growth Suite", phrase: "Science + Work. Scale.", price: "From 800 DT / month", bg: "bg-white border-2 border-[#13ecec]", text: "text-slate-900", tag: "text-[#13ecec]", popular: true },
  { name: "Intelligence Guardian", phrase: "Science + Work + Mastery. Transform.", price: "From 1200 DT / month", bg: "bg-[#0F172A]", text: "text-white", tag: "text-[#13ecec]" },
];

const methodology = [
  { step: "01", icon: "search", title: "Discover", color: "bg-[#13ecec]/10 text-[#13ecec]", desc: "We immerse ourselves in your business reality—auditing your operations, studying your market, and understanding your aspirations." },
  { step: "02", icon: "architecture", title: "Design & Deliver", color: "bg-[#0F172A] text-[#13ecec]", desc: "We architect solutions using data and intelligence, then execute with precision and excellence to bring the vision to life." },
  { step: "03", icon: "verified_user", title: "Guardian", color: "bg-[#F2E8DF] text-[#b08968]", desc: "We protect and optimize continuously—monitoring performance, ensuring compliance, and evolving with your business." },
];

export default function Home() {
  return (
    <div className="bg-[#f6f8f8] text-slate-900 antialiased overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[88vh] flex items-center hero-bg overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 w-fit backdrop-blur-sm border border-slate-200">
                <span className="divider-teal"></span>
                <span className="text-xs font-semibold tracking-wide uppercase text-slate-600">Science. Work. Mastery.</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Conscious Business <br />
                <span className="text-[#13ecec] relative inline-block">
                  Begins Here.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#13ecec] opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl font-light leading-relaxed">
                Where physical excellence meets digital intelligence. The harmonious integration of disciplined execution, intelligent technology, and relentless pursuit of mastery.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/ecosystem" className="bg-[#13ecec] text-slate-900 px-8 py-3.5 rounded-lg text-base font-bold hover:shadow-[0_0_20px_rgba(19,236,236,0.35)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                  Explore Our Ecosystem
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/philosophy" className="px-8 py-3.5 rounded-lg text-base font-bold border border-slate-300 hover:bg-slate-100 transition-all duration-300 text-slate-900">
                  Meet Our Philosophy
                </Link>
              </div>
            </div>

            <div className="hidden lg:col-span-5 lg:flex justify-end relative">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-20">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=600&q=80')" }}></div>
                </div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl z-10 opacity-90 border-4 border-white">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80')" }}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3" style={{ animation: 'bounce 3s ease-in-out infinite' }}>
                  <div className="bg-[#13ecec]/20 p-2 rounded-lg text-[#13ecec]">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">System Status</p>
                    <p className="text-sm font-bold">Optimized ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Ribbon */}
        <div className="w-full border-y border-slate-200 bg-white py-6">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-8 items-center">
              {["NEXUS", "ORBITAL", "VANGUARD", "SYNTHESIS", "QUANTUM"].map((logo) => (
                <span key={logo} className="text-sm font-bold tracking-widest text-slate-300 hover:text-[#13ecec] transition-colors cursor-default">{logo}</span>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[#13ecec] text-base">verified</span> 98% Client Retention</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[#13ecec] text-base">schedule</span> 8+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Service Ecosystem Section */}
        <section className="py-24 px-6" id="services">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">The Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Three Pillars. One Vision.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Balancing the triad of modern business needs through conscious design and execution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((card) => (
                <div key={card.title} className={`group relative ${card.color} p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden`}>
                  <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center ${card.accent} mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${card.accent}`}>{card.tagline}</div>
                  <h3 className={`text-2xl font-bold mb-3 ${card.title === "WAI Intelligence" ? "text-white" : "text-slate-900"}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${card.title === "WAI Intelligence" ? "text-slate-400" : "text-slate-600"}`}>{card.desc}</p>
                  <Link to={card.to} className={`inline-flex items-center text-sm font-bold ${card.linkColor} hover:gap-3 gap-1 transition-all`}>
                    Explore {card.title} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <div className={`absolute bottom-0 left-0 w-full h-1 ${card.accent === "text-[#13ecec]" ? "bg-[#13ecec]" : "bg-[#d4a373]"} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="w-full bg-white" id="philosophy">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#13ecec] mb-1">Mizan Wai</p>
                </div>
                <h3 className="text-2xl font-bold">Craftsmanship in the Digital Age</h3>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 lg:p-20 bg-[#f6f8f8]">
              <div className="max-w-lg">
                <div className="divider-teal mb-6"></div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Our name<br />is our method.</h2>
                <blockquote className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-[#13ecec] pl-6 mb-6">
                  "True business transformation is born from conscious balance—the harmonious integration of disciplined execution, intelligent technology, and relentless pursuit of excellence."
                </blockquote>
                <p className="text-slate-500 leading-relaxed font-light mb-8">Science. Work. Mastery. Three words. One discipline. The WAI framework isn't a methodology—it's a philosophy of being.</p>
                <Link to="/philosophy" className="border-b-2 border-[#13ecec] pb-1 text-slate-900 font-bold hover:text-[#13ecec] transition-colors inline-flex items-center gap-2">
                  Read our Manifesto <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WAI Framework / Methodology */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">The MizenWAI Framework</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Three Steps. One Transformation.</h2>
              <p className="text-slate-500 max-w-xl mx-auto">A progressive methodology from understanding to mastery.</p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* connecting line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#13ecec]/30 via-[#13ecec] to-[#13ecec]/30"></div>
              {methodology.map((m, i) => (
                <div key={m.step} className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 hover:border-[#13ecec]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <div className={`w-16 h-16 rounded-2xl ${m.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    <span className="material-symbols-outlined text-2xl">{m.icon}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-300 tracking-widest mb-2">{m.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{m.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  {i < methodology.length - 1 && (
                    <div className="md:hidden mt-6 text-[#13ecec]">
                      <span className="material-symbols-outlined">arrow_downward</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tiers Preview */}
        <section className="py-24 px-6 bg-[#f6f8f8]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">Service Tiers</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Start where you are. Grow with confidence. Three integrated tiers, one seamless journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div key={tier.name} className={`relative ${tier.bg} p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl duration-300`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#13ecec] text-slate-900 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow">Most Popular</div>
                  )}
                  <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${tier.tag}`}>{tier.phrase}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${tier.text}`}>{tier.name}</h3>
                  <p className={`text-sm mb-8 ${tier.name === "Intelligence Guardian" ? "text-slate-400" : "text-slate-500"}`}>{tier.price}</p>
                  <Link to="/ecosystem" className={`inline-flex items-center gap-2 text-sm font-bold ${tier.tag} hover:gap-3 transition-all`}>
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Stories Preview */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-[#13ecec] font-bold text-sm tracking-widest uppercase mb-3 block">Client Stories</span>
                <h2 className="text-4xl md:text-5xl font-bold">Businesses Transformed</h2>
              </div>
              <Link to="/client-stories" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-[#13ecec] pb-1 hover:text-[#13ecec] transition-colors">
                View all stories <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { industry: "Retail & E-Commerce", name: "Fashion Retailer", result: "300% ROAS Increase", metric: "300%", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
                { industry: "Professional Services", name: "Law Firm", result: "100% Compliance Achieved", metric: "100%", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80" },
                { industry: "Manufacturing", name: "Factory Group", result: "40% Cost Reduction", metric: "40%", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80" },
              ].map((story) => (
                <Link key={story.name} to="/client-stories" className="group relative rounded-2xl overflow-hidden aspect-[4/3] block">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${story.img}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#13ecec] bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full w-fit">{story.industry}</span>
                    <div>
                      <div className="text-4xl font-black text-[#13ecec] mb-1">{story.metric}</div>
                      <p className="text-white font-bold text-lg">{story.name}</p>
                      <p className="text-white/70 text-sm">{story.result}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-slate-100">
              {[["98%", "Client Retention"], ["3.2×", "Avg. Marketing ROI"], ["40%", "Operational Savings"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-black text-[#13ecec] mb-1">{val}</div>
                  <div className="text-sm text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-4xl text-[#13ecec] mb-4 block">mark_email_unread</span>
            <h2 className="text-3xl font-bold mb-3 text-white">Conscious Insights, Monthly.</h2>
            <p className="text-slate-400 mb-8">Framework updates, client stories, and business intelligence—delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#13ecec] focus:border-transparent outline-none transition-all text-white placeholder-slate-500" placeholder="Enter your email address" type="email" />
              <button className="bg-[#13ecec] text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition-all duration-300 flex items-center gap-2 justify-center">
                Subscribe <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      
      <Footer />
    </div>
  );
}
