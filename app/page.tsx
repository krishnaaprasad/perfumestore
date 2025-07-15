'use client';

import "./globals.css";
// app/page.tsx

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-cover bg-center text-white relative"
         style={{ backgroundImage: "url('/bg.jpeg')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-4">
        {/* Brand Name */}
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white/80 mb-2 uppercase">
          Raven Fragrance
        </h2>

        {/* Coming Soon Text */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wider drop-shadow-lg">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
          An exclusive fragrance experience like never before. <br className="hidden md:block" />
          Feel the luxury. Embrace the elegance. Discover <strong className="text-white/90">Raven Fragrance</strong>.
        </p>

        {/* Links */}
        <div className="mt-8 flex justify-center gap-8 text-base">
          <a
            href="https://www.instagram.com/ravenfragrance.in"
            target="_blank"
            className="text-white hover:text-pink-400 transition duration-300"
          >
            Instagram →
          </a>
          <a
            href="https://www.whatsapp.com/catalog/918424832375/"
            target="_blank"
            className="text-white hover:text-green-400 transition duration-300"
          >
            WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
