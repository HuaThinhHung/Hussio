"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/banner/banner-1.jpg",
    title: "SPRING COLLECTION 2026",
    subtitle: "Minimal Style – Maximum Confidence",
    cta: "MUA NGAY",
    href: "/products",
  },
  {
    id: 2,
    image: "/images/banner/banner-2.jpg",
    title: "NEW ARRIVALS",
    subtitle: "Khám phá bộ sưu tập mới nhất",
    cta: "KHÁM PHÁ",
    href: "/products?category=ao-so-mi",
  },
  {
    id: 3,
    image: "/images/banner/banner-3.jpg",
    title: "PREMIUM FORMAL",
    subtitle: "Lịch lãm trong từng chi tiết",
    cta: "XEM NGAY",
    href: "/products?category=quan",
  },
  {
    id: 4,
    image: "/images/banner/banner-4.jpg",
    title: "BLACK FRIDAY",
    subtitle: "Giảm giá đến 50%",
    cta: "MUA NGAY",
    href: "/products?sale=true",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 400);
    },
    [currentSlide, isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 mb-16 md:mb-20 lg:mb-24">
      {/* Slider Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9] max-h-[600px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlay - Gradient tối hơn bên trái */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        {/* Content - Căn trái */}
        <div
          className={`absolute inset-0 z-20 flex items-center transition-all duration-500 ${
            isTransitioning
              ? "opacity-0 translate-x-8"
              : "opacity-100 translate-x-0"
          }`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="max-w-2xl">
                {/* Brand */}
                <p className="font-heading text-xs md:text-sm tracking-[0.3em] text-white/80 mb-4 md:mb-6 font-medium uppercase">
                  HUSSIO
                </p>

                {/* Title */}
                <h1 className="font-heading text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
                  {current.title}
                </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base lg:text-lg text-white/80 mb-8 md:mb-10 font-light">
                {current.subtitle}
              </p>

              {/* CTA Button */}
              <Link
                href={current.href}
                className="group relative inline-flex items-center justify-center overflow-hidden px-10 md:px-14 py-4 md:py-5 text-white"
              >
                {/* Background fill effect */}
                <span className="absolute inset-0 w-full h-full bg-blue-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                {/* Text */}
                <span className="relative text-xs tracking-widest font-semibold uppercase group-hover:text-white transition-colors duration-300">
                  {current.cta}
                </span>

                {/* Arrow */}
                <svg
                  className="relative ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-0.5 bg-white"
                  : "w-2 h-0.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
