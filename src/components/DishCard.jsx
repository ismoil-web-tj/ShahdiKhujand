// src/components/DishCard.jsx
import { useMenu } from "../context/MenuContext";
import { Heart, Edit, Trash2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DishCard({ dish, isAdmin, onEdit, onDelete, onViewDetails }) {
  const { favorites, toggleFavorite } = useMenu();
  const isFavorite = favorites.includes(dish.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#171717] p-3 transition-all duration-300 hover:border-[#D4AF37]/35 hover:shadow-[0_10px_30px_rgba(212,175,55,0.06)]"
    >
      {/* Мягкие золотые ленты для Хитов/Новинок */}
      <div className="absolute left-5 top-5 z-10 flex flex-col gap-1">
        {dish.isHit && (
          <span className="rounded bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-widest text-black shadow-md">
            HIT
          </span>
        )}
        {dish.isNew && (
          <span className="rounded bg-white px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-widest text-black shadow-md">
            NEW
          </span>
        )}
      </div>

      <div>
        {/* Изображение блюда */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#090909]">
          <img
            src={dish.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400"}
            alt={dish.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 via-transparent to-transparent" />
        </div>

        {/* Информационный сектор */}
        <div className="mt-4 px-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-base font-bold text-white transition-colors group-hover:text-[#F5D76E] line-clamp-1">
              {dish.name}
            </h3>
            <span className="text-base font-extrabold text-[#D4AF37] shrink-0">
              {dish.price} ₽
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[#BEBEBE] line-clamp-2">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Панель взаимодействия */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/5 pt-3">
        {!isAdmin ? (
          <>
            <button
              onClick={() => onViewDetails(dish)}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/90 transition hover:text-[#F5D76E]"
            >
              Подробнее
              <ChevronRight className="h-4 w-4 text-[#D4AF37]" />
            </button>

            <button
              onClick={() => toggleFavorite(dish.id)}
              className="rounded-xl bg-white/5 p-2.5 text-white/60 transition hover:bg-red-500/15 hover:text-red-400 active:scale-90"
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </button>
          </>
        ) : (
          <div className="flex w-full items-center gap-2">
            <button
              onClick={() => onEdit(dish)}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-[#D4AF37]/10 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#F5D76E] transition hover:bg-[#D4AF37]/20"
            >
              <Edit className="h-3.5 w-3.5" />
              Изменить
            </button>
            <button
              onClick={() => onDelete(dish)}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-red-500/10 py-2.5 text-[11px] font-bold uppercase tracking-wider text-red-400 transition hover:bg-red-500/20"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Удалить
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}