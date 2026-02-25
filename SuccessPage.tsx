
import React, { useEffect, useState } from 'react';

interface SuccessPageProps {
  onBack?: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF5F6] flex flex-col items-center justify-center p-6 font-['Inter','Noto_Sans_SC'] relative">
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 font-bold flex items-center gap-1 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </button>
      )}

      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-8 text-center border border-red-50 animate-in fade-in zoom-in duration-500">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner animate-bounce">
          ✓
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">支付成功</h1>
        
        <p className="text-[17px] font-bold text-gray-600 mb-6 leading-relaxed">
          请填写报名信息以安排课程
        </p>

        {/* Urgency Alert */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-8">
          <p className="text-red-600 font-black text-lg">
            请在 <span className="underline decoration-2 underline-offset-4">{formatTime(timeLeft)}</span> 内完成填写
          </p>
          <p className="text-red-400 text-sm font-bold mt-1">逾期可能导致开课时间顺延</p>
        </div>

        {/* Action Button */}
        <a 
          href="https://forms.gle/xxxxxx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-[#16A34A] hover:bg-green-700 text-white py-5 rounded-2xl text-xl font-black shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
          立即填写报名信息
        </a>

        <p className="mt-6 text-gray-400 text-sm font-bold">
          如有任何疑问，请咨询您的专属助教
        </p>
      </div>
      
      {/* Decorative footer */}
      <div className="mt-12 text-center opacity-30">
        <p className="font-black text-red-900 text-xl tracking-widest uppercase">Hinihao Chinese</p>
      </div>
    </div>
  );
};
