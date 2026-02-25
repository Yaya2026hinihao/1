
import React from 'react';

interface TeachersProps {
  onOpenModal: () => void;
}

export const Teachers: React.FC<TeachersProps> = ({ onOpenModal }) => {
  return (
    <section className="flex flex-col justify-start bg-[#FFF5F6] pt-4">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-4 w-full pt-6">
        {/* Title Section */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-[22px] sm:text-3xl font-black text-gray-900 mb-1.5 tracking-tight leading-tight">
            Tim pengajar profesional China–Indonesia
          </h2>
          <p className="text-[13px] sm:text-base text-gray-400 font-bold">
            Pilih cara belajar yang paling cocok untukmu
          </p>
          <div className="w-10 h-1 bg-red-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-stretch px-2">
          
          {/* Chinese Teacher Card */}
          <div className="flex-1 max-w-[520px] mx-auto sm:mx-0 bg-white rounded-[1.8rem] shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col p-4 sm:p-5 transition-transform active:scale-[0.98]">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co.com/V5bZQkg/image.png" 
                  alt="Chinese Native Teacher" 
                  className="w-20 h-20 rounded-xl object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-[20px] font-black text-gray-900 leading-tight">Kelas Guru China</h3>
                <p className="text-red-600 font-black text-[10px] mt-1 leading-tight">
                  Diajar langsung oleh guru asli dari China yang berpengalaman dalam mengajar siswa internasional
                </p>
              </div>
            </div>

            <div className="flex-grow space-y-2 mb-4">
              {[
                'Pronunciation/pelafalan Mandarin standar',
                'Full Chinese environment learning (lebih immersive)',
                'Ekspresi percakapan yang natural & autentik'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-red-50/20 p-2.5 rounded-lg border border-red-50/30">
                  <div className="w-4 h-4 rounded-sm bg-white border border-red-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold text-[12px] leading-tight tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-left text-[11px] text-gray-400 font-bold mb-3 px-1">
                Cocok untuk: yang ingin cepat naik level / ingin belajar ekspresi asli
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={onOpenModal}
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-black text-[14px] shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>🟢</span> Pilih Guru China
                </button>
              </div>
            </div>
          </div>

          {/* Indonesian Teacher Card */}
          <div className="flex-1 max-w-[520px] mx-auto sm:mx-0 bg-white rounded-[1.8rem] shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col p-4 sm:p-5 transition-transform active:scale-[0.98]">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co.com/DPFW15j3/image.png" 
                  alt="Indonesian Bilingual Teacher" 
                  className="w-20 h-20 rounded-xl object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-[20px] font-black text-gray-900 leading-tight">Kelas Guru Indonesia</h3>
                <p className="text-blue-600 font-black text-[10px] mt-1 leading-tight">
                  Diajar oleh guru Mandarin lokal Indonesia
                </p>
              </div>
            </div>

            <div className="flex-grow space-y-2 mb-4">
              {[
                'Penjelasan bilingual China–Indonesia, lebih mudah dipahami',
                'Paham kesulitan umum siswa Indonesia',
                'Suasana kelas lebih santai, lebih berani bicara',
                'Tanpa dasar pun mudah mengikuti'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-blue-50/20 p-2.5 rounded-lg border border-blue-50/30">
                  <div className="w-4 h-4 rounded-sm bg-white border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold text-[12px] leading-tight tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-left text-[11px] text-gray-400 font-bold mb-3 px-1">
                Cocok untuk: pemula / tanpa dasar / baru mulai belajar
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={onOpenModal}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-black text-[14px] shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>🟢</span> Pilih Guru Indonesia
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Hint Text */}
        <div className="mt-10 text-center pb-8">
           <p className="text-gray-400 font-black text-[12px] flex items-center justify-center gap-2 opacity-80 px-4">
             <span>💡</span>
             Saat daftar bisa bebas pilih jenis kelas
           </p>
        </div>
      </div>
    </section>
  );
};
