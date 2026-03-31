import React from "react";
import SaleClient from "./SaleClient";

export const metadata = {
  title: "Ưu Đãi Đặc Biệt - HUSSIO Men's Fashion",
  description: "Săn ngay các sản phẩm thời trang nam cao cấp với mức giá ưu đãi nhất. Số lượng có hạn!",
};

export const dynamic = "force-dynamic";

export default async function SalePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await searchParams;
  return <SaleClient />;
}
