export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "ao-thun" | "ao-so-mi" | "quan" | "outerwear" | "phu-kien";
  description: string;
  material: string;
  fit: string;
  colors: string[];
  origin: string;
  sizes: string[];
  slug: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Áo Thun Nam Basic HUSSIO",
    price: 450000,
    image: "/images/categories/Tee-Shirts/1.jpg",
    category: "ao-thun",
    description: "Áo thun nam HUSSIO được thiết kế theo phong cách tối giản với form dáng hiện đại, dễ dàng phối cùng nhiều trang phục khác nhau. Chất liệu cotton cao cấp mang lại cảm giác thoải mái, thoáng mát suốt cả ngày.",
    material: "Cotton 100%",
    fit: "Regular fit",
    colors: ["Đen", "Trắng", "Beige"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slug: "ao-thun-nam-basic-hussio",
  },
  {
    id: 2,
    name: "Áo Sơ Mi Oxford Premium",
    price: 890000,
    originalPrice: 1190000,
    image: "/images/categories/Shirts/1.jpg",
    category: "ao-so-mi",
    description: "Áo sơ mi oxford cao cấp từ HUSSIO, thiết kế thanh lịch phù hợp cho mọi hoàn cảnh. Chất vải cotton oxford mềm mại, thoáng khí, giữ form tốt sau nhiều lần giặt.",
    material: "Cotton Oxford",
    fit: "Slim fit",
    colors: ["Trắng", "Xanh Navy", "Be"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL"],
    slug: "ao-so-mi-oxford-premium",
  },
  {
    id: 3,
    name: "Áo Polo Classic HUSSIO",
    price: 690000,
    image: "/images/categories/Tee-Shirts/2.jpg",
    category: "ao-so-mi",
    description: "Áo polo classic với chất liệu pique cotton cao cấp, thoáng mát và phong cách. Thiết kế đơn giản nhưng tinh tế, dễ dàng phối với quần jeans hoặc quần âu.",
    material: "Pique Cotton",
    fit: "Regular fit",
    colors: ["Đen", "Xanh Navy", "Trắng"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slug: "ao-polo-classic-hussio",
  },
  {
    id: 4,
    name: "Áo Sơ Mi",
    price: 1290000,
    originalPrice: 1590000,
    image: "/images/categories/Shirts/2.jpg",
    category: "quan",
    description: "Quần jeans slim fit co giãn nhẹ, form dáng ôm gọn phù hợp mọi phong cách. Chất vải denim cao cấp, bền màu, thoáng khí.",
    material: "Denim Cotton",
    fit: "Slim fit",
    colors: ["Xanh đậm", "Xanh nhạt", "Đen"],
    origin: "Việt Nam",
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    slug: "Áo Sơ Mi",
  },
  {
    id: 5,
    name: "Quần Âu Slim HUSSIO",
    price: 1490000,
    image: "/images/categories/Shorts/1.jpg",
    category: "quan",
    description: "Quần âu slim fit vải wool blend cao cấp, phù hợp cho dân văn phòng và những dịp đặc biệt. Form dáng chuẩn, ôm vừa vặn từ eo đến đầu gối.",
    material: "Wool Blend",
    fit: "Slim fit",
    colors: ["Đen", "Xám", "Nâu"],
    origin: "Việt Nam",
    sizes: ["28", "29", "30", "31", "32", "33", "34", "36"],
    slug: "quan-au-slim-hussio",
  },
  {
    id: 6,
    name: "Quần Short Chino",
    price: 790000,
    image: "/images/categories/Shorts/2.jpg",
    category: "quan",
    description: "Quần short chino mùa hè, chất liệu cotton thoáng mát, thoải mái trong mọi hoạt động. Thiết kế tối giản với form dáng vừa vặn.",
    material: "Cotton 100%",
    fit: "Regular fit",
    colors: ["Be", "Xanh Navy", "Khaki"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL"],
    slug: "quan-short-chino",
  },
  {
    id: 7,
    name: "Áo Khoác Blazer Premium",
    price: 2590000,
    originalPrice: 2990000,
    image: "/images/categories/Shirts/3.jpg",
    category: "outerwear",
    description: "Blazer wool blend form slim, phù hợp cho những dịp đặc biệt. Thiết kế thanh lịch với form dáng ôm vừa, tôn dáng người mặc.",
    material: "Wool Blend",
    fit: "Slim fit",
    colors: ["Đen", "Xám", "Nâu"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL"],
    slug: "ao-khoac-blazer-premium",
  },
  {
    id: 8,
    name: "Áo Khoác Denim Jacket",
    price: 1590000,
    image: "/images/categories/Shirts/1.jpg",
    category: "outerwear",
    description: "Áo khoác denim jacket phong cách, có thể phối với nhiều trang phục khác nhau. Chất liệu denim bền bỉ, sau thời gian sử dụng sẽ càng mềm mại và đẹp hơn.",
    material: "Denim Cotton",
    fit: "Regular fit",
    colors: ["Xanh đậm", "Xanh nhạt"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL"],
    slug: "ao-khoac-denim-jacket",
  },
  {
    id: 9,
    name: "Thắt Lưng Da Cao Cấp",
    price: 690000,
    originalPrice: 890000,
    image: "/images/categories/Shirts/2.jpg",
    category: "phu-kien",
    description: "Thắt lưng da bò genuine cao cấp, khóa kim loại cao cấp, đường chỉ tỉ mỉ. Thiết kế thanh lịch phù hợp với mọi trang phục.",
    material: "Da bò genuine",
    fit: "One Size",
    colors: ["Đen", "Nâu"],
    origin: "Việt Nam",
    sizes: ["32-34", "36-38", "40-42"],
    slug: "that-lung-da-cao-cap",
  },
  {
    id: 10,
    name: "Ví Da Nam Slim Card Holder",
    price: 550000,
    image: "/images/categories/Tee-Shirts/2.jpg",
    category: "phu-kien",
    description: "Ví da slim card holder, thiết kế tối giản, tiện dụng. Có thể đựng nhiều thẻ và tiền mặt một cách gọn gàng.",
    material: "Da tổng hợp cao cấp",
    fit: "One Size",
    colors: ["Đen", "Nâu", "Xanh Navy"],
    origin: "Việt Nam",
    sizes: ["One Size"],
    slug: "vi-da-nam-slim",
  },
  {
    id: 11,
    name: "Cà Vạt Lụa Cao Cấp",
    price: 390000,
    image: "/images/categories/Tee-Shirts/3.jpg",
    category: "phu-kien",
    description: "Cà vạt lụa cao cấp, hoàn thiện cho bộ vest hoàn hảo. Thiết kế thanh lịch với hoa văn tinh tế.",
    material: "Lụa cao cấp",
    fit: "One Size",
    colors: ["Đỏ", "Xanh Navy", "Đen"],
    origin: "Việt Nam",
    sizes: ["One Size"],
    slug: "ca-vat-lua",
  },
  {
    id: 12,
    name: "Áo Len Cashmere Cao Cấp",
    price: 1890000,
    originalPrice: 2290000,
    image: "/images/categories/Tee-Shirts/1.jpg",
    category: "ao-thun",
    description: "Áo len cashmere cao cấp, mềm mại và ấm áp. Thiết kế tối giản với form dáng vừa vặn, dễ dàng phối với quần jeans hoặc quần âu.",
    material: "Cashmere Blend",
    fit: "Regular fit",
    colors: ["Be", "Xám", "Nâu", "Đen"],
    origin: "Việt Nam",
    sizes: ["S", "M", "L", "XL"],
    slug: "ao-len-cashmere",
  },
];

export const categories = [
  { 
    id: "ao-thun", 
    name: "Áo Thun", 
    slug: "ao-thun", 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop" 
  },
  { 
    id: "ao-so-mi", 
    name: "Áo Sơ Mi", 
    slug: "ao-so-mi", 
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop" 
  },
  { 
    id: "quan", 
    name: "Quần", 
    slug: "quan", 
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop" 
  },
  { 
    id: "outerwear", 
    name: "Áo Khoác", 
    slug: "outerwear", 
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop" 
  },
  { 
    id: "phu-kien", 
    name: "Phụ Kiện", 
    slug: "phu-kien", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop" 
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
