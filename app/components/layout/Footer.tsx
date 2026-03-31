import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-300 w-full overflow-hidden">
      
      {/* 1. Newsletter Band (Dải Đăng Ký Trải Vuông) */}
      <div className="border-b border-white/10 bg-slate-900/10">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="text-center lg:text-left flex-shrink-0">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Đăng Ký Nhận Ưu Đãi
              </h2>
              <p className="text-sm text-slate-400">
                Nhập email để nhận ngay voucher <span className="text-white font-semibold">giảm 10%</span> cho đơn hàng đầu tiên.
              </p>
            </div>
            <form className="flex w-full lg:max-w-md shadow-lg rounded-xl overflow-hidden ring-1 ring-white/10 focus-within:ring-white/30 transition-shadow">
              <input
                type="email"
                placeholder="Địa chỉ Email của bạn..."
                className="flex-1 px-6 py-4 bg-white/5 text-white placeholder-slate-500 focus:outline-none text-sm font-medium"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-950 font-heading text-sm font-bold tracking-widest uppercase hover:bg-slate-200 transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Mega Footer Area (Lưới Tổ Hợp A-Z) */}
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Cột 1: Brand & Socials (Col 3/12) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-5 mb-6 group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 group-hover:ring-white/40 transition-all shadow-xl">
                <img
                  src="/images/logo/645265334_1265111762418089_6326151000032835882_n.jpg"
                  alt="HUSSIO Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-heading text-3xl lg:text-4xl block font-bold tracking-[0.2em] text-white group-hover:text-slate-200 transition-colors">
                  HUSSIO
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1 font-semibold">
                  Men's Fashion
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm">
              Tự hào mang đến phong cách thời trang nam tối giản, thanh lịch và cá tính. Minimal Style – Maximum Confidence.
            </p>
            
            {/* Social Icons (SVG Stroke - Xịn Sò) */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/hussio" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white hover:text-blue-950 transition-all text-white hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com/hussio.official" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white hover:text-blue-950 transition-all text-white hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white hover:text-blue-950 transition-all text-white hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Cột 2: Shopping Links (Col 2/12) */}
          <div className="lg:col-span-2 lg:col-start-4 text-center md:text-left">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-rose-500 rounded-sm"></span> MUA SẮM
            </h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Tất Cả Sản Phẩm</Link></li>
              <li><Link href="/products?category=ao-thun" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Áo Thun Cao Cấp</Link></li>
              <li><Link href="/products?category=ao-so-mi" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Áo Sơ Mi Thanh Lịch</Link></li>
              <li><Link href="/products?category=quan" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Quần Nam</Link></li>
              <li><Link href="/products?category=outerwear" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Áo Khoác</Link></li>
            </ul>
          </div>

          {/* Cột 3: Support Links (Col 2/12) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-sm"></span> HỖ TRỢ
            </h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Về Thương Hiệu</Link></li>
              <li><Link href="/contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Gửi Yêu Cầu</Link></li>
              <li><Link href="/shipping" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Chính Sách Vận Chuyển</Link></li>
              <li><Link href="/returns" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Hướng Dẫn Đổi Trả</Link></li>
              <li><Link href="/faq" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Câu Hỏi Thường Gặp</Link></li>
            </ul>
          </div>

          {/* Cột 4: Lõi Khách Hàng - Contact & Map (Col 5/12) */}
          <div className="lg:col-span-5 rounded-2xl p-6 lg:p-8">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6 pb-4">
              LIÊN HỆ & BẢN ĐỒ
            </h4>
            
            <ul className="space-y-5 mb-8">
              {/* Vị trí */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div className="text-sm text-slate-400 leading-relaxed">
                  <span className="block text-white font-medium mb-1">Cửa Hàng Trưng Bày Flagship HCM</span>
                  123 Đường Fashion, Quận 1, Tp. Hồ Chí Minh
                </div>
              </li>

              {/* Điện Thoại */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div className="text-sm text-slate-400">
                  <span className="text-white font-semibold tracking-wide">0900 123 456</span>
                  <span className="text-xs ml-3 text-slate-500 font-medium">(Mở cửa 9:00 - 22:00)</span>
                </div>
              </li>
              
              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div className="text-sm text-slate-400">
                  <a href="mailto:support@hussio.vn" className="hover:text-white transition-colors">support@hussio.vn</a>
                </div>
              </li>
            </ul>

            {/* Bản Đồ Cao Cấp (Grayscale CSS) */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900 shadow-inner group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.300588825128!2d106.6917631!3d10.786377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48ef5352c3%3A0x633dcbdd61ab7758!2sNotre%20Dame%20Cathedral%20of%20Saigon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-50 block group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out cursor-pointer"
                title="Bản đồ đường đi"
              />
              {/* Lớp Kính Hiệu Ứng Phủ (Để giữ map chìm ở trạng thái nghỉ) */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl" />
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Copyright & Payment Badges */}
      <div className="border-t border-slate-800 bg-black/30">
        <div className="container py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <Link href="/privacy" className="hover:text-white transition-colors">Bảo Mật</Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Điều Khoản DV</Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span>© 2026 HUSSIO MENSWEAR</span>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold tracking-wider text-white">VISA</div>
            <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold tracking-wider text-white">MASTERCARD</div>
            <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold tracking-wider text-white">COD</div>
          </div>

        </div>
      </div>

    </footer>
  );
}
