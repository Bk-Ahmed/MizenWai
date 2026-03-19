
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export function meta(_args: any) {
  return [{ title: "Contact Mizan WAI" }];
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", service: "", message: "" });

  return (
    <div className="bg-[#f6f8f8] min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full pt-20">
        {/* Hero Split */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[500px]">
            <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm group">
              <img alt="Map" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8eHpKWN1wQYtiN83sRlN24q4jrG3GbB3QELNclDstx0afbPFE6Kui1EBpOdk0DHCn81i6kKdY1Lturme8S4tv--LbZHQ0HLV0rEctLM5jXstiS3aGLING2ZSL9pYfRt6E_Wm_xJNIUCw_CMmBW1C1h27LjuQDSKBeHaKox39_7TNmyjROutoUxpR6vcs5tZOaZr2_p8aMC66aaR8v9b2C-1ojkbu684trNjDx0M-31U37Kglf7_jkc95Ek76_haLZOcjrVqb9Di4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl max-w-sm">
                  <h3 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0ebdbd]">location_on</span>
                    Mizan Innovation Hub
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">123 Future Tech Blvd, Silicon Oasis, Dubai, UAE</p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm">
              <img alt="Team" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDshpARJI9BCzP3zPq9J3kXIGKjxVx-nbmCu_vXwqEWglO5lDGnj2oyFQDbCqrNJE_sS0c0ThrRX3RpHG_EiEkrA3xM_M1-yn6gBkOIhFd6wlOcX6klMksxBp3PMRFlE2ea7nuGI8LFSBrpZpSn0b_bxqLQxQSxljnCTLS519MH8mWjY3MHLSmWabmTufpzVmN4hIOCIcaBlJPXRDXRihWvXQhWqg6OgV6H4XeMNjrOUv6cSmBA125kZCZTvn1q0z5ODhjU-9Gb-Vk" />
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-2 drop-shadow-md">Begin Your Conscious<br />Business Journey</h1>
                <p className="text-white/90 text-lg font-medium drop-shadow-md">We're here to help you navigate the future of AI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Column Grid */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "storefront", title: "Visit Our Hub", desc: "Experience our technology firsthand.", content: <div className="mt-auto space-y-4"><div><span className="text-slate-900 font-bold text-2xl">Open</span><span className="text-slate-500 text-sm block">Mon-Fri, 9 AM - 6 PM</span></div><button className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold transition-colors gap-2"><span className="material-symbols-outlined text-[20px]">directions</span>Get Directions</button></div> },
              { icon: "calendar_month", title: "Book Consultation", desc: "Schedule a time with our experts.", content: <div className="mt-auto grid grid-cols-3 gap-2"><button className="flex flex-col items-center justify-center p-2 rounded-lg border border-slate-200 hover:border-[#13ecec] hover:bg-[#13ecec]/5 transition-all"><span className="text-slate-900 font-bold text-lg">30</span><span className="text-xs text-slate-500">Min</span></button><button className="flex flex-col items-center justify-center p-2 rounded-lg border border-slate-200 hover:border-[#13ecec] hover:bg-[#13ecec]/5 transition-all"><span className="text-slate-900 font-bold text-lg">60</span><span className="text-xs text-slate-500">Min</span></button><button className="flex flex-col items-center justify-center p-2 rounded-lg border border-slate-200 hover:border-[#13ecec] hover:bg-[#13ecec]/5 transition-all"><span className="text-slate-900 font-bold text-lg">90</span><span className="text-xs text-slate-500">Min</span></button></div> },
              { icon: "chat_bubble", title: "Start a Conversation", desc: "24/7 Support for immediate needs.", content: <div className="mt-auto space-y-3"><a href="mailto:hello@mizanwai.com" className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-[#13ecec]/10 transition-colors group"><span className="material-symbols-outlined text-slate-400 group-hover:text-[#0ebdbd]">mail</span><span className="text-slate-700 text-sm font-medium">hello@mizanwai.com</span></a><a href="tel:+971501234567" className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-[#13ecec]/10 transition-colors group"><span className="material-symbols-outlined text-slate-400 group-hover:text-[#0ebdbd]">call</span><span className="text-slate-700 text-sm font-medium">+971 50 123 4567</span></a></div> },
            ].map(({ icon, title, desc, content }) => (
              <div key={title} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="size-12 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-[#0ebdbd] mb-2">
                  <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <div>
                  <h2 className="text-slate-900 text-xl font-bold mb-1">{title}</h2>
                  <p className="text-slate-500 text-sm">{desc}</p>
                </div>
                {content}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full max-w-[800px] px-4 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-slate-500">We usually respond within 24 hours.</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] outline-none transition-all" placeholder="John Doe" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company</label>
                  <input className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] outline-none transition-all" placeholder="Acme Corp" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] outline-none transition-all" placeholder="john@example.com" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Interest</label>
                <div className="relative">
                  <select className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#13ecec] outline-none transition-all appearance-none text-slate-900 cursor-pointer" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    <option value="">Select a topic</option>
                    <option value="strategy">AI Strategy Consultation</option>
                    <option value="implementation">Tech Implementation</option>
                    <option value="training">Corporate Training</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#13ecec] outline-none transition-all resize-none" placeholder="How can we help you?" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
              </div>
              <button className="w-full h-12 bg-slate-900 text-white rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="button">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>
        </section>

        {/* Partner With Us */}
        <section className="w-full bg-slate-900 py-20 px-6 mt-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#13ecec] font-bold uppercase tracking-wider text-sm mb-3 block">Grow With Us</span>
                <h2 className="text-white text-4xl font-bold mb-4">Partner With Mizan WAI</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">We're building an ecosystem of partners who share our commitment to conscious business. If you're a designer, developer, supplier, or consultant, let's explore collaboration.</p>
                <button className="bg-[#13ecec] hover:bg-cyan-300 text-slate-900 font-bold h-12 px-8 rounded-xl transition-all shadow-lg shadow-[#13ecec]/20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">handshake</span> Become a Partner
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "payments", title: "Referral Program", desc: "Earn commissions by connecting us with clients who need conscious business solutions." },
                  { icon: "branding_watermark", title: "White-Label", desc: "Offer our full service suite under your brand with dedicated backend support." },
                  { icon: "campaign", title: "Co-Marketing", desc: "Joint campaigns, shared audiences, and collaborative content to grow together." },
                  { icon: "workspace_premium", title: "Preferred Vendor", desc: "Priority placement in our ecosystem and access to our growing client base." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-[#13ecec]/40 transition-colors">
                    <span className="material-symbols-outlined text-[#13ecec] mb-3 block">{icon}</span>
                    <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200 bg-white py-12 px-10">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-slate-400 text-xs text-center">© 2024 Mizan WAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
