import { useEffect, useState } from "react";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import API from "../../utils/api";
import { Link } from "react-router-dom";

// FIXED: Interface now includes slug
interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await API.get("/blog/view");
        const data = response.data?.blogs || response.data;

        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          setError("Protocol Error: Invalid data structure received.");
        }
      } catch (err: any) {
        setError("Connection Interrupted: Backend Protocol Offline.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="pt-48 text-center min-h-screen bg-[#020617]">
        <div className="w-12 h-12 border-4 border-[#014e3a]/20 border-t-[#014e3a] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-[#014e3a] font-black tracking-widest text-xs uppercase animate-pulse">
          Syncing Database...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="pt-48 text-center min-h-screen bg-[#020617] text-white">
        <FaExclamationTriangle className="mx-auto text-4xl text-red-500 mb-4" />
        <p className="text-slate-400 font-mono text-sm uppercase mb-6">
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 border border-[#014e3a] text-[#014e3a] hover:bg-[#014e3a] hover:text-white transition-all rounded text-xs font-bold uppercase"
        >
          Retry Connection
        </button>
      </div>
    );

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-[#020617]">
      <div className="mb-16">
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4">
          Teckvora <span className="text-[#014e3a]">Insights.</span>
        </h1>
        <p className="text-slate-500 font-medium tracking-wide">
          Archived Technical Protocols & Market Analysis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          // Link uses slug for SEO friendly URLs
          <Link
            to={`/blogs/${post.slug}`}
            key={post._id}
            className="block group"
          >
            <article className="sci-fi-glass overflow-hidden flex flex-col hover:border-[#014e3a]/40 transition-all duration-500 h-full">
              <div className="h-56 overflow-hidden bg-slate-900">
                <img
                  src={
                    post.image ||
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  }
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[#014e3a] text-[10px] font-black tracking-widest mb-4 block uppercase">
                  {post.category || "General"}
                </span>
                <h2 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#014e3a] transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {post.content ? post.content.replace(/<[^>]*>?/gm, "") : ""}
                </p>
                <div className="flex items-center gap-2 text-[#014e3a] text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Access Data <FaArrowRight />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
