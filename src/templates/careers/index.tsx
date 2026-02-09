import { useState } from "react";
import {
  FaFileAlt,
  FaVideo,
  FaCode,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaTimes,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

// Define Interfaces for Type Safety
interface Job {
  title: string;
  dept: string;
  loc: string;
  type: string;
}

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Protocol Application",
    desc: "Submit your CV and portfolio. We look for 'clean code' DNA and architectural thinking.",
    label: "Step 01",
  },
  {
    icon: <FaVideo />,
    title: "Discovery Stream",
    desc: "A brief sync to align on goals, culture, and our shared technical roadmap.",
    label: "Step 02",
  },
  {
    icon: <FaCode />,
    title: "Technical Sprint",
    desc: "A collaborative session solving real-world challenges using our tech stack.",
    label: "Step 03",
  },
  {
    icon: <FaCheckCircle />,
    title: "Deployment",
    desc: "Finalize the offer and begin your onboarding into the Teckvora ecosystem.",
    label: "Step 04",
  },
];

const jobs: Job[] = [
  {
    title: "E-commerce Executive",
    dept: "E-Commerce",
    loc: "Remote",
    type: "Internship",
  },
  {
    title: "Digital Marketing Specialist",
    dept: "Digital Marketing",
    loc: "Remote",
    type: "Internship",
  },
  {
    title: "Social Media Manager",
    dept: "Social Media",
    loc: "Remote",
    type: "Internship",
  },
  {
    title: "Graphic Designer",
    dept: "Design",
    loc: "Remote",
    type: "Internship",
  },
  {
    title: "Account Manager",
    dept: "Accounting",
    loc: "Remote",
    type: "Internship",
  },
];

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const contactEmail = "info@teckvora.com";

  const openApplyModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden bg-[#020617] min-h-screen">
      {/* 1. REIMAGINED HIRING PROCESS */}
      <section className="px-6 mb-40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-[#014e3a] font-black tracking-[0.4em] uppercase text-xs mb-4">
              Recruitment Protocol
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              How We <span className="text-[#014e3a]">Hire.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#014e3a] via-white/10 to-transparent -translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:text-right md:items-end" : "md:mt-32"
                }`}
              >
                <span className="absolute -top-16 left-0 md:left-auto md:right-0 text-[10rem] md:text-[12rem] font-black text-white/[0.03] leading-none pointer-events-none select-none">
                  {index + 1}
                </span>

                <div className="relative z-10 max-w-sm group">
                  <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#014e3a]/10 border border-[#014e3a]/30 rounded text-[#014e3a] text-[10px] font-bold uppercase tracking-widest mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#014e3a] animate-pulse" />
                    {step.label}
                  </div>

                  <div
                    className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="text-3xl text-white group-hover:text-[#014e3a] transition-colors">
                      {step.icon}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#014e3a] rounded-full border-4 border-[#020617] shadow-[0_0_15px_#014e3a] z-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS SECTION */}
      <section id="openings" className="px-6 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h3 className="text-4xl font-bold text-white mb-2 italic">
                Current Openings
              </h3>
              <p className="text-slate-400">
                Join a team of elite engineers building the future.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10 text-xs text-slate-400 rounded-lg">
              <span className="text-white font-bold">{jobs.length}</span> Roles
              Available
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/5 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#014e3a]/5 hover:border-[#014e3a]/40 transition-all duration-500 group rounded-3xl"
              >
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-[#014e3a] text-white text-[9px] font-black px-3 py-1 rounded uppercase tracking-widest">
                      {job.dept}
                    </span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase flex items-center gap-1 tracking-widest">
                      <FaClock size={10} className="text-[#014e3a]" />{" "}
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#014e3a] transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex gap-6 text-slate-400 text-xs font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#014e3a]" /> {job.loc}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openApplyModal(job.title)}
                  className="relative overflow-hidden bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all group-hover:bg-[#014e3a] group-hover:border-[#014e3a] flex items-center justify-center gap-3"
                >
                  Apply{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-[#020617]/95 backdrop-blur-xl transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-[#0a0f1e] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#014e3a] opacity-20 blur-[80px]" />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="relative z-10">
              <span className="text-[#014e3a] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                Application Protocol
              </span>
              <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                Apply for <br />
                <span className="text-[#014e3a]">{selectedJob}</span>
              </h3>
              <p className="text-slate-400 text-sm mb-10">
                To initiate the deployment process, please send your CV and
                portfolio to our recruitment desk.
              </p>

              <div className="space-y-4 mb-10">
                <div className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-[#014e3a]/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#014e3a]/10 flex items-center justify-center text-[#014e3a]">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                        Recruitment Email
                      </p>
                      <p className="text-white font-medium text-sm">
                        {contactEmail}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="text-slate-500 hover:text-[#014e3a] transition-colors p-2"
                  >
                    {copied ? (
                      <span className="text-[10px] font-bold text-[#014e3a]">
                        COPIED!
                      </span>
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </div>

                {/* <a
                  href={`mailto:${contactEmail}?subject=Application for ${selectedJob}`}
                  className="flex items-center justify-center gap-3 w-full bg-[#014e3a] hover:bg-[#01644b] text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-emerald-950/20"
                >
                  Open Email Client <FaArrowRight size={12} />
                </a> */}
              </div>

              <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest">
                Our team usually responds within 48 business hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
