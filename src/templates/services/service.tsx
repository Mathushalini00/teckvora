import React from "react";
import { useParams } from "react-router-dom";
import {
  FaCode,
  FaShoppingCart,
  FaPalette,
  FaChartLine,
  FaVectorSquare,
} from "react-icons/fa";

const serviceContent: any = {
  "web-development": {
    title: "Web Development",
    icon: <FaCode />,
    desc: "Engineered for performance. We build high-speed, secure web applications using React and Node.js.",
    tags: ["Full-Stack", "API First", "Cloud Scalable"],
  },
  "e-commerce": {
    title: "E-Commerce",
    icon: <FaShoppingCart />,
    desc: "Seamless shopping experiences with integrated inventory and secure global payments.",
    tags: ["Conversion Focused", "Secure", "Global Support"],
  },
  "graphic-design": {
    title: "Graphic Design",
    icon: <FaPalette />,
    desc: "Visual storytelling that defines your brand's digital presence across all platforms.",
    tags: ["Branding", "Visual Arts", "Strategy"],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: <FaChartLine />,
    desc: "Aggressive growth strategies backed by data and neural-network based analytics.",
    tags: ["SEO/SEM", "Content", "Growth"],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: <FaVectorSquare />,
    desc: "User-centric design systems that bridge the gap between human intuition and machine logic.",
    tags: ["Wireframing", "Prototyping", "User Testing"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceContent[slug as string];

  if (!data)
    return (
      <div className="pt-40 text-center text-white">
        Protocol Error: Service not found.
      </div>
    );

  return (
    <div className="pt-40 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="text-7xl text-[#014e3a] sci-fi-glass p-8 border-[#014e3a]/30 animate-pulse">
            {data.icon}
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              {data.title}
            </h1>
            <div className="flex gap-4">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[#014e3a] font-bold text-[10px] uppercase tracking-widest border border-[#014e3a]/30 px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 sci-fi-glass p-10">
            <h2 className="text-2xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {data.desc}
            </p>
          </div>
          <div className="sci-fi-glass p-10 border-[#014e3a]/20">
            <h3 className="text-white font-bold mb-4">Ready to start?</h3>
            <button className="w-full bg-[#014e3a] text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_#014e3a] transition-all">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
