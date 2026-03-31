export const metadata = {
  title: "Chính Sách Đổi Trả - HUSSIO",
};

export default function ReturnsPolicyPage() {
  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-blue-950 mb-10">Chính Sách Đổi Trả</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Điều kiện hỗ trợ đổi trả</h2>
            <p className="mb-2">Bạn có thể yêu cầu đổi trả sản phẩm trong vòng <strong>30 ngày</strong> kể từ ngày nhận hàng với các điều kiện sau:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sản phẩm còn nguyên trạng, chưa qua sử dụng, chưa giặt ủi, không có mùi lạ và không bị biến dạng.</li>
              <li>Sản phẩm còn đầy đủ tag, nhãn mác, tem niêm phong và hóa đơn mua hàng (bản gốc hoặc điện tử).</li>
              <li>Không áp dụng đổi trả cho các sản phẩm nằm trong chương trình Flash Sale hoặc hàng giảm giá đặc biệt trên 50% (trừ khi có lỗi từ phía nhà sản xuất).</li>
              <li>Không đổi trả đối với đồ lót, quần bơi, vớ (tất), và các loại phụ kiện vì lý do vệ sinh an toàn.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Các trường hợp được đổi mới / hoàn tiền 100%</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sản phẩm giao không đúng màu sắc, kích cỡ, mẫu mã như trên hóa đơn đặt hàng.</li>
              <li>Hàng hóa bị lỗi kỹ thuật, lỗi do quá trình sản xuất (tuột chỉ, ố màu, xước rách vải...).</li>
              <li>Sản phẩm bị hỏng hóc nghiêm trọng trong quá trình vận chuyển.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Quy trình thực hiện đổi trả</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Bước 1:</strong> Khách hàng liên hệ với bộ phận CSKH qua Hotline <a href="tel:0900000000" className="text-blue-600 font-bold">0900 000 000</a> hoặc Fanpage để thông báo yêu cầu đổi trả kèm hình ảnh/video sản phẩm.</li>
              <li><strong>Bước 2:</strong> Chờ nhân viên xác nhận tình trạng đơn hàng và cung cấp địa chỉ gửi trả.</li>
              <li><strong>Bước 3:</strong> Đóng gói sản phẩm cẩn thận, gửi qua bưu điện hoặc đơn vị vận chuyển về cho kho HUSSIO.</li>
              <li><strong>Bước 4:</strong> HUSSIO tiến hành kiểm tra kho và xác nhận việc sản phẩm còn nguyên vẹn. Món đồ mới hoặc chi phí hoàn tiền sẽ được giải ngân trong vòng 3-5 ngày làm việc.</li>
            </ol>
            <div className="mt-4 p-4 bg-rose-50 border-l-4 border-rose-600 rounded">
              <strong>Chi phí vận chuyển đổi trả:</strong> HUSSIO sẽ chịu 100% cước phí giao nhận nếu lỗi thuộc về HUSSIO. Tuy nhiên, nếu quý khách đổi size, màu sắc theo mong muốn cá nhân, phí ship 2 chiều sẽ do quý khách thanh toán.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
