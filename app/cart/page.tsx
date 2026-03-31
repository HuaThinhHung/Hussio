"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, isMounted } = useCart();

  if (!isMounted) return null; // Tránh hydration mismatch do localStorage

  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-blue-950 mb-4">
            Giỏ Hàng Của Bạn
          </h1>
          {items.length > 0 && (
            <p className="text-slate-500 font-medium">Bạn có {items.length} món trong giỏ hàng</p>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-100 shadow-xl shadow-slate-200/50 max-w-2xl mx-auto">
            <svg className="w-20 h-20 text-slate-200 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Giỏ hàng trống</h2>
            <p className="text-slate-500 mb-8">Hiện chưa có sản phẩm nào trong giỏ hàng của bạn. Hãy dạo quanh cửa hàng và chọn những món đồ ưng ý nhé!</p>
            <Link 
              href="/products"
              className="inline-flex px-8 py-4 bg-blue-950 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-blue-900 transition-colors shadow-lg shadow-blue-950/20"
            >
              Tiếp Tục Mua Sắm
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* List Hàng Hóa */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                
                {/* Header Dòng ẩn trên mobile */}
                <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_auto] gap-4 px-8 py-4 bg-slate-50 border-b border-slate-100 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                  <div>Sản Phẩm</div>
                  <div className="text-center">Số Lượng</div>
                  <div className="text-right">Tổng Tiền</div>
                  <div className="w-8"></div>
                </div>

                {/* Items */}
                <div className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_auto] gap-6 items-center px-4 py-6 md:p-8">
                      
                      {/* Cột SP */}
                      <div className="flex gap-4 items-center">
                        <Link href={`/products/${item.product.slug}`} className="shrink-0">
                          <div className="relative w-20 h-24 sm:w-24 sm:h-32 rounded-xl bg-slate-100 overflow-hidden">
                            <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                          </div>
                        </Link>
                        <div className="flex flex-col justify-center">
                          <Link href={`/products/${item.product.slug}`}>
                            <h3 className="font-bold text-sm sm:text-base text-blue-950 hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                              {item.product.name}
                            </h3>
                          </Link>
                          <div className="flex flex-col text-xs font-medium text-slate-500 mb-2 gap-1">
                            <span>Phân loại: {item.color} | {item.size}</span>
                          </div>
                          <span className="font-bold text-slate-900">{formatPrice(item.product.price)}</span>
                        </div>
                      </div>

                      {/* Cột SL */}
                      <div className="flex justify-start md:justify-center">
                        <div className="flex items-center justify-between border-2 border-slate-200 rounded-lg px-2 w-28 h-10">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-slate-400 hover:text-blue-950 p-1"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                          </button>
                          <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-slate-400 hover:text-blue-950 p-1"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* Cột Tổng Tiền Món */}
                      <div className="hidden md:block text-right font-bold text-blue-950">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>

                      {/* Nút Xóa */}
                      <div className="absolute right-4 top-4 md:relative md:right-0 md:top-0">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                          title="Xóa món này"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 sticky top-24">
                <h3 className="font-heading text-xl font-bold text-blue-950 mb-6 uppercase tracking-wider">
                  Tóm Tắt Đơn Hàng
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-600 text-sm">
                    <span>Tạm tính</span>
                    <span className="font-bold text-slate-900">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 text-sm">
                    <span>Phí giao hàng</span>
                    <span className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest mt-0.5">Miễn phí</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6 mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-bold text-slate-800 uppercase tracking-widest">Tổng Cộng</span>
                    <span className="text-2xl font-bold text-rose-600">{formatPrice(cartTotal)}</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Đã bao gồm VAT (nếu có)</p>
                </div>

                <Link 
                  href="/checkout"
                  className="w-full flex items-center justify-center bg-blue-950 text-white hover:bg-black py-4 rounded-lg text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-xl shadow-blue-950/20"
                >
                  Tiến Hành Thanh Toán
                </Link>

                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-100 pt-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Thanh Toán An Toàn
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
