export const metadata = {
  title: "Chính Sách Vận Chuyển - HUSSIO",
};

export default function ShippingPolicyPage() {
  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-blue-950 mb-10">Chính Sách Vận Chuyển</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Vận chuyển toàn quốc</h2>
            <p>
              HUSSIO hợp tác cùng các đối tác giao hàng uy tín như Giao Hàng Tiết Kiệm, Giao Hàng Nhanh, Viettel Post để mang đến dịch vụ vận chuyển tốt nhất và an toàn nhất cho khách hàng trên toàn lãnh thổ Việt Nam.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Đồng giá phí vận chuyển</h2>
            <p className="mb-2">Chúng tôi áp dụng các mức phí vận chuyển dựa trên khu vực:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nội thành TP. Hồ Chí Minh & Hà Nội:</strong> 20.000 VNĐ / Đơn hàng.</li>
              <li><strong>Ngoại thành và các Tỉnh/Thành khác:</strong> 30.000 VNĐ / Đơn hàng.</li>
              <li><strong>Miễn phí vận chuyển (Freeship):</strong> Áp dụng cho mọi đơn hàng có tổng trị giá thanh toán từ 500.000 VNĐ trở lên.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Thời gian giao hàng dự kiến</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Khu vực nội thành TP.HCM và Hà Nội: 1 - 2 ngày làm việc.</li>
              <li>Khu vực ngoại thành và các Tỉnh trung tâm: 2 - 4 ngày làm việc.</li>
              <li>Khu vực Huyện/Xã vùng sâu vùng xa: 3 - 6 ngày làm việc.</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
              <strong>Lưu ý:</strong> Thời gian trên là dự kiến, có thể thay đổi do yếu tố thời tiết, thiên tai hoặc các dịp lễ Tết, chiến dịch siêu sale đặc biệt.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">4. Kiểm tra hàng trước khi nhận</h2>
            <p>
              Nhằm đảm bảo quyền lợi tối đa, HUSSIO luôn hỗ trợ khách hàng được <strong>Xem và Kiểm tra</strong> sản phẩm trước khi thanh toán. Vui lòng quay video lại quá trình mở hộp (unboxing) để làm cơ sở đối chiếu nếu có vấn đề về sau.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
