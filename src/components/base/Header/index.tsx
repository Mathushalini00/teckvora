import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import LogoImg from "../../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const services = [
    { name: "Web Development", slug: "web-development" },
    { name: "E-Commerce", slug: "e-commerce" },
    { name: "Graphic Design", slug: "graphic-design" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
  ];

  return (
    <header className="fixed top-2 md:top-6 w-[95%] max-w-7xl z-[1000] left-1/2 -translate-x-1/2">
      <nav className="sci-fi-glass px-4 md:px-8 py-3 flex items-center justify-between border border-white/10 shadow-2xl relative rounded-2xl md:rounded-3xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-[1100] group">
          <div className="relative">
            <img
              src={LogoImg}
              alt="Teckvora Logo"
              className="h-7 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#014e3a] blur-xl opacity-10 group-hover:opacity-30 transition-opacity" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-[13px] font-semibold text-slate-400 items-center">
          <Link to="/" className="hover:text-white transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition-all">
            About
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 outline-none ${isDropdownOpen ? "text-white" : "hover:text-white"}`}
            >
              Services
              <IoChevronDown
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#014e3a]" : ""}`}
              />
            </button>

            <div
              className={`
              absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 
              bg-[#020617]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl
              transition-all duration-300 origin-top
              ${isDropdownOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95"}
            `}
            >
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-[#014e3a]/20 hover:text-white transition-all group"
                >
                  {s.name}
                  <div className="w-1 h-1 rounded-full bg-[#014e3a] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
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

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:block bg-[#014e3a] hover:bg-[#01634a] px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-all z-[1100]"
          >
            Get Started
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl text-white z-[1100] p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
          fixed inset-0 h-screen w-screen bg-[#020617] transition-all duration-500 lg:hidden z-[1050] overflow-y-auto pb-12
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
        >
          <div className="flex flex-col items-center pt-32 px-6 gap-6">
            <Link to="/" className="text-2xl font-bold text-white">
              Home
            </Link>
            <Link to="/about" className="text-2xl font-bold text-white">
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="w-full max-w-xs text-center">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-center gap-2 w-full text-2xl font-bold text-white"
              >
                Services{" "}
                <IoChevronDown
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96 mt-4" : "max-h-0"}`}
              >
                <div className="bg-white/5 rounded-2xl p-4 grid gap-4">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="text-slate-400 text-sm font-bold uppercase tracking-widest"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/blogs" className="text-2xl font-bold text-white">
              Blogs
            </Link>
            <Link to="/careers" className="text-2xl font-bold text-white">
              Careers
            </Link>
            <Link to="/contact" className="text-2xl font-bold text-white">
              Contact
            </Link>

            <Link
              to="/contact"
              className="mt-4 w-full max-w-xs bg-[#014e3a] py-4 rounded-2xl text-center font-bold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
