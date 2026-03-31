"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PromotionBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-black my-16 md:my-20 lg:my-24 justify-center items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,.1) 35px,
            rgba(255,255,255,.1) 70px
          )`
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl w-full flex flex-col items-center gap-10 text-white">
          
          {/* Tag & Title Group */}
          <div className="flex flex-col items-center gap-4">
            <span className="inline-block text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
              Chương Trình Đặc Biệt
            </span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              SALE UP TO
              <span className="block text-6xl md:text-7xl lg:text-8xl mt-4 text-rose-500 drop-shadow-[0_0_30px_rgba(244,63,94,0.3)]">50%</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Khuyến mãi khai trương độc quyền. Áp dụng cho dòng sản phẩm áo sơ mi và quần âu nam cao cấp toàn quốc.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full mt-4">
            {[
              { value: timeLeft.days, label: "Ngày" },
              { value: timeLeft.hours, label: "Giờ" },
              { value: timeLeft.minutes, label: "Phút" },
              { value: timeLeft.seconds, label: "Giây" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
                    <span className="font-heading text-4xl md:text-5xl font-bold text-white">
                      {formatNumber(item.value)}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 mt-4 uppercase">
                    {item.label}
                  </span>
                </div>
                {index < 3 && (
                  <span className="text-3xl md:text-5xl font-light text-white/30 self-start mt-4 md:mt-8">:</span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-4">
            <Link
              href="/products?sale=true"
              className="w-full sm:w-60 flex items-center justify-center bg-white text-blue-950 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-slate-200 transition-colors shadow-xl"
            >
              MUA NGAY
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-60 flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-white hover:text-blue-950 transition-colors"
            >
              KHÁM PHÁ
            </Link>
          </div>

          {/* Note */}
          <p className="text-slate-500 text-[11px] font-medium tracking-wide">
            * Điều kiện áp dụng tại cửa hàng HUSSIO
          </p>
        </div>
      </div>
    </section>
  );
}
