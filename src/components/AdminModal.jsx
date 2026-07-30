// src/components/AdminModal.jsx
import { useState, useEffect } from "react";
import { useMenu } from "../context/MenuContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminModal({ isOpen, onClose, targetItem, type = "dish" }) {
  const { categories, addDish, editDish, addCategory, editCategory } = useMenu();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: "",
    description: "",
    ingredients: "",
    image: "",
    isHit: false,
    isNew: false,
    icon: "🍽️"
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (targetItem) {
      setFormData({
        name: targetItem.name || "",
        price: targetItem.price || "",
        categoryId: targetItem.categoryId || (categories[0]?.id || ""),
        description: targetItem.description || "",
        ingredients: targetItem.ingredients || "",
        image: targetItem.image || "",
        isHit: targetItem.isHit || false,
        isNew: targetItem.isNew || false,
        icon: targetItem.icon || "🍽️"
      });
    } else {
      setFormData({
        name: "",
        price: "",
        categoryId: categories[0]?.id || "",
        description: "",
        ingredients: "",
        image: "",
        isHit: false,
        isNew: false,
        icon: "🍽️"
      });
    }
  }, [targetItem, isOpen, categories]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (type === "dish") {
        if (targetItem) {
          await editDish(targetItem.id, formData);
        } else {
          await addDish(formData);
        }
      } else {
        if (targetItem) {
          await editCategory(targetItem.id, { name: formData.name, icon: formData.icon });
        } else {
          await addCategory({ name: formData.name, icon: formData.icon });
        }
      }
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const isEdit = !!targetItem;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#D4AF37]/30 bg-[#111111] p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#D4AF37]/10 pb-4">
            <h2 className="font-serif text-xl font-bold text-[#F5D76E]">
              {isEdit ? "Изменить" : "Добавить"}{" "}
              {type === "dish" ? "блюдо" : "категорию"}
            </h2>
            <button onClick={onClose} className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {type === "dish" ? (
              <>
                <div>
                  <label className="text-xs font-semibold text-[#BEBEBE]">Фото (URL-адрес)</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
                    placeholder="https://images.unsplash.com/..."
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#BEBEBE]">Название</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#BEBEBE]">Цена</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#BEBEBE]">Категория</label>
                  <select
                    value={formData.categoryId}
                    onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#BEBEBE]">Описание</label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#BEBEBE]">Состав</label>
                  <textarea
                    rows={2}
                    value={formData.ingredients}
                    onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="flex gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-white">
                    <input
                      type="checkbox"
                      checked={formData.isHit}
                      onChange={(e) => setFormData({ ...formData, isHit: e.target.checked })}
                      className="accent-[#D4AF37]"
                    />
                    Хит продаж
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-white">
                    <input
                      type="checkbox"
                      checked={formData.isNew}
                      onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                      className="accent-[#D4AF37]"
                    />
                    Новинка
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-[#BEBEBE]">Название категории</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#BEBEBE]">Иконка (Emoji)</label>
                    <input
                      type="text"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      className="mt-1 w-full text-center rounded-xl border border-white/5 bg-[#171717] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                      maxLength={2}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-xl bg-white/5 py-3.5 text-xs font-bold uppercase text-white transition hover:bg-white/10"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] py-3.5 text-xs font-bold uppercase text-black transition hover:brightness-110"
              >
                {saving ? "Сохранение..." : "Сохранить"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}