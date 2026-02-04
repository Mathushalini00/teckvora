import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import API from "../../utils/api";

const BlogDetail = () => {
  // Extract 'slug' to match the App.tsx route
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        // Your backend must have a route like: GET /api/blog/:slug
        const response = await API.get(`/blog/${slug}`);

        // If your backend returns { status: true, blog: {...} }
        const data = response.data.blog || response.data;
        setPost(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading)
    return (
      <div className="pt-48 text-center text-[#014e3a] animate-pulse font-black tracking-widest uppercase">
        Decrypting Protocol...
      </div>
    );

  if (error || !post)
    return (
      <div className="pt-48 text-center text-white font-mono uppercase tracking-widest">
        404 // Entry Missing or Relocated.
      </div>
    );

  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen bg-[#020617]">
      <button
        onClick={() => navigate("/blogs")} // Navigate back to list
        className="flex items-center gap-2 text-[#014e3a] font-bold text-xs uppercase mb-12 hover:gap-4 transition-all"
      >
        <FaArrowLeft /> Return to Archive
      </button>

      {post.image && (
        <img
          src={post.banner_image}
          alt={post.title}
          className="w-full h-[450px] object-cover rounded-2xl mb-12 sci-fi-glass p-1 border border-white/5"
        />
      )}

      <div className="space-y-4 mb-8">
        <span className="text-[#014e3a] font-black uppercase tracking-[0.3em] text-xs px-3 py-1 bg-[#014e3a]/10 rounded-full border border-[#014e3a]/20">
          {post.category || "Protocol"}
        </span>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
          {post.title}
        </h1>
        {/* <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
          Authored: {new Date(post.createdAt).toLocaleDateString()}
        </p> */}
      </div>

      <div
        className="text-slate-300 leading-relaxed text-lg prose prose-invert max-w-none 
                   prose-headings:text-white prose-strong:text-[#014e3a] prose-a:text-[#014e3a]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogDetail;
