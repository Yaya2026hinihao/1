
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold text-xl mb-6">中文口语小班</h4>
            <p className="text-sm leading-relaxed mb-6">
              专业的在线中文口语教育平台，致力于通过真实对话练习和双师资模式，帮助全球学习者轻松开口说中文。
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">FB</span>
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">IG</span>
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">YT</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">课程中心</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">1小时试听课</a></li>
              <li><a href="#" className="hover:text-white transition-colors">20节系统正式课</a></li>
              <li><a href="#" className="hover:text-white transition-colors">商务中文口语</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HSK 考试辅导</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span>📍</span> Jakarta, Indonesia / Online
              </li>
              <li className="flex items-center gap-3">
                <span>📧</span> contact@mandarinclass.com
              </li>
              <li className="flex items-center gap-3">
                <span>💬</span> WhatsApp: +62 812 XXXX XXXX
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Chinese Speaking Small Class. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
