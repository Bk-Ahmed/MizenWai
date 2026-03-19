
import { Navbar } from "../components/Navbar";
import { Link } from "react-router";

export function meta(_args: any) {
  return [{ title: "The Philosophy: WAI Framework Deep-Dive" }];
}

const sections = [
  {
    id: "method", letter: "W", title: "The Method", subtitle: "Rigorous Inquiry & Data-Driven Foundations",
    left: { type: "image", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLaHX3wHji2uLCltl5SbLCjx95fmn6dW7zLQX797UWW5Iu-AS4TG8YjbbQ5-1Mws6in9OdmgmeDWLj4RzkduVm_2gJELsrO77AYKJlF1bxmHrq5exaRnHLHFZGvOwbbFLayq58ribicLmz_hfVi6b3WUAi3YjUaVE5jNNVneMCpX8wf6B6MYKGFRKvjJmuuJWIzf0AJ5C4IzrO0v8HoaSHTxdGsF_56q0M4AWx9O6oZAiRKDne6H9We4ceJbatUD1_xTOcBD6yMro", icon: "architecture", label: "Physical Reality", desc: "Hand-drawn schematics and physical prototyping form the basis of our method." },
    right: { type: "digital", icon: "data_object", label: "Digital Twin", desc: "Algorithms translate physical intent into precision data." },
  },
  {
    id: "mindset", letter: "A", title: "The Mindset", subtitle: "Empathy in Algorithms & The Human Element",
    left: { type: "neural", icon: "hub", label: "Algorithmic Mind", desc: "Code that learns. Networks that adapt. Systems that mirror organic complexity." },
    right: { type: "image", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9YvEGzxOGNhoNhvLn56xakizY9oaQqOqvyqG9qj0pihynxLcJPrGUG6zQ4V1WIn0dVsVuduPcu8j9UL9dzoKnlk99WtRonRjEDBCmT1zJWxAdfMLDpmyLhfPEfvaycOuNtdYQK88XkRNNZoYJO7eqBiCoLtyqF-9bCW9vBAVFz5JQ_XU8JFJzoTJTDUfYjy20FwIrA77itQR8bLLDVdctuq69zJmEpJMgx0EcU1pTJYvXS07QFshNA5_tSdqXm-y6EaMKX309wMk", icon: "visibility", label: "Human Perspective", desc: "Technology without empathy is hollow. The human gaze defines the purpose of our machines." },
  },
  {
    id: "mastery", letter: "I", title: "The Mastery", subtitle: "Craftsmanship at Scale & Execution",
    left: { type: "image", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaSRE0Gf2GQlWB8Doy5E6J1jRKlasl7ztblkfiRnaO9b7nIOcS0nnKZPEc4jHcOixty-MQXfFSv0rRezpMtckgBNCxDRMWsBx6eu7ZJWOX2D4KQR7M5u8McvYs53_FdOyT69TnTvLY4KQmxr1m2Keg95Olz-DSfSlY971A57pDOnqNfTvXGs4sgHSLvQfVgxlki4W-sz30Ck_ku5mwa2il3DYqQ22GS3GeFXKTeNjc0FBm8J7QF1ojELn3JgorHU6kn2ftdOzeHu8", icon: "precision_manufacturing", label: "Crafted Artifact", desc: "The final form. Tangible, functional, and built to last." },
    right: { type: "code", icon: "terminal", label: "Code Infrastructure", desc: "Scalable architecture that supports the weight of innovation." },
  },
];

export default function Philosophy() {
  return (
    <div className="bg-[#102222] text-slate-100 overflow-x-hidden antialiased" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#102222]/30 via-[#102222]/60 to-[#102222] z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center opacity-40 scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBkjCwh6TneS7n09pBU7_89eFlHpc22pFNudEUvoTM5xVxg62qw-GgapkPb549FQ6C4Q1mzFkbtQ1FQBJaUSHyPLVtTKtiAGofojATcopMmPmEz5Sgd21sxy4bOMX4pHunDAws07cuxSnk6ZoQo6QHYqfBPscxGgKTaXlbjRf3iPU3bX7Q-_uCrh51jHy4WcERK-zegDRk1jXK6d-m-c9quorFcFFCcJ9ki-ywDkyiGCdrlhqL4cvXUigF-E6PlTCE1IfHUwFq5a8')" }}></div>
        </div>
        <div className="relative z-20 container mx-auto px-6 pt-24 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-[#13ecec]/20 bg-[#13ecec]/5">
            <span className="w-2 h-2 rounded-full bg-[#13ecec] animate-pulse"></span>
            <span className="text-xs font-bold text-[#13ecec] tracking-widest uppercase">Philosophy Variant 02</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-none">
            WHERE SCIENCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#13ecec] to-[#13ecec]/50">MEETS SOUL</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
            Decoding the WAI Framework: A journey through the human-technology duality. We balance the raw physical reality of engineering with the precision of digital twins.
          </p>
          <div className="flex flex-col items-center gap-4 animate-bounce mt-10" style={{ animationDuration: '2s' }}>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Explore the Framework</span>
            <span className="material-symbols-outlined text-[#13ecec] text-3xl">keyboard_double_arrow_down</span>
          </div>
        </div>
      </section>

      {/* Framework Sections */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#13ecec]/30 to-transparent -translate-x-1/2 z-0 h-full"></div>

        {sections.map(({ id, letter, title, subtitle, left, right }) => (
          <div key={id} id={id} className="relative z-10 mb-32 group scroll-mt-32">
            <div className="flex flex-col items-center mb-16">
              <div className="bg-[#102222] border border-[#13ecec]/50 text-[#13ecec] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-[0_0_15px_rgba(19,236,236,0.3)] z-10">
                {letter}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center">{title}</h2>
              <p className="text-slate-400 mt-2">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
              {[left, right].map((panel, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden border border-slate-800 group-hover:border-[#13ecec]/30 transition-all duration-500 aspect-[4/3] lg:aspect-square ${i === 1 && id === "mindset" ? "order-1 lg:order-2" : i === 0 && id === "mindset" ? "order-2 lg:order-1" : ""}`}>
                  {panel.type === "image" && (
                    <>
                      <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url('${panel.img}')` }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center gap-2 text-white mb-2">
                          <span className="material-symbols-outlined">{panel.icon}</span>
                          <span className="font-bold tracking-widest uppercase text-sm">{panel.label}</span>
                        </div>
                        <p className="text-slate-300 text-sm">{panel.desc}</p>
                      </div>
                    </>
                  )}
                  {panel.type === "digital" && (
                    <>
                      <div className="absolute inset-0 bg-[#162a2a] flex items-center justify-center p-6">
                        <div className="w-full h-full border border-[#13ecec]/20 rounded-lg p-4 relative overflow-hidden bg-[#102222]/50">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-48 h-48 text-[#13ecec] opacity-80" style={{ animation: "spin 10s linear infinite" }} viewBox="0 0 200 200">
                              <circle cx="100" cy="100" fill="none" r="80" stroke="currentColor" strokeDasharray="10 5" strokeWidth="1" />
                              <circle cx="100" cy="100" fill="none" r="60" stroke="currentColor" strokeWidth="1" />
                              <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="absolute bottom-4 left-4 font-mono text-xs text-[#13ecec]/70">
                            &gt; INITIALIZING TWIN PROTOCOL...<br />
                            &gt; SYNCING GEOMETRY...<br />
                            &gt; 100% COMPLETE
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center gap-2 text-[#13ecec] mb-2">
                          <span className="material-symbols-outlined">{panel.icon}</span>
                          <span className="font-bold tracking-widest uppercase text-sm">{panel.label}</span>
                        </div>
                        <p className="text-slate-300 text-sm">{panel.desc}</p>
                      </div>
                    </>
                  )}
                  {panel.type === "neural" && (
                    <>
                      <div className="absolute inset-0 bg-[#162a2a] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #13ecec 1px, transparent 0)", backgroundSize: "30px 30px" }}></div>
                        <div className="relative z-10 text-[#13ecec] opacity-60">
                          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M15,9A1,1 0 0,0 14,10H10A1,1 0 0,0 9,9A1,1 0 0,0 8,10V10C8,10.55 8.45,11 9,11H10V13H9A1,1 0 0,0 8,14V14C8,14.55 8.45,15 9,15H10A1,1 0 0,0 11,16V17.5A1.5,1.5 0 0,0 12.5,19H14.88C15.54,19.64 16.5,20 17.5,20C19.43,20 21,18.43 21,16.5C21,14.57 19.43,13 17.5,13C16.5,13 15.61,13.37 14.96,14H12.5V12H15A1,1 0 0,0 16,11V11C16,10.45 15.55,10 15,10V9M17.5,15A1.5,1.5 0 0,1 19,16.5A1.5,1.5 0 0,1 17.5,18A1.5,1.5 0 0,1 16,16.5A1.5,1.5 0 0,1 17.5,15M6.5,9A1.5,1.5 0 0,0 5,10.5A1.5,1.5 0 0,0 6.5,12A1.5,1.5 0 0,0 8,10.5A1.5,1.5 0 0,0 6.5,9M12,4A2,2 0 0,0 10,6H14A2,2 0 0,0 12,4M12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10A4,4 0 0,1 8,6A4,4 0 0,1 12,2Z"/></svg>
                        </div>
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#13ecec] rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#13ecec] rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center gap-2 text-[#13ecec] mb-2">
                          <span className="material-symbols-outlined">{panel.icon}</span>
                          <span className="font-bold tracking-widest uppercase text-sm">{panel.label}</span>
                        </div>
                        <p className="text-slate-300 text-sm">{panel.desc}</p>
                      </div>
                    </>
                  )}
                  {panel.type === "code" && (
                    <>
                      <div className="absolute inset-0 bg-[#162a2a] p-8 font-mono text-xs md:text-sm text-[#13ecec]/60 overflow-hidden leading-relaxed">
                        <div className="animate-pulse">
                          {`<?xml version="1.0" encoding="utf-8"?>\n<!-- Mizan WAI Execution Protocol -->\n<mastery_sequence>\n  <phase id="01" type="deploy">\n    <status>ACTIVE</status>\n    <efficiency>99.98%</efficiency>\n  </phase>\n  <loop iteration="infinite">\n    scale_factor = scale_factor * 1.5;\n    refine_output(quality_check);\n  </loop>\n  <!-- Craftsmanship is not an act, but a habit -->\n  <function name="optimize">\n    return excellence;\n  </function>\n</mastery_sequence>\n\n// SYSTEM STABLE\n// READY FOR DEPLOYMENT`}
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#162a2a] to-transparent"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 pointer-events-none">
                        <div className="flex items-center gap-2 text-[#13ecec] mb-2">
                          <span className="material-symbols-outlined">{panel.icon}</span>
                          <span className="font-bold tracking-widest uppercase text-sm">{panel.label}</span>
                        </div>
                        <p className="text-slate-300 text-sm">{panel.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#162a2a] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#13ecec]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to go deeper?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">The WAI framework is more than a philosophy—it's a practice. Join the engineers, designers, and thinkers shaping the future.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#13ecec] text-[#102222] font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
              Start the Journey <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-[#13ecec] text-[#13ecec] font-bold hover:bg-[#13ecec]/10 transition-colors duration-300">
              Meet the Founders
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <span>© 2024 Mizan WAI. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy","Terms","Contact"].map((l) => <a key={l} href="#" className="hover:text-[#13ecec] transition-colors">{l}</a>)}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
