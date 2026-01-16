import React from "react";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaBrain,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

const expertiseData = [
  {
    id: "01",
    title: "Custom Software",
    desc: "Bespoke enterprise solutions built with React and Node.js, optimized for scalability.",
    icon: <FaCode />,
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "02",
    title: "Cloud Infrastructure",
    desc: "Secure AWS/Azure deployments with 99.9% uptime and automated CI/CD pipelines.",
    icon: <FaCloud />,
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: "03",
    title: "Cyber Security",
    desc: "End-to-end encryption and penetration testing to keep your data bulletproof.",
    icon: <FaShieldAlt />,
    tags: ["OAuth 2.0", "SSL", "Encryption"],
  },
  {
    id: "04",
    title: "AI & Automation",
    desc: "Integrating Machine Learning models to automate complex business workflows.",
    icon: <FaBrain />,
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    id: "05",
    title: "Mobile Solutions",
    desc: "High-performance native and cross-platform mobile apps for iOS and Android.",
    icon: <FaMobileAlt />,
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    id: "06",
    title: "Big Data & BI",
    desc: "Turning raw data into actionable insights with advanced analytics dashboards.",
    icon: <FaDatabase />,
    tags: ["PostgreSQL", "MongoDB", "Redis"],
  },
];

const Expertise = () => {
  return (
    <section id="services" className="relative py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-[#014e3a] font-bold tracking-widest uppercase text-sm mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Solving Complex Problems <br />
              With <span className="italic font-light">Digital Precision</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-left md:text-right">
            We don't just write code; we architect systems that drive global
            industries forward.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="sci-fi-glass group p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#014e3a]/40"
            >
              {/* Background ID Number */}
              <span className="absolute -top-2 -right-2 text-8xl font-black text-white/[0.03] group-hover:text-[#014e3a]/10 transition-colors">
                {item.id}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#014e3a]/10 rounded-2xl flex items-center justify-center text-[#014e3a] text-2xl mb-6 border border-[#014e3a]/20 group-hover:bg-[#014e3a] group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#014e3a]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
