import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import LogoImg from "../../../assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: "Web Development", slug: "web-development" },
    { name: "E-Commerce", slug: "e-commerce" },
    { name: "Graphic Design", slug: "graphic-design" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
  ];

  return (
    <header className="fixed top-4 md:top-6 w-[95%] max-w-6xl z-[1000] left-1/2 -translate-x-1/2">
      <nav className="sci-fi-glass px-6 md:px-8 py-3 flex items-center justify-between border-white/10 shadow-2xl relative">
        {/* Updated Logo Section */}
        <Link to="/" className="flex items-center gap-3 z-[1100] group">
          <div className="relative">
            <img
              src={LogoImg}
              alt="Teckvora Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#014e3a] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-400 items-center">
          <Link to="/" className="hover:text-white transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition-all">
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-all outline-none ${isDropdownOpen ? "text-white" : "hover:text-white"}`}
            >
              Services
              <IoChevronDown
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#014e3a]" : ""}`}
              />
            </button>

            <div
              className={`
              absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 
              bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              transition-all duration-300 origin-top z-[2000]
              ${isDropdownOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-4 scale-95"}
            `}
            >
              <div className="relative z-10 grid gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:bg-[#014e3a]/20 hover:text-white transition-all group"
                  >
                    {s.name}
                    <div className="w-1 h-1 rounded-full bg-[#014e3a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/blogs" className="hover:text-white transition-all">
            Blogs
          </Link>
          <Link to="/careers" className="hover:text-white transition-all">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-white transition-all">
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="hidden lg:block bg-[#014e3a] hover:bg-[#01634a] px-6 py-2 rounded-xl text-sm font-bold text-white shadow-[0_0_15px_rgba(1,78,58,0.3)] transition-all z-[1100]"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl text-white z-[1100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 h-screen bg-[#020617] flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden z-[1050] ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white"
          >
            Home
          </Link>
          <div className="w-full px-12 space-y-4 text-center">
            <p className="text-[#014e3a] text-xs font-black tracking-widest uppercase">
              Expertise
            </p>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                onClick={() => setIsOpen(false)}
                className="block text-xl text-slate-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
