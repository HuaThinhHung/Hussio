import React from "react";
import CartClient from "./CartClient";

export const metadata = {
  title: "Giỏ hàng của bạn - HUSSIO",
  description: "Kiểm tra lại giỏ hàng và tiến hành thanh toán các sản phẩm thời trang nam cao cấp từ HUSSIO.",
};

export default function CartPage() {
  return <CartClient />;
}
