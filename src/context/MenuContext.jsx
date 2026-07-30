// src/context/MenuContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentLang, setCurrentLang] = useState("RU");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("user"); // "user" | "admin"

  const languages = [
    { code: "RU", label: "Русский" },
    { code: "TJ", label: "Тоҷикӣ" },
    { code: "EN", label: "English" }
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      const [cats, items] = await Promise.all([api.getCategories(), api.getMenu()]);
      setCategories(cats);
      setDishes(items);
    } catch (err) {
      console.error("Ошибка при получении данных:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const stored = localStorage.getItem("qr_favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("qr_favorites", JSON.stringify(updated));
  };

  // Обертки над API для мгновенного рендеринга
  const handleAddDish = async (dish) => {
    const fresh = await api.addDish(dish);
    setDishes((prev) => [...prev, fresh]);
  };

  const handleEditDish = async (id, dish) => {
    const updated = await api.editDish(id, dish);
    setDishes((prev) => prev.map((d) => (d.id === id ? updated : d)));
  };

  const handleDeleteDish = async (id) => {
    await api.deleteDish(id);
    setDishes((prev) => prev.filter((d) => d.id !== id));
  };

  const handleAddCategory = async (cat) => {
    const fresh = await api.addCategory(cat);
    setCategories((prev) => [...prev, fresh]);
  };

  const handleEditCategory = async (id, cat) => {
    const updated = await api.editCategory(id, cat);
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const handleDeleteCategory = async (id) => {
    await api.deleteCategory(id);
    setCategories((prev) => prev.filter((c) => c.id !== id));
    if (selectedCategory === id) setSelectedCategory("all");
  };

  return (
    <MenuContext.Provider
      value={{
        categories,
        dishes,
        selectedCategory,
        setSelectedCategory,
        currentLang,
        setCurrentLang,
        languages,
        favorites,
        toggleFavorite,
        loading,
        currentView,
        setCurrentView,
        addDish: handleAddDish,
        editDish: handleEditDish,
        deleteDish: handleDeleteDish,
        addCategory: handleAddCategory,
        editCategory: handleEditCategory,
        deleteCategory: handleDeleteCategory
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);