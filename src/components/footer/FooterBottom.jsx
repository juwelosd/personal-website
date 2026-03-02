// src/components/footer/FooterBottom.jsx
import React from "react";

const FooterBottom = () => {
  return (
    <div className="relative bg-[#0a161a] text-white text-center py-12 text-sm overflow-hidden border-t border-gray-800">
      
      {/* --- High Density Premium Floating Flowers Animation --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-flower-premium"
            style={{
              fontSize: `${Math.random() * 25 + 10}px`, // বিভিন্ন আকারের ফুল
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              animationDelay: `${Math.random() * 10}s`, // ছড়িয়ে ছিটিয়ে আসা
              animationDuration: `${Math.random() * 20 + 10}px`, // ধীরগতি
              color: i % 2 === 0 ? "#ff8dc7" : i % 3 === 0 ? "#fccde2" : "#ffe6f2", // বিভিন্ন শেড
              textShadow: "0 0 8px rgba(255, 141, 199, 0.6)",
            }}
          >
            {i % 4 === 0 ? "❀" : i % 3 === 0 ? "✿" : i % 2 === 0 ? "❁" : "🌸"}
          </div>
        ))}
      </div>

      {/* --- Content (Original Text) --- */}
      <div className="relative z-10 font-medium tracking-wide text-base">
        © 2026 YourWebsite. All rights reserved by Omor Faruk.
      </div>

      {/* --- CSS Animation (Kept Smooth) --- */}
      <style jsx>{`
        @keyframes flowerPremium {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          15% {
            opacity: 0.7; /* ফুটে উঠবে */
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-200px) rotate(180deg) scale(1.2);
            opacity: 0; 
          }
        }
        
        .animate-flower-premium {
          animation: flowerPremium linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FooterBottom;