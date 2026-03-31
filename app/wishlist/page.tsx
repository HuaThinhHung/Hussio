"use client";

import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="py-20 min-h-[70vh] bg-slate-50 flex items-center justify-center">
      <div className="container max-w-2xl">
        <div className="bg-white rounded-3xl p-16 text-center border border-slate-100 shadow-xl shadow-slate-200/50">
          <svg className="w-20 h-20 text-rose-200 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Danh Sách Yêu Thích Trống</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Bạn chưa lưu sản phẩm nào vào danh sách yêu thích. Hãy quay lại cửa hàng, tìm kiếm những món đồ bạn thích và thả tim nhé!
          </p>
          <Link 
            href="/products"
            className="inline-flex px-8 py-4 bg-blue-950 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-rose-600 transition-colors shadow-lg shadow-blue-950/20"
          >
            Khám Phá Sản Phẩm
          </Link>
        </div>
      </div>
    </main>
  );
}
