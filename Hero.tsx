
import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
  onOpenAI: () => void;
  onNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onOpenAI, onNext }) => {
  return (
    <header className="relative h-screen bg-gradient-to-br from-red-600 to-red-800 text-white overflow-hidden flex flex-col justify-start">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-400 rounded-full opacity-20 blur-3xl"></div>

      {/* 将 pt-20 进一步减小到 pt-12，sm 从 pt-28 减小到 pt-20，使内容整体上移 */}
      <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-20 md:pt-28 flex flex-col items-center text-center relative z-10 w-full h-full flex-grow">
        {/* Title:  Kelas Percobaan Hinihao */}
       <h1 className="text-[7vw] sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-center px-4">
  Kelas Percobaan Hinihao
  <br />
  <span className="text-[5.5vw] sm:text-3xl md:text-4xl font-bold">
    （Trial class）
  </span>
</h1>

        {/* Feature Icons Row */}
        <div className="flex justify-center items-start gap-4 sm:gap-12 md:gap-20 mb-8 w-full max-w-4xl px-4">
          {/* Item 1 */}
          <div className="flex-1 flex flex-col items-center text-center min-w-0">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-white/15 rounded-[2rem] shadow-xl border border-white/20 mb-4">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/>
              </svg>
            </div>
            <span className="text-[12px] sm:text-base font-bold leading-snug break-words">
              No basic?
              <br />
              Tetap bisa join
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex-1 flex flex-col items-center text-center min-w-0">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-white/15 rounded-[2rem] shadow-xl border border-white/20 mb-4">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 6h-2v9H5v2c0 .55.45 1 1 1h12l4 4V7c0-.55-.45-1-1-1zM17 2H3c-.55 0-1 .45-1 1v14l4-4h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"/>
              </svg>
            </div>
            <span className="text-[12px] sm:text-base font-bold leading-snug break-words">
              Banyak kesempatan buat ngomong langsung
            </span>
          </div>

          {/* Item 3 */}
          <div className="flex-1 flex flex-col items-center text-center min-w-0">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-white/15 rounded-[2rem] shadow-xl border border-white/20 mb-4">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v14l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <span className="text-[12px] sm:text-base font-bold leading-snug break-words">
              Bantu kamu lebih pede ngomong Mandarin
            </span>
          </div>
        </div>

        {/* Price and Promo row */}
        <div className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-[2.5rem] border border-white/20 shadow-2xl mb-8 inline-block max-w-[95%]">
          <div className="flex flex-col items-center gap-1">
            <span className="text-red-100 text-lg sm:text-2xl font-bold opacity-80">
              <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                {" "}
                <span className="text-lg sm:text-xl line-through opacity-70">
                  IDR 29.000 / IDR 39.000  
                </span>{" "}
            
              </span>
            </span>
            <span className="text-[6vw] sm:text-4xl font-black text-yellow-300 whitespace-nowrap tracking-tight">
              <span className="block text-2xl sm:text-3xl font-bold leading-tight text-center px-6 break-words">
                🎉 GRATIS！！!
                <br />
                Untuk 1x percobaan
              </span>
            </span>
          </div>
        </div>

        {/* Buttons - 保持 mb-24 确保按钮相对于底边较高 */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md mt-4 mb-24">
          <button 
            onClick={onOpenModal}
            className="w-full bg-green-600 hover:bg-green-500 text-white py-4 sm:py-6 rounded-full text-2xl sm:text-4xl font-black transition-all transform hover:scale-105 shadow-xl active:scale-95"
          >
            🟢 Daftar trial class sekarang
          </button>
          
          <button 
            onClick={onNext}
            className="w-full border-2 border-white/50 bg-white/10 hover:bg-white/20 text-white py-3 sm:py-4 rounded-full text-lg sm:text-2xl font-black flex items-center justify-center gap-2 transition-all active:scale-95 group"
          >
            <span className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform shadow-sm"></span>
            Lihat detail kelas dulu ↓
          </button>
        </div>
      </div>
    </header>
  );
};
