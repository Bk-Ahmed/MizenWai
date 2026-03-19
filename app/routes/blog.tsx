
import { Navbar } from "../components/Navbar";

export function meta(_args: any) {
  return [{ title: "Mizan WAI - Blog & Resources" }];
}

const articles = [
  { category: "Technology", time: "5 min read", title: "AI in 2024: A Conscious Approach", desc: "How ethical AI implementation is reshaping corporate responsibility.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvoVSNuT30bxRPH3WrEz-r8upMK-N9tAkdm2YPoJ0oqxrJ5yzXIg0Py4G2JPzbRuSkZoKWgytVuYJoOagG4V5sBGBXoBWQo5CvTUr71IFSLdPzWq5QCis1430A51WnqRuVVN7ph9ZqudYZ4hMLiw-yqETwVLYYs3ruu2xVs85PPi5BaqgtBI3y1q6tRDqvsKL_8j2fLpcYOaeZBQ_H1Kt0rY8eOdQ0Yk10rV-11d7-c9YeCdbbEZyNFWPuEe3szmv0mhLmpN1qYfw" },
  { category: "Industry Insights", time: "4 min read", title: "Sustainable Growth Strategies", desc: "Long-term value creation over short-term gains: A new paradigm.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwTOpITKu64Bkko7kmSpsfH-aH4-yL-_6jWrp3gyYz3aHnIhIpq_3t66laN2IxfKk5sRMFqlSbEuu2RdtkbXx4ZrTSR3RjUCHN5c303kJskzkohvAz33ej_Y3W2KBvNPIXcAenhKq-UeOdlNn6EfaJOot9icM3Gbhu2PNDL2lh4FO5r9tYiv4d6RyLLmepkHJoSoNZUEhwE_kcb1vmG_z_h9R6sDyaws2X32lLGL2mRZTh1oxnyNDJ3ZeYu9Zrt4NWcrtbYFbw8cA" },
  { category: "Leadership", time: "6 min read", title: "The Future of Ethical Tech", desc: "Why empathy is the most underrated skill in technical leadership.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2KYu8y4pKrBQ_gqElrYum08cwqyvs7Pr5qAJsYbpKVIE90AG5MC1rKcwLOBhmdSLsU6P4nZry_Od6SJdhs5rNVxzGXoSkcuV2yL2Gq7lXMq7zIAVfSech1lbfUhQOBiujUiB5i-NHFJQroiF6P0ifThP0RYWIR3Bf_01ToW6m6ZLrx2c5ki6WJ-eBUZp1ESH3s_EnGEwolCKHZaBkKzwOfm8eMgKucZKJ0pzTvFgFPflUZXD_nAU0STH6_mvHiwSkVS7xesuvhU" },
  { category: "WAI Framework", time: "7 min read", title: "Measuring Impact Beyond Revenue", desc: "Implementing KPIs that reflect social and environmental health.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAERyXqt_QHgDeDBZc6syHSgSTl6Uwus-8lNg6JKw1XbsV5Ks2Tmyj1oDvvSfTYaoeUrIg7bR-vIlnIKF87i3CI8HcEEYzlASmQbc2xE1ubIV_HpbQWtrV48mrIVvu08pQIcKa7Avejbhdiems8hEWpNr1_hijkC_YHsJUJS3qVsPkK6_31gR9CAh9dWqKU-0reO2U1VgBZEPJaToWiIJKigmP_dS2_fMpfljhYmJyBdjGgUgG7o57a6MlBuR-fsxm2nSEYTWeo_Bs" },
  { category: "Culture", time: "4 min read", title: "Building Trust in Remote Teams", desc: "Strategies for maintaining connection in a digital-first workplace.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzy1z8m9OmYD8VlpA9V21pMI20_h-KVQ3gJ7Sj1pRfjYwwlb8l2CMWO7ZHKASY_Z0KDwPR1Q212WEaodgXbx3tIj96TLHZEAZQ17FxCRqv4vBO3vJME1V7Mg9jiaU3wKKIseOcI9vjjslhtrZiXYw5C2tjGhR3laIbKkCmq3eBQL-0LS1f63OWLykMFVRFIAROCk4R-2bF9-9OogA00sQajovrOUFvbVrKLm-dcKHlndhVwGraKNHc6qA5IRJRyJY7BnjufhYEbPw" },
  { category: "Technology", time: "5 min read", title: "Blockchain for Social Good", desc: "Transparency and accountability through decentralized ledgers.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPM-z9JXQcxxEiDBrFhOrGkPUUYNMfPW3dv_OopYhtSwmOsEyIw_tsg_PQB1EPgLYaG05SCB7A503TKUuj_nNEldRMmHHBBR--XmWarRgIpbGrmpZ7sLf0-aIrcA9c3XxiRxYpWla-6QWHU3T01kWxd3Ngx4FrK9qhe4VANsSxBGSeZBE8cdnm5nHqswaRfUVal9dp7b19O1Xjw6e3zT8g8f5UDwY2dcUN7gufDAA4pggUt_K1FYcVspr-Ies8RbOUeX7YMS7d9M4" },
];

const categories = ["All", "WAI Framework", "Industry Insights", "Technology", "Leadership"];

export default function Blog() {
  return (
    <div className="bg-[#102222] min-h-screen text-[#e0e6e6] flex flex-col overflow-x-hidden" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Navbar />

      <main className="flex-grow w-full px-4 md:px-10 lg:px-20 py-8 lg:py-12 pt-28">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#283939] pb-8">
            <div className="max-w-2xl">
              <p className="text-[#13ecec] font-bold uppercase tracking-widest text-xs mb-3">Blog & Resources</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight" style={{ fontFamily: "'Lora', serif" }}>Conscious Business Insights</h1>
              <p className="text-[#9db9b9] mt-4 text-lg max-w-xl">Navigating the delicate balance of science and mastery in modern business leadership.</p>
            </div>
            <div className="hidden md:flex gap-2 flex-wrap justify-end">
              {categories.map((cat, i) => (
                <button key={cat} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? 'bg-[#13ecec] text-[#102222] font-bold' : 'border border-[#283939] text-[#9db9b9] hover:border-[#13ecec] hover:text-[#13ecec] transition-colors'}`}>{cat}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-12">
              {/* Featured Post */}
              <article className="group relative w-full overflow-hidden rounded-2xl bg-[#1c2727] shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-[#102222] via-transparent to-transparent opacity-90 z-10"></div>
                <div className="h-[400px] md:h-[500px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo1UT-v5ctl8gUww43EYQYkZw07ds6Lp59TQ9LcVc64KRElQpGL_x03zwGLOjyhBMarl7V_t7pTjNovljy0ypkV00jqWkI7ASW8MeWfuXO6QxS0BCEEQ_icScK79zIsTSv2yP5qacxkUwCtXpV3mgC7IJyJ5aYEJsW42BURbpiBt7-93ostHidTaO8V2E2gojSpfjOm59N0XR0FfbQiyrh9obaRjXipWUcFpRMpei0ww07fYJjmLyS-N-dODKHZQRw4CPYscw8SGo')" }}></div>
                <div className="absolute bottom-0 left-0 z-20 w-full p-6 md:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="bg-[#13ecec]/20 text-[#13ecec] border border-[#13ecec]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Featured</span>
                    <span className="text-white/80 text-sm flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> 8 min read</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-3xl group-hover:text-[#13ecec] transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                    The WAI Framework: Navigating the Balance of Science and Mastery
                  </h2>
                  <p className="mb-6 max-w-2xl text-[#9db9b9] text-base md:text-lg mt-3">Discover how the WAI framework integrates ethical leadership with cutting-edge technology.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#13ecec] font-bold hover:text-white transition-colors group/link">
                    Read Full Article <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1 text-sm">arrow_forward</span>
                  </a>
                </div>
              </article>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {articles.map((article, i) => (
                  <div key={i} className="group flex flex-col bg-[#1c2727] rounded-xl overflow-hidden hover:bg-[#253434] transition-colors border border-transparent hover:border-[#283939]">
                    <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url('${article.img}')` }}></div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[#13ecec] text-xs font-bold uppercase tracking-wider">{article.category}</span>
                        <span className="text-[#9db9b9] text-xs">{article.time}</span>
                      </div>
                      <h3 className="text-white text-lg font-bold mb-2 leading-snug group-hover:text-[#13ecec] transition-colors">{article.title}</h3>
                      <p className="text-[#9db9b9] text-sm mb-4 flex-grow">{article.desc}</p>
                      <a href="#" className="inline-flex items-center text-sm font-bold text-white group-hover:text-[#13ecec] transition-colors mt-auto">Read More</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
              <div className="sticky top-8 flex flex-col gap-8">
                <div className="rounded-xl bg-[#1c2727] p-6 border border-[#283939]">
                  <h3 className="text-white font-bold text-lg mb-2">Stay Updated</h3>
                  <p className="text-[#9db9b9] text-sm mb-4">Get the latest insights on conscious business.</p>
                  <div className="flex flex-col gap-3">
                    <input className="w-full rounded-lg bg-[#102222] border border-[#283939] px-4 py-2.5 text-sm text-white placeholder-[#9db9b9] focus:border-[#13ecec] outline-none transition-all" placeholder="Your email address" type="email" />
                    <button className="w-full rounded-lg bg-[#13ecec]/90 hover:bg-[#13ecec] text-[#102222] font-bold text-sm py-2.5 transition-colors">Subscribe</button>
                  </div>
                </div>
                <div className="rounded-xl bg-[#1c2727] p-6 border border-[#283939]">
                  <h3 className="text-white font-bold text-lg mb-4">Browse Topics</h3>
                  <ul className="flex flex-col gap-1">
                    {[["The WAI Framework","12"],["Industry Insights","8"],["Technology","15"],["Leadership","5"]].map(([topic, count]) => (
                      <li key={topic}>
                        <a href="#" className="flex items-center justify-between py-2 text-[#9db9b9] hover:text-[#13ecec] transition-colors text-sm group">
                          {topic}
                          <span className="bg-[#283939] text-white text-[10px] px-2 py-0.5 rounded-full group-hover:bg-[#13ecec]/20 group-hover:text-[#13ecec]">{count}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#283939] bg-[#102222] py-12 px-4 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-white mb-4">
              <span className="material-symbols-outlined text-[#13ecec] text-2xl">balance</span>
              <h2 className="text-lg font-bold">Mizan WAI</h2>
            </div>
            <p className="text-[#9db9b9] text-sm leading-relaxed">Empowering businesses to navigate complexity through the balance of science and mastery.</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-[#283939] text-center">
          <p className="text-[#9db9b9]/60 text-xs">© 2025 Mizan WAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
