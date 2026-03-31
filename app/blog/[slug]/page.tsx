import React from "react";
import { Metadata } from "next";
import { getPostBySlug, blogs } from "@/data/blogs";
import BlogDetailClient from "./BlogDetailClient";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return { title: "Bài viết không tồn tại" };

  return {
    title: `${post.title} - HUSSIO Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
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

  return <BlogDetailClient post={post} />;
}

