import { useParams, Link } from "react-router-dom";
import {
  FaCode,
  FaShoppingCart,
  FaPalette,
  FaChartLine,
  FaVectorSquare,
  FaArrowLeft,
  FaCheckCircle,
  FaTerminal,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import type { JSX } from "react";

interface ServiceInfo {
  title: string;
  icon: JSX.Element;
  desc: string;
  tags: string[];
  points: string[];
  whyChooseUs: { title: string; desc: string }[];
  process: { step: string; label: string }[];
  features: string[];
  useCases: string[];
}

const serviceContent: Record<string, ServiceInfo> = {
  "web-development": {
    title: "Web Development",
    icon: <FaCode />,
    desc: "We engineer mission-critical web architectures. From complex SaaS platforms to high-performance internal tools, our development focus is on speed, security, and scalability.",
    tags: ["Full-Stack", "API First", "Cloud Scalable"],
    points: [
      "Custom React/Next.js Apps",
      "Node.js Microservices",
      "Database Optimization",
    ],
    whyChooseUs: [
      {
        title: "Performance First",
        desc: "Every line of code is optimized for lightning-fast load times and global edge deployment.",
      },
      {
        title: "Future-Proof Stacks",
        desc: "Built on modern frameworks that ensure long-term relevance and maintainability.",
      },
    ],
    process: [
      { step: "01", label: "Architecture" },
      { step: "02", label: "Development" },
      { step: "03", label: "Stress Test" },
    ],
    features: [
      "Custom API & Integrations",
      "Progressive Web Apps",
      "Real-time WebSockets",
      "Cloud Infrastructure",
    ],
    useCases: ["SaaS Platforms", "Enterprise ERP", "FinTech"],
  },
  "e-commerce": {
    title: "E-Commerce",
    icon: <FaShoppingCart />,
    desc: "High-performance sales engines that bridge the gap between complex inventory logic and a frictionless checkout experience.",
    tags: ["Conversion", "Secure", "Global"],
    points: ["Headless Commerce", "Payment Gateways", "Inventory Sync"],
    whyChooseUs: [
      {
        title: "Psychological UX",
        desc: "Implementation of design patterns that reduce friction and cart abandonment.",
      },
      {
        title: "Global Compliance",
        desc: "Multi-currency and automated tax calculations for worldwide distribution.",
      },
    ],
    process: [
      { step: "01", label: "Strategy" },
      { step: "02", label: "Platform" },
      { step: "03", label: "Deployment" },
    ],
    features: [
      "Multi-vendor Support",
      "AI Recommendation",
      "Logistics API",
      "Subscription Billing",
    ],
    useCases: ["D2C Brands", "Marketplaces", "B2B Portals"],
  },
  "graphic-design": {
    title: "Graphic Design",
    icon: <FaPalette />,
    desc: "Mathematical, grid-based designs that communicate authority and innovation to your target audience.",
    tags: ["Branding", "Visuals", "Strategy"],
    points: ["Brand Identity", "Social Media Kits", "Vector Illustration"],
    whyChooseUs: [
      {
        title: "Visual Logic",
        desc: "Using color psychology and typography to influence market perception.",
      },
      {
        title: "Asset Versatility",
        desc: "Scalable assets designed for everything from mobile icons to billboards.",
      },
    ],
    process: [
      { step: "01", label: "Discovery" },
      { step: "02", label: "Concepts" },
      { step: "03", label: "Delivery" },
    ],
    features: [
      "Brand Style Guides",
      "3D Iconography",
      "Investor Decks",
      "Ad Creatives",
    ],
    useCases: ["Tech Startups", "Product Launch", "Rebranding"],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: <FaChartLine />,
    desc: "Data-backed growth strategies using analytics to identify opportunities and dominate search results.",
    tags: ["SEO/SEM", "Content", "Growth"],
    points: ["Search Rankings", "PPC Management", "Data Analytics"],
    whyChooseUs: [
      {
        title: "Zero-Waste Ads",
        desc: "Refined targeting to ensure ad spend results in high-intent leads.",
      },
      {
        title: "SEO Permanence",
        desc: "Long-term strategies that withstand algorithm updates.",
      },
    ],
    process: [
      { step: "01", label: "Analysis" },
      { step: "02", label: "Execution" },
      { step: "03", label: "Scaling" },
    ],
    features: [
      "Gap Analysis",
      "Email Funnels",
      "Predictive Lead Scoring",
      "Content Authority",
    ],
    useCases: ["Lead Generation", "Awareness", "Market Expansion"],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: <FaVectorSquare />,
    desc: "User-centric systems that reduce cognitive load, making complex software feel effortless.",
    tags: ["Prototyping", "UX Testing", "Systems"],
    points: ["Hi-Fi Prototypes", "User Journeys", "Design Systems"],
    whyChooseUs: [
      {
        title: "Human Centered",
        desc: "Data-driven friction point analysis to ensure product usability.",
      },
      {
        title: "Micro-Interactions",
        desc: "Subtle feedback loops that make apps feel premium and alive.",
      },
    ],
    process: [
      { step: "01", label: "Empathy" },
      { step: "02", label: "Prototyping" },
      { step: "03", label: "Handoff" },
    ],
    features: [
      "Atomic Design Systems",
      "Heatmap Analysis",
      "WCAG Compliance",
      "Figma Prototypes",
    ],
    useCases: ["Mobile Apps", "SaaS Dashboards", "Interface Design"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceContent[slug as string];

  if (!data) return null;

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#020617] text-slate-200">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#014e3a] text-sm font-semibold mb-12 hover:text-emerald-500 transition-colors"
        >
          <FaArrowLeft /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-24">
          <div className="text-6xl text-[#014e3a] p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl">
            {data.icon}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {data.title}
              <span className="text-[#014e3a]">.</span>
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-md bg-white/5 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white/[0.01] border border-white/5 p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Technical Overview
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                {data.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <FaTerminal className="text-[#014e3a] text-xs" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.points.map((point) => (
                <div
                  key={point}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#014e3a] shrink-0" />
                  <span className="text-sm font-medium text-white">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-2">
                Initialize Project
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Ready to deploy? Our engineers are standing by.
              </p>
              <Link
                to="/contact"
                className="block text-center w-full bg-[#014e3a] hover:bg-[#01644b] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20"
              >
                Request Deployment
              </Link>
            </div>
          </aside>
        </div>

        {/* Why Choose Us */}
        <section className="mt-32">
          <h3 className="text-center text-sm font-bold text-[#014e3a] uppercase tracking-[0.3em] mb-12">
            Strategic Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex gap-5"
              >
                <FaShieldAlt className="text-[#014e3a] text-3xl shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-32">
          <h3 className="text-center text-sm font-bold text-[#014e3a] uppercase tracking-[0.3em] mb-12">
            Operational Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-white/5 z-0" />
            {data.process.map((p, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#020617] border border-[#014e3a] flex items-center justify-center text-[#014e3a] font-bold text-xl mb-6 shadow-xl shadow-emerald-950/40">
                  {p.step}
                </div>
                <h5 className="text-white font-bold text-sm uppercase tracking-widest">
                  {p.label}
                </h5>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-32 mb-32 flex flex-wrap justify-center gap-3">
          {data.useCases.map((u, i) => (
            <span
              key={i}
              className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs font-semibold text-slate-400"
            >
              {u}
            </span>
          ))}
        </section>

        {/* CTA */}
        <section className="relative mt-32 p-12 md:p-24 rounded-[3rem] overflow-hidden border border-white/10 bg-[#020617]">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#014e3a] opacity-20 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimalist Sub-header */}
            <span className="text-[#014e3a] font-bold text-xs uppercase tracking-[0.4em] mb-6">
              Deployment Ready
            </span>

            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Ready to build your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014e3a] via-emerald-400 to-[#014e3a]">
                next platform?
              </span>
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
              Connect with our elite engineers to transform your vision into a
              high-performance, mission-critical digital architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-[#014e3a] hover:text-white hover:shadow-[0_0_30px_rgba(1,78,58,0.4)]"
              >
                Start Deployment
                <FaRocket className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="text-slate-400 hover:text-white text-sm font-semibold transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-[#014e3a]"
              >
                Review our process
              </Link>
            </div>
          </div>

          {/* Technical Detail Decoration */}
          <div className="absolute bottom-6 right-10 text-[10px] font-mono text-white/5 uppercase tracking-[0.5em] hidden lg:block">
            System Status: Optimized
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
