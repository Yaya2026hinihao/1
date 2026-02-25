
import React, { useState, useRef, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Teachers } from './components/Teachers';
import { FullCourse } from './components/FullCourse';
import { RegistrationForm } from './components/RegistrationForm';
import { ConsultationForm } from './components/ConsultationForm';
import { AIAdvisor } from './components/AIAdvisor';
import { SuccessPage } from './components/SuccessPage';
import { LeadCollectionPage } from './components/LeadCollectionPage';

const App: React.FC = () => {
  const [modalType, setModalType] = useState<'trial' | 'full'>('trial');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // 初始化路径，并增加显式状态更新逻辑
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const pages = ['Hero', 'Benefits', 'Teachers', 'Course', 'Register'];
  const WHATSAPP_LINK = "https://wa.me/6285220708665";

  const openTrialModal = () => {
    setModalType('trial');
    setIsModalOpen(true);
  };

  const openFullModal = () => {
    setModalType('full');
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);
  const toggleAI = () => setIsAIOpen(!isAIOpen);

  // 监听浏览器前进后退
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // 改进的跳转函数：显式更新状态
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path); 
  };

  const handleNext = () => {
    if (activeIndex < pages.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();

    touchStart.current = null;
    touchEnd.current = null;
  };

  // 路由分发逻辑
  const isFormPage = currentPath === '/form' || currentPath.startsWith('/form?');
  const isSuccessPage = currentPath === '/success';

  if (isFormPage) {
    return (
      <div className="relative">
        <LeadCollectionPage />
        <button 
          onClick={() => navigateTo('/')}
          className="fixed top-4 left-4 z-[200] bg-white/90 backdrop-blur shadow-xl px-5 py-2.5 rounded-full text-xs font-black text-gray-800 flex items-center gap-2 border border-gray-100 active:scale-95 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  if (isSuccessPage) {
    return <SuccessPage onBack={() => navigateTo('/')} />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden flex flex-col bg-white select-none font-['Inter','Noto_Sans_SC']">
      
      {/* 底部进度条 */}
      {!isModalOpen && !isConsultationOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[80] px-6 pb-2.5 pointer-events-none">
          <div className="max-w-md mx-auto flex gap-2 h-1.5">
            {pages.map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-full transition-all duration-300 ${
                  i <= activeIndex ? 'bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* 两侧导航按钮 */}
      {!isModalOpen && !isConsultationOpen && (
        <div className="fixed inset-y-0 left-0 right-0 z-50 pointer-events-none flex items-center justify-between px-2">
          <div className="w-12 h-full flex items-center">
            {activeIndex > 0 && (
              <button 
                onClick={handlePrev} 
                className="pointer-events-auto p-2 rounded-full bg-white/40 backdrop-blur-md text-gray-800/40 active:scale-75 transition-all shadow-sm border border-black/5"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
          </div>
          <div className="w-12 h-full flex items-center justify-end">
            {activeIndex < pages.length - 1 && (
              <button 
                onClick={handleNext} 
                className="pointer-events-auto p-2 rounded-full bg-white/40 backdrop-blur-md text-gray-800/40 active:scale-75 transition-all shadow-sm border border-black/5"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 主滑动容器 */}
      <div 
        className="flex-grow flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <section className="min-w-full h-full overflow-y-auto">
          <Hero 
            onOpenModal={openTrialModal} 
            onOpenAI={toggleAI} 
            onNext={handleNext}
          />
        </section>
        <section className="min-w-full h-full overflow-hidden">
          <Benefits onOpenModal={openTrialModal} onOpenAI={openConsultation} />
        </section>
        <section className="min-w-full h-full overflow-y-auto pb-36 bg-[#FFF5F6]">
          <Teachers onOpenModal={openTrialModal} />
        </section>
        <section className="min-w-full h-full overflow-y-auto pb-10">
          <FullCourse onOpenModal={openFullModal} onOpenAI={openConsultation} />
        </section>
        
        <section className="min-w-full h-full bg-[#FFF5F6] flex flex-col items-center justify-start pt-6 p-6 overflow-y-auto">
          <div className="max-w-lg w-full text-center py-4 sm:py-8">
            <h2 className="text-[25px] font-black text-gray-900 mb-6 tracking-tight leading-tight"> BOOK KELAS TRIAL SEKARANG!!!</h2>
            
            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-red-50 mb-4 text-left space-y-3.5">
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 flex items-center justify-center text-lg">🕒</span>
                <p className="text-[16px] font-black text-gray-800">Durasi: <span className="text-red-600">1 Jam</span></p>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 flex items-center justify-center text-lg">👨‍🏫</span>
                <p className="text-[16px] font-black text-gray-800">Jenis guru: <span className="text-red-600">China/Indonesia (bisa pilih)</span></p>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 flex items-center justify-center text-lg">💻</span>
                <p className="text-[16px] font-black text-gray-800">Metode belajar: <span className="text-red-600">Pembelajaran online interaktif</span></p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-400 line-through text-[20px] font-bold">29,000/39,000 IDR</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-red-600 whitespace-nowrap text-center">
                🎉 FREE trial - Periode Promo
              </h1>
              <p className="text-red-400 text-[13px] font-bold mt-1">Kuota terbatas, siapa cepat dia dapat!</p>
            </div>

            <div className="mb-6 space-y-2.5 text-left max-w-[300px] mx-auto">
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-gray-700 tracking-tight leading-tight">Setelah daftar, langsung masuk grup belajar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-gray-700 tracking-tight leading-tight">Admin menghubungi untuk atur jadwal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-gray-700 tracking-tight leading-tight">Dibimbing & bisa tanya kapan saja</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <button 
                onClick={openTrialModal}
                className="w-full bg-[#16A34A] text-white py-5 rounded-full text-xl font-black shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                🟢 Daftar free trial class
              </button>
              <button 
                onClick={openConsultation}
                className="w-full bg-white border-2 border-gray-900 text-gray-900 py-4 rounded-full text-lg font-black active:scale-95 transition-all"
              >
                ⚪ Mau konsultasi dulu dong
              </button>
            </div>
          </div>
        </section>
      </div>

      {activeIndex === 2 && !isModalOpen && !isConsultationOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white border-t border-gray-100 flex items-stretch shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-4 pt-3 pb-7 gap-3 transition-all duration-300">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[84px] bg-[#FFF1F3] rounded-2xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-all h-[58px]"
          >
            <div className="text-[#E62E44]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 9h-2V9h2v2zm-4 0h-2V9h2v2zm-4 0H6V9h2v2z"/>
              </svg>
            </div>
            <span className="text-[11px] font-black text-[#E62E44]">Konsultasi</span>
          </a>
          
          <button 
            onClick={openTrialModal}
            className="flex-grow bg-[#E62E44] text-white rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all px-4 h-[58px]"
          >
            <div className="w-5 h-5">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3zM10.55 13.45L18.19 5.81l-7.64 7.64z"/>
              </svg>
            </div>
            <span className="text-[14px] font-black tracking-tight whitespace-nowrap">Daftar Trial Class Gratis Sekarang</span>
          </button>
        </div>
      )}

      {isModalOpen && <RegistrationForm type={modalType} onClose={closeModal} />}
      {isConsultationOpen && <ConsultationForm onClose={closeConsultation} />}
      <AIAdvisor isOpen={isAIOpen} onToggle={toggleAI} />
    </div>
  );
};

export default App;
