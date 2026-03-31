import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">
              Câu Chuyện Thương Hiệu
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue-950 mb-8 leading-tight">
              Sự Thanh Lịch <br/><span className="text-slate-400">Tối Giản</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Được thành lập vào năm 2026, HUSSIO ra đời với khát vọng tái định nghĩa chuẩn mực thời trang nam giới. Chúng tôi tin rằng vẻ đẹp thực sự không đến từ sự phô trương, mà bắt nguồn từ những đường cắt may tỉ mỉ, chất liệu cao cấp và một tinh thần tối giản vững chãi.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mỗi sản phẩm của HUSSIO đều là một bản hòa ca giữa sự thanh lịch cổ điển và nét hiện đại của lối sống đô thị năng động.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop"
              alt="Hussio Studio"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-blue-950 mb-6">Giá Trị Cốt Lõi</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Ba kim chỉ nam định hình mọi quyết định và sản phẩm tại HUSSIO.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl text-center border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-950 text-white flex items-center justify-center rounded-2xl mx-auto mb-6 transform rotate-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-blue-950 mb-4">Chất Lượng Vượt Trội</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Sử dụng nguồn vải nhập khẩu cao cấp, kết hợp kĩ thuật may thủ công xuất sắc.</p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl text-center border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-950 text-white flex items-center justify-center rounded-2xl mx-auto mb-6 -rotate-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-blue-950 mb-4">Sự Bền Vững</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Thiết kế Time-less vượt thời gian, giúp bạn mặc trong nhiều năm mà không lỗi mốt.</p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl text-center border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-950 text-white flex items-center justify-center rounded-2xl mx-auto mb-6 rotate-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" /></svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-blue-950 mb-4">Dịch Vụ Tận Tâm</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Trải nghiệm mua sắm tuyệt vời cùng đội ngũ hỗ trợ nhiệt thành 24/7.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
