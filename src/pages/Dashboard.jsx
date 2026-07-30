// src/pages/Dashboard.jsx
import { useState } from "react";
import { useMenu } from "../context/MenuContext";
import DishCard from "../components/DishCard";
import AdminModal from "../components/AdminModal";
import { LayoutDashboard, FolderOpen, Utensils, Settings, LogOut, Plus, Edit, Trash2 } from "lucide-react";

export default function Dashboard() {
  const { dishes, categories, deleteDish, deleteCategory, setCurrentView } = useMenu();

  const [activeTab, setActiveTab] = useState("dishes"); // "dishes" | "categories"
  
  // Состояния форм
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("dish"); // "dish" | "category"
  const [selectedItem, setSelectedItem] = useState(null);

  // Подтверждение деструктивного действия
  const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, type: "", id: null, name: "" });

  const handleOpenAdd = (type) => {
    setModalType(type);
    setSelectedItem(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (item, type) => {
    setModalType(type);
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleRequestDelete = (id, name, type) => {
    setDeleteConfirm({ isOpen: true, type, id, name });
  };

  const handleExecuteDelete = async () => {
    if (deleteConfirm.type === "dish") {
      await deleteDish(deleteConfirm.id);
    } else {
      await deleteCategory(deleteConfirm.id);
    }
    setDeleteConfirm({ isOpen: false, type: "", id: null, name: "" });
  };

  return (
    <div className="flex min-h-screen bg-[#090909] text-white">
      
      {/* ЛЕВЫЙ СИДБАР (ВЕРТИКАЛЬНЫЙ) */}
      <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-white/5 bg-[#111111] p-6 md:flex">
        <div className="space-y-8">
          <div className="border-b border-[#D4AF37]/15 pb-4">
            <h2 className="font-serif text-lg font-bold text-[#F5D76E]">Админ-панель</h2>
            <p className="text-[10px] uppercase tracking-wider text-[#BEBEBE]">Система управления</p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("dashboard_stats")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                activeTab === "dashboard_stats" ? "bg-[#D4AF37] text-black" : "text-[#BEBEBE] hover:bg-white/5"
              }`}
            >
              <LayoutDashboard className="h-4.5 w-4.5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                activeTab === "categories" ? "bg-[#D4AF37] text-black" : "text-[#BEBEBE] hover:bg-white/5"
              }`}
            >
              <FolderOpen className="h-4.5 w-4.5" />
              Категории
            </button>
            <button
              onClick={() => setActiveTab("dishes")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                activeTab === "dishes" ? "bg-[#D4AF37] text-black" : "text-[#BEBEBE] hover:bg-white/5"
              }`}
            >
              <Utensils className="h-4.5 w-4.5" />
              Блюда
            </button>
            <button
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#BEBEBE]/40 cursor-not-allowed"
              disabled
            >
              <Settings className="h-4.5 w-4.5" />
              Настройки
            </button>
          </nav>
        </div>

        <button
          onClick={() => setCurrentView("user")}
          className="flex w-full items-center gap-3 rounded-xl bg-red-500/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-red-400 transition hover:bg-red-500/20"
        >
          <LogOut className="h-4.5 w-4.5" />
          Выход
        </button>
      </aside>

      {/* ОСНОВНОЙ КОНТЕНТ Dashboard */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* Мобильная панель навигации */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 md:hidden mb-6">
          <h2 className="font-serif text-lg font-bold text-[#F5D76E]">Панель управления</h2>
          <button
            onClick={() => setCurrentView("user")}
            className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-[11px] font-bold text-red-400"
          >
            <LogOut className="h-3.5 w-3.5" />
            Выйти
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 md:hidden mb-6">
          <button
            onClick={() => setActiveTab("categories")}
            className={`py-2.5 text-xs font-bold uppercase rounded-xl transition ${activeTab === "categories" ? "bg-[#D4AF37] text-black" : "bg-[#111111]"}`}
          >
            Категории
          </button>
          <button
            onClick={() => setActiveTab("dishes")}
            className={`py-2.5 text-xs font-bold uppercase rounded-xl transition ${activeTab === "dishes" ? "bg-[#D4AF37] text-black" : "bg-[#111111]"}`}
          >
            Блюда
          </button>
        </div>

        {/* УПРАВЛЕНИЕ БЛЮДАМИ */}
        {activeTab === "dishes" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-serif font-bold text-white">Блюда</h1>
                <p className="text-xs text-[#BEBEBE]">Редактирование, добавление и удаление позиций вашего меню</p>
              </div>
              <button
                onClick={() => handleOpenAdd("dish")}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-6 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:brightness-110 transition active:scale-95"
              >
                <Plus className="h-4.5 w-4.5 stroke-[2.5]" />
                Добавить блюдо
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  isAdmin={true}
                  onEdit={(item) => handleOpenEdit(item, "dish")}
                  onDelete={(item) => handleRequestDelete(item.id, item.name, "dish")}
                />
              ))}
            </div>
          </div>
        )}

        {/* УПРАВЛЕНИЕ КАТЕГОРИЯМИ */}
        {activeTab === "categories" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-serif font-bold text-white">Категории</h1>
                <p className="text-xs text-[#BEBEBE]">Разделы, по которым группируются блюда вашего меню</p>
              </div>
              <button
                onClick={() => handleOpenAdd("category")}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-6 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:brightness-110 transition active:scale-95"
              >
                <Plus className="h-4.5 w-4.5 stroke-[2.5]" />
                Добавить категорию
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#171717] p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm font-bold text-white">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleOpenEdit(cat, "category")}
                      className="rounded-lg bg-white/5 p-2 text-white/60 transition hover:bg-[#D4AF37]/20 hover:text-[#D4AF37]"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleRequestDelete(cat.id, cat.name, "category")}
                      className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Метрики (DASHBOARD STATS) */}
        {activeTab === "dashboard_stats" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-serif font-bold text-white">Статистика заведения</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/5 bg-[#171717] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Блюд в меню</p>
                <p className="text-4xl font-extrabold mt-2">{dishes.length}</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[#171717] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Категории</p>
                <p className="text-4xl font-extrabold mt-2">{categories.length}</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[#171717] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Активные хиты</p>
                <p className="text-4xl font-extrabold mt-2">{dishes.filter((d) => d.isHit).length}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* МОДАЛЬНЫЕ ОКНА УПРАВЛЕНИЯ */}
      <AdminModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        targetItem={selectedItem}
        type={modalType}
      />

      {/* КРАСИВОЕ ДИАЛОГОВОЕ ОКНО ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ */}
      {deleteConfirm.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div onClick={() => setDeleteConfirm({ isOpen: false, type: "", id: null, name: "" })} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          <div className="relative w-full max-w-sm rounded-2xl border border-red-500/30 bg-[#111111] p-6 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-white">Вы действительно хотите удалить?</h3>
            <p className="mt-2 text-xs text-[#BEBEBE]">Действие удалит «<span className="text-[#F5D76E]">{deleteConfirm.name}</span>» безвозвратно.</p>
            <div className="mt-6 flex items-center gap-2">
              <button
                onClick={() => setDeleteConfirm({ isOpen: false, type: "", id: null, name: "" })}
                className="flex-1 rounded-xl bg-white/5 py-3 text-xs font-bold uppercase text-white transition hover:bg-white/10"
              >
                Отмена
              </button>
              <button
                onClick={handleExecuteDelete}
                className="flex-1 rounded-xl bg-red-600 py-3 text-xs font-bold uppercase text-white transition hover:bg-red-700"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}