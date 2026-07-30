// src/components/DishModal.jsx
import { X, Heart } from "lucide-react";
import { useMenu } from "../context/MenuContext";
import { motion, AnimatePresence } from "framer-motion";

export default function DishModal({ dish, onClose }) {
  const { favorites, toggleFavorite } = useMenu();
  const isFavorite = favorites.includes(dish?.id);

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {/* Затемнение заднего плана с блюром */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Сама карточка в деталях */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#D4AF37]/30 bg-[#111111] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Кнопка выхода */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-white/80 transition hover:bg-[#D4AF37]/20 hover:text-[#D4AF37]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Изображение */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#090909]">
            <img
              src={dish.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600"}
              alt={dish.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-5">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-2xl font-bold text-white leading-tight">
                {dish.name}
              </h2>
              <span className="shrink-0 text-xl font-extrabold text-[#D4AF37]">
                {dish.price} ₽
              </span>
            </div>

            {/* Описание */}
            <div className="mt-4 border-t border-white/5 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Описание</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-[#BEBEBE]">
                {dish.description}
              </p>
            </div>

            {/* Состав */}
            {dish.ingredients && (
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Состав</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#BEBEBE]/80">
                  {dish.ingredients}
                </p>
              </div>
            )}

            {/* Кнопка добавления в Избранное */}
            <div className="mt-6 pt-3">
              <button
                onClick={() => toggleFavorite(dish.id)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#D4AF37]/20 active:scale-95"
              >
                <Heart className={`h-4.5 w-4.5 ${isFavorite ? "fill-red-500 text-red-500" : "text-[#D4AF37]"}`} />
                {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}