import { FaCode, FaLayerGroup, FaCheckCircle, FaServer } from "react-icons/fa";

const WebDevelopment = () => {
  const specializations = [
    {
      title: "Custom Web Applications",
      desc: "Bespoke software tailored to your business logic. We build complex, data-driven apps that streamline operations.",
      icon: <FaCode />,
    },
    {
      title: "Enterprise Portals",
      desc: "Secure, multi-user platforms designed for internal management or client dashboards with deep integrations.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Headless Commerce",
      desc: "Decoupled backends for unparalleled speed. We separate content from display to future-proof your tech stack.",
      icon: <FaServer />,
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen relative overflow-hidden bg-[#020617]">
      {/* Background Decor - Subdued for Clarity */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#014e3a]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-emerald-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 1. HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32 pt-10">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#014e3a]/10 border border-[#014e3a]/30 rounded-full text-[#014e3a] text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#014e3a] animate-pulse" />
              Service Protocol: 01
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Engineering High-Performance{" "}
              <span className="text-[#014e3a]">Web Ecosystems.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              We don't just build websites; we architect digital engines.
              Teckvora delivers scalable solutions that prioritize speed,
              security, and measurable business growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-[#014e3a] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_#014e3a] transition-all">
                Initialize Project
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                View Tech Stack
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 sci-fi-glass flex items-center justify-center text-[10rem] text-[#014e3a]/20 relative">
              <FaLayerGroup className="animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#014e3a]/10 to-transparent rounded-[2rem]" />
            </div>
          </div>
        </div>

        {/* 2. SPECIALIZATIONS GRID */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Core <span className="text-[#014e3a]">Specializations</span>
            </h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map((item, idx) => (
              <div
                key={idx}
                className="sci-fi-glass p-10 hover:border-[#014e3a]/40 transition-all group"
              >
                <div className="w-14 h-14 bg-[#014e3a]/10 border border-[#014e3a]/20 text-[#014e3a] rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-[#014e3a] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE ADVANTAGE (Process) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="sci-fi-glass p-12 border-[#014e3a]/20">
            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">
              The Teckvora <span className="text-[#014e3a]">Advantage</span>
            </h3>
            <div className="space-y-8">
              <AdvantageItem
                title="Performance First"
                desc="Prioritizing Core Web Vitals to ensure 90+ Lighthouse scores and lower bounce rates."
              />
              <AdvantageItem
                title="Secure by Design"
                desc="End-to-end encryption and regular automated vulnerability scanning integrated into the CI/CD."
              />
              <AdvantageItem
                title="Scalable Infrastructure"
                desc="Leveraging AWS and Vercel edge networks to handle 10 or 10 million concurrent users."
              />
            </div>
          </div>
          <div className="space-y-6 lg:pl-10">
            <h4 className="text-[#014e3a] font-black text-xs uppercase tracking-[0.3em] mb-4">
              Technical Protocol
            </h4>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our developers follow a strict mobile-first philosophy, ensuring
              every project is an optimized experience on all screen sizes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "AWS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white/5 border border-white/5 px-4 py-3 rounded-xl text-xs font-bold text-slate-400 uppercase tracking-widest text-center hover:border-[#014e3a]/50 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvantageItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-6 items-start group">
    <div className="mt-1">
      <FaCheckCircle className="text-[#014e3a] text-xl" />
    </div>
    <div>
      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#014e3a] transition-colors">
        {title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default WebDevelopment;
