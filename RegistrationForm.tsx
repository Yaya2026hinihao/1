
import React, { useState } from 'react';

interface RegistrationFormProps {
  onClose: () => void;
  type?: 'trial' | 'full';
}

type TeacherSelection = 'none' | 'indonesian' | 'chinese';

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose, type = 'trial' }) => {
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherSelection>('none');

  const PUBLISHABLE_KEY = "pk_live_51SWyRyQ0lF5g2scAkEt2VEeZVzg4CLD0khTThOKgtEsL6VHwLbXU4R9N9cYdCGvZOerOM9HngkIfVnQrZaZn7xkE00Zd8Vf8cl";
  const BUTTON_IDS = {
    trial: "buy_btn_1T05NCQ0lF5g2scAdi5nyasY",
    full_indonesian: "buy_btn_1T05S1Q0lF5g2scA0i0IyUHw",
    full_chinese: "buy_btn_1T05jvQ0lF5g2scAhZRJ0Fqs"
  };

  const renderStripeButton = (id: string) => (
    <div 
      className="w-full flex justify-center py-4"
      dangerouslySetInnerHTML={{
        __html: `
          <stripe-buy-button
            buy-button-id="${id}"
            publishable-key="${PUBLISHABLE_KEY}"
          >
          </stripe-buy-button>
        `
      }} 
    />
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-hidden">
      {/* 背景点击关闭 */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* 弹窗容器 - 增加 top padding 确保 X 按钮不被切断 */}
      <div className="bg-white rounded-[2.5rem] pt-12 pb-6 px-6 max-w-sm w-full relative animate-in fade-in zoom-in duration-300 shadow-2xl flex flex-col items-center">
        
        {/* 关闭按钮 X - 确保在容器内全显 */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 text-gray-800 hover:text-red-600 transition-all p-2 rounded-full shadow-sm z-[110] active:scale-90"
          aria-label="关闭"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {type === 'trial' ? (
          // 试听课：直接显示购买按钮
          <div className="w-full flex flex-col items-center">
            {renderStripeButton(BUTTON_IDS.trial)}
          </div>
        ) : (
          // 正式课：选择老师后再显示购买按钮
          <div className="w-full flex flex-col items-center">
            {selectedTeacher === 'none' ? (
              // 步骤 1: 选择老师
              <div className="w-full space-y-4 py-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">Pilih Guru Kelas Resmi</h3>
                  <p className="text-xs text-gray-400 font-bold mt-1 tracking-widest">20 Sesi Kursus Percakapan Terstruktur</p>
                </div>

                <button 
                  onClick={() => setSelectedTeacher('indonesian')}
                  className="w-full bg-[#EBF5FF] border-2 border-transparent hover:border-blue-500 p-5 rounded-[1.8rem] flex items-center justify-between active:scale-[0.98] transition-all"
                >
                  <div className="text-left">
                    <p className="text-blue-900 font-black text-xl leading-none">Kelas Guru Indonesia</p>
                    <p className="text-blue-600/70 text-[11px] font-black mt-2">Bilingual · Cocok untuk pemula</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🇮🇩</div>
                </button>

                <button 
                  onClick={() => setSelectedTeacher('chinese')}
                  className="w-full bg-[#FFF1F3] border-2 border-transparent hover:border-red-500 p-5 rounded-[1.8rem] flex items-center justify-between active:scale-[0.98] transition-all"
                >
                  <div className="text-left">
                    <p className="text-red-900 font-black text-xl leading-none">Kelas Guru Tiongkok</p>
                    <p className="text-red-600/70 text-[11px] font-black mt-2">Native · Untuk tingkat lanjut</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🇨🇳</div>
                </button>
              </div>
            ) : (
              // 步骤 2: 显示购买按钮
              <div className="w-full flex flex-col items-center">
                <button 
                  onClick={() => setSelectedTeacher('none')}
                  className="mb-6 text-gray-400 text-xs font-black flex items-center gap-1.5 self-start bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                  </svg>
                  重新选择老师
                </button>
                {renderStripeButton(selectedTeacher === 'indonesian' ? BUTTON_IDS.full_indonesian : BUTTON_IDS.full_chinese)}
              </div>
            )}
          </div>
        )}

        {/* 底部保障 */}
        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-center gap-1.5 w-full opacity-60">
          <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.9L10 1.154l7.834 3.746v5.203c0 5.06-3.342 9.499-7.834 10.897a11.59 11.59 0 01-7.834-10.897V4.9zm4.74 7.21a1 1 0 011.414 0l1.414 1.415 4.242-4.243a1 1 0 111.415 1.414l-4.95 4.95a1 1 0 01-1.414 0l-2.12-2.12a1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
          <span className="text-[10px] text-gray-400 font-bold tracking-tight">Stripe 加密安全支付</span>
        </div>
      </div>
    </div>
  );
};
