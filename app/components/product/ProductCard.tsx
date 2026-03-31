"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/products";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
}

export default function ProductCard({ id, name, price, originalPrice, image, slug }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercent = hasDiscount ? Math.round((1 - price / originalPrice!) * 100) : 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link 
      href={`/products/${slug}`} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50 mb-5 rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {hasDiscount && (
            <span className="bg-rose-500 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-sm shadow-sm">
              -{discountPercent}%
            </span>
          )}
          {!hasDiscount && (
            <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-sm shadow-sm">
              Mới
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-md ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
          aria-label="Add to wishlist"
        >
          <svg
            className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-red-500 stroke-red-500' : 'fill-none stroke-gray-600'}`}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
        </button>

        {/* Quick Add Button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            className="w-full bg-white/95 backdrop-blur-sm text-blue-950 py-3.5 text-xs tracking-widest font-heading font-semibold uppercase rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            Thêm Vào Giỏ
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5 px-1">
        <h3 className="text-sm font-medium text-slate-700 tracking-wide line-clamp-2 group-hover:text-blue-900 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-3">
          <p className="font-heading text-base font-bold text-blue-950">{formatPrice(price)}</p>
          {hasDiscount && (
            <p className="text-xs text-slate-400 line-through font-medium">{formatPrice(originalPrice!)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
