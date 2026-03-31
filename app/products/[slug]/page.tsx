import React from "react";
import { Metadata } from "next";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return { title: "Sản phẩm không tồn tại" };

  return {
    title: `${product.name} - HUSSIO`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Sản Phẩm Không Tồn Tại</h1>
        <Link href="/products" className="text-blue-600 hover:text-blue-800 underline">
          Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}

