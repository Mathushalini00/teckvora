import React from "react";
import { FaArrowRight, FaCode, FaMicrochip, FaCubes } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      {/* Background Orbs */}
      <div className="orb w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#014e3a] top-[5%] -left-10 opacity-20" />
      <div className="orb w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-900 bottom-[5%] -right-10 opacity-10" />

      <main className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-32 md:pt-48 pb-20">
        {/* Status Badge */}
        <div className="sci-fi-glass px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-10 border-[#014e3a]/30 flex items-center gap-2 md:gap-3 shadow-md">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#014e3a] animate-ping" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-emerald-500/80">
            Available for New Deployments
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter leading-[1.1]">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014e3a] via-emerald-400 to-[#014e3a]">
            Digital Supremacy
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-400 max-w-[90%] md:max-w-2xl text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
          We build mission-critical software and bespoke digital ecosystems.
          From autonomous systems to enterprise-grade AI integration, we turn
          complex challenges into seamless code.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 md:mb-24 px-6 sm:px-0">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-[#014e3a] hover:text-white transition-all duration-300">
            Start Your Build <FaArrowRight />
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full px-4 sm:px-0">
          <StatCard
            icon={<FaCode />}
            title="Software Development"
            desc="We build custom tools and apps that solve your specific business problems and make your daily work easier."
          />
          <StatCard
            icon={<FaMicrochip />}
            title="E-Commerce"
            desc="We create high-speed online stores designed to turn visitors into customers and handle sales around the clock."
          />
          <StatCard
            icon={<FaCubes />}
            title="Digital Marketing"
            desc="We help your brand get noticed online using smart strategies that grow your audience and increase your revenue."
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
    className={`sci-fi-glass p-6 md:p-8 text-left group hover:border-[#014e3a]/60 transition-all duration-500 border border-white/5 bg-[#020617]/40 ${className}`}
  >
    <div className="text-[#014e3a] text-2xl md:text-3xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-tight">
      {title}
    </h4>
    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

export default HeroPage;
