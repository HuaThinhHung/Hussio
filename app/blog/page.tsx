import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog & Xu Hướng Thời Trang - HUSSIO",
  description: "Cập nhật những xu hướng thời trang nam mới nhất, bí quyết phối đồ và phong cách sống từ đội ngũ chuyên gia HUSSIO.",
};

export const dynamic = "force-dynamic";

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await searchParams;
  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">
            Tạp Chí Phong Cách
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Blog & Xu Hướng
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            Khám phá những bài viết mới nhất về xu hướng thời trang, bí quyết phối đồ và cách chăm sóc trang phục để luôn giữ phong thái cuốn hút.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full flex-grow">
                
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-blue-950 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col p-6 lg:p-8 flex-grow">
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase mb-4">
                    <span className="text-blue-600">{post.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{post.readTime} đọc</span>
                  </div>

                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-blue-950 leading-snug mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6 flex-grow font-medium">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-blue-600 transition-colors mt-auto pt-4 border-t border-slate-100">
                    Đọc Bài Viết →
                  </span>
                </div>

              </Link>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
