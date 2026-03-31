"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";
import { getProductBySlug, formatPrice, products } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { addToCart } = useCart();
  
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
      if (product.colors.length > 0) setSelectedColor(product.colors[0]);
    }
  }, [product]);

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

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2s
  };

  const isSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <main className="py-12 md:py-20 bg-white">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 mb-10">
          <Link href="/" className="hover:text-blue-600 transition-colors">Trang Chủ</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-blue-600 transition-colors">
            {product.category.replace("-", " ")}
          </Link>
          <span>/</span>
          <span className="text-slate-800 truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Hình Ảnh Sản Phẩm */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {isSale && (
                <span className="absolute top-6 left-6 bg-rose-600 text-white text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                  SALE
                </span>
              )}
            </div>
          </div>

          {/* Chi Tiết Sản Phẩm */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-blue-950 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-bold text-slate-900">
                {formatPrice(product.price)}
              </span>
              {isSale && (
                <span className="text-lg font-medium text-slate-400 line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Màu Sắc */}
            <div className="mb-8">
              <span className="block text-[11px] font-bold tracking-[0.2em] text-[#94a3b8] uppercase mb-4">
                Màu sắc: <span className="text-[#1e293b]">{selectedColor}</span>
              </span>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? "border-[#172554] bg-[#eff6ff] text-[#172554] shadow-md shadow-[#172554]/10"
                        : "border-[#e2e8f0] text-[#64748b] hover:border-[#94a3b8] hover:bg-[#f8fafc]"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Kích Cỡ */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="block text-[11px] font-bold tracking-[0.2em] text-[#94a3b8] uppercase">
                  Kích cỡ: <span className="text-[#1e293b]">{selectedSize}</span>
                </span>
                <span className="text-[11px] text-[#2563eb] underline cursor-pointer hover:text-[#1d4ed8]">
                  Hướng dẫn chọn size
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[50px] px-4 py-2.5 text-xs font-bold tracking-widest rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? "border-[#172554] bg-[#eff6ff] text-[#172554] shadow-md shadow-[#172554]/10"
                        : "border-[#e2e8f0] text-[#64748b] hover:border-[#94a3b8] hover:bg-[#f8fafc]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full pt-6 border-t border-[#f1f5f9]">
              
              {/* Box Số lượng */}
              <div className="flex items-center justify-between border-2 border-[#e2e8f0] bg-white rounded-lg px-4 w-full sm:w-32 h-14 shrink-0 shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-[#94a3b8] hover:text-[#0f172a] p-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-base font-bold w-6 text-center text-[#0f172a]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-[#94a3b8] hover:text-[#0f172a] p-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Nút Thêm vào giỏ */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 h-14 flex items-center justify-center rounded-lg text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 w-full border ${
                  isAdded
                    ? "bg-[#059669] border-[#059669] text-white shadow-xl shadow-[#059669]/30"
                    : "bg-[#172554] border-[#172554] text-white hover:bg-[#0f172a] shadow-xl shadow-[#172554]/30"
                }`}
              >
                {isAdded ? "Đã Thêm Vào Giỏ ✓" : "Thêm Vào Giỏ Hàng"}
              </button>
            </div>

            {/* Thông số phụ */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm pt-6 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase">Chất Liệu</span>
                <span className="font-medium text-slate-800">{product.material}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase">Phom Dáng</span>
                <span className="font-medium text-slate-800">{product.fit}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase">Xuất Xứ</span>
                <span className="font-medium text-slate-800">{product.origin}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
