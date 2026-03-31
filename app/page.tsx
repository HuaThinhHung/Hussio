import HeroBanner from "@/components/home/HeroBanner";
import ValuesSection from "@/components/home/ValuesSection";
import CategorySection from "@/components/home/CategorySection";
import ProductList from "@/components/home/ProductList";
import BestSellerSection from "@/components/home/BestSellerSection";
import PromotionBanner from "@/components/home/PromotionBanner";
import BrandStory from "@/components/home/BrandStory";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <ValuesSection />
      <CategorySection />
      <ProductList />
      <BestSellerSection />
      <PromotionBanner />
      <BrandStory />
      <BlogSection />
    </main>
  );
}

export const metadata = {
  title: "HUSSIO – Thời trang nam thanh lịch, tối giản",
  description: "Khám phá bộ sưu tập thời trang nam hiện đại từ HUSSIO. Thiết kế tối giản, chất liệu cao cấp, phong cách thanh lịch. Minimal Style – Maximum Confidence.",
};
