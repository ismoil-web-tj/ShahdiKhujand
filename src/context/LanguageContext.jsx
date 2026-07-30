// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const HERO_TRANSLATIONS = {
  RU: {
    badge: "PREMIUM CONFECTIONERY",
    title: "Шахди Хучанд",
    subtitle: "Кондитерские шедевры ручной работы и восточные сладости премиум-класса",
    openMenu: "Открыть меню",
    hours: "10:00 - 23:00",
    statLabels: {
      rating: "Рейтинг",
      hours: "Часы",
      dishes: "Блюд",
    }
  },
  TJ: {
    badge: "ҚАННОДИИ ПРЕМИУМ",
    title: "Шаҳди Хуҷанд",
    subtitle: "Шоҳкориҳои қаннодии дастӣ ва шириниҳои шарқии дараҷаи олӣ",
    openMenu: "Кушодани меню",
    hours: "10:00 - 23:00",
    statLabels: {
      rating: "Рейтинг",
      hours: "Соатҳо",
      dishes: "Шириниҳо",
    }
  },
  EN: {
    badge: "PREMIUM CONFECTIONERY",
    title: "Shahdi Khujand",
    subtitle: "Handcrafted confectionery masterpieces and premium-class Eastern sweets",
    openMenu: "Open Menu",
    hours: "10:00 - 23:00",
    statLabels: {
      rating: "Rating",
      hours: "Hours",
      dishes: "Sweets",
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_lang");
      return saved ? saved : "RU";
    }
    return "RU";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
  }, [lang]);

  const t = HERO_TRANSLATIONS[lang] || HERO_TRANSLATIONS["RU"];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}