"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/data/products";

export default function CartClient() {
  const { items, updateQuantity, removeFromCart, cartTotal, isMounted } = useCart();

  if (!isMounted) return null;

  if (items.length === 0) {
    return (
      <main className="py-20 min-h-[70vh] bg-slate-50 flex items-center justify-center">
        <div className="container max-w-2xl text-center">
          <div className="bg-white rounded-3xl p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Giỏ hàng của bạn đang trống!</h1>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Có vẻ như bạn chưa chọn được món đồ ưng ý nào. Hãy quay lại cửa hàng để khám phá những bộ sưu tập mới nhất nhé!
            </p>
            <Link 
              href="/products"
              className="inline-flex px-8 py-4 bg-blue-950 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-black transition-colors shadow-lg shadow-blue-950/20"
            >
              Tiếp Tục Mua Sắm
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-blue-950 mb-10 text-center">
          Giỏ Hàng Của Bạn
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* List Sản Phẩm */}
          <div className="w-full lg:w-2/3 space-y-4">
            {items.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                {/* Hình ảnh */}
                <div className="relative w-full md:w-24 aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Thông tin */}
                <div className="flex-1 text-center md:text-left">
                  <Link href={`/products/${item.product.slug}`} className="block">
                    <h3 className="font-bold text-lg text-slate-800 hover:text-blue-600 transition-colors line-clamp-1">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">
                    {item.color} / {item.size}
                  </p>
                  <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                    <span className="text-base font-bold text-blue-950">
                      {formatPrice(item.product.price)}
                    </span>
                  </div>
                </div>

                {/* Số lượng */}
                <div className="flex items-center border border-slate-200 rounded-lg px-2 bg-slate-50/50">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-10 flex items-center justify-center text-slate-400 hover:text-blue-950"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-slate-800">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-10 flex items-center justify-center text-slate-400 hover:text-blue-950"
                  >
                    +
                  </button>
                </div>

                {/* Tổng & Xóa */}
                <div className="flex flex-col items-center md:items-end gap-2 shrink-0 md:min-w-[120px]">
                  <span className="font-bold text-lg text-blue-950">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-bold text-rose-500 hover:text-rose-700 uppercase tracking-widest p-2"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 sticky top-24">
              <h2 className="text-xl font-bold text-blue-950 mb-6 uppercase tracking-widest border-b border-slate-50 pb-4">
                Tóm Tắt Đơn Hàng
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500">
                  <span className="text-sm font-medium">Tạm tính:</span>
                  <span className="font-bold text-slate-800">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span className="text-sm font-medium">Phí vận chuyển:</span>
                  <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Miễn Phí</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-slate-800 uppercase tracking-widest">Tổng Cộng</span>
                  <span className="text-3xl font-bold text-rose-600 tracking-tight">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="block w-full h-14 bg-blue-950 text-white text-center flex items-center justify-center rounded-xl text-sm font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors shadow-xl shadow-blue-950/20"
              >
                Tiến Hành Thanh Toán
              </Link>

              <div className="mt-6 flex flex-col gap-3">
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Đảm bảo thanh toán an toàn 100%
                </p>
                <div className="flex justify-center gap-4 grayscale opacity-50">
                  <div className="text-[10px] font-bold border border-slate-200 px-2 py-1 rounded">VISA</div>
                  <div className="text-[10px] font-bold border border-slate-200 px-2 py-1 rounded">MoMo</div>
                  <div className="text-[10px] font-bold border border-slate-200 px-2 py-1 rounded">MASTER</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
