
import React, { useState } from 'react';

interface ConsultationFormProps {
  onClose: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    phone: '',
    classPreference: '',
    reason: '',
    otherReason: '',
    level: 'unsure',
    wantsNotification: 'yes'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation Form Submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      const reasonText = formData.reason === 'others' ? formData.otherReason : formData.reason;
      const message = `Halo, saya ingin konsultasi kelas Mandarin. %0A%0AWhatsApp: ${formData.phone}%0APreferensi: ${formData.classPreference}%0AAlasan: ${reasonText}%0ALevel: ${formData.level}`;
      window.open(`https://wa.me/6285220708665?text=${message}`, '_blank');
      onClose();
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
        <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">✓</div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">Terima Kasih!</h3>
          <p className="text-gray-500 font-bold text-sm">Pesan Anda telah diterima. Menghubungkan ke WhatsApp...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      {/* 点击遮罩层关闭 */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* 表单卡片容器 */}
      <div className="bg-white rounded-[2.5rem] max-w-sm w-full max-h-[92dvh] relative animate-in slide-in-from-bottom-10 duration-500 shadow-2xl flex flex-col overflow-hidden border border-white/20">
        
        {/* 顶部装饰性背景 */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-50 to-white -z-0"></div>

        {/* 固定头部 */}
        <div className="sticky top-0 bg-transparent pt-8 pb-4 px-7 flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-200 text-white transform -rotate-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 leading-none">Konsultasi</h2>
              <p className="text-[11px] text-red-500 font-black uppercase tracking-wider mt-1">Hinihao Mandarin</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/80 backdrop-blur-md text-gray-400 p-2.5 rounded-full hover:text-red-600 hover:bg-red-50 transition-all active:scale-90 shadow-sm border border-gray-100"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 可滚动的主体内容区域 */}
        <div className="flex-grow overflow-y-auto px-7 pb-10 pt-2 custom-scrollbar relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. WhatsApp (Required) */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[14px] font-black text-gray-800 ml-1">
                <span className="w-5 h-5 bg-gray-900 text-white text-[10px] rounded-full flex items-center justify-center font-black">1</span>
                WhatsApp / No. HP <span className="text-red-500">*</span>
              </label>
              <div className="group relative">
                <input 
                  required
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-[1.2rem] px-5 py-4 text-sm font-bold focus:border-red-400 focus:bg-white focus:outline-none transition-all shadow-inner group-hover:border-gray-200"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* 2. Class Preference (Required) */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[14px] font-black text-gray-800 ml-1">
                <span className="w-5 h-5 bg-gray-900 text-white text-[10px] rounded-full flex items-center justify-center font-black">2</span>
                Preferensi Jenis Kelas <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select 
                  required
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-[1.2rem] px-5 py-4 text-sm font-bold focus:border-red-400 focus:bg-white focus:outline-none transition-all appearance-none pr-12 shadow-inner group-hover:border-gray-200"
                  value={formData.classPreference}
                  onChange={e => setFormData({...formData, classPreference: e.target.value})}
                >
                  <option value="">Pilih tipe kelas...</option>
                  <option value="chinese">Kelas Guru China (Native)</option>
                  <option value="indonesian">Kelas Guru Indonesia (Bilingual)</option>
                  <option value="unsure">Belum yakin / ingin tanya dulu</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* 3. Reason (Required) */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[14px] font-black text-gray-800 ml-1">
                <span className="w-5 h-5 bg-gray-900 text-white text-[10px] rounded-full flex items-center justify-center font-black">3</span>
                Kenapa belum mendaftar? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { id: 'more-info', label: 'Ingin tahu lebih banyak detail', icon: 'ℹ️' },
                  { id: 'no-time', label: 'Belum ada waktu luang', icon: '⏰' },
                  { id: 'expensive', label: 'Harga dirasa terlalu mahal', icon: '💰' },
                  { id: 'thinking', label: 'Masih perlu pertimbangan', icon: '🤔' },
                  { id: 'others', label: 'Alasan lainnya...', icon: '💬' }
                ].map(opt => (
                  <label key={opt.id} className={`group flex items-center gap-3.5 p-4 rounded-[1.2rem] border-2 transition-all cursor-pointer shadow-sm ${formData.reason === opt.id ? 'bg-red-600 border-red-600 text-white scale-[1.02] shadow-red-200' : 'bg-gray-50 border-gray-50 hover:border-gray-200 active:scale-95'}`}>
                    <input 
                      required
                      type="radio" 
                      name="reason" 
                      className="hidden"
                      value={opt.id}
                      checked={formData.reason === opt.id}
                      onChange={e => setFormData({...formData, reason: e.target.value})}
                    />
                    <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{opt.icon}</span>
                    <span className={`text-[13px] font-bold ${formData.reason === opt.id ? 'text-white' : 'text-gray-700'}`}>{opt.label}</span>
                    {formData.reason === opt.id && (
                      <div className="ml-auto">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
              {formData.reason === 'others' && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  <textarea 
                    required
                    placeholder="Tuliskan alasan Anda di sini..."
                    className="w-full mt-1 bg-gray-50 border-2 border-gray-100 rounded-[1.2rem] px-5 py-4 text-sm font-bold focus:border-red-400 focus:bg-white focus:outline-none transition-all h-28 resize-none shadow-inner"
                    value={formData.otherReason}
                    onChange={e => setFormData({...formData, otherReason: e.target.value})}
                  />
                </div>
              )}
            </div>

            <div className="h-px bg-gray-100 my-2"></div>

            {/* 4. Level (Optional) */}
            <div className="space-y-2">
              <label className="block text-[13px] font-black text-gray-500 ml-1">
                Tingkat Kemampuan Bicara (Opsional)
              </label>
              <div className="relative group">
                <select 
                  className="w-full bg-white border-2 border-gray-100 rounded-[1.2rem] px-5 py-3.5 text-sm font-bold focus:border-red-400 focus:outline-none transition-all appearance-none pr-12 group-hover:border-gray-200"
                  value={formData.level}
                  onChange={e => setFormData({...formData, level: e.target.value})}
                >
                  <option value="0">0 Dasar (Belum bisa)</option>
                  <option value="beginner">Pemula (Sedikit kata)</option>
                  <option value="intermediate">Menengah (Dialog simpel)</option>
                  <option value="advanced">Lanjutan (Ingin fasih)</option>
                  <option value="unsure">Belum tahu level saya</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* 5. Notifications (Optional) */}
            <div className="flex items-center justify-between gap-4 p-4 bg-yellow-50/50 rounded-[1.2rem] border border-yellow-100">
              <div className="flex items-center gap-3">
                <span className="text-xl">📢</span>
                <span className="text-[12px] font-bold text-yellow-800 leading-tight">Terima info promo khusus?</span>
              </div>
              <select 
                className="bg-white border border-yellow-200 rounded-lg px-3 py-1.5 text-[12px] font-black focus:outline-none appearance-none cursor-pointer"
                value={formData.wantsNotification}
                onChange={e => setFormData({...formData, wantsNotification: e.target.value})}
              >
                <option value="yes">Ya</option>
                <option value="no">Tidak</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-5 rounded-full text-lg font-black shadow-xl shadow-gray-200 active:scale-95 transition-all mt-4 mb-2 flex items-center justify-center gap-2"
            >
              <span>Kirim & Konsultasi</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <p className="text-[10px] text-gray-400 font-bold text-center">
              Informasi Anda aman & hanya untuk keperluan kursus.
            </p>
          </form>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e5e7eb;
        }
      `}</style>
    </div>
  );
};
