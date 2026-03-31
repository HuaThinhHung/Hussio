import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2000&auto=format&fit=crop"
              alt="HUSSIO Brand Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 p-6 shadow-xl">
              <p className="text-7xl font-bold text-white">10K+</p>
              <p className="text-2xs text-white tracking-wide">Khách hàng tin dùng</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] tracking-[0.3em] text-gray-400 uppercase mb-4 block">
              Về Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              HUSSIO – Minimal Style, Maximum Confidence
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                HUSSIO là thương hiệu thời trang nam cao cấp, mang đến những thiết kế tối giản nhưng không tầm thường. Chúng tôi tin rằng phong cách đích thực đến từ sự tinh tế trong từng chi tiết.
              </p>
              <p>
                Mỗi sản phẩm HUSSIO được tuyển chọn kỹ lưỡng về chất liệu và hoàn thiện tỉ mỉ về kiểu dáng. Chúng tôi cam kết mang đến cho bạn những trải nghiệm mua sắm tuyệt vời với chất lượng xứng đáng với giá thành.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-gray-200">
              <div>
                <p className="text-2xl font-bold text-gray-900">5+</p>
                <p className="text-xs text-gray-500 mt-1">Năm kinh nghiệm</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-xs text-gray-500 mt-1">Mẫu sản phẩm</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-gray-500 mt-1">Khách hàng hài lòng</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center mt-8 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors tracking-wide group"
            >
              <span>Xem thêm về HUSSIO</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
