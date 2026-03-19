import { Navbar } from "../components/Navbar";
import { Link } from "react-router";

export function meta(_args: any) {
  return [{ title: "MWI Hub — Your Physical Business Partner" }];
}

const services = [
  {
    icon: "print", title: "Professional Print",
    desc: "Make a lasting impression with high-quality tangible assets.",
    items: ["Business Cards & Stationery", "Flyers & Brochures", "Large Format Banners", "Books & Reports", "Packaging", "NFC Cards & Badges"],
    color: "text-[#b08968]", bg: "bg-[#f5f0eb]",
  },
  {
    icon: "inventory_2", title: "Office Supplies",
    desc: "Essential tools to keep your workspace flowing efficiently.",
    items: ["Paper & Envelopes", "Premium Writing Instruments", "Notebooks & Filing Supplies", "Desk Accessories", "Toner & Cartridges", "Binding & Finishing"],
    color: "text-[#b08968]", bg: "bg-[#f5f0eb]",
  },
  {
    icon: "support_agent", title: "Client Services",
    desc: "Operational support that extends beyond the printed page.",
    items: ["Photocopy / Scan / Bind", "Bill Payment Center", "NFC Badge Programming", "Document Pickup & Delivery", "Express Service", "Upload Print Files"],
    color: "text-[#b08968]", bg: "bg-[#f5f0eb]",
  },
];

export default function CBK() {
  return (
    <div className="bg-[#fdfcf8] text-[#2c2c2c] min-h-screen flex flex-col overflow-x-hidden paper-texture">
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        {/* Hero */}
        <section className="relative min-h-[620px] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(245,240,235,0.75) 0%, rgba(245,240,235,0.92) 100%), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80')` }}></div>
          <div className="relative z-10 flex flex-col items-center max-w-4xl text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a373]/30 bg-white/60 px-5 py-2 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2"><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-pulse"></span></span>
              <span className="text-xs font-semibold text-[#2c2c2c] uppercase tracking-widest">Hub Open Now · Mon–Sat, 8AM–7PM</span>
            </div>
            <h1 className="text-[#2c2c2c] text-6xl sm:text-7xl font-medium leading-[0.95] tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Your Physical <br /><span className="italic text-[#b08968]">Business Partner</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
              Flawless execution for everyday business needs. From premium printing to essential office supplies—disciplined quality, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#d4a373] hover:bg-[#b08968] text-white text-sm font-bold tracking-widest uppercase transition-all shadow-md">Request Quote</Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-white border border-[#dcc8bc] hover:border-[#d4a373] text-[#2c2c2c] text-sm font-bold tracking-widest uppercase transition-all group shadow-sm">
                <span className="material-symbols-outlined text-[#b08968] text-base">location_on</span>
                Visit Our Hub
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="border-y border-[#dcc8bc] bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[["High-Res", "Offset Printing"], ["Same-Day", "Express Delivery"], ["Eco-Safe", "Sustainable Materials"], ["Premium", "Tactile Finishes"]].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center md:items-start border-r border-[#dcc8bc] last:border-0 md:pl-4">
                <span className="text-3xl text-[#b08968] font-bold italic" style={{ fontFamily: "'Georgia', serif" }}>{val}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <section className="py-24 px-4 sm:px-10 bg-[#f5f0eb]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center">
              <span className="text-[#b08968] text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</span>
              <h2 className="text-[#2c2c2c] text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>Crafted for Professional Excellence</h2>
              <div className="h-1 w-20 bg-[#d4a373] mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map(({ icon, title, desc, items }) => (
                <div key={title} className="group relative flex flex-col gap-6 bg-white p-10 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 rounded-2xl border border-transparent hover:border-[#dcc8bc]">
                  <div className="size-16 rounded-2xl bg-[#F2E8DF] flex items-center justify-center text-[#b08968] group-hover:bg-[#d4a373] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#2c2c2c] text-2xl font-semibold mb-3" style={{ fontFamily: "'Georgia', serif" }}>{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                    <ul className="flex flex-col gap-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-500 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373] flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4a373] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-20 px-4 sm:px-10 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#b08968] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Pricing</span>
                <h2 className="text-4xl font-medium text-[#2c2c2c] mb-6" style={{ fontFamily: "'Georgia', serif" }}>Transparent, Fair Pricing</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Pay-per-service or project-based. No hidden fees, no subscriptions for basic services. Volume pricing available for regular clients.</p>
                <div className="space-y-4 mb-8">
                  {[["Business Cards (500 pcs)", "From 25 DT"], ["A4 Flyers (100 pcs)", "From 18 DT"], ["Large Format Banner (1m²)", "From 35 DT"], ["Binding & Finishing", "From 3 DT"]].map(([item, price]) => (
                    <div key={item} className="flex justify-between items-center py-3 border-b border-[#f0e8e0]">
                      <span className="text-gray-700 text-sm">{item}</span>
                      <span className="text-[#b08968] font-bold text-sm">{price}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link to="/contact" className="flex items-center gap-2 rounded-lg h-11 px-6 bg-[#d4a373] hover:bg-[#b08968] text-white text-sm font-bold tracking-widest uppercase transition-all">
                    Request Full Quote
                  </Link>
                  <button className="flex items-center gap-2 rounded-lg h-11 px-6 bg-[#F2E8DF] text-[#b08968] text-sm font-bold tracking-widest uppercase transition-all hover:bg-[#e6d5c6]">
                    <span className="material-symbols-outlined text-base">download</span>
                    Price List PDF
                  </button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?auto=format&fit=crop&w=800&q=80')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/80 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white/70 text-sm mb-1">Integration Story</p>
                  <p className="text-white font-bold text-lg">Your print materials power your digital presence—QR codes on business cards, branded content for social media.</p>
                  <Link to="/digital-growth" className="mt-3 text-[#d4a373] text-sm font-bold flex items-center gap-1 hover:text-white transition-colors">
                    See Digital Agency <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-10 bg-[#2c2c2c] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-[800px] mx-auto text-center flex flex-col gap-6 items-center relative z-10">
            <div className="size-16 rounded-full bg-white/10 flex items-center justify-center text-[#d4a373]">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>Ready to Make It Tangible?</h2>
            <p className="text-gray-300 text-lg max-w-xl font-light">Visit our hub or upload your files and start your project online. Let's create something beautiful together.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-13 px-10 bg-[#d4a373] hover:bg-white hover:text-[#2c2c2c] text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 py-4">Request Quote</Link>
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-13 px-10 bg-transparent border border-white/30 hover:bg-white hover:text-[#2c2c2c] hover:border-white text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 py-4">Visit Our Hub</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#fdfcf8] border-t border-[#dcc8bc] py-12 px-4 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2025 MWI Hub by Mizan WAI. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link to="/" className="hover:text-[#b08968] transition-colors">Home</Link>
            <Link to="/ecosystem" className="hover:text-[#b08968] transition-colors">Service Tiers</Link>
            <Link to="/contact" className="hover:text-[#b08968] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
