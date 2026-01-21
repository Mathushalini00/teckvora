import { useState } from "react";
import { FaSearch, FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";

const categories = ["All", "Development", "Security", "Cloud", "AI"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Quantum-Resistant Encryption",
    excerpt:
      "As quantum computing advances, we explore how Teckvora is securing data today for the threats of tomorrow.",
    category: "Security",
    date: "Jan 15, 2026",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Scaling React Apps to Millions of Users",
    excerpt:
      "Lessons learned from architecting high-concurrency systems using micro-frontends and edge caching.",
    category: "Development",
    date: "Jan 12, 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Cloud-Native vs. Cloud-Agnostic",
    excerpt:
      "Choosing the right infrastructure strategy for your enterprise software in 2026.",
    category: "Cloud",
    date: "Jan 08, 2026",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blogs" className="relative py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white mt-10">
            Insights & <span className="text-[#014e3a]">Updates</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in
            software development and technology.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 order-2 lg:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-[#014e3a] border-[#014e3a] text-white shadow-[0_0_15px_rgba(1,78,58,0.4)]"
                    : "sci-fi-glass border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:max-w-xs order-1 lg:order-2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sci-fi-glass bg-white/5 border-white/10 pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#014e3a] transition-all"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="sci-fi-glass group overflow-hidden flex flex-col h-full hover:border-[#014e3a]/40 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#014e3a] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTag /> 5 min read
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-[#014e3a] transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-[#014e3a] font-bold text-sm group-hover:gap-4 transition-all">
                  Read Article <FaArrowRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 italic">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
