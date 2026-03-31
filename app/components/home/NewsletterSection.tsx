"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-blue-950">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8">
            <svg className="w-12 h-12 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Đăng Ký Nhận Ưu Đãi
          </h2>
          <p className="text-slate-300 mb-8">
            Nhận ngay 10% giảm giá cho đơn hàng đầu tiên và cập nhật những ưu đãi độc quyền từ HUSSIO.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <svg className="w-12 h-12 mx-auto text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white font-medium">Cảm ơn bạn đã đăng ký!</p>
              <p className="text-gray-400 text-sm mt-2">Chúng tôi sẽ gửi ưu đãi đến email của bạn sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                required
                className="flex-1 px-6 py-4 bg-white/10 text-white placeholder-gray-500 border border-white/20 rounded-none focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-950 text-xs tracking-widest font-heading font-medium hover:bg-slate-200 transition-colors"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-gray-600 text-xs mt-6">
            Bằng việc đăng ký, bạn đồng ý với{" "}
            <a href="#" className="text-gray-400 hover:text-white underline">Chính sách bảo mật</a>
            {" "}của chúng tôi.
          </p>
        </div>
      </div>
    </section>
  );
}
