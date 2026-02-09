import { IoDiamondOutline } from "react-icons/io5";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import LogoImg from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-white/5">
      {/* Background Glow */}
      <div className="orb w-[300px] h-[300px] bg-[#014e3a] -top-24 right-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-black text-2xl tracking-widest text-white">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#014e3a] blur-md opacity-50 animate-pulse" />
              </div>
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
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Architecting the next generation of enterprise software with
              speed, security, and precision. Built for the architects of
              tomorrow.
            </p>
            <div className="flex gap-4">
              {[FaGithub, FaLinkedinIn, FaTwitter, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 sci-fi-glass flex items-center justify-center text-slate-400 hover:text-[#014e3a] hover:border-[#014e3a]/50 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {["Home", "About", "Services", "Careers", "Blogs"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-[#014e3a] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#014e3a] group-hover:w-4 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#014e3a] mt-1" />
                <span>Navaly South, Manipay</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#014e3a]" />
                <span>0764983834</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#014e3a]" />
                <span>info@teckvora.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Join our newsletter for the latest tech insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#014e3a] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#014e3a] px-3 rounded-lg text-white hover:bg-[#01634a] transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2026 Teckvora Systems Inc. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="group sci-fi-glass p-3 text-slate-400 hover:text-[#014e3a] transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
