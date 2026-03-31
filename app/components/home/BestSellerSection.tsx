import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function BestSellerSection() {
  const bestSellers = products.filter((p) => p.originalPrice).slice(0, 4);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div className="text-white">
            <span className="text-[11px] tracking-[0.3em] text-gray-400 uppercase mb-3 block">
              Bán Chạy
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
          >
            Xem tất cả
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
