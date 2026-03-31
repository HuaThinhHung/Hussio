"use client";

import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. Back to Top Button (Nằm cố định phía trên nút Chat) */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 w-12 h-12 bg-[#2563EB] text-white rounded-full shadow-lg shadow-[#2563EB]/40 flex items-center justify-center hover:bg-[#1D4ED8] transition-all duration-500 z-50 ${
          isVisible ? "bottom-24 opacity-100" : "bottom-16 opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      {/* 2. Chat Group (Nằm cố định ở dưới cùng) */}
      <div className="fixed bottom-6 right-6 flex flex-row-reverse items-center gap-3 z-50">
        
        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
            isChatOpen 
              ? "bg-slate-800 text-white scale-90 shadow-lg" 
              : "bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:scale-105 shadow-xl shadow-[#2563EB]/40"
          }`}
          aria-label="Open chat"
        >
          {isChatOpen ? (
            <svg className="w-6 h-6 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          )}
        </button>

        {/* Chat Links (Mở ngang sang trái) */}
        <div
          className={`flex items-center gap-3 transition-all duration-500 origin-right ${
            isChatOpen ? "opacity-100 translate-x-0 scale-x-100" : "opacity-0 translate-x-12 scale-x-75 pointer-events-none"
          }`}
        >
          {/* Zalo */}
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#0068FF] rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all text-white"
            title="Chat Zalo"
          >
            <svg className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm8.689 27.589c-.387.866-1.155 1.411-2.073 1.411h-.001c-.92 0-1.686-.545-2.075-1.411l-1.965-4.357a21.65 21.65 0 01-1.575-5.232h-2v10.5c0 1.379-1.122 2.5-2.5 2.5s-2.5-1.121-2.5-2.5V22.5h-2v10.5c0 1.379-1.122 2.5-2.5 2.5s-2.5-1.121-2.5-2.5v-15c0-.276.224-.5.5-.5s.5.224.5.5v2.5h2v-2.5c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5v7.5h2v-7.5c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5V22.5h2v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v7.589c0 1.657 1.343 3 3 3h1.575c.47 1.902 1.14 3.68 1.965 5.232l-1.965 4.357z"/>
            </svg>
          </a>

          {/* Messenger */}
          <a
            href="https://m.me/hussio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-tr from-[#00A1FF] to-[#FF5280] rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all text-white"
            title="Chat Messenger"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12c0 3.182 1.537 6.042 4.03 7.971l-.987 3.477 3.573-.972C9.81 21.84 10.89 22.5 12 22.5c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/hussio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#1877F2] rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all text-white"
            title="Facebook Page"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/hussio.official"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all text-white"
            title="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:0900000000"
            className="w-12 h-12 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all text-white"
            title="Gọi Hotline"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
