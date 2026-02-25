
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIAdvisorProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '你好！我是您的课程咨询助手。想了解1小时免费试听课的时间安排，还是20节正式课的优惠内容？' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一个中文口语课程的专业销售和咨询。基于以下内容回答用户问题：
          - 试听课：1小时主题课，5-15人，原价25000IDR，目前限时免费。
          - 试听内容：声调训练、示范跟读、日常用语、对话练习、发音纠正。
          - 老师：中国老师(Native, 地道沉浸)和印尼老师(Bilingual, 双语讲解易懂)。
          - 正式课：20节主题式(自我介绍/点餐/购物等)，包含APP会员、回放、资料包、拼音课、结业证。
          用户问题：${userMessage}`,
        config: {
          systemInstruction: "你是一个热情友好、专业且有说服力的中文课程咨询老师。回答简洁明了，语气亲切，主要针对印尼学生。始终引导用户点击'立即预约'来抢占免费名额。"
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || '抱歉，我现在有点忙，请直接点击报名按钮！' }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: '抱歉，由于连接问题，请直接点击下方的“立即预约”按钮报名，我们的老师会为您详细解答！' }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full sm:max-w-lg h-[80vh] sm:h-[600px] rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col animate-in slide-in-from-bottom-20 duration-300">
        <div className="p-6 bg-red-600 text-white rounded-t-[2.5rem] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl shadow-inner">🤖</div>
            <div>
              <p className="font-black text-lg leading-tight">课程智能助手</p>
              <p className="text-xs text-white/70">在线为您解答疑问</p>
            </div>
          </div>
          <button onClick={onToggle} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-[15px] font-bold shadow-sm ${
                m.role === 'user' ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-100'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-400 px-5 py-3 rounded-2xl text-xs font-black animate-pulse border border-gray-100">
                老师正在回复中...
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-white rounded-b-[2.5rem] flex gap-3">
          <input 
            autoFocus
            type="text" 
            placeholder="问问免费试听课的时间？"
            className="flex-grow px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 font-bold transition-all"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="bg-red-600 text-white p-4 rounded-2xl hover:bg-red-700 transition-all active:scale-90 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
