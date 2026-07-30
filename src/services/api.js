// src/services/api.js

const INITIAL_CATEGORIES = [
  { id: "1", name: "Торты & Десерты", icon: "🍰" },
  { id: "2", name: "Национальная самса", icon: "🥟" },
  { id: "3", name: "Фирменный чай", icon: "🫖" },
  { id: "4", name: "Премиум кофе", icon: "☕" }
];

const INITIAL_DISHES = [
  {
    id: "101",
    categoryId: "1",
    name: "Шоколадный шедевр",
    price: 320,
    description: "Нежнейший бисквит на основе натурального бельгийского шоколада с добавлением тающего мусса.",
    ingredients: "Бельгийский шоколад, сливки 33%, тростниковый сахар, какао элитных сортов, свежие ягоды.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    isHit: true,
    isNew: false
  },
  {
    id: "102",
    categoryId: "2",
    name: "Самса с рубленой говядиной",
    price: 180,
    description: "Хрустящее слоеное тесто, сочная начинка из отборного мяса со специями, приготовленная в традиционном тандыре.",
    ingredients: "Мука высшего сорта, мраморная говядина, курдючный жир, зира, лук репчатый, черный перец.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600",
    isHit: false,
    isNew: true
  },
  {
    id: "103",
    categoryId: "3",
    name: "Таджикский горный чай",
    price: 150,
    description: "Сбор целебных трав предгорья Согдийской области с добавлением сушеного барбариса и лимона.",
    ingredients: "Душица, чабрец, шиповник, мята, черный крупнолистовой чай, лимон.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
    isHit: true,
    isNew: false
  }
];

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

const getStoredData = (key, initial) => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(data);
};

const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const api = {
  // Категории
  async getCategories() {
    await delay();
    return getStoredData("qr_categories", INITIAL_CATEGORIES);
  },
  async addCategory(category) {
    await delay();
    const categories = getStoredData("qr_categories", INITIAL_CATEGORIES);
    const newCategory = { ...category, id: Date.now().toString() };
    categories.push(newCategory);
    setStoredData("qr_categories", categories);
    return newCategory;
  },
  async editCategory(id, updatedCategory) {
    await delay();
    let categories = getStoredData("qr_categories", INITIAL_CATEGORIES);
    categories = categories.map((c) => (c.id === id ? { ...c, ...updatedCategory } : c));
    setStoredData("qr_categories", categories);
    return { id, ...updatedCategory };
  },
  async deleteCategory(id) {
    await delay();
    let categories = getStoredData("qr_categories", INITIAL_CATEGORIES);
    categories = categories.filter((c) => c.id !== id);
    setStoredData("qr_categories", categories);
    return id;
  },

  // Блюда
  async getMenu() {
    await delay();
    return getStoredData("qr_dishes", INITIAL_DISHES);
  },
  async addDish(dish) {
    await delay();
    const dishes = getStoredData("qr_dishes", INITIAL_DISHES);
    const newDish = { ...dish, id: Date.now().toString(), price: Number(dish.price) };
    dishes.push(newDish);
    setStoredData("qr_dishes", dishes);
    return newDish;
  },
  async editDish(id, updatedDish) {
    await delay();
    let dishes = getStoredData("qr_dishes", INITIAL_DISHES);
    const parsedDish = { ...updatedDish, price: Number(updatedDish.price) };
    dishes = dishes.map((d) => (d.id === id ? { ...d, ...parsedDish } : d));
    setStoredData("qr_dishes", dishes);
    return { id, ...parsedDish };
  },
  async deleteDish(id) {
    await delay();
    let dishes = getStoredData("qr_dishes", INITIAL_DISHES);
    dishes = dishes.filter((d) => d.id !== id);
    setStoredData("qr_dishes", dishes);
    return id;
  }
};