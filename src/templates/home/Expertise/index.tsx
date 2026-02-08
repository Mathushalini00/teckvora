import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaBrain,
  FaLayerGroup,
  FaChartLine,
} from "react-icons/fa";

const expertiseData = [
  {
    id: "01",
    title: "Custom Build Software",
    desc: "We build powerful, unique software that fits your business perfectly and grows as you do.",
    icon: <FaCode />,
    tags: ["Web Apps", "Custom Tools", "Fast Logic"],
  },
  {
    id: "02",
    title: "Cloud & Hosting",
    desc: "We set up secure online homes for your data that never go down, even during your busiest hours.",
    icon: <FaCloud />,
    tags: ["AWS/Azure", "No Downtime", "Secure"],
  },
  {
    id: "03",
    title: "Digital Security",
    desc: "We lock down your systems with the latest protection to keep your company and customer data safe.",
    icon: <FaShieldAlt />,
    tags: ["Data Safety", "Safe Login", "Privacy"],
  },
  {
    id: "04",
    title: "AI Solutions",
    desc: "We use smart technology to help your computers handle repetitive tasks and make better decisions.",
    icon: <FaBrain />,
    tags: ["Smart Bots", "Auto-Tasks", "Data Prediction"],
  },
  {
    id: "05",
    title: "Full Digital Products",
    desc: "We handle everything from the hidden database to the screen your customers actually see and use.",
    icon: <FaLayerGroup />,
    tags: ["User Experience", "Databases", "Front-end"],
  },
  {
    id: "06",
    title: "Business Growth",
    desc: "We connect all your different apps and tools so they talk to each other and save you time.",
    icon: <FaChartLine />,
    tags: ["Integration", "Speed", "Analytics"],
  },
];

const Expertise = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6 scroll-mt-20 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl text-left border-l-4 border-[#014e3a] pl-8">
            <h2 className="text-[#014e3a] font-bold tracking-widest uppercase text-xs mb-4">
              What We Do Best
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Powerful Tech <br />
              <span className="text-emerald-400">Made Simple.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-left md:text-right text-sm leading-relaxed">
            We take the stress out of technology so you can focus on running
            your business and reaching more customers.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="sci-fi-glass group p-8 relative overflow-hidden transition-all duration-500 hover:border-[#014e3a]/40 bg-white/[0.02] rounded-xl"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#014e3a]/10 rounded-xl flex items-center justify-center text-[#014e3a] text-2xl mb-6 border border-[#014e3a]/20 group-hover:bg-[#014e3a] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-3 py-1 bg-white/5 border border-white/10 text-slate-400 group-hover:text-white transition-all rounded-md"
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
