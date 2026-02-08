import { useEffect, useState } from "react";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import API from "../../utils/api";
import { Link } from "react-router-dom";

interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  content: string;
  banner_image: string;
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
          const sorted = [...data].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
          setPosts(sorted);
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
        <div className="w-10 h-10 border-2 border-[#014e3a]/20 border-t-[#014e3a] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-[#014e3a] font-bold tracking-[0.3em] text-[10px] uppercase animate-pulse">
          Syncing Archive...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="pt-48 text-center min-h-screen bg-[#020617] text-white p-6">
        <FaExclamationTriangle className="mx-auto text-3xl text-red-500 mb-4" />
        <p className="text-slate-500 font-mono text-[10px] uppercase mb-6">
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 border border-[#014e3a]/30 text-[#014e3a] text-[10px] font-black uppercase tracking-widest"
        >
          Retry
        </button>
      </div>
    );

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-[#020617]">
      {/* Header */}
      <div className="mb-12 border-l-4 border-[#014e3a] pl-8">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Teckvora <span className="text-[#014e3a]">Insights.</span>
        </h1>
      </div>

      {/* FEATURED HERO - The "Full Screen" one */}
      {featuredPost && (
        <Link to={`/blogs/${featuredPost.slug}`} className="group mb-16 block">
          <div className="relative w-full h-[60vh] overflow-hidden border border-white/10 bg-slate-900">
            <img
              src={featuredPost.banner_image}
              alt={featuredPost.title}
              // Increased opacity to 90% to fix the "invisible" issue
              className="w-full h-full min-h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            {/* pointer-events-none ensures the gradient doesn't block the image layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl z-20">
              <span className="bg-[#014e3a] text-white text-[9px] font-black tracking-widest px-3 py-1 uppercase mb-6 inline-block">
                Latest Release
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter group-hover:text-[#014e3a] transition-colors">
                {featuredPost.title}
              </h2>
              <div className="text-[#014e3a] font-bold flex items-center gap-2 text-[11px] uppercase tracking-widest">
                Read More{" "}
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {remainingPosts.map((post) => (
          <Link to={`/blogs/${post.slug}`} key={post._id} className="group">
            <article className="overflow-hidden flex flex-col h-full border border-white/5 bg-[#020617] hover:border-[#014e3a]/40 transition-all duration-500">
              <div className="h-56 overflow-hidden bg-slate-800 relative">
                <img
                  src={post.banner_image}
                  alt={post.title}
                  className="w-full h-full min-h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-6 line-clamp-2 group-hover:text-[#014e3a] transition-colors leading-tight">
                  {post.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[#014e3a] text-[10px] font-black uppercase tracking-widest">
                  <span>View Details</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
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
