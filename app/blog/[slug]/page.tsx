"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/data/blogs";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Bài Viết Không Tồn Tại</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Quay lại danh sách Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-20 bg-white">
      <article className="container max-w-4xl mx-auto">
        
        {/* Meta & Title */}
        <header className="text-center mb-10">
          <Link href="/blog" className="inline-block text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase hover:text-blue-600 transition-colors mb-6">
            ← Trở về
          </Link>
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase mb-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{post.category}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>{post.readTime} đọc</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 mb-16">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-lg md:prose-xl prose-slate max-w-3xl mx-auto prose-headings:font-heading prose-headings:text-blue-950 prose-a:text-blue-600 hover:prose-a:text-blue-800">
          {/* Mock Markdown rendering - Tách line break thành các div/p */}
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("**")) {
              const text = paragraph.replace(/\*\*/g, "");
              return <h3 key={index} className="text-2xl font-bold mt-10 mb-4">{text}</h3>;
            }
            if (paragraph.startsWith("- ")) {
               const items = paragraph.split("- ").filter(i => i.trim());
               return (
                 <ul key={index} className="list-disc pl-6 space-y-2 my-6">
                   {items.map((item, i) => <li key={i} className="text-slate-600 leading-relaxed">{item}</li>)}
                 </ul>
               );
            }
            return <p key={index} className="text-slate-600 leading-relaxed mb-6">{paragraph}</p>;
          })}
        </div>
        
      </article>
    </main>
  );
}
