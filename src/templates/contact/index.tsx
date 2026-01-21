import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="orb w-[500px] h-[500px] bg-[#014e3a]/10 -top-20 -left-20 opacity-30" />
      <div className="orb w-[400px] h-[400px] bg-emerald-900/10 bottom-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Info & Text */}
          <div className="text-left space-y-12">
            <div>
              <h2 className="text-[#014e3a] font-black tracking-[0.3em] uppercase text-xs mb-4">
                Connection Portal
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
                Let’s build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014e3a] to-emerald-400">
                  something epic.
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Have a complex challenge? Our engineers are ready to help you
                architect the future. Reach out through any of our secure
                channels.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-6">
              <ContactMethod
                icon={<FaEnvelope />}
                title="Email Us"
                detail="hello@teckvora.io"
                sub="General & Sales inquiries"
              />
              <ContactMethod
                icon={<FaMapMarkerAlt />}
                title="Our HQ"
                detail="123 Innovation Way, Silicon Valley"
                sub="9:00 AM - 6:00 PM PST"
              />
            </div>

            {/* Social Pulse */}
            <div className="flex gap-4">
              {[FaDiscord, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 sci-fi-glass flex items-center justify-center text-slate-400 hover:text-[#014e3a] hover:border-[#014e3a]/50 transition-all text-xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: The Glass Form */}
          <div className="sci-fi-glass p-8 md:p-12 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#014e3a]/5 blur-3xl rounded-full" />

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#014e3a] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#014e3a] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">
                  Subject
                </label>
                <select className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-slate-400 focus:outline-none focus:border-[#014e3a] transition-all appearance-none">
                  <option>Software Development</option>
                  <option>Cloud Infrastructure</option>
                  <option>Cyber Security</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#014e3a] transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#014e3a] hover:bg-[#01634a] text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_25px_rgba(1,78,58,0.4)] flex items-center justify-center gap-3 group">
                Initialize Connection
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactMethod = ({
  icon,
  title,
  detail,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  sub: string;
}) => (
  <div className="flex gap-6 items-start">
    <div className="w-12 h-12 bg-[#014e3a]/10 rounded-xl flex items-center justify-center text-[#014e3a] text-xl border border-[#014e3a]/20">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold">{title}</h4>
      <p className="text-[#014e3a] text-sm font-medium">{detail}</p>
      <p className="text-slate-500 text-xs mt-1">{sub}</p>
    </div>
  </div>
);

export default Contact;
