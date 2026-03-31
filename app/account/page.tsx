import React from "react";
import AccountClient from "./AccountClient";

export const metadata = {
  title: "Tài Khoản - HUSSIO",
  description: "Đăng nhập hoặc đăng ký tài khoản HUSSIO để theo dõi đơn hàng và nhận những ưu đãi đặc biệt dành riêng cho thành viên.",
};

export const dynamic = "force-dynamic";

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await searchParams;
  return <AccountClient />;
}
