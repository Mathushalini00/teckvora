import React from "react";
import {
  FaFileAlt,
  FaVideo,
  FaCode,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Protocol Application",
    desc: "Submit your CV and portfolio. We look for 'clean code' DNA and architectural thinking.",
    label: "Step 01",
  },
  {
    icon: <FaVideo />,
    title: "Discovery Stream",
    desc: "A brief sync to align on goals, culture, and our shared technical roadmap.",
    label: "Step 02",
  },
  {
    icon: <FaCode />,
    title: "Technical Sprint",
    desc: "A collaborative session solving real-world challenges using our tech stack.",
    label: "Step 03",
  },
  {
    icon: <FaCheckCircle />,
    title: "Deployment",
    desc: "Finalize the offer and begin your onboarding into the Teckvora ecosystem.",
    label: "Step 04",
  },
];

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    dept: "Engineering",
    loc: "Remote",
    type: "Full-time",
    pay: "$140k+",
  },
  {
    title: "Product Designer",
    dept: "Design",
    loc: "Remote / NY",
    type: "Full-time",
    pay: "$110k+",
  },
  {
    title: "Cloud Architect",
    dept: "DevOps",
    loc: "Remote",
    type: "Contract",
    pay: "$160k+",
  },
];

const Careers = () => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      {/* 1. REIMAGINED HIRING PROCESS */}
      <section className="px-6 mb-40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-[#014e3a] font-black tracking-[0.4em] uppercase text-xs mb-4">
              Recruitment Protocol
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              How We <span className="text-[#014e3a]">Hire.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20 relative">
            {/* Central Vertical Line (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#014e3a] via-white/10 to-transparent -translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? "md:text-right md:items-end" : "md:mt-32"}`}
              >
                {/* Massive Background Number */}
                <span className="absolute -top-16 left-0 md:left-auto md:right-0 text-[12rem] font-black text-white/[0.03] leading-none pointer-events-none select-none">
                  {index + 1}
                </span>

                <div className="relative z-10 max-w-sm group">
                  <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#014e3a]/10 border border-[#014e3a]/30 rounded text-[#014e3a] text-[10px] font-bold uppercase tracking-widest mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#014e3a] animate-pulse" />
                    {step.label}
                  </div>

                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                    <div className="text-3xl text-white md:group-hover:text-[#014e3a] transition-colors">
                      {step.icon}
                    </div>
                    <h4 className="text-3xl font-bold text-white tracking-tight">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* Pulsing Dot on the central line (Desktop Only) */}
                <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#014e3a] rounded-full border-4 border-[#020617] shadow-[0_0_15px_#014e3a] z-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS SECTION */}
      <section id="openings" className="px-6 relative">
        <div className="orb w-[500px] h-[500px] bg-[#014e3a]/10 top-0 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h3 className="text-4xl font-bold text-white mb-2 italic">
                Current Openings
              </h3>
              <p className="text-slate-400">
                Join a team of elite engineers building the future.
              </p>
            </div>
            <div className="sci-fi-glass px-4 py-2 border-white/5 text-xs text-slate-400">
              <span className="text-white font-bold">{jobs.length}</span> Roles
              Available
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="sci-fi-glass p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#014e3a]/5 hover:border-[#014e3a]/40 transition-all duration-500 group"
              >
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-[#014e3a] text-white text-[9px] font-black px-3 py-1 rounded uppercase tracking-widest">
                      {job.dept}
                    </span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase flex items-center gap-1 tracking-widest">
                      <FaClock size={10} className="text-[#014e3a]" />{" "}
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#014e3a] transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex gap-6 text-slate-400 text-xs font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#014e3a]" /> {job.loc}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-[#014e3a]" /> {job.pay}
                    </span>
                  </div>
                </div>

                <button className="relative overflow-hidden bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all group-hover:bg-[#014e3a] group-hover:border-[#014e3a] group-hover:shadow-[0_0_20px_rgba(1,78,58,0.4)] flex items-center justify-center gap-3">
                  Apply{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
