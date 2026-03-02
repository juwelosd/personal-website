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
              fontSize: `${Math.random() * 25 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              animationDelay: `${Math.random() * 10}s`,
              // ভুল এখানে ছিল: px এর বদলে s ব্যবহার করা হয়েছে
              animationDuration: `${Math.random() * 15 + 10}s`, 
              color: i % 2 === 0 ? "#ff8dc7" : i % 3 === 0 ? "#fccde2" : "#ffe6f2", 
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

      {/* --- CSS Animation --- */}
      <style>{`
        @keyframes flowerPremium {
          0% {
            transform: translateY(100px) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-150px) rotate(360deg) scale(1.2);
            opacity: 0; 
          }
        }
        
        .animate-flower-premium {
          animation-name: flowerPremium;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FooterBottom;