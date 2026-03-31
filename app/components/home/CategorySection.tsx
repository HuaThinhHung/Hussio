import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";

export default function CategorySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-heading text-xs tracking-widest text-slate-400 uppercase mb-3 block">
            Collections
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-blue-950">
            Khám Phá Bộ Sưu Tập
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 ${
                index === 0 ? "col-span-2 row-span-2 aspect-[4/5]" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-xl md:text-2xl font-bold tracking-wide mb-2 drop-shadow-md">
                  {category.name}
                </h3>
                <span className="flex items-center text-xs font-semibold tracking-widest text-white/80 uppercase group-hover:text-white transition-colors duration-300">
                  Khám phá
                  <svg className="w-4 h-4 ml-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              {/* Hover Overlay Light */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
