
import React from 'react';

interface FullCourseProps {
  onOpenModal: () => void;
  onOpenAI: () => void;
}

export const FullCourse: React.FC<FullCourseProps> = ({ onOpenModal, onOpenAI }) => {
  const bonuses = [
    { text: "Akses VIP gratis 1 bulan untuk aplikasi 【AI Chinese】" },
    { text: "Rekaman ulang setiap kelas (bisa diakses selamanya)" },
    { text: "Exclusive learning materials (slides/vocab/sentence patterns)" },
    { text: "Latihan khusus yang disesuaikan dalam aplikasi (AI Chinese)" },
    { text: "2 kelas basic pinyin (penting untuk beginner)" },
    { text: "Sertifikat kelulusan" },
    { text: "Free revisi CV Mandarin 1x" }
  ];

  const outcomes = [
    "Memperkenalkan diri dengan pede",
    "Berkomunikasi santai harian",
    "Memahami percakapan umum",
    "Ngobrol ringan dengan orang China"
  ];

  // Updated to the Indonesian assistant number as requested
  const whatsappUrl = "https://wa.me/6285220708665";

  return (
    <section className="bg-[#FFF5F6] flex flex-col">
      {/* 第一屏内容：课程详情 + 赠送礼包 */}
      <div className="min-h-[calc(100vh-180px)] px-5 pt-8 pb-2 flex flex-col gap-2 overflow-hidden relative">
        {/* 顶部标题 - 缩小字号，确保副标题为2行 */}
        <div className="text-center">
          <h2 className="text-[15.5px] sm:text-[19px] font-black text-gray-900 tracking-tight leading-tight px-2">
            Sistem belajar yang sistematis, kemampuan bicara meningkat lebih cepat
          </h2>
          <p className="text-[13px] sm:text-[16px] font-black text-red-600 leading-tight mt-3 whitespace-pre-line">
            Program utama:{"\n"}20x pertemuan small group speaking class
          </p>
          
          {/* 主题描述卡片 */}
          <div className="bg-red-50/50 border border-red-100 rounded-2xl py-3 px-4 inline-block w-full max-w-sm mt-4">
            <p className="text-[14px] font-black text-gray-800 leading-none">1 class = 1 real-life topic</p>
            <p className="text-[10px] font-bold text-gray-400 mt-3 leading-tight">
              (Perkenalan / pesan makanan / belanja / tanya jalan / kerja / daily conversation, dll.)
            </p>
          </div>
        </div>

        {/* 【课堂包含】卡片 */}
        <div className="bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100 mt-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">📚</span>
            <h3 className="text-[16px] font-black text-gray-900">Isi kelas:</h3>
          </div>
          <ul className="grid grid-cols-1 gap-1.5">
            {[
              "Kosakata inti yang sering dipakai",
              "Kalimat dialog yang langsung bisa dipakai",
              "Koreksi pelafalan langsung dari guru",
              "Latihan berbicara interaktif dalam kelompok",
              "Berbagai jenis latihan agar cepat familiar"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[13px] font-bold text-gray-700">
                <div className="w-4 h-4 flex-shrink-0 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 【额外赠送】卡片 */}
        <div className="bg-[#FFF9F2] rounded-[1.5rem] p-4 border border-[#FFEBD6] shadow-sm mb-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🎁</span>
            <h3 className="text-[15px] font-black text-[#D97706]">Bonus:</h3>
          </div>
          <ul className="space-y-1.5">
            {bonuses.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] font-bold text-gray-700">
                <span className="text-[#F59E0B] text-base flex-shrink-0 leading-none">★</span>
                <span className="leading-tight">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 向下滚动提示 */}
        <div className="mt-auto pb-6 flex flex-col items-center opacity-70">
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-700">Scroll for more</span>
          <svg className="w-3.5 h-3.5 text-gray-600 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 第二屏内容 */}
      <div className="h-[calc(100vh-105px)] bg-[#FFF5F6] px-5 pt-4 pb-4 flex flex-col justify-between overflow-hidden border-t border-gray-100">
        {/* 20节课后成果 */}
        <div className="bg-green-50 rounded-[1.5rem] p-4 border border-green-100">
          <h3 className="text-[15px] font-black text-green-800 text-center mb-3">Dalam 20 kelas, kamu bisa:</h3>
          <div className="grid grid-cols-2 gap-2">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/80 p-2 rounded-xl shadow-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[8px]">✔</div>
                <span className="text-[11px] font-black text-gray-700 leading-tight">{o}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 学生真实上课场景 */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 w-full px-2">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <p className="text-[11px] font-black text-gray-700 uppercase tracking-widest text-center px-1">Suasana nyata saat belajar di kelas</p>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-[380px]">
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
              <img src="https://i.ibb.co/wrB0TTXQ/2.png" className="w-full h-24 object-contain block" alt="Class Scene" />
            </div>
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
              <img src="https://i.ibb.co/7JTDp2QJ/habiba.jpg" className="w-full h-24 object-contain block" alt="Student Habiba" />
            </div>
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
              <img src="https://i.ibb.co/jk2tvcbM/1.png" className="w-full h-24 object-contain block" alt="Class Scene 2" />
            </div>
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
              <img src="https://i.ibb.co/dsK8qGMQ/sinta.png" className="w-full h-24 object-contain block" alt="Student Sinta" />
            </div>
          </div>
        </div>

        {/* 最后行动区 */}
        <div className="px-1 flex flex-col gap-3.5 mb-2">
          <div className="flex items-center justify-between gap-2 bg-white border border-red-100 px-4 py-2.5 rounded-[1.5rem] shadow-sm">
            <span className="text-red-700 font-black text-[12px] leading-tight">Daftar sekarang untuk harga promo khusus 🔥</span>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-[#22C55E] text-white w-[72px] h-[54px] rounded-[1rem] font-black shadow-md active:scale-95 transition-all flex-shrink-0 leading-none"
            >
              <svg className="w-5 h-5 mb-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-[10px]">Konsultasi</span>
            </a>
          </div>

          <button 
            onClick={onOpenModal}
            className="w-full bg-[#E62E44] text-white py-4 rounded-2xl text-[17px] font-black shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <div className="w-5 h-5">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3zM10.55 13.45L18.19 5.81l-7.64 7.64z"/>
              </svg>
            </div>
            Daftar kelas resmi sekarang
          </button>
        </div>
      </div>
    </section>
  );
};
