import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Cách Phối Đồ Với Áo Thun Nam Mùa Hè",
    excerpt: "Khám phá những cách phối đồ sáng tạo với áo thun để tạo nên phong cách riêng biệt cho mỗi ngày.",
    date: "28/03/2026",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    category: "Phong Cách",
    readTime: "5 phút",
  },
  {
    id: 2,
    title: "Hướng Dẫn Chọn Size Quần Âu Chuẩn Nhất",
    excerpt: "Bí quyết chọn size quần âu vừa vặn, thoải mái và phù hợp với dáng người của bạn.",
    date: "25/03/2026",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
    category: "Hướng Dẫn",
    readTime: "3 phút",
  },
  {
    id: 3,
    title: "Xu Hướng Thời Trang Nam 2026",
    excerpt: "Cập nhật những xu hướng thời trang nam mới nhất năm 2026 để luôn dẫn đầu phong cách.",
    date: "22/03/2026",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop",
    category: "Xu Hướng",
    readTime: "4 phút",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 lg:mb-20">
          <div className="text-center md:text-left">
            <span className="inline-block text-[11px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">
              Tin Tức Cập Nhật
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-blue-950">
              Blog & Xu Hướng
            </h2>
          </div>
          <Link
            href="/blog"
            className="group hidden md:flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-slate-500 hover:text-blue-950 uppercase border-b border-slate-300 hover:border-blue-950 pb-2 transition-all"
          >
            Xem tất cả bài viết
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 3 Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
              <Link href={`/blog/${post.id}`} className="flex flex-col h-full flex-grow">
                
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge Nổi */}
                  <span className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-md text-blue-950 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-sm z-10">
                    {post.category}
                  </span>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col p-6 lg:p-8 flex-grow">
                  
                  {/* Meta Thông Tin */}
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase mb-4">
                    <span className="text-blue-600">{post.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{post.readTime} đọc</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-blue-950 leading-snug mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6 flex-grow font-medium">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <span className="inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-blue-600 transition-colors mt-auto pt-4 border-t border-slate-100">
                    Khám phá ngay
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

              </Link>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex w-full justify-center md:hidden mt-10">
          <Link
            href="/blog"
            className="flex items-center justify-center bg-transparent border border-blue-950 text-blue-950 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-blue-950 hover:text-white transition-colors w-full rounded-sm"
          >
            Xem tất cả bài viết
          </Link>
        </div>

      </div>
    </section>
  );
}
