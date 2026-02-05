import { useState } from "react";
import { FaPlus, FaMinus, FaEnvelope } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a typical software project take?",
    answer:
      "Most custom software projects take between 3 to 6 months depending on complexity. We work in 2-week agile sprints, providing you with functional builds at the end of every cycle.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer tiered maintenance packages that include 24/7 server monitoring, security patches, and feature updates to ensure your software stays modern.",
  },
  {
    question: "Can you integrate with our existing legacy systems?",
    answer:
      "Absolutely. Our engineering team specializes in building secure API bridges and middleware that allow modern React/Cloud systems to communicate with older legacy databases.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security is at our core. We implement AES-256 encryption, multi-factor authentication, and ensure all builds are compliant with SOC2 or GDPR standards where required.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-24 px-6 scroll-mt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="orb w-[400px] h-[400px] bg-[#014e3a] -bottom-20 -left-20 opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Frequently Asked <span className="text-[#014e3a]">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services and process. Can't
            find the answer you're looking for?
            <a
              href="#contact"
              className="text-[#014e3a] hover:text-emerald-400 font-bold ml-2 inline-flex items-center gap-2"
            >
              Feel free to contact us <FaEnvelope size={14} />
            </a>
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="sci-fi-glass overflow-hidden transition-all duration-300 border-white/5 hover:border-[#014e3a]/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span
                  className={`text-lg font-bold transition-colors ${
                    openIndex === index ? "text-[#014e3a]" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-lg transition-all ${
                    openIndex === index
                      ? "bg-[#014e3a] text-white"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
