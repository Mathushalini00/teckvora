import { useParams } from "react-router-dom";
import {
  FaLaptopCode,
  FaStore,
  FaPenNib,
  FaBullhorn,
  FaObjectGroup,
} from "react-icons/fa";

const serviceDetails: any = {
  "web-development": {
    title: "Web Development",
    icon: <FaLaptopCode />,
    desc: "Next-gen web applications built with speed and security at the core.",
  },
  "e-commerce": {
    title: "E-Commerce",
    icon: <FaStore />,
    desc: "Seamless shopping experiences designed to convert visitors into loyal customers.",
  },
  "graphic-design": {
    title: "Graphic Design",
    icon: <FaPenNib />,
    desc: "Bold visual identities that tell your brand's story across every medium.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    desc: "Data-driven growth strategies to dominate your market share.",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: <FaObjectGroup />,
    desc: "Intuitive user interfaces paired with deeply researched user experiences.",
  },
};

const Services = () => {
  const { slug } = useParams();
  const data = serviceDetails[slug as string];

  if (!data)
    return (
      <div className="pt-40 text-center text-white">Service Not Found</div>
    );

  return (
    <div className="pt-48 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[#014e3a] text-7xl mb-8 flex justify-center animate-pulse">
          {data.icon}
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
          {data.title}
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed">{data.desc}</p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="sci-fi-glass h-64 border-white/5"></div>
          <div className="sci-fi-glass h-64 border-white/5"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
