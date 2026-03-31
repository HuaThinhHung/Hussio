import React from "react";
import CheckoutClient from "./CheckoutClient";

export const metadata = {
  title: "Thanh Toán Đơn Hàng - HUSSIO",
  description: "Hoàn tất đơn hàng của bạn tại HUSSIO. Hỗ trợ thanh toán COD, MoMo và Chuyển khoản ngân hàng nhanh chóng, an toàn.",
};

export const dynamic = "force-dynamic";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await searchParams;
  return <CheckoutClient />;
}
