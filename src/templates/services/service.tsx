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
  image: string;
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
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
        desc: "Every line of code is optimized for lightning-fast load times.",
      },
      {
        title: "Future-Proof Stacks",
        desc: "Built on modern frameworks that ensure long-term relevance.",
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
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2532&auto=format&fit=crop",
    desc: "High-performance sales engines that bridge the gap between complex inventory logic and a frictionless checkout experience.",
    tags: ["Conversion", "Secure", "Global"],
    points: ["Headless Commerce", "Payment Gateways", "Inventory Sync"],
    whyChooseUs: [
      {
        title: "Psychological UX",
        desc: "Implementation of design patterns that reduce friction.",
      },
      {
        title: "Global Compliance",
        desc: "Multi-currency and automated tax calculations.",
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
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop",
    desc: "Mathematical, grid-based designs that communicate authority and innovation to your target audience.",
    tags: ["Branding", "Visuals", "Strategy"],
    points: ["Brand Identity", "Social Media Kits", "Vector Illustration"],
    whyChooseUs: [
      {
        title: "Visual Logic",
        desc: "Using color psychology to influence market perception.",
      },
      {
        title: "Asset Versatility",
        desc: "Scalable assets designed for all platforms.",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    desc: "Data-backed growth strategies using analytics to identify opportunities and dominate search results.",
    tags: ["SEO/SEM", "Content", "Growth"],
    points: ["Search Rankings", "PPC Management", "Data Analytics"],
    whyChooseUs: [
      {
        title: "Zero-Waste Ads",
        desc: "Refined targeting to ensure ad spend results in leads.",
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
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2670&auto=format&fit=crop",
    desc: "User-centric systems that reduce cognitive load, making complex software feel effortless.",
    tags: ["Prototyping", "UX Testing", "Systems"],
    points: ["Hi-Fi Prototypes", "User Journeys", "Design Systems"],
    whyChooseUs: [
      {
        title: "Human Centered",
        desc: "Data-driven friction point analysis for usability.",
      },
      {
        title: "Micro-Interactions",
        desc: "Subtle feedback loops that make apps feel premium.",
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
    <div className="pt-24 pb-12 px-6 min-h-screen bg-[#020617] text-slate-200">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#014e3a] text-sm font-semibold mb-8 hover:text-emerald-500 transition-colors"
        >
          <FaArrowLeft /> Back
        </Link>

        {/* Hero Section: Two Column for Space Efficiency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="text-5xl text-[#014e3a] mb-5">{data.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {data.title}
              <span className="text-[#014e3a]">.</span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded bg-white/5 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg text-slate-400 leading-relaxed">
              {data.desc}
            </p>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#014e3a] to-emerald-600 rounded-2xl blur opacity-10 group-hover:opacity-25 transition duration-500"></div>
            <img
              src={data.image}
              alt={data.title}
              className="relative rounded-2xl border border-white/10 w-full h-64 md:h-80 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

        {/* Features & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-4">
                Core Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.01] border border-white/5"
                  >
                    <FaTerminal className="text-[#014e3a] text-[10px]" />
                    <span className="text-xs text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.points.map((p) => (
                <div
                  key={p}
                  className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#014e3a] shrink-0 text-sm" />
                  <span className="text-xs font-medium text-white">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 sticky top-28">
              <h3 className="text-lg font-bold text-white mb-1">
                Scale Vision
              </h3>
              <p className="text-slate-500 text-[11px] mb-6">
                Connect with engineers for deployment.
              </p>
              <Link
                to="/contact"
                className="block text-center w-full bg-[#014e3a] hover:bg-[#01644b] text-white py-3 rounded-lg text-sm font-bold transition-all shadow-lg"
              >
                Request Quote
              </Link>
            </div>
          </aside>
        </div>

        {/* Process Roadmap */}
        <section className="mb-16">
          <h3 className="text-center text-[10px] font-bold text-[#014e3a] uppercase tracking-[0.3em] mb-10">
            Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-white/5 z-0" />
            {data.process.map((p, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#020617] border border-[#014e3a] flex items-center justify-center text-[#014e3a] font-bold text-lg mb-3 shadow-xl">
                  {p.step}
                </div>
                <h5 className="text-white font-bold text-[11px] uppercase tracking-widest">
                  {p.label}
                </h5>
              </div>
            ))}
          </div>
        </section>

        {/* CTA with Glow */}
        <section className="relative p-12 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#020617] text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#014e3a] opacity-10 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
              Ready to build your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014e3a] to-emerald-400">
                next platform?
              </span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-3.5 rounded-xl font-bold text-sm transition-all hover:bg-[#014e3a] hover:text-white"
            >
              Start Deployment <FaRocket className="text-xs" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
