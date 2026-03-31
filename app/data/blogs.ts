export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "5-cach-phoi-do-voi-ao-thun-nam-mua-he",
    title: "5 Cách Phối Đồ Với Áo Thun Nam Mùa Hè Cực Chất",
    excerpt: "Khám phá những cách phối đồ sáng tạo với áo thun để tạo nên phong cách riêng biệt cho mỗi ngày.",
    content: `Áo thun là món đồ không thể thiếu trong tủ đồ của bất kỳ chàng trai nào. Với sự đa dạng về màu sắc và kiểu dáng, áo thun mang lại sự thoải mái và tự tin cho người mặc.

**1. Áo Thun Trắng + Quần Jeans Basic:**
Đây là sự kết hợp kinh điển và không bao giờ lỗi thời. Áo thun trắng mang lại sự trẻ trung, năng động, trong khi quần jeans tôn lên dáng vẻ khỏe khoắn.

**2. Phối cùng Quần Kaki (Chino):**
Khi bạn cần một phong cách lịch sự hơn một chút nhưng vẫn thoải mái, quần Kaki kết hợp với áo thun sẽ là lựa chọn tuyệt vời.

**3. Layering với Áo Khoác Sơ Mi (Overshirt):**
Khoác thêm một chiếc áo sơ mi dáng rộng bên ngoài áo thun không chỉ giúp bạn tránh nắng mà còn tăng thêm chiều sâu cho trang phục.

Lựa chọn áo thun tại HUSSIO để đảm bảo chất liệu thoáng mát và độ bền vượt trội.`,
    date: "28/03/2026",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    category: "Phong Cách",
    readTime: "5 phút",
  },
  {
    id: 2,
    slug: "huong-dan-chon-size-quan-au",
    title: "Hướng Dẫn Chọn Size Quần Âu Chuẩn Xác",
    excerpt: "Bí quyết chọn size quần âu vừa vặn, thoải mái và phù hợp với vóc dáng của bạn.",
    content: `Việc chọn đúng size quần âu quyết định 80% sự thành công của một diện mạo lịch lãm.

**Cách đo vòng bụng (Đai quần):**
Sử dụng thước dây đo quanh vòng bụng tại vị trí ngay dưới rốn. Nếu số đo của bạn nằm giữa hai kích cỡ, hãy ưu tiên chọn kích cỡ lớn hơn để có thể sửa đổi khi cần.

**Đo chiều dài (Inseam):**
Đo từ đáy quần đến mắt cá chân. Quần âu chuẩn thường gấu quần sẽ chạm nhẹ vào phần trên của giày.

**Kiểu dáng (Fit):**
Dáng Slim Fit ôm vừa phải dọc theo chân, mang lại nét trẻ trung. Dáng Regular Fit thì thoải mái và mang tính cổ điển cao hơn.

Tại HUSSIO, mỗi sản phẩm đều đi kèm với bảng hướng dẫn đo size chi tiết, giúp bạn dễ dàng chọn được chiếc quần ưng ý.`,
    date: "25/03/2026",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop",
    category: "Hướng Dẫn",
    readTime: "6 phút",
  },
  {
    id: 3,
    slug: "xu-huong-thoi-trang-nam-2026",
    title: "Xu Hướng Thời Trang Nam Năm 2026",
    excerpt: "Cập nhật những xu hướng thời trang mới nhất của thập kỷ, hướng đến sự bền vững và tối giản.",
    content: `Năm 2026 đánh dấu sự lên ngôi của phong cách Tối giản thông minh (Smart Minimalism). Không còn sự phô trương của logo to bản, thời trang nam dần trở về với cốt lõi của chất lượng vật liệu và phom dáng cắt may tỉ mỉ.

**1. Chất Liệu Thân Thiện:**
Ngày càng nhiều chàng trai quan tâm đến nguồn gốc của các loại vật liệu. Vải lanh (Linen), Cotton hữu cơ và các chất liệu tái chế lên ngôi.

**2. Bảng Màu Yên Bình (Earth Tones):**
Thay vì màu sắc sặc sỡ, những gam màu tự nhiên như màu be (beige), xanh rêu (olive), và xám đá (slate grey) sẽ thống trị các bộ sưu tập.

Đây chính là giá trị mà HUSSIO đang theo đuổi: "Thời trang bền vững, vẻ đẹp vượt thời gian."`,
    date: "22/03/2026",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop",
    category: "Xu Hướng",
    readTime: "4 phút",
  },
  {
    id: 4,
    slug: "bi-quyet-giu-quan-ao-luon-moi",
    title: "Bí Quyết Giữ Quần Áo Luôn Bền Màu & Sạch Đẹp",
    excerpt: "Những thói quen đơn giản giúp tủ đồ của bạn luôn y như mới dù đã qua sử dụng nhiều năm.",
    content: `Sở hữu trang phục đẹp chỉ là nửa đầu của câu chuyện; giữ chúng luôn mới là nửa còn lại.

Hầu hết chúng ta đều có thói quen quăng ngay quần áo vào máy giặt. Tuy nhiên, để vải không bị xù lông và giữ màu sắc:
- Luôn lộn trái quần áo trước khi giặt.
- Giặt bằng nước lạnh thay vì nước nóng.
- Phơi tại bóng râm có gió nhẹ thay vì phơi trực tiếp dưới ánh nắng mặt trời gắt gao.

Để quần áo phẳng phiu, hãy cố gắng dùng bàn ủi hơi nước thay vì bàn ủi nhiệt độ phẳng, sẽ giúp các sợi vải được phục hồi lại hình dáng ban đầu.`,
    date: "10/03/2026",
    image: "https://images.unsplash.com/photo-1489987707023-afc232f7e4f6?w=800&auto=format&fit=crop",
    category: "Mẹo Vặt",
    readTime: "3 phút",
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogs.find((p) => p.slug === slug);
}
