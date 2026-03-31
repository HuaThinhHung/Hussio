"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, categories, formatPrice, Product } from "@/data/products";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category");
  const searchParam = searchParams?.get("search");

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<string>("default");

  // Sync with URL params
  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
    if (searchParam) setSearchQuery(searchParam);
  }, [categoryParam, searchParam]);

  // Derived state (Filter & Sort)
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortOption === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchQuery, sortOption]);

  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="font-heading text-4xl font-bold text-blue-950 mb-2">
              Bộ Sưu Tập
            </h1>
            <p className="text-slate-500 text-sm">
              Hiển thị {filteredProducts.length} sản phẩm
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-900 transition-colors"
              />
              <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-900 cursor-pointer transition-colors"
            >
              <option value="default">Sắp xếp mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-24">
              <h3 className="font-heading text-lg font-bold text-blue-950 mb-6 uppercase tracking-wider">Danh Mục</h3>
              <ul className="space-y-3 border-b border-slate-100 pb-6 mb-6">
                <li>
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`w-full text-left flex items-center justify-between text-sm transition-colors ${
                      activeCategory === "all" ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-900"
                    }`}
                  >
                    <span>Tất cả sản phẩm</span>
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left flex items-center justify-between text-sm transition-colors ${
                        activeCategory === cat.id ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-900"
                      }`}
                    >
                      <span>{cat.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
              
              <Link href="/sale" className="flex items-center gap-3 w-full bg-rose-50 text-rose-600 px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-rose-100 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Hàng Khuyến Mãi
              </Link>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center border border-slate-100">
                <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-slate-500">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm của bạn.</p>
                <button 
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-6 px-6 py-3 bg-blue-950 text-white text-sm font-bold tracking-widest uppercase rounded hover:bg-blue-900 transition-colors"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}

// Inline Product Card for encapsulation in this route
function ProductCard({ product }: { product: Product }) {
  const isSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isSale && (
            <span className="bg-rose-600 text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">
              SALE
            </span>
          )}
          {product.category === "outerwear" && (
            <span className="bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">
              NEW
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="block w-full bg-white/95 backdrop-blur-md text-blue-950 text-center py-3 text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg hover:bg-blue-950 hover:text-white transition-colors">
            Xem Chi Tiết
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-2">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-heading font-bold text-base text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          <span className="text-base font-bold text-blue-950">
            {formatPrice(product.price)}
          </span>
          {isSale && (
            <span className="text-sm font-medium text-slate-400 line-through">
              {formatPrice(product.originalPrice!)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
