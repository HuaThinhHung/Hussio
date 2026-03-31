"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/data/products";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, cartTotal, isMounted, clearCart } = useCart();
  
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    note: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"cod" | "momo" | "bank">("cod");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
      return;
    }
    
    // Giả lập đặt hàng thành công
    setIsSuccess(true);
    clearCart();
  };

  if (!isClient || !isMounted) return null;

  // Nếu đã đặt hàng thành công
  if (isSuccess) {
    return (
      <main className="py-20 min-h-[80vh] bg-slate-50 flex items-center justify-center">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 text-center">
            
            <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-800 mb-4 font-heading">Đặt Hàng Thành Công!</h1>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Cảm ơn <strong>{formData.fullName}</strong> đã tin tưởng và mua sắm tại HUSSIO.<br/>
              Mã đơn hàng của bạn là <strong>#HUS-{Math.floor(Math.random() * 900000) + 100000}</strong>.
            </p>

            {/* Hiển thị QR Code cho Momo / Banking */}
            {(paymentMethod === "momo" || paymentMethod === "bank") && (
              <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 mb-8 inline-block text-left w-full max-w-sm">
                <div className="flex items-center gap-3 justify-center mb-6">
                  {paymentMethod === "momo" ? (
                    <>
                      <div className="w-10 h-10 bg-[#A50064] rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wider">MoMo</div>
                      <span className="font-bold text-[#A50064]">Thanh toán qua ví MoMo</span>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 bg-[#172554] rounded-lg flex items-center justify-center text-white fill-current">
                        <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm5 0h2v7h-2v-7zm5 0h2v7h-2v-7zM12 2L2 7l1.8 1.474L12 4.093l8.2 4.381L22 7l-10-5z"/></svg>
                      </div>
                      <span className="font-bold text-[#172554]">Chuyển khoản Ngân Hàng</span>
                    </>
                  )}
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center mb-4">
                  <div className="relative w-40 h-40 mx-auto bg-slate-100 rounded-lg overflow-hidden">
                    {/* Placeholder QR Code image */}
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                      alt="QR Code" 
                      fill 
                      className="object-contain opacity-80 mix-blend-multiply p-2"
                    />
                  </div>
                  <p className="text-[11px] font-bold text-slate-400 mt-4 uppercase tracking-widest">Quét mã để thanh toán</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Số tiền:</span>
                    <span className="font-bold text-rose-600">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Nội dung CK:</span>
                    <span className="font-bold text-slate-800">HUS {formData.phone}</span>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "cod" && (
              <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 mb-8 text-sm text-slate-600">
                Đơn hàng sẽ được giao đến địa chỉ: <br/> <strong>{formData.address}</strong> <br/>
                Bạn vui lòng thanh toán <strong>{formatPrice(cartTotal)}</strong> cho người giao hàng (COD).
              </div>
            )}

            <div>
              <Link
                href="/products"
                className="inline-flex px-8 py-4 bg-[#172554] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-black transition-colors shadow-xl shadow-[#172554]/20"
              >
                Tiếp Tục Mua Sắm
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Nếu giỏ hàng trống và chưa tạo đơn thành công, đẩy về giỏ hàng
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Giỏ hàng của bạn đang trống!</h1>
        <Link href="/products" className="text-blue-600 hover:text-blue-800 underline">
          Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-[#172554] mb-10 text-center">
          Thanh Toán
        </h1>

        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-10">
          
          {/* Cột trái: Thông tin giao hàng & Thanh toán */}
          <div className="w-full lg:w-3/5 space-y-8">
            
            {/* Box 1: Thông tin người nhận */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-bold text-[#172554] mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center text-xs">1</span>
                Thông Tin Giao Hàng
              </h2>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Họ và Tên *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ tên của bạn" 
                      className="w-full px-4 h-12 rounded-lg border-2 border-slate-200 outline-none focus:border-[#2563eb] transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Số Điện Thoại *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Số điện thoại nhận hàng" 
                      className="w-full px-4 h-12 rounded-lg border-2 border-slate-200 outline-none focus:border-[#2563eb] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Địa Chỉ Giao Hàng *</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Số nhà, Tên đường, Xã/Phường, Quận/Huyện, Tỉnh/Thành phố" 
                    className="w-full px-4 h-12 rounded-lg border-2 border-slate-200 outline-none focus:border-[#2563eb] transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-slate-500">Ghi Chú Đơn Hàng (Tùy chọn)</label>
                  <textarea 
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder="Ghi chú thêm về đơn hàng (thời gian giao hàng, v.v...)" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 outline-none focus:border-[#2563eb] transition-colors h-24 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Box 2: Phương thức thanh toán */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-bold text-[#172554] mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center text-xs">2</span>
                Phương Thức Thanh Toán
              </h2>
              
              <div className="space-y-4">
                {/* Thanh toán COD */}
                <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#2563eb] bg-[#eff6ff]' : 'border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-[#2563eb]' : 'border-slate-300'}`}>
                      {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-[#2563eb] rounded-full"></div>}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e293b]">Thanh toán khi nhận hàng (COD)</h3>
                      <p className="text-sm text-slate-500 mt-1">Giao hàng và thu tiền tận nơi trên toàn quốc.</p>
                    </div>
                  </div>
                </label>

                {/* Thanh toán Momo */}
                <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'momo' ? 'border-[#A50064] bg-[#fff5fa]' : 'border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'momo' ? 'border-[#A50064]' : 'border-slate-300'}`}>
                      {paymentMethod === 'momo' && <div className="w-2.5 h-2.5 bg-[#A50064] rounded-full"></div>}
                    </div>
                    <div className="w-8 h-8 bg-[#A50064] rounded flex items-center justify-center text-white font-bold text-[8px] tracking-wider shrink-0">MoMo</div>
                    <div>
                      <h3 className="font-bold text-[#1e293b]">Thanh toán qua Ví MoMo</h3>
                      <p className="text-sm text-slate-500 mt-1">Mở ứng dụng Momo và quét mã QR để thanh toán.</p>
                    </div>
                  </div>
                </label>

                {/* Thanh toán Bank */}
                <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-[#2563eb] bg-[#eff6ff]' : 'border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bank' ? 'border-[#2563eb]' : 'border-slate-300'}`}>
                      {paymentMethod === 'bank' && <div className="w-2.5 h-2.5 bg-[#2563eb] rounded-full"></div>}
                    </div>
                    <div className="w-8 h-8 bg-[#172554] rounded flex items-center justify-center text-white fill-current shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm5 0h2v7h-2v-7zm5 0h2v7h-2v-7zM12 2L2 7l1.8 1.474L12 4.093l8.2 4.381L22 7l-10-5z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e293b]">Chuyển Khoản Ngân Hàng</h3>
                      <p className="text-sm text-slate-500 mt-1">Quét mã QR VietQR hoặc copy số tài khoản ngân hàng chuyên dụng.</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Cột phải: Summary */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 sticky top-24">
              <h2 className="text-xl font-bold text-[#172554] mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center text-xs">3</span>
                Chi Tiết Đơn Hàng
              </h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 bg-slate-500 rounded-full text-white text-[9px] font-bold items-center justify-center shadow-lg border-2 border-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-[#1e293b] line-clamp-1">{item.product.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.color} / {item.size}</p>
                    </div>
                    <div className="font-bold text-[#1e293b] text-sm shrink-0 whitespace-nowrap">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-6 space-y-4 mb-8">
                <div className="flex justify-between text-slate-600 text-sm">
                  <span>Tạm tính</span>
                  <span className="font-bold text-slate-900">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600 text-sm">
                  <span>Phí giao hàng</span>
                  <span className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest mt-0.5">Miễn phí</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base font-bold text-slate-800 uppercase tracking-widest">Tổng Cộng</span>
                  <span className="text-3xl font-bold text-rose-600 tracking-tight">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-slate-400">Đã bao gồm VAT (nếu có)</p>
              </div>

              <button 
                type="submit" 
                className="w-full h-14 flex items-center justify-center bg-[#172554] text-white hover:bg-black rounded-lg text-sm font-bold tracking-[0.2em] uppercase transition-colors shadow-xl shadow-[#172554]/20"
              >
                Đặt Hàng Ngay
              </button>

            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
