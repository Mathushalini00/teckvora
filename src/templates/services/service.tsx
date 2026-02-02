import { useParams, Link } from "react-router-dom";
import {
  FaCode,
  FaShoppingCart,
  FaPalette,
  FaChartLine,
  FaVectorSquare,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

const serviceContent: any = {
  "web-development": {
    title: "Web Development",
    icon: <FaCode />,
    desc: "Engineered for performance. We build high-speed, secure web applications using React and Node.js.",
    tags: ["Full-Stack", "API First", "Cloud Scalable"],
    points: ["Custom React Apps", "Node.js Backends", "Database Optimization"],
  },
  "e-commerce": {
    title: "E-Commerce",
    icon: <FaShoppingCart />,
    desc: "Seamless shopping experiences with integrated inventory and secure global payments.",
    tags: ["Conversion Focused", "Secure", "Global Support"],
    points: [
      "Shopify/WooCommerce",
      "Custom Payment Gateways",
      "Inventory Sync",
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    icon: <FaPalette />,
    desc: "Visual storytelling that defines your brand's digital presence across all platforms.",
    tags: ["Branding", "Visual Arts", "Strategy"],
    points: [
      "Logo & Brand Identity",
      "Social Media Kits",
      "Vector Illustration",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: <FaChartLine />,
    desc: "Aggressive growth strategies backed by data and neural-network based analytics.",
    tags: ["SEO/SEM", "Content", "Growth"],
    points: ["Search Engine Rankings", "PPC Management", "Neural Analytics"],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: <FaVectorSquare />,
    desc: "User-centric design systems that bridge the gap between human intuition and machine logic.",
    tags: ["Wireframing", "Prototyping", "User Testing"],
    points: ["Figma Prototyping", "User Journey Mapping", "Design Systems"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceContent[slug as string];

  if (!data) {
    return (
      <div className="pt-48 pb-20 text-center min-h-screen bg-[#020617]">
        <h2 className="text-white text-2xl font-bold mb-4">
          404: Protocol Not Found
        </h2>
        <Link to="/" className="text-[#014e3a] underline font-bold">
          Return to Base
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-6 min-h-screen bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#014e3a] text-xs font-bold uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <FaArrowLeft /> Back to Services
        </Link>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="text-7xl text-[#014e3a] sci-fi-glass p-10 border-[#014e3a]/30 shadow-[0_0_30px_rgba(1,78,58,0.2)]">
            {data.icon}
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
              {data.title}
              <span className="text-[#014e3a]">.</span>
            </h1>
            <div className="flex flex-wrap gap-3">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[#014e3a] font-black text-[10px] uppercase tracking-[0.2em] border border-[#014e3a]/30 px-4 py-1.5 rounded-full bg-[#014e3a]/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="sci-fi-glass p-10 border-white/5">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Technical Overview
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed font-light">
                {data.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.points.map((point: string) => (
                <div
                  key={point}
                  className="sci-fi-glass p-6 border-l-4 border-l-[#014e3a] flex items-center gap-4 group hover:bg-[#014e3a]/5 transition-all"
                >
                  <FaCheckCircle className="text-[#014e3a] text-xl" />
                  <span className="text-white font-bold tracking-wide uppercase text-xs">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="sci-fi-glass p-10 border-[#014e3a]/20 h-fit sticky top-40">
            <h3 className="text-2xl font-bold text-white mb-4">
              Initialize Project
            </h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Ready to deploy this protocol? Our engineers are standing by to
              integrate these systems into your business.
            </p>
            <button className="w-full bg-[#014e3a] text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_25px_#014e3a] hover:scale-[1.02] transition-all active:scale-95">
              Request Deployment
            </button>
            <p className="text-center mt-6 text-[10px] text-slate-600 font-mono uppercase tracking-widest">
              Est. Response: 24 Hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
