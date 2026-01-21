import React from "react";
import { FaHistory, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

const stats = [
  { label: "Founded", value: "2018" },
  { label: "Projects Delivered", value: "250+" },
  { label: "Experts", value: "45+" },
  { label: "Countries", value: "12" },
];

const About = () => {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[#014e3a]/10 -top-20 -right-20 opacity-30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Behind the <br />
              <span className="text-[#014e3a]">Codebase</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              Teckvora was born from a simple realization: the digital
              infrastructure of the future requires more than just code—it
              requires a fusion of security, artistry, and raw performance.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="sci-fi-glass p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#014e3a] uppercase font-bold tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sci-fi-glass aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="Tech Team"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 sci-fi-glass p-6 hidden md:block border-[#014e3a]/50">
              <FaRocket className="text-3xl text-[#014e3a] mb-2" />
              <h4 className="text-white font-bold">Innovation First</h4>
              <p className="text-slate-400 text-xs">
                Pioneering edge solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<FaHistory />}
            title="Our Story"
            desc="Starting as a small group of encryption experts, we've scaled into a full-service software powerhouse."
          />
          <ValueCard
            icon={<FaLightbulb />}
            title="Our Vision"
            desc="To democratize high-concurrency computing for businesses of all sizes, from startups to titans."
          />
          <ValueCard
            icon={<FaUsers />}
            title="Our Culture"
            desc="We believe in radical transparency and absolute precision in every line of code we ship."
          />
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="sci-fi-glass p-10 group hover:bg-[#014e3a]/5 transition-all">
    <div className="text-[#014e3a] text-4xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default About;
