"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-[80vh]">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">
            Đội Ngũ CSKH
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-blue-950 mb-6">Liên Hệ HUSSIO</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn. Vui lòng điền thông tin bên dưới hoặc gọi qua hotline.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {/* Thông Tin Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Trụ Sở Chính</h3>
              <p className="font-medium text-slate-800 text-lg leading-snug">
                123 Đường Fashion, Quận 1,<br />
                TP. Hồ Chí Minh, Việt Nam
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Điện Thoại</h3>
              <p className="font-medium text-blue-600 text-xl">0900 000 000</p>
              <p className="text-sm text-slate-500 mt-2">Từ 8:00 - 22:00 Hàng ngày</p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Thư Điện Tử</h3>
              <p className="font-medium text-slate-800 text-base">support@hussio.vn</p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Gửi Thành Công!</h3>
                <p className="text-slate-500">Cảm ơn bạn đã liên hệ. Đội ngũ HUSSIO sẽ phản hồi qua email trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Tên của bạn</label>
                    <input
                      required
                      type="text"
                      className="px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Email của bạn</label>
                    <input
                      required
                      type="email"
                      className="px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Tiêu đề</label>
                  <input
                    required
                    type="text"
                    className="px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Nội dung tin nhắn</label>
                  <textarea
                    required
                    rows={5}
                    className="px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto self-end bg-blue-950 text-white px-10 py-4 rounded-lg text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors shadow-xl shadow-blue-950/20"
                >
                  Gửi Tin Nhắn Yêu Cầu
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
