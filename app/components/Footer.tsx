import { Link } from "react-router";

interface FooterProps {
  dark?: boolean;
}

// Rule of Three: exactly 3 footer link columns
const footerColumns = [
  {
    heading: "Ecosystem",
    links: [
      { label: "Physical Hub", to: "/cbk" },
      { label: "Digital Agency", to: "/digital-growth" },
      { label: "WAI Intelligence", to: "/intelligence-systems" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Client Stories", to: "/client-stories" },
      { label: "Blog & Insights", to: "/blog" },
      { label: "Service Tiers", to: "/ecosystem" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Visit Our Hub", to: "/contact" },
      { label: "Book Consultation", to: "/contact" },
      { label: "Partner With Us", to: "/contact" },
    ],
  },
];

export function Footer({ dark = false }: FooterProps) {
  const bg = dark ? "bg-[#050a0a] border-[#1f3333]" : "bg-white border-[#e8ddd4]";
  const text = dark ? "text-slate-400" : "text-[#7a6050]";
  const heading = dark ? "text-slate-500" : "text-[#b09080]";
  const link = dark ? "hover:text-[#13ecec]" : "hover:text-[#0a9898]";
  const divider = dark ? "border-[#1a2a2a]" : "border-[#f0e8e0]";
  const copy = dark ? "text-slate-600" : "text-[#b0a090]";

  return (
    <footer className={`border-t ${bg} pt-16 pb-8 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        {/* Top: logo + Rule of Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-5">
              <img
                src="/logo.jpeg"
                alt="Mizan WAI"
                className={`h-10 w-auto transition-opacity hover:opacity-80 ${dark ? "logo-img-invert opacity-70" : "opacity-90"}`}
              />
            </Link>
            <p className={`text-sm ${text} leading-relaxed mb-5`}>
              Conscious digital experience design balancing Science, Work, and Mastery.
            </p>
            {/* Rule of Three: 3 social icons */}
            <div className="flex gap-2">
              {["Li", "Tw", "In"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    dark
                      ? "bg-[#0d1616] text-slate-400 hover:bg-[#13ecec] hover:text-[#050a0a]"
                      : "bg-[#F2E8DF] text-[#b08968] hover:bg-[#13ecec] hover:text-[#1a1008]"
                  }`}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Rule of Three: 3 link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className={`text-[10px] font-bold tracking-[0.18em] uppercase ${heading} mb-4`}>
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className={`text-sm ${text} ${link} transition-colors`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`border-t ${divider} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-xs ${copy}`}>© 2025 Mizan WAI. All rights reserved.</p>
          {/* Rule of Three: 3 legal links */}
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map((l) => (
              <a key={l} href="#" className={`text-xs ${copy} ${link} transition-colors`}>{l}</a>
            ))}
          </div>
          {/* Brand tagline — Rule of Three */}
          <p className={`font-display text-sm italic ${dark ? "text-slate-600" : "text-[#d0c0b0]"}`}>
            Science. Work. Mastery.
          </p>
        </div>
      </div>
    </footer>
  );
}
