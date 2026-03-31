import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { CartProvider } from "@/components/providers/CartProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "HUSSIO – Thời trang nam thanh lịch, tối giản",
  description: "Khám phá bộ sưu tập thời trang nam hiện đại từ HUSSIO. Thiết kế tối giản, chất liệu cao cấp, phong cách thanh lịch. Minimal Style – Maximum Confidence.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HUSSIO – Thời trang nam thanh lịch, tối giản",
    description: "Khám phá bộ sưu tập thời trang nam hiện đại từ HUSSIO. Minimal Style – Maximum Confidence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col">
        <CartProvider>
          <Header />
            <div className="flex-grow">
              {children}
            </div>
          <Footer />
          <FloatingButtons />
        </CartProvider>
      </body>
    </html>
  );
}
