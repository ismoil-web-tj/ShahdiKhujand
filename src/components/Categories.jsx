// src/components/Categories.jsx
import { useMenu } from "../context/MenuContext";

export default function Categories() {
  const { categories, selectedCategory, setSelectedCategory } = useMenu();

  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-4 pt-2">
      <button
        onClick={() => setSelectedCategory("all")}
        className={`shrink-0 rounded-xl px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
          selectedCategory === "all"
            ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
            : "border border-white/5 bg-[#171717] text-[#BEBEBE] hover:border-[#D4AF37]/40 hover:text-white"
        }`}
      >
        ✨ Все категории
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setSelectedCategory(cat.id)}
          className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            selectedCategory === cat.id
              ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
              : "border border-white/5 bg-[#171717] text-[#BEBEBE] hover:border-[#D4AF37]/40 hover:text-white"
          }`}
        >
          <span className="text-sm">{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}