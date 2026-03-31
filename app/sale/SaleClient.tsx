"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, formatPrice, Product } from "@/data/products";

export default function SaleClient() {
  // Get only sale products
  const saleProducts = useMemo(() => {
    return products.filter((p) => p.originalPrice && p.originalPrice > p.price);
  }, []);

  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container">
        
        {/* Banner */}
        <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden mb-12 flex items-center justify-center bg-black">
          <div className="absolute inset-0 bg-rose-600/20" />
          <div className="relative z-10 text-center text-white p-6">
            <span className="inline-block text-[11px] font-bold tracking-[0.5em] text-rose-300 uppercase mb-4">
              Thời điểm vàng
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
              SPECIAL OFFERS
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              Sở hữu ngay các item thời trang nam cao cấp từ HUSSIO với mức giá ưu đãi nhất.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  );
}

// Inline Product Card for encapsulation
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isSale && (
            <span className="bg-rose-600 text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">
              SALE
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
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading font-bold text-base text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-4">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-3">
          <span className="text-base font-bold text-rose-600">
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
