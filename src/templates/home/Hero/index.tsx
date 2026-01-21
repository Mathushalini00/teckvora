import React from "react";
import { FaArrowRight, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <div className="orb w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#014e3a] top-[5%] -left-10 opacity-20" />
      <div className="orb w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-900 bottom-[5%] -right-10 opacity-10" />

      <main className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-32 md:pt-48 pb-20">
        <div className="sci-fi-glass px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-10 border-[#014e3a]/30 flex items-center gap-2 md:gap-3 shadow-md">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#014e3a] animate-ping" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-emerald-500/80">
            System Protocol Active
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter leading-[1.1]">
          Future Proof <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014e3a] via-emerald-400 to-[#014e3a]">
            Infrastructure
          </span>
        </h1>

        <p className="text-slate-400 max-w-[90%] md:max-w-2xl text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
          The ultimate development framework for high-concurrency applications.
          Built for speed, security, and global scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 md:mb-24 px-6 sm:px-0">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-[#014e3a] hover:text-white transition-all duration-300">
            Get Started <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full px-4 sm:px-0">
          <StatCard
            icon={<FaCode />}
            title="Dev-First"
            desc="Seamless TypeScript integration for complex logic."
          />
          <StatCard
            icon={<FaServer />}
            title="Edge Ready"
            desc="Global distribution with sub-5ms response times."
          />
          <StatCard
            icon={<FaShieldAlt />}
            title="Secured"
            desc="Military-grade encryption at the kernel level."
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>
      </main>
    </div>
  );
};

const StatCard = ({
  icon,
  title,
  desc,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) => (
  <div
    className={`sci-fi-glass p-6 md:p-8 text-left group hover:border-[#014e3a]/60 transition-all duration-500 ${className}`}
  >
    <div className="text-[#014e3a] text-2xl md:text-3xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">{title}</h4>
    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

export default HeroPage;
