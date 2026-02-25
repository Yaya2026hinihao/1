
import React from 'react';

interface BenefitsProps {
  onOpenModal: () => void;
  onOpenAI: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenModal, onOpenAI }) => {
  const contents = [
    { text: "Mengenal dan melatih 4 nada (tone) Mandarin" },
    { text: "Teacher demo + latihan menirukan" },
    { text: "Ungkapan dasar percakapan sehari-hari" },
    { text: "Latihan berbicara dengan pola kalimat sederhana" },
    { text: "Pronunciation langsung dikoreksi" }
  ];

  const flows = [
    "Pemanasan & pengenalan awal",
    "Latihan nada (tone)",
    "Penjelasan percakapan praktis",
    "Latihan dialog/percakapan",
    "Feedback dari guru"
  ];

  return (
    <section className="relative h-full bg-[#FFF5F6] overflow-hidden flex flex-col font-['Inter','Noto_Sans_SC']">
      {/* 背景装饰 */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 bg-red-50/10"></div>
        <div className="w-1/2 bg-white/10"></div>
      </div>

      {/* 主容器：pt-6 让标题稍微上移，pb-12 增加底部边距以将按钮整体上提 */}
      <div className="relative z-10 max-w-lg mx-auto w-full px-4 pt-6 sm:pt-10 flex-grow flex flex-col justify-between pb-12">
        
        {/* 顶部标题 */}
        <div className="mb-1.5">
          <h2 className="text-[22px] sm:text-2xl font-black text-center tracking-tight text-gray-900 leading-tight px-2">
            Dalam 1 jam, apa yang bisa dipelajari?
          </h2>
        </div>

        {/* 内容展示区 - 使用 flex-grow 自动填满中间 */}
        <div className="flex-grow flex flex-col justify-center py-1">
          <div className="flex gap-2.5 sm:gap-4 items-stretch">
            
            {/* 左侧：内容包含 (图1) */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-[13px] sm:text-[16px] font-black mb-2.5 text-gray-900 tracking-tighter text-center whitespace-nowrap">
                【Di kelas ini kamu akan dapat】
              </h3>
              <div className="flex flex-col justify-between flex-grow gap-2">
                {contents.map((item, i) => (
                  <div 
                    key={i} 
                    className="w-full min-h-[46px] sm:min-h-[58px] bg-white py-2 px-2.5 rounded-2xl flex items-center gap-2 border-2 border-red-50 shadow-sm transition-transform active:scale-95 flex-grow"
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-[#FF4D4D] rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[12.5px] sm:text-[15px] font-black text-gray-800 leading-[1.15] tracking-tighter">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧：课堂流程 (图2) */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-[13px] sm:text-[16px] font-black mb-2.5 text-gray-900 text-center whitespace-nowrap">
                【Alur kelas】
              </h3>
              <div className="flex flex-col justify-between flex-grow">
                {flows.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="w-full min-h-[40px] sm:min-h-[50px] bg-white border-2 border-gray-900 py-1.5 px-1.5 rounded-2xl flex items-center justify-center text-center shadow-sm flex-grow">
                      <span className="text-[10.5px] sm:text-[14px] font-black text-gray-900 leading-tight tracking-tighter px-0.5">
                        {step}
                      </span>
                    </div>
                    {i < flows.length - 1 && (
                      <div className="flex items-center justify-center py-0.5">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 5v14m0 0l-2-2m2 2l2-2" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 底部交互区 - 缩减 mt 使其更靠拢上方内容，并通过容器的 pb-12 实现整体上移 */}
        <div className="flex flex-col items-center mt-2">
          {/* 装饰条 */}
          <div className="bg-[#FFE4E8] px-5 py-2 rounded-full border-2 border-red-100 mb-2 flex items-center gap-2 shadow-sm">
            <span className="text-lg">🗣️</span>
            <p className="text-[#D62F4A] text-[14px] sm:text-[18px] font-black tracking-tight leading-none">
              Mulai berbicara Mandarin sekarang!
            </p>
          </div>

          {/* 指路小手指 */}
          <div className="text-2xl animate-bounce mb-1">
            👇
          </div>
          
          {/* 按钮组 */}
          <div className="w-full flex flex-col gap-2.5 max-w-[320px] sm:max-w-md">
            <button 
              onClick={onOpenModal}
              className="w-full bg-[#16A34A] text-white py-4 rounded-full text-[19px] sm:text-[22px] font-black shadow-lg h-13 sm:h-16 flex items-center justify-center active:scale-95 transition-all"
            >
              🟢 Daftar trial sekarang
            </button>
            <button 
              onClick={onOpenAI}
              className="w-full border-2 border-gray-900 bg-white text-gray-900 py-3.5 px-3 rounded-full text-[13px] sm:text-[17px] font-black h-13 sm:h-16 flex items-center justify-center active:scale-95 transition-all leading-tight text-center"
            >
              ⚪ Mau konsultasi dulu sebelum daftar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
