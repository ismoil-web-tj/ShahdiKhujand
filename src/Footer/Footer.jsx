// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#FAF6F0] text-[#3D2E20] border-t border-[#D4AF37]/30 font-sans top-[-200]">
      {/* Тёплый свет внизу */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-2xl" />

      <div className="relative mx-auto max-w-md pt-16 pb-8 px-5">
        <div className="grid grid-cols-2 gap-8 items-start">
          
          {/* Колонка 1 - Логотип и Социальные сети */}
          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-[#9A7B4F] text-xl font-serif font-bold tracking-tight uppercase">
              Шаҳди Хуҷанд
            </h2>
            <p className="text-[#3D2E20]/80 text-xs font-semibold uppercase tracking-wider">
              Premium Bakery
            </p>
            
            {/* Иконки социальных сетей */}
            <div className="flex gap-2.5 mt-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 border border-[#9A7B4F]/40 rounded-full flex items-center justify-center text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-[#FAF6F0] transition-colors shadow-sm"
              >
                {/* Instagram SVG */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/992921234567" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 border border-[#9A7B4F]/40 rounded-full flex items-center justify-center text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-[#FAF6F0] transition-colors shadow-sm"
              >
                {/* WhatsApp SVG */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 border border-[#9A7B4F]/40 rounded-full flex items-center justify-center text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-[#FAF6F0] transition-colors shadow-sm"
              >
                {/* TikTok SVG */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-3.932 1.328 6.395 6.395 0 0 0-2.654 6.3 6.42 6.42 0 0 0 6.42 6.42A6.417 6.417 0 0 0 20.2 13.68V9.167a8.217 8.217 0 0 0 4.14 1.583V7.32a4.783 4.783 0 0 1-4.751-4.751Z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Колонка 2 - Контакты */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#9A7B4F] text-xs font-black tracking-[0.25em] uppercase">
              ТАМОС
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-0.5">
                <span className="text-[#9A7B4F]/75 text-[10px] uppercase tracking-widest font-bold">СУРОҒА</span>
                <span className="text-[#3D2E20] text-xs font-semibold">Хуҷанд, к. Шарқ, 15</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[#9A7B4F]/75 text-[10px] uppercase tracking-widest font-bold">ТЕЛЕФОН</span>
                <a href="tel:+992921234567" className="text-[#3D2E20] text-xs font-bold hover:text-[#9A7B4F] transition-colors">+992 92 123 4567</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Копирайт и декоративная кнопка */}
        <div className="relative mt-12 pt-5 border-t border-[#D4AF37]/20 flex items-center justify-between">
          <span className="text-[10px] text-[#3D2E20]/60 font-semibold tracking-wide">
            © 2024 Shahdi Khujand. Все права защищены.
          </span>
          
          {/* Декоративный значок замка, как на макете */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;