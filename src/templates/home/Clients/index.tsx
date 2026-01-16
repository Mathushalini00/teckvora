import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at NexusFlow",
    content:
      "The infrastructure migration was seamless. NEVASOFT's core engine handled our peak traffic of 10M requests without a single millisecond of latency.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "Lead Architect, Orbit AI",
    content:
      "Building on this framework felt like cheating. The TypeScript integration and the pre-built security modules saved us roughly 4 months of dev time.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    stars: 5,
  },
  {
    name: "James Walcott",
    role: "Founder, SecureStack",
    content:
      "Finally, a glassmorphism UI that doesn't sacrifice performance. The library is lightweight, and the military-grade encryption is the real deal.",
    avatar: "https://i.pravatar.cc/150?u=james",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="orb w-[300px] h-[300px] bg-[#014e3a] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Trusted by the <span className="text-[#014e3a]">Architects</span> of
            Tomorrow
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From hyper-growth startups to Fortune 500 enterprises, our
            infrastructure powers the world's most ambitious software.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="sci-fi-glass p-8 flex flex-col justify-between group hover:border-[#014e3a]/50 transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} className="text-[#014e3a] text-sm" />
                  ))}
                </div>

                <FaQuoteLeft className="text-slate-700 text-3xl mb-4 group-hover:text-[#014e3a]/30 transition-colors" />

                <p className="text-slate-300 leading-relaxed italic mb-8">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#014e3a] blur-md opacity-20 rounded-full" />
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border border-white/10 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-[#014e3a] text-xs font-semibold uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
