import { Link, useLocation } from "react-router";
import { useState } from "react";

const megaItems = [
  { col: "Physical Hub", to: "/cbk", items: ["Print Services", "Office Supplies", "Client Services"], icon: "storefront" },
  { col: "Digital Agency", to: "/digital-growth", items: ["Content Creation", "Social Media", "SEO & Ads"], icon: "bolt" },
  { col: "Intelligence", to: "/intelligence-systems", items: ["IoT Solutions", "Custom Software", "Compliance"], icon: "psychology" },
];

const navLinks = [
  { label: "Philosophy", to: "/philosophy" },
  { label: "Client Stories", to: "/client-stories" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo — the actual brand image */}
        <Link to="/" className="flex-shrink-0 group">
          <img
            src="/Logo_2.png"
            alt="Mizan WAI"
            className="logo-img transition-opacity group-hover:opacity-80"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {/* Services mega */}
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className={`text-sm font-medium flex items-center gap-0.5 transition-colors hover:text-[#13ecec] ${["/cbk","/digital-growth","/intelligence-systems","/ecosystem"].includes(location.pathname) ? "text-[#13ecec]" : "text-slate-700"}`}>
              Services <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-3">
                <div className="col-span-3 pb-3 border-b border-slate-100 mb-1">
                  <Link to="/ecosystem" className="text-xs font-bold text-[#13ecec] hover:underline tracking-widest uppercase">View All Services →</Link>
                </div>
                {megaItems.map((col) => (
                  <Link key={col.col} to={col.to} className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#13ecec]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#13ecec] text-base">{col.icon}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#13ecec] transition-colors">{col.col}</p>
                    {col.items.map((item) => (
                      <p key={item} className="text-xs text-slate-400">{item}</p>
                    ))}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`text-sm font-medium transition-colors duration-200 hover:text-[#13ecec] ${location.pathname === link.to ? "text-[#13ecec]" : "text-slate-700"}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="bg-[#13ecec] text-slate-900 px-6 py-2.5 rounded-lg text-sm font-bold hover:shadow-[0_0_15px_rgba(19,236,236,0.3)] hover:-translate-y-0.5 transition-all duration-300 inline-block">
            Book Consultation
          </Link>
        </div>

        <button className="lg:hidden text-slate-900 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)} className={`text-sm font-medium py-2 hover:text-[#13ecec] ${location.pathname === "/" ? "text-[#13ecec]" : "text-slate-700"}`}>Home</Link>
          <Link to="/ecosystem" onClick={() => setOpen(false)} className="text-sm font-medium py-2 text-slate-700 hover:text-[#13ecec]">Services</Link>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={`text-sm font-medium py-2 hover:text-[#13ecec] ${location.pathname === link.to ? "text-[#13ecec]" : "text-slate-700"}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 bg-[#13ecec] text-slate-900 px-6 py-2.5 rounded-lg text-sm font-bold text-center">Book Consultation</Link>
        </div>
      )}
    </nav>
  );
}
