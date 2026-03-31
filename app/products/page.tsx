import React, { Suspense } from "react";
import nextDynamic from "next/dynamic";

const ProductsClient = nextDynamic(() => import("./ProductsClient"), { ssr: false });

export const metadata = {
  title: "Bộ Sưu Tập Sản Phẩm - HUSSIO",
  description: "Khám phá các mẫu áo thun, sơ mi, quần tây nam thiết kế tối giản, sang trọng tại HUSSIO.",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Bắt buộc await searchParams trong Next.js 15+ để tránh lỗi Prerender
  await searchParams;

  return (
    <Suspense 
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium animate-pulse text-sm tracking-widest uppercase">Đang tải sản phẩm...</p>
          </div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}

