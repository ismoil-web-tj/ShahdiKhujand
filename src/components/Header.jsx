// src/components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/images.jpg";

export default function ConfectioneryHeader() {
  const { lang, setLang } = useLanguage(); 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "RU", label: "Русский" },
    { code: "TJ", label: "Тоҷикӣ" },
    { code: "EN", label: "English" }
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative bg-[#FAF6F0] border-b border-[#EADFC9] z-40">
      {/* Мягкое золотисто-кремовое свечение в центре */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-36 w-64 -translate-x-1/2 rounded-full bg-[#E4C590]/15 blur-2xl" />

      <div className="relative mx-auto flex h-[90px] max-w-md items-center justify-between gap-3 px-5">
        
        {/* LOGO + BRAND */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Изящное оформление логотипа с тонкой золотистой рамкой */}
          <div className="h-14 w-14 shrink-0 rounded-full border border-[#D4AF37]/35 p-[2px] shadow-[0_4px_12px_rgba(154,123,79,0.06)] bg-[#FAF6F0]">
            <div className="h-full w-full overflow-hidden rounded-full bg-white">
              <img
                src={logo}
                alt="Shahdi Khujand"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="min-w-0">
            {/* Насыщенный тёплый древесный цвет для названия */}
            <h1 className="truncate font-serif text-[19px] font-bold tracking-wide text-[#3D2E20]">
              Шахди Хуҷанд
            </h1>
            {/* Благородный золотисто-бронзовый цвет для подзаголовка */}
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.35em] text-[#9A7B4F]">
              Premium Bakery
            </p>
          </div>
        </div>

        {/* SELECT LANGUAGE */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-white/75 px-3.5 py-1.5 text-xs font-semibold text-[#3D2E20] transition hover:border-[#D4AF37]/60 hover:bg-white active:scale-95 shadow-[0_2px_8px_rgba(154,123,79,0.04)]"
          >
            <span className="text-[#9A7B4F] text-[11px] font-bold uppercase">{lang}</span>
            <svg
              viewBox="0 0 20 20"
              className={`h-4 w-4 text-[#9A7B4F] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              fill="currentColor"
            >
              <path d="M5.5 7.5L10 12l4.5-4.5" />
            </svg>
          </button>

          {/* DROPDOWN MENU */}
          {isOpen && (
            <div className="absolute right-0 top-11 z-50 w-36 overflow-hidden rounded-2xl border border-[#EADFC9] bg-white/95 shadow-[0_12px_30px_rgba(61,46,32,0.08)] backdrop-blur-md">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLang(item.code);
                    setIsOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-xs text-[#3D2E20] transition hover:bg-[#FAF6F0] hover:text-[#9A7B4F]"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-bold text-[#9A7B4F]">{item.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}