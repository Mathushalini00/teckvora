import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Nova Retail Ecosystem",
    category: "E-Commerce & Scale",
    result: "40% Increase in Checkout Speed",
    desc: "A complete digital transformation for a retail giant, replacing slow legacy systems with a lightning-fast shopping experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "Cloud Optimized", "Payment Security"],
  },
  {
    id: 2,
    title: "Insight Analytics Pro",
    category: "Big Data & AI",
    result: "Real-time Data Processing (Sub-1s)",
    desc: "A smart dashboard that helps business leaders see their global sales and inventory data in real-time, powered by AI.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop",
    tags: ["Data Visualization", "AI Driven", "Fast Sync"],
  },
  {
    id: 3,
    title: "SecureHealth Connect",
    category: "Healthcare & Privacy",
    result: "Military-Grade Patient Data Safety",
    desc: "A private, secure platform for doctors and patients to share medical records without ever risking a data leak.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop",
    tags: ["Encryption", "Mobile Ready", "HIPAA Compliant"],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-[#014e3a] pl-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-[#014e3a] font-bold tracking-widest uppercase text-xs mb-3">
              Case Studies
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Selected <span className="text-emerald-400">Deployments.</span>
            </h3>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest group">
            View All Work{" "}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl mb-8 border border-white/5 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                {/* Result Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#014e3a] text-white text-[9px] font-black px-3 py-1.5 uppercase rounded-lg shadow-lg">
                    {project.result}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <p className="text-[#014e3a] font-mono text-[10px] uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  {project.title}{" "}
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] text-slate-500 font-bold px-2 py-1 border border-white/10 rounded"
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

export default FeaturedProjects;
