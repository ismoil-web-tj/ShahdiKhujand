// // src/components/Hero.jsx
// import { supabase } from "../supabase";
// import { useEffect, useState, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import {
//   Star,
//   Clock,
//   Utensils,
//   Heart,
//   ArrowLeft,
//   X,
//   ArrowDown
// } from "lucide-react";

// const UI_TRANSLATIONS = {
//   TJ: {
//     badge: "КАННОДИИ ПРЕМИУМ",
//     title: "Шаҳди Хуҷанд",
//     openMenu: " МЕНЮ",
//     rating: "Рейтинг",
//     hoursLabel: "Соатҳо",
//     sweetsLabel: "Шириниҳо",
//     hours: "7:00 - 00:00",
//     sweetsValue: "100+",
//     adminPanel: "Режими администратор",
//     adminDesc: "Тағйиротро дар вақти воқеӣ ворид кунед",
//     exit: "Баромад",
//     addDish: "➕ Иловаи таом / десерт",
//     adminButton: "Мудир",
//     adminTitle: "Панели дастрасӣ",
//     adminChoiceDesc: "Режими намоишро интихоб кунед",
//     enterPassword: "Рамзро ворид кунед (Пароль)",
//     cancel: "Қатъ",
//     login: "Вход",
//     emptyFav: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст...",
//     loading: "Боргузорӣ...",
//     editBtn: "Правка",
//     delBtn: "Нест кардан",
//     saveBtn: "Хифз кардан",
//     savingBtn: "Дар ҳоли илова...",
//     updatingBtn: "Дар ҳоли тағйир...",
//     deletingBtn: "Дар ҳоли нест кардан...",
//     formImageLabel: "Акси таом",
//     formSelectImage: "Аксро интихоб кунед",
//     formPriceLabel: "Нарх",
//     formCategoryLabel: "Категория",
//     formBestsellerLabel: "Хити фурӯш",
//     formNewLabel: "Навтарин",
//     confirmDeleteTitle: "Оё ҳақиқатдан мехоҳед нест кунед?",
//     confirmDeleteDesc: "бо таври ҳамешагӣ нест карда мешавад.",
//     confirmDeleteBtn: "Нест кардан"
//   },
//   RU: {
//     badge: "ПРЕМИУМ ВЫПЕЧКА",
//     title: "Шахди Хужанд",
//     openMenu: "ОТКРЫТЬ МЕНЮ",
//     rating: "Рейтинг",
//     hoursLabel: "Часы работы",
//     sweetsLabel: "Сладости",
//     hours: "7:00 - 00:00",
//     sweetsValue: "100+",
//     adminPanel: "Режим администратора",
//     adminDesc: "Вносите изменения в режиме реального времени",
//     exit: "Выйти",
//     addDish: "➕ Добавить блюдо / десерт",
//     adminButton: "Админ",
//     adminTitle: "Панель доступа",
//     adminChoiceDesc: "Выберите необходимый режим просмотра",
//     enterPassword: "Введите пароль для входа",
//     cancel: "Отмена",
//     login: "Войти",
//     emptyFav: "Список избранного пока пуст...",
//     loading: "Загрузка...",
//     editBtn: "Правка",
//     delBtn: "Удалить",
//     saveBtn: "Сохранить",
//     savingBtn: "Добавляется...",
//     updatingBtn: "Изменяется...",
//     deletingBtn: "Удаляется...",
//     formImageLabel: "Фото блюда",
//     formSelectImage: "Выберите изображение",
//     formPriceLabel: "Цена",
//     formCategoryLabel: "Категория",
//     formBestsellerLabel: "Хит продаж",
//     formNewLabel: "Новинка",
//     confirmDeleteTitle: "Вы действительно хотите удалить?",
//     confirmDeleteDesc: "будет удалено навсегда.",
//     confirmDeleteBtn: "Удалить"
//   },
//   EN: {
//     badge: "PREMIUM BAKERY",
//     title: "Shahdi Khujand",
//     openMenu: "OPEN MENU",
//     rating: "Rating",
//     hoursLabel: "Hours",
//     sweetsLabel: "Sweets",
//     hours: "7:00 - 00:00",
//     sweetsValue: "100+",
//     adminPanel: "Admin Mode",
//     adminDesc: "Make changes in real-time",
//     exit: "Exit",
//     addDish: "➕ Add Dish / Dessert",
//     adminButton: "Admin",
//     adminTitle: "Access Panel",
//     adminChoiceDesc: "Select the viewing mode",
//     enterPassword: "Enter administrator password",
//     cancel: "Cancel",
//     login: "Login",
//     emptyFav: "Your favorites list is currently empty...",
//     loading: "Loading...",
//     editBtn: "Edit",
//     delBtn: "Delete",
//     saveBtn: "Save",
//     savingBtn: "Adding...",
//     updatingBtn: "Updating...",
//     deletingBtn: "Deleting...",
//     formImageLabel: "Dish photo",
//     formSelectImage: "Select image",
//     formPriceLabel: "Price",
//     formCategoryLabel: "Category",
//     formBestsellerLabel: "Bestseller",
//     formNewLabel: "New Arrival",
//     confirmDeleteTitle: "Are you sure you want to delete?",
//     confirmDeleteDesc: "will be permanently deleted.",
//     confirmDeleteBtn: "Delete"
//   }
// };

// const MENU_UI = {
//   TJ: {
//     backToCategories: "← Бозгашт ба категорияҳо",
//     emptyCategory: "Ин бахш ҳоло холӣ аст...",
//     emptyFavorites: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст...",
//     compositionLabel: "Таркиби таом:",
//     closeLabel: "Пӯшидан",
//     ingredientsArrow: "Таркиб",
//     menuHeaderTitle: "Менюи мо",
//     bestsellerLabel: "Хитҳои фурӯш",
//     newArrivalsLabel: "Навтаринҳо",
//     favoritesLabel: "Дӯстдоштаҳо",
//     allCakesLabel: "Ҳамаи тортҳо",
//     cakeSubcategoryLabel: "Намуди торт",
//     subcategories: {
//       kids: "Кӯдакона",
//       adults: "Барои калонсолон",
//       bento: "Бенто-тортҳо",
//       wedding: "Тортҳои тӯёна"
//     },
//     pastrySubcategories: {
//       art: "Арт-десертҳо",
//       desserts: "Десертҳо",
//       slice: "Пирожниҳои порчагӣ",
//       bakery: "Қаннодӣ"
//     },
//     categories: [
//       { id: "burgers", name: "Бургерҳо", icon: "🍔" },
//       { id: "breakfasts", name: "Ноништаҳо", icon: "🍳" },
//       { id: "waffles", name: "Вафлиҳо", icon: "🧇" },
//       { id: "pizza", name: "Питса", icon: "🍕" },
//       { id: "pastries", name: "Пирожниҳо", icon: "🧁" },
//       { id: "cakes", name: "Тортҳо", icon: "🍰" },
//       { id: "drinks", name: "Нӯшокиҳо", icon: "🍹" },
//       { id: "coffee", name: "Кофе", icon: "☕" },
//     ]
//   },
//   RU: {
//     backToCategories: "← Назад к категориям",
//     emptyCategory: "Раздел наполняется вкусными новинками...",
//     emptyFavorites: "Список избранного пока пуст...",
//     compositionLabel: "Состав блюда:",
//     closeLabel: "Закрыть",
//     ingredientsArrow: "Состав",
//     menuHeaderTitle: "Наше Меню",
//     bestsellerLabel: "Хиты продаж",
//     newArrivalsLabel: "Новинки",
//     favoritesLabel: "Избранное",
//     allCakesLabel: "Все торты",
//     cakeSubcategoryLabel: "Тип торта",
//     subcategories: {
//       kids: "Детские торты",
//       adults: "Взрослые торты",
//       bento: "Бенто торты",
//       wedding: "Свадебные торты"
//     },
//     pastrySubcategories: {
//       art: "Арт-десерты",
//       desserts: "Десерты",
//       slice: "Кусковые пирожные",
//       bakery: "Выпечка"
//     },
//     categories: [
//       { id: "burgers", name: "Бургеры", icon: "🍔" },
//       { id: "breakfasts", name: "Завтраки", icon: "🍳" },
//       { id: "waffles", name: "Вафли", icon: "🧇" },
//       { id: "pizza", name: "Пицца", icon: "🍕" },
//       { id: "pastries", name: "Пирожные", icon: "🧁" },
//       { id: "cakes", name: "Торты", icon: "🍰" },
//       { id: "drinks", name: "Напитки", icon: "🍹" },
//       { id: "coffee", name: "Кофе", icon: "☕" },
//     ]
//   },
//   EN: {
//     backToCategories: "← Back to categories",
//     emptyCategory: "This section is being filled with yummy food...",
//     emptyFavorites: "Your favorites list is currently empty...",
//     compositionLabel: "Ingredients:",
//     closeLabel: "Close",
//     ingredientsArrow: "Ingredients",
//     menuHeaderTitle: "Our Menu",
//     bestsellerLabel: "Bestsellers",
//     newArrivalsLabel: "New Arrivals",
//     favoritesLabel: "Favorites",
//     allCakesLabel: "All Cakes",
//     cakeSubcategoryLabel: "Cake Type",
//     subcategories: {
//       kids: "Kids' Cakes",
//       adults: "Adult Cakes",
//       bento: "Bento Cakes",
//       wedding: "Wedding Cakes"
//     },
//     pastrySubcategories: {
//       art: "Art Desserts",
//       desserts: "Desserts",
//       slice: "Slice Cakes",
//       bakery: "Bakery"
//     },
//     categories: [
//       { id: "burgers", name: "Burgers", icon: "🍔" },
//       { id: "breakfasts", name: "Breakfasts", icon: "🍳" },
//       { id: "waffles", name: "Waffles", icon: "🧇" },
//       { id: "pizza", name: "Pizza", icon: "🍕" },
//       { id: "pastries", name: "Pastries", icon: "🧁" },
//       { id: "cakes", name: "Cakes", icon: "🍰" },
//       { id: "drinks", name: "Drinks", icon: "🍹" },
//       { id: "coffee", name: "Coffee", icon: "☕" },
//     ]
//   }
// };

// export default function Hero({
//   backgroundImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
//   onOpenMenu,
// }) {
//   const { lang } = useLanguage();
//   const [mounted, setMounted] = useState(false);

//   // Состояния для работы с API данных
//   const [dishes, setDishes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showMenu, setShowMenu] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const [selectedCakeSubcategory, setSelectedCakeSubcategory] = useState("all");
//   const [selectedPastrySubcategory, setSelectedPastrySubcategory] = useState("all");

//   const [activeDish, setActiveDish] = useState(null);
//   // --- СОСТОЯНИЯ АДМИН-ПАНЕЛИ ---
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [authModalOpen, setAuthModalOpen] = useState(false);
//   const [passwordModalOpen, setPasswordModalOpen] = useState(false);
//   const [passwordInput, setPasswordInput] = useState("");
//   const [authError, setAuthError] = useState("");

//   // Модальные окна CRUD
//   const [dishModalOpen, setDishModalOpen] = useState(false);
//   const [editingDish, setEditingDish] = useState(null);
//   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
//   const [dishToDelete, setDishToDelete] = useState(null);

//   // Статусы выполнения операций (для индикации на кнопках)
//   const [isSaving, setIsSaving] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isImageUploading, setIsImageUploading] = useState(false);

//   // Поля формы блюда (с поддержкой трех языков)
//   const [formNameTJ, setFormNameTJ] = useState("");
//   const [formNameRU, setFormNameRU] = useState("");
//   const [formNameEN, setFormNameEN] = useState("");

//   const [formDescriptionTJ, setFormDescriptionTJ] = useState("");
//   const [formDescriptionRU, setFormDescriptionRU] = useState("");
//   const [formDescriptionEN, setFormDescriptionEN] = useState("");

//   const [formCompositionTJ, setFormCompositionTJ] = useState("");
//   const [formCompositionRU, setFormCompositionRU] = useState("");
//   const [formCompositionEN, setFormCompositionEN] = useState("");

//   const [formPrice, setFormPrice] = useState("");
//   const [formCurrency, setFormCurrency] = useState("SMN");
//   const [formCategory, setFormCategory] = useState("pastries");
//   const [formSubCategory, setFormSubCategory] = useState("bento");
//   const [formBestseller, setFormBestseller] = useState(false);
//   const [formIsNew, setFormNew] = useState(false);
//   const [formImage, setFormImage] = useState("");

//   const ui = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS["TJ"];
//   const menuUiData = MENU_UI[lang] || MENU_UI["TJ"];

//   // Получение данных из API
//   const fetchDishes = async () => {
//     try {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("qrmenu")
//         .select("*")
//         .order("created_at", { ascending: true });

//       if (error) {
//         throw error;
//       }

//       setDishes(data);

//     } catch (err) {
//       console.error("Ошибка загрузки данных из Supabase:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   useEffect(() => {
//     const handleHeaderMenuClick = () => {
//       setAuthModalOpen(true);
//     };
//     window.addEventListener("open-menu-auth", handleHeaderMenuClick);
//     return () => {
//       window.removeEventListener("open-menu-auth", handleHeaderMenuClick);
//     };
//   }, []);

//   const [favorites, setFavorites] = useState(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("menu_favorites");
//       return saved ? JSON.parse(saved) : [];
//     }
//     return [];
//   });

//   const menuRef = useRef(null);

//   useEffect(() => {
//     localStorage.setItem("menu_favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   useEffect(() => {
//     const frame = requestAnimationFrame(() => setMounted(true));
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   const fade = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
//   const fadeCls = () => `transition-all duration-700 ease-out ${fade}`;
//   const delayStyle = (ms) => ({ transitionDelay: `${ms}ms` });

//   const handleOpenMenuClick = () => {
//     setShowMenu(true);
//     if (onOpenMenu) onOpenMenu();

//     setTimeout(() => {
//       menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 120);
//   };

//   const toggleFavorite = (id, e) => {
//     e.stopPropagation();
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
//     );
//   };

//   const handleAuthChoice = (choice) => {
//     setAuthModalOpen(false);
//     if (choice === "menu") {
//       handleOpenMenuClick();
//     } else if (choice === "admin") {
//       setPasswordModalOpen(true);
//       setPasswordInput("");
//       setAuthError("");
//     }
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (passwordInput === "shahd2012") {
//       setIsAdmin(true);
//       setPasswordModalOpen(false);
//       setShowMenu(true);
//       setTimeout(() => {
//         menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 100);
//     } else {
//       setAuthError(lang === "TJ" ? "Рамз нодуруст!" : lang === "RU" ? "Неверный пароль!" : "Incorrect password!");
//     }
//   };

//   const resetForm = () => {
//     setFormNameTJ("");
//     setFormNameRU("");
//     setFormNameEN("");

//     setFormDescriptionTJ("");
//     setFormDescriptionRU("");
//     setFormDescriptionEN("");

//     setFormCompositionTJ("");
//     setFormCompositionRU("");
//     setFormCompositionEN("");

//     setFormPrice("");
//     setFormCurrency("SMN");
//     setFormCategory("pastries");
//     setFormSubCategory("bento");

//     setFormBestseller(false);
//     setFormNew(false);

//     setFormImage("");
//     setIsImageUploading(false);
//   };

//   const uploadImageToStorage = async (blob) => {
//     if (!blob) return null;
//     const fileName = `${Date.now()}.jpg`;

//     const { error } = await supabase.storage
//       .from("qrmenu-images")
//       .upload(fileName, blob, {
//         contentType: "image/jpeg"
//       });

//     if (error) {
//       throw error;
//     }

//     const { data } = supabase.storage
//       .from("qrmenu-images")
//       .getPublicUrl(fileName);

//     return data.publicUrl;
//   };

//   // Сжатие изображения через canvas перед сохранением в state и фоновая отправка
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setIsImageUploading(true);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const img = new Image();
//       img.onload = () => {
//         const MAX_WIDTH = 800;
//         const scale = Math.min(1, MAX_WIDTH / img.width);
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width * scale;
//         canvas.height = img.height * scale;
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//         // Получаем файл в виде Blob для фоновой отправки
//         canvas.toBlob(async (blob) => {
//           if (!blob) {
//             console.error("Не удалось создать Blob");
//             setIsImageUploading(false);
//             return;
//           }

//           // Показываем временное превью мгновенно
//           const previewUrl = URL.createObjectURL(blob);
//           setFormImage(previewUrl);

//           try {
//             console.log("Запуск фоновой загрузки файла на сервер...");
//             const publicUrl = await uploadImageToStorage(blob);

//             if (publicUrl) {
//               setFormImage(publicUrl);
//               console.log("Загрузка завершена. Ссылка:", publicUrl);
//             } else {
//               alert("Не удалось сохранить изображение.");
//               setFormImage("");
//             }
//           } catch (uploadError) {
//             console.error("Ошибка при фоновой загрузке:", uploadError);
//             alert("Ошибка сохранения: " + uploadError.message);
//             setFormImage("");
//           } finally {
//             setIsImageUploading(false);
//           }
//         }, "image/jpeg", 0.7);
//       };
//       img.src = reader.result;
//     };
//     reader.readAsDataURL(file);
//   };

//   const openAddModal = () => {
//     resetForm();
//     setEditingDish(null);
//     setDishModalOpen(true);
//   };

//   const openEditModal = (dish, e) => {
//     e.stopPropagation();

//     setEditingDish(dish);

//     setFormNameTJ(dish.name_tj || "");
//     setFormNameRU(dish.name_ru || "");
//     setFormNameEN(dish.name_en || "");

//     setFormDescriptionTJ(dish.description_tj || "");
//     setFormDescriptionRU(dish.description_ru || "");
//     setFormDescriptionEN(dish.description_en || "");

//     setFormCompositionTJ(dish.composition_tj || "");
//     setFormCompositionRU(dish.composition_ru || "");
//     setFormCompositionEN(dish.composition_en || "");

//     setFormPrice(dish.price || "");
//     setFormCurrency(dish.currency || "SMN");

//     setFormCategory("pastries");
//     -    setFormSubCategory(dish.sub_category || "bento");

//     setFormBestseller(dish.bestseller || false);
//     setFormNew(dish.is_new || false);

//     setFormImage(dish.image || "");

//     setDishModalOpen(true);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Защита от повторного клика во время выполнения запроса
//     if (isSaving) return;

//     if (isImageUploading) {
//       alert(lang === "TJ"
//         ? "Лутфан мунтазир шавед, то акс боргузорӣ шавад..."
//         : lang === "RU"
//           ? "Пожалуйста, подождите завершения загрузки изображения..."
//           : "Please wait until the image upload completes..."
//       );
//       return;
//     }

//     setIsSaving(true);

//     const payload = {
//       name_tj: formNameTJ,
//       name_ru: formNameRU,
//       name_en: formNameEN,
//       description_tj: formDescriptionTJ,
//       description_ru: formDescriptionRU,
//       description_en: formDescriptionEN,
//       composition_tj: formCompositionTJ,
//       composition_ru: formCompositionRU,
//       composition_en: formCompositionEN,
//       price: Number(formPrice),
//       currency: formCurrency,
//       category: formCategory,
//       sub_category: formSubCategory,
//       bestseller: formBestseller,
//       is_new: formIsNew,
//       image: formImage || null,
//     };

//     try {
//       let error;
//       if (editingDish) {
//         const { error: updateError } = await supabase
//           .from("qrmenu")
//           .update(payload)
//           .eq("id", editingDish.id);
//         error = updateError;
//       } else {
//         const { error: insertError } = await supabase
//           .from("qrmenu")
//           .insert([payload]);
//         error = insertError;
//       }

//       if (error) {
//         throw error;
//       }

//       await fetchDishes();
//       setDishModalOpen(false);
//       resetForm();
//     } catch (err) {
//       console.error("Ошибка сохранения блюда:", err);
//       alert(err.message);
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const openDeleteModal = (dish, e) => {
//     e.stopPropagation();
//     setDishToDelete(dish);
//     setDeleteConfirmOpen(true);
//   };

//   const confirmDelete = async () => {
//     if (!dishToDelete || isDeleting) return;
//     setIsDeleting(true);

//     try {
//       const { error } = await supabase
//         .from("qrmenu")
//         .delete()
//         .eq("id", dishToDelete.id);

//       if (error) {
//         throw error;
//       }

//       await fetchDishes();

//       setDeleteConfirmOpen(false);
//       setDishToDelete(null);
//     } catch (err) {
//       console.error(err.message);
//       alert(err.message);
//     } finally {
//       setIsDeleting(false);
//     }
//   };

//   const stats = [
//     {
//       icon: <Star className="h-4.5 w-4.5 text-[#9A7B4F]" />,
//       value: "4.9",
//       label: ui.rating,
//     },
//     {
//       icon: <Clock className="h-4.5 w-4.5 text-[#9A7B4F]" />,
//       value: ui.hours,
//       label: ui.hoursLabel,
//     },
//     {
//       icon: <Utensils className="h-4.5 w-4.5 text-[#9A7B4F]" />,
//       value: ui.sweetsValue,
//       label: ui.sweetsLabel,
//     },
//   ];

//   // Динамическая фильтрация данных, пришедших из API (приведение ID к String для надежного сравнения)
//   let filteredDishes = [];
//   if (selectedCategory === "bestsellers") {
//     filteredDishes = dishes.filter((dish) => dish.bestseller);

//   } else if (selectedCategory === "new") {
//     filteredDishes = dishes.filter((dish) => dish.is_new);

//   } else if (selectedCategory === "favorites") {
//     filteredDishes = dishes.filter((dish) =>
//       favorites.some((favId) => String(favId) === String(dish.id))
//     );

//   } else if (selectedCategory === "cakes") {
//     filteredDishes = dishes.filter((dish) => {
//       const matchCat = dish.category === "cakes";
//       if (!matchCat) return false;

//       if (selectedCakeSubcategory === "all") return true;

//       return dish.sub_category === selectedCakeSubcategory;
//     });

//   } else if (selectedCategory === "pastries") {
//     filteredDishes = dishes.filter((dish) => {
//       const matchCat = dish.category === "pastries";
//       if (!matchCat) return false;

//       if (selectedPastrySubcategory === "all") return true;

//       return dish.sub_category === selectedPastrySubcategory;
//     });

//   } else {
//     filteredDishes = dishes.filter(
//       (dish) => dish.category === selectedCategory
//     );
//   }

//   const getSelectedCategoryName = () => {
//     if (selectedCategory === "bestsellers") return menuUiData.bestsellerLabel;
//     if (selectedCategory === "new") return menuUiData.newArrivalsLabel;
//     if (selectedCategory === "favorites") return menuUiData.favoritesLabel;
//     return menuUiData.categories.find((c) => c.id === selectedCategory)?.name;
//   };

//   return (
//     <section className="w-full pb-6 bg-[#FAF6F0] text-[#3D2E20] min-h-screen relative">
//       {/* ПРЕМИАЛЬНЫЙ БАННЕР */}
//       <div className="relative h-[70vh] w-full overflow-hidden rounded-b-[40px] shadow-[0_12px_40px_rgba(154,123,79,0.12)] border-b border-[#D4AF37]/20">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-black/45 to-black/30" />
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />

//         <div className="relative flex h-full flex-col justify-end px-5 sm:px-8 pb-16 z-10 w-full">
//           <div className={fadeCls()} style={delayStyle(80)}>
//             <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-black/40 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-[#F5D76E] backdrop-blur-md shadow-md">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
//               {ui.badge}
//             </span>
//           </div>

//           <h1 className={`mt-4 font-serif text-[38px] sm:text-[46px] font-bold leading-[1.1] tracking-tight text-white ${fadeCls()}`} style={delayStyle(180)}>
//             {ui.title}
//           </h1>

//           <div className={`mt-4 h-[1px] w-16 bg-[#D4AF37]/60 rounded-full ${fadeCls()}`} style={delayStyle(260)} />
//         </div>
//       </div>

//       {/* КОНТЕЙНЕР ДЛЯ КНОПОК «ОТКРЫТЬ МЕНЮ» И «АДМИН» */}
//       <div className="relative z-30 w-full px-5 sm:px-8 h-0">
//         <div className="absolute left-5 sm:left-8 -top-21 flex items-center gap-3">
//           <button
//             onClick={handleOpenMenuClick}
//             className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#FAF6F0] bg-gradient-to-r from-[#E3D4C1] to-[#D9C6B0] shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-95 text-[#3D2E20] font-extrabold uppercase tracking-wider text-[11px]"
//           >
//             <span>{ui.openMenu}</span>
//             <ArrowDown className="h-4 w-4 text-[#3D2E20]" />
//           </button>

//           <button
//             type="button"
//             onClick={() => setAuthModalOpen(true)}
//             className="flex items-center justify-center h-11 w-37 rounded-full border-2 border-[#faf6f000] bg-[#faf6f000] text-shadow-neutral-500 transition-transform duration-300 hover:scale-105 active:scale-95 text-[#faf6f000]"
//             aria-label="Администратор"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-transparent">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Оптимизированный блок Статистики */}
//       <div className={`relative z-10 -mt-6 max-w-md mx-auto px-5 w-full ${fadeCls()}`} style={delayStyle(500)}>
//         <div className="grid grid-cols-3 gap-2.5">
//           {stats.map((s) => (
//             <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#D4AF37]/35 bg-white/95 p-3 shadow-[0_10px_25px_rgba(154,123,79,0.06)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6F0] text-[#9A7B4F]">{s.icon}</div>
//               <span className="text-sm sm:text-base font-black text-[#3D2E20] tracking-tight">{s.value}</span>
//               <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#9A7B4F] text-center leading-none">{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Блок меню */}
//       {showMenu && (
//         <div ref={menuRef} className="mt-6 mx-auto max-w-md px-5 w-full scroll-mt-6 animate-fade-in">
//           <div className="text-center mb-6">
//             <h2 className="font-serif text-[26px] sm:text-[32px] text-[#3D2E20] font-semibold tracking-tight">{menuUiData.menuHeaderTitle}</h2>
//             <div className="flex items-center justify-center gap-2 mt-2">
//               <div className="h-[1.5px] w-12 bg-[#9A7B4F]/40" />
//               <span className="text-[#9A7B4F] text-[8px]">◆</span>
//               <div className="h-[1.5px] w-12 bg-[#9A7B4F]/40" />
//             </div>
//           </div>

//           {/* Панель администратора */}
//           {isAdmin && (
//             <div className="mb-8 rounded-3xl border border-[#D4AF37]/50 bg-white p-5 shadow-[0_8px_25px_rgba(154,123,79,0.08)] flex flex-col gap-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-bold text-[#9A7B4F] flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
//                     {ui.adminPanel}
//                   </h3>
//                   <p className="text-[10px] text-neutral-500 mt-0.5">{ui.adminDesc}</p>
//                 </div>
//                 <button
//                   onClick={() => setIsAdmin(false)}
//                   className="rounded-xl bg-red-500/10 border border-red-500/30 px-3.5 py-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider transition hover:bg-red-500/20"
//                 >
//                   {ui.exit}
//                 </button>
//               </div>

//               <button
//                 onClick={openAddModal}
//                 className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] py-3.5 text-xs font-bold uppercase tracking-widest text-[#3D2E20] border border-[#D4AF37]/45 shadow-[0_4px_15px_rgba(154,123,79,0.1)] transition hover:brightness-105"
//               >
//                 {ui.addDish}
//               </button>
//             </div>
//           )}

//           {loading ? (
//             <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{ui.loading}</p>
//           ) : !selectedCategory ? (
//             <>
//               {/* Промо-карточки */}
//               <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-4">
//                 <button onClick={() => setSelectedCategory("bestsellers")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
//                   <span className="text-2xl mb-1">🔥</span>
//                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuUiData.bestsellerLabel}</span>
//                 </button>
//                 <button onClick={() => setSelectedCategory("new")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
//                   <span className="text-2xl mb-1">✨</span>
//                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuUiData.newArrivalsLabel}</span>
//                 </button>
//                 <button onClick={() => setSelectedCategory("favorites")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
//                   <span className="text-2xl mb-1">❤️</span>
//                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuUiData.favoritesLabel}</span>
//                 </button>
//               </div>

//               {/* Категории */}
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//                 {menuUiData.categories.map((cat) => (
//                   <button
//                     key={cat.id}
//                     onClick={() => setSelectedCategory(cat.id)}
//                     className="flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl border border-[#D4AF37]/30 bg-white hover:bg-[#FAF6F0] transition-all duration-300 hover:border-[#9A7B4F] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(154,123,79,0.06)] group"
//                   >
//                     <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF6F0] text-xl mb-3 group-hover:scale-105 transition-transform">{cat.icon}</span>
//                     <span className="text-[12px] sm:text-sm font-bold text-[#3D2E20] group-hover:text-[#9A7B4F] transition-colors">{cat.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </>
//           ) : (
//             /* Блюда выбранной категории */
//             <div className="animate-fade-in">
//               <div className="flex flex-col gap-4 mb-6">
//                 <div className="flex items-center justify-between">
//                   <button
//                     onClick={() => { setSelectedCategory(null); setSelectedCakeSubcategory("all"); }}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-[#e5dede] text-[#392a1b] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#E8D5CC] transition-all"
//                   >
//                     <ArrowLeft className="h-4 w-4" />
//                     {menuUiData.backToCategories}
//                   </button>
//                   <span className="text-[10px] font-extrabold text-[#9A7B4F] uppercase tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1.5 rounded-full">{getSelectedCategoryName()}</span>
//                 </div>

//                 {/* Подкатегории тортов */}
//                 {selectedCategory === "cakes" && (
//                   <div className="flex flex-wrap gap-1.5 bg-[#FAF6F0] p-1 rounded-xl border border-[#D4AF37]/20">
//                     <button
//                       onClick={() => setSelectedCakeSubcategory("all")}
//                       className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedCakeSubcategory === "all" ? "bg-[#9A7B4F] text-white shadow-sm" : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"}`}
//                     >
//                       {menuUiData.allCakesLabel}
//                     </button>
//                     {Object.entries(menuUiData.subcategories).map(([subId, subName]) => (
//                       <button
//                         key={subId}
//                         onClick={() => setSelectedCakeSubcategory(subId)}
//                         className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedCakeSubcategory === subId ? "bg-[#9A7B4F] text-white shadow-sm" : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"}`}
//                       >
//                         {subName}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//                 {selectedCategory === "pastries" && (
//                   <div className="flex flex-wrap gap-1.5 bg-[#FAF6F0] p-1 rounded-xl border border-[#D4AF37]/20">
//                     <button
//                       onClick={() => setSelectedPastrySubcategory("all")}
//                       className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedPastrySubcategory === "all"
//                         ? "bg-[#9A7B4F] text-white shadow-sm"
//                         : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"
//                         }`}
//                     >
//                       Все
//                     </button>

//                     {Object.entries(menuUiData.pastrySubcategories).map(([subId, subName]) => (
//                       <button
//                         key={subId}
//                         onClick={() => setSelectedPastrySubcategory(subId)}
//                         className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedPastrySubcategory === subId
//                           ? "bg-[#9A7B4F] text-white shadow-sm"
//                           : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"
//                           }`}
//                       >
//                         {subName}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {filteredDishes.length === 0 ? (
//                 <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{selectedCategory === "favorites" ? ui.emptyFav : menuUiData.emptyCategory}</p>
//               ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//                   {filteredDishes.map((dish) => {
//                     const categoryIcon = menuUiData.categories.find(c => c.id === dish.category)?.icon || "🧁";

//                     // Перевод текста в зависимости от выбранного языка (lang)
//                     const translation = {
//                       TJ: {
//                         name: dish.name_tj,
//                         description: dish.description_tj,
//                         composition: dish.composition_tj
//                       },
//                       RU: {
//                         name: dish.name_ru,
//                         description: dish.description_ru,
//                         composition: dish.composition_ru
//                       },
//                       EN: {
//                         name: dish.name_en,
//                         description: dish.description_en,
//                         composition: dish.composition_en
//                       }
//                     }[lang];
//                     const dishName = translation.name || "";
//                     const dishDesc = translation.description || "";
//                     const isFavorite = favorites.some((favId) => String(favId) === String(dish.id));

//                     return (
//                       <div key={dish.id} onClick={() => setActiveDish(dish)} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-3 pb-4 shadow-[0_4px_15px_rgba(154,123,79,0.03)] cursor-pointer hover:border-[#9A7B4F] hover:-translate-y-0.5 transition-all min-h-[250px]">
//                         {isAdmin && (
//                           <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
//                             <button
//                               onClick={(e) => openEditModal(dish, e)}
//                               className="flex-1 flex items-center justify-center rounded-lg bg-[#9A7B4F] text-white py-1 text-[9px] font-bold uppercase transition hover:brightness-110 shadow-sm"
//                             >
//                               ✏ {ui.editBtn}
//                             </button>
//                             <button
//                               onClick={(e) => openDeleteModal(dish, e)}
//                               className="flex-1 flex items-center justify-center rounded-lg bg-red-600 text-white py-1 text-[9px] font-bold uppercase transition hover:bg-red-700 shadow-sm"
//                             >
//                               🗑 {ui.delBtn}
//                             </button>
//                           </div>
//                         )}

//                         <div className="relative w-full h-28 rounded-xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-3 shrink-0 border border-[#D4AF37]/15">
//                           {dish.image ? (
//                             <img src={dish.image} alt={dishName} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
//                           ) : (
//                             <span className="relative text-3xl transform group-hover:scale-105 transition-transform duration-300">{categoryIcon}</span>
//                           )}

//                           {/* Ярлыки */}
//                           <div className="absolute left-2 bottom-2 flex flex-col gap-1 z-10 pointer-events-none">
//                             {dish.bestseller && (
//                               <span className="bg-[#9A7B4F] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">HIT</span>
//                             )}
//                             {dish.is_new && (
//                               <span className="bg-emerald-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
//                                 NEW
//                               </span>
//                             )}
//                           </div>

//                           <button onClick={(e) => toggleFavorite(dish.id, e)} className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#9A7B4F] border border-[#D4AF37]/20 backdrop-blur-xs transition hover:scale-105">
//                             <Heart className={`h-4 w-4 transition-colors ${isFavorite ? "fill-[#9A7B4F] text-[#9A7B4F]" : "text-[#9A7B4F]/50"}`} />
//                           </button>
//                         </div>

//                         <div className="flex flex-1 flex-col px-1">
//                           <h3 className="text-xs sm:text-sm font-bold leading-tight text-[#3D2E20] line-clamp-2 group-hover:text-[#9A7B4F] transition-colors">{dishName}</h3>
//                           <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-neutral-500 line-clamp-2">{dishDesc || "—"}</p>
//                         </div>

//                         <div className="mt-3 pt-2 border-t border-neutral-100 flex flex-col gap-1.5 px-1">
//                           <span className="text-[11px] sm:text-xs font-black text-[#9A7B4F]">{dish.price} {dish.currency}</span>
//                           {translation.composition && <span className="inline-flex items-center self-start rounded-md bg-[#FAF6F0] border border-[#D4AF37]/25 px-1.5 py-0.5 text-[8px] font-bold text-[#9A7B4F] uppercase tracking-wider">{menuUiData.ingredientsArrow}</span>}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       )}

//       {/* МОДАЛКА ВЫБОРА: ОТКРЫТЬ ИЛИ ВОЙТИ */}
//       {authModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
//           <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-4">
//             <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
//               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">{ui.adminTitle}</h3>
//               <button onClick={() => setAuthModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//             <p className="text-xs text-neutral-500 text-center">{ui.adminChoiceDesc}</p>
//             <div className="flex flex-col gap-2 mt-2">
//               <button
//                 onClick={() => handleAuthChoice("menu")}
//                 className="w-full py-3 rounded-xl bg-neutral-5 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-[#3D2E20] transition hover:bg-neutral-100"
//               >
//                 🍽 {ui.openMenu}
//               </button>
//               <button
//                 onClick={() => handleAuthChoice("admin")}
//                 className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider text-[#3D2E20] shadow-sm transition hover:brightness-105"
//               >
//                 🔒 {ui.adminButton}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* МОДАЛКА ВВОДА ПАРОЛЯ */}
//       {passwordModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
//           <form onSubmit={handlePasswordSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-4">
//             <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
//               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">{ui.adminButton}</h3>
//               <button type="button" onClick={() => setPasswordModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
//                 <X className="h-4 w-4" />
//               </button>
//             </div>

//             <div className="flex flex-col gap-1.5 mt-2">
//               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.enterPassword}</label>
//               <input
//                 type="password"
//                 required
//                 value={passwordInput}
//                 onChange={(e) => setPasswordInput(e.target.value)}
//                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-4 py-3 text-sm text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none transition-colors"
//                 placeholder="••••••"
//               />
//             </div>

//             {authError && (
//               <div className="rounded-xl border border-red-500/10 bg-red-50 p-2 text-center">
//                 <p className="text-[11px] font-semibold text-red-500">{authError}</p>
//               </div>
//             )}

//             <div className="flex gap-2 mt-4">
//               <button
//                 type="button"
//                 onClick={() => setPasswordModalOpen(false)}
//                 className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
//               >
//                 {ui.cancel}
//               </button>
//               <button
//                 type="submit"
//                 className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm"
//               >
//                 {ui.login}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* МОДАЛКА CRUD: ДОБАВЛЕНИЕ / РЕДАКТИРОВАНИЕ */}
//       {dishModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in overflow-y-auto">
//           <form onSubmit={handleFormSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-5 my-8 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-3 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9A7B4F]">
//             <div className="flex items-center justify-between border-b border-neutral-100 pb-3 shrink-0">
//               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">
//                 {editingDish ? `✏ ${ui.editBtn}` : "➕ Добавление"}
//               </h3>
//               <button type="button" onClick={() => setDishModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
//                 <X className="h-4 w-4" />
//               </button>
//             </div>

//             {/* Изображение */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.formImageLabel}</label>
//               <div className="relative w-full h-32 rounded-xl bg-[#FAF6F0] border border-neutral-200 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
//                 {formImage ? (
//                   <>
//                     <img src={formImage} alt="Preview" className="w-full h-full object-cover" />

//                     {isImageUploading && (
//                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
//                         <span className="h-6 w-6 rounded-full border-2 border-white/40 border-t-white animate-spin" />
//                       </div>
//                     )}

//                     {!isImageUploading && (
//                       <button
//                         type="button"
//                         onClick={() => setFormImage("")}
//                         className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-red-500 z-20"
//                       >
//                         <X className="h-3.5 w-3.5" />
//                       </button>
//                     )}
//                   </>
//                 ) : (
//                   <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
//                     {isImageUploading ? (
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="h-6 w-6 rounded-full border-2 border-[#9A7B4F]/40 border-t-[#9A7B4F] animate-spin" />
//                         <p className="text-[10px] text-neutral-500 mt-2 font-bold">Загрузка...</p>
//                       </div>
//                     ) : (
//                       <>
//                         <span className="text-2xl">📸</span>
//                         <p className="text-[10px] text-neutral-500 mt-1 font-bold">{ui.formSelectImage}</p>
//                         <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
//                       </>
//                     )}
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Общие непереводимые поля */}
//             <div className="grid grid-cols-2 gap-2.5">
//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.formPriceLabel}</label>
//                 <div className="flex gap-1.5">
//                   <input type="text" required value={formPrice} onChange={(e) => setFormPrice(e.target.value)} className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" placeholder="15" />
//                   <input type="text" required value={formCurrency} onChange={(e) => setFormCurrency(e.target.value)} className="w-20 rounded-xl border border-neutral-200 bg-[#FAF6F0] px-2 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" placeholder="SMN" />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.formCategoryLabel}</label>
//                 <select value={formCategory} onChange={(e) => setFormCategory(e.target.value)} className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" >
//                   {menuUiData.categories.map((cat) => (
//                     <option key={cat.id} value={cat.id} className="text-[#3D2E20]">
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Вложенные подкатегории в CRUD */}
//             {formCategory === "cakes" && (
//               <div className="flex flex-col gap-1 animate-fade-in">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuUiData.cakeSubcategoryLabel}</label>
//                 <select value={formSubCategory} onChange={(e) => setFormSubCategory(e.target.value)} className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" >
//                   {Object.entries(menuUiData.subcategories).map(([subId, subName]) => (
//                     <option key={subId} value={subId} className="text-[#3D2E20]">
//                       {subName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}
//             {formCategory === "pastries" && (
//               <div className="flex flex-col gap-1 animate-fade-in">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">
//                   Подкатегория
//                 </label>

//                 <select
//                   value={formSubCategory}
//                   onChange={(e) => setFormSubCategory(e.target.value)}
//                   className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//                 >
//                   {Object.entries(menuUiData.pastrySubcategories).map(([subId, subName]) => (
//                     <option key={subId} value={subId}>
//                       {subName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* БЛОК ЯЗЫКОВЫХ ПЕРЕВОДОВ */}
//             <div className="border border-[#D4AF37]/20 p-3 rounded-2xl bg-[#FAF6F0]/50 space-y-3">
//               {/* TJ */}
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold text-[#9A7B4F] tracking-widest block border-b border-[#D4AF37]/10 pb-0.5">TJ (Таджикский)</span>
//                 <input type="text" required placeholder="Ном..." value={formNameTJ} onChange={(e) => setFormNameTJ(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
//                 <textarea rows={1} placeholder="Тафсилот..." value={formDescriptionTJ} onChange={(e) => setFormDescriptionTJ(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs resize-none" />
//                 <input type="text" placeholder="Таркиб..." value={formCompositionTJ} onChange={(e) => setFormCompositionTJ(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
//               </div>

//               {/* RU */}
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold text-[#9A7B4F] tracking-widest block border-b border-[#D4AF37]/10 pb-0.5">RU (Русский)</span>
//                 <input type="text" required placeholder="Название..." value={formNameRU} onChange={(e) => setFormNameRU(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
//                 <textarea rows={1} placeholder="Описание..." value={formDescriptionRU} onChange={(e) => setFormDescriptionRU(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs resize-none" />
//                 <input type="text" placeholder="Состав..." value={formCompositionRU} onChange={(e) => setFormCompositionRU(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
//               </div>

//               {/* EN */}
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold text-[#9A7B4F] tracking-widest block border-b border-[#D4AF37]/10 pb-0.5">EN (English)</span>
//                 <input type="text" required placeholder="Name..." value={formNameEN} onChange={(e) => setFormNameEN(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
//                 <textarea rows={1} placeholder="Description..." value={formDescriptionEN} onChange={(e) => setFormDescriptionEN(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs resize-none" />
//                 <input type="text" placeholder="Ingredients..." value={formCompositionEN} onChange={(e) => setFormCompositionEN(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
//               </div>
//             </div>

//             {/* Чекбоксы: новинка и бестселлер */}
//             <div className="flex items-center gap-4 mt-1 border-t border-neutral-100 pt-2">
//               <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
//                 <input type="checkbox" checked={formBestseller} onChange={(e) => setFormBestseller(e.target.checked)} className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4" />
//                 {ui.formBestsellerLabel}
//               </label>
//               <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
//                 <input type="checkbox" checked={formIsNew} onChange={(e) => setFormNew(e.target.checked)} className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4" />
//                 {ui.formNewLabel}
//               </label>
//             </div>

//             <div className="flex gap-2 mt-2 shrink-0">
//               <button type="button" onClick={() => setDishModalOpen(false)} disabled={isSaving} className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20] disabled:opacity-50 disabled:cursor-not-allowed" >
//                 {ui.cancel}
//               </button>
//               <button type="submit" disabled={isSaving || isImageUploading} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" >
//                 {isSaving && (
//                   <span className="h-3 w-3 rounded-full border-2 border-[#3D2E20]/40 border-t-[#3D2E20] animate-spin" />
//                 )}
//                 {isSaving ? (editingDish ? ui.updatingBtn : ui.savingBtn) : ui.saveBtn}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* ДИАЛОГ УДАЛЕНИЯ */}
//       {deleteConfirmOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
//           <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-red-200 flex flex-col gap-4">
//             <h3 className="font-serif text-lg font-bold text-[#3D2E20] text-center">{ui.confirmDeleteTitle}</h3>
//             <p className="text-xs text-neutral-500 text-center">
//               Блюдо «<span className="text-[#9A7B4F] font-bold"> {lang === "TJ" ? dishToDelete?.name_tj : lang === "RU" ? dishToDelete?.name_ru : dishToDelete?.name_en} </span>» {ui.confirmDeleteDesc}
//             </p>
//             <div className="flex gap-2 mt-2">
//               <button onClick={() => setDeleteConfirmOpen(false)} disabled={isDeleting} className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20] disabled:opacity-50 disabled:cursor-not-allowed" >
//                 {ui.cancel}
//               </button>
//               <button onClick={confirmDelete} disabled={isDeleting} className="flex-1 py-3 rounded-xl bg-red-600 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" >
//                 {isDeleting && (
//                   <span className="h-3 w-3 rounded-full border-2 border-white/40 border-t-white animate-spin" />
//                 )}
//                 {isDeleting ? ui.deletingBtn : ui.confirmDeleteBtn}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* МОДАЛКА ПРОСМОТРА БЛЮДА */}
//       {activeDish && (() => {
//         const activeTranslation = {
//           name: lang === "TJ" ? activeDish.name_tj : lang === "RU" ? activeDish.name_ru : activeDish.name_en,
//           description: lang === "TJ" ? activeDish.description_tj : lang === "RU" ? activeDish.description_ru : activeDish.description_en,
//           composition: lang === "TJ" ? activeDish.composition_tj : lang === "RU" ? activeDish.composition_ru : activeDish.composition_en,
//         };
//         return (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
//             <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(154,123,79,0.12)] border border-[#D4AF37]/20 max-h-[90vh] flex flex-col">
//               <div className="flex items-center justify-between mb-4 shrink-0">
//                 <button onClick={(e) => toggleFavorite(activeDish.id, e)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#D4AF37]/20 text-[#9A7B4F]" >
//                   <Heart className={`h-4.5 w-4.5 ${favorites.some((favId) => String(favId) === String(activeDish.id)) ? "fill-[#9A7B4F] text-[#9A7B4F]" : ""}`} />
//                 </button>
//                 <button onClick={() => setActiveDish(null)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-neutral-200 text-neutral-500 hover:text-[#3D2E20]">
//                   <X className="h-4.5 w-4.5" />
//                 </button>
//               </div>

//               <div className="relative w-full h-[33vh] rounded-2xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-4 shrink-0 border border-[#D4AF37]/15">
//                 {activeDish.image ? (
//                   <img src={activeDish.image} alt={activeTranslation.name} className="w-full h-full object-cover" />
//                 ) : (
//                   <span className="relative text-6xl">{menuUiData.categories.find(c => c.id === activeDish.category)?.icon || "🧁"}</span>
//                 )}
//               </div>

//               <div className="overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#9A7B4F]">
//                 <div className="flex flex-col gap-2">
//                   <h3 className="font-serif text-[20px] font-bold text-[#3D2E20] leading-snug">{activeTranslation.name}</h3>
//                   <p className="text-[11px] leading-relaxed text-neutral-500">{activeTranslation.description || "—"}</p>
//                   <span className="self-start mt-2 rounded-lg bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/35 px-4 py-1.5 text-xs font-black text-[#3D2E20] shadow-sm">{activeDish.price} {activeDish.currency}</span>
//                 </div>
//                 <div className="my-4 h-[1px] bg-neutral-100" />
//                 {activeTranslation.composition ? (
//                   <div className="space-y-1.5">
//                     <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuUiData.compositionLabel}</h4>
//                     <p className="text-xs leading-relaxed text-neutral-600">{activeTranslation.composition}</p>
//                   </div>
//                 ) : (
//                   <p className="text-xs text-neutral-400 italic">Таркиб муайян нашудааст / Состав не указан</p>
//                 )}
//                 <button onClick={() => setActiveDish(null)} className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 py-3 text-xs font-bold uppercase tracking-widest text-[#3D2E20] shadow-sm">{menuUiData.closeLabel}</button>
//               </div>
//             </div>
//           </div>
//         );
//       })()}
//     </section>
//   );
// }




// src/components/Hero.jsx
// src/components/Hero.jsx
// src/components/Hero.jsx
// src/components/Hero.jsx
import { supabase } from "../supabase";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Star,
  Clock,
  Utensils,
  Heart,
  ArrowLeft,
  X,
  ArrowDown
} from "lucide-react";

const UI_TRANSLATIONS = {
  TJ: {
    badge: "КАННОДИИ ПРЕМИУМ",
    title: "Шаҳди Хуҷанд",
    openMenu: " МЕНЮ",
    rating: "Рейтинг",
    hoursLabel: "Соатҳо",
    sweetsLabel: "Шириниҳо",
    hours: "7:00 - 00:00",
    sweetsValue: "100+",
    adminPanel: "Режими администратор",
    adminDesc: "Тағйиротро дар вақти воқеӣ ворид кунед",
    exit: "Баромад",
    addDish: "➕ Иловаи таом / десерт",
    adminButton: "Мудир",
    adminTitle: "Панели дастрасӣ",
    adminChoiceDesc: "Режими намоишро интихоб кунед",
    enterPassword: "Рамзро ворид кунед (Пароль)",
    cancel: "Қатъ",
    login: "Вход",
    emptyFav: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст...",
    loading: "Боргузорӣ...",
    editBtn: "Правка",
    delBtn: "Нест кардан",
    saveBtn: "Хифз кардан",
    savingBtn: "Дар ҳоли илова...",
    updatingBtn: "Дар ҳоли тағйир...",
    deletingBtn: "Дар ҳоли нест кардан...",
    formImageLabel: "Акси таом",
    formSelectImage: "Аксро интихоб кунед",
    formPriceLabel: "Нарх",
    formCategoryLabel: "Категория",
    formBestsellerLabel: "Хити фурӯш",
    formNewLabel: "Навтарин",
    confirmDeleteTitle: "Оё ҳақиқатдан мехоҳед нест кунед?",
    confirmDeleteDesc: "бо таври ҳамешагӣ нест карда мешавад.",
    confirmDeleteBtn: "Нест кардан"
  },
  RU: {
    badge: "ПРЕМИУМ ВЫПЕЧКА",
    title: "Шахди Хужанд",
    openMenu: "ОТКРЫТЬ МЕНЮ",
    rating: "Рейтинг",
    hoursLabel: "Часы работы",
    sweetsLabel: "Сладости",
    hours: "7:00 - 00:00",
    sweetsValue: "100+",
    adminPanel: "Режим администратора",
    adminDesc: "Вносите изменения в режиме реального времени",
    exit: "Выйти",
    addDish: "➕ Добавить блюдо / десерт",
    adminButton: "Админ",
    adminTitle: "Панель доступа",
    adminChoiceDesc: "Выберите необходимый режим просмотра",
    enterPassword: "Введите пароль для входа",
    cancel: "Отмена",
    login: "Войти",
    emptyFav: "Список избранного пока пуст...",
    loading: "Загрузка...",
    editBtn: "Правка",
    delBtn: "Удалить",
    saveBtn: "Сохранить",
    savingBtn: "Добавляется...",
    updatingBtn: "Изменяется...",
    deletingBtn: "Удаляется...",
    formImageLabel: "Фото блюда",
    formSelectImage: "Выберите изображение",
    formPriceLabel: "Цена",
    formCategoryLabel: "Категория",
    formBestsellerLabel: "Хит продаж",
    formNewLabel: "Новинка",
    confirmDeleteTitle: "Вы действительно хотите удалить?",
    confirmDeleteDesc: "будет удалено навсегда.",
    confirmDeleteBtn: "Удалить"
  },
  EN: {
    badge: "PREMIUM BAKERY",
    title: "Shahdi Khujand",
    openMenu: "OPEN MENU",
    rating: "Rating",
    hoursLabel: "Hours",
    sweetsLabel: "Sweets",
    hours: "7:00 - 00:00",
    sweetsValue: "100+",
    adminPanel: "Admin Mode",
    adminDesc: "Make changes in real-time",
    exit: "Exit",
    addDish: "➕ Add Dish / Dessert",
    adminButton: "Admin",
    adminTitle: "Access Panel",
    adminChoiceDesc: "Select the viewing mode",
    enterPassword: "Enter administrator password",
    cancel: "Cancel",
    login: "Login",
    emptyFav: "Your favorites list is currently empty...",
    loading: "Loading...",
    editBtn: "Edit",
    delBtn: "Delete",
    saveBtn: "Save",
    savingBtn: "Adding...",
    updatingBtn: "Updating...",
    deletingBtn: "Deleting...",
    formImageLabel: "Dish photo",
    formSelectImage: "Select image",
    formPriceLabel: "Price",
    formCategoryLabel: "Category",
    formBestsellerLabel: "Bestseller",
    formNewLabel: "New Arrival",
    confirmDeleteTitle: "Are you sure you want to delete?",
    confirmDeleteDesc: "will be permanently deleted.",
    confirmDeleteBtn: "Delete"
  }
};

const MENU_UI = {
  TJ: {
    backToCategories: "← Бозгашт ба категорияҳо",
    emptyCategory: "Ин бахш ҳоло холӣ аст...",
    emptyFavorites: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст...",
    compositionLabel: "Таркиби таом:",
    closeLabel: "Пӯшидан",
    ingredientsArrow: "Таркиб",
    menuHeaderTitle: "Менюи мо",
    bestsellerLabel: "Хитҳои фурӯш",
    newArrivalsLabel: "Навтаринҳо",
    favoritesLabel: "Дӯстдоштаҳо",
    allCakesLabel: "Ҳамаи тортҳо",
    allPastriesLabel: "Ҳама",
    cakeSubcategoryLabel: "Намуди торт",
    pastrySubcategoryLabel: "Зербахш",
    subcategories: {
      kids: "Кӯдакона",
      adults: "Барои калонсолон",
      bento: "Бенто-тортҳо",
      wedding: "Тортҳои тӯёна"
    },
    pastrySubcategories: {
      art: "Арт-десертҳо",
      desserts: "Десертҳо",
      slice: "Пирожниҳои порчагӣ",
      bakery: "Қаннодӣ"
    },
    categories: [
      { id: "burgers", name: "Бургерҳо", icon: "🍔" },
      { id: "breakfasts", name: "Ноништаҳо", icon: "🍳" },
      { id: "waffles", name: "Вафлиҳо", icon: "🧇" },
      { id: "pizza", name: "Питса", icon: "🍕" },
      { id: "pastries", name: "Пирожниҳо", icon: "🧁" },
      { id: "cakes", name: "Тортҳо", icon: "🍰" },
      { id: "drinks", name: "Нӯшокиҳо", icon: "🍹" },
      { id: "coffee", name: "Кофе", icon: "☕" },
      { id: "tea", name: "Чой", icon: "🍵" },
    ]
  },
  RU: {
    backToCategories: "← Назад к категориям",
    emptyCategory: "Раздел наполняется вкусными новинками...",
    emptyFavorites: "Список избранного пока пуст...",
    compositionLabel: "Состав блюда:",
    closeLabel: "Закрыть",
    ingredientsArrow: "Состав",
    menuHeaderTitle: "Наше Меню",
    bestsellerLabel: "Хиты продаж",
    newArrivalsLabel: "Новинки",
    favoritesLabel: "Избранное",
    allCakesLabel: "Все торты",
    allPastriesLabel: "Все",
    cakeSubcategoryLabel: "Тип торта",
    pastrySubcategoryLabel: "Подкатегория",
    subcategories: {
      kids: "Детские торты",
      adults: "Взрослые торты",
      bento: "Бенто торты",
      wedding: "Свадебные торты"
    },
    pastrySubcategories: {
      art: "Арт-десерты",
      desserts: "Десерты",
      slice: "Кусковые пирожные",
      bakery: "Выпечка"
    },
    categories: [
      { id: "burgers", name: "Бургеры", icon: "🍔" },
      { id: "breakfasts", name: "Завтраки", icon: "🍳" },
      { id: "waffles", name: "Вафли", icon: "🧇" },
      { id: "pizza", name: "Пицца", icon: "🍕" },
      { id: "pastries", name: "Пирожные", icon: "🧁" },
      { id: "cakes", name: "Торты", icon: "🍰" },
      { id: "drinks", name: "Напитки", icon: "🍹" },
      { id: "coffee", name: "Кофе", icon: "☕" },
      { id: "tea", name: "Чай", icon: "🍵" },
    ]
  },
  EN: {
    backToCategories: "← Back to categories",
    emptyCategory: "This section is being filled with yummy food...",
    emptyFavorites: "Your favorites list is currently empty...",
    compositionLabel: "Ingredients:",
    closeLabel: "Close",
    ingredientsArrow: "Ingredients",
    menuHeaderTitle: "Our Menu",
    bestsellerLabel: "Bestsellers",
    newArrivalsLabel: "New Arrivals",
    favoritesLabel: "Favorites",
    allCakesLabel: "All Cakes",
    allPastriesLabel: "All",
    cakeSubcategoryLabel: "Cake Type",
    pastrySubcategoryLabel: "Subcategory",
    subcategories: {
      kids: "Kids' Cakes",
      adults: "Adult Cakes",
      bento: "Bento Cakes",
      wedding: "Wedding Cakes"
    },
    pastrySubcategories: {
      art: "Art Desserts",
      desserts: "Desserts",
      slice: "Slice Cakes",
      bakery: "Bakery"
    },
    categories: [
      { id: "burgers", name: "Burgers", icon: "🍔" },
      { id: "breakfasts", name: "Breakfasts", icon: "🍳" },
      { id: "waffles", name: "Waffles", icon: "🧇" },
      { id: "pizza", name: "Pizza", icon: "🍕" },
      { id: "pastries", name: "Pastries", icon: "🧁" },
      { id: "cakes", name: "Cakes", icon: "🍰" },
      { id: "drinks", name: "Drinks", icon: "🍹" },
      { id: "coffee", name: "Coffee", icon: "☕" },
      { id: "tea", name: "Tea", icon: "🍵" },
    ]
  }
};

// Категории, у которых есть подкатегории и дефолтное значение для формы добавления/редактирования
const DEFAULT_SUBCATEGORY_BY_CATEGORY = {
  cakes: "bento",
  pastries: "art",
};

// Списки ДОПУСТИМЫХ подкатегорий по каждой категории. Нужны, чтобы отличить
// реально сохранённое (но невалидное для этой категории) значение — например
// "bento" у блюда с category="pastries" — от валидного. Без этой проверки
// select показывает первый пункт списка (визуально "Арт-десерты"), а в state
// остаётся мусорное старое значение, и повторное сохранение ничего не чинит.
const VALID_SUBCATEGORIES_BY_CATEGORY = {
  cakes: ["kids", "adults", "bento", "wedding"],
  pastries: ["art", "desserts", "slice", "bakery"],
};

const resolveSubCategory = (category, storedSubCategory) => {
  const validOptions = VALID_SUBCATEGORIES_BY_CATEGORY[category];
  if (!validOptions) return "";
  if (validOptions.includes(storedSubCategory)) return storedSubCategory;
  return DEFAULT_SUBCATEGORY_BY_CATEGORY[category] || "";
};

// Приводит валюту к кириллице для отображения на экране (в т.ч. для старых
// блюд, у которых в базе уже сохранено латиницей "SMN") — саму запись в базе
// это не трогает, только то, что видит пользователь.
const formatCurrency = (currency) => {
  if (!currency) return currency;
  const normalized = String(currency).trim().toUpperCase();
  if (normalized === "SMN" || normalized === "СМН") return "СМН";
  return currency;
};

export default function Hero({
  backgroundImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
  onOpenMenu,
}) {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Состояния для работы с API данных
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedCakeSubcategory, setSelectedCakeSubcategory] = useState("all");
  const [selectedPastrySubcategory, setSelectedPastrySubcategory] = useState("all");

  const [activeDish, setActiveDish] = useState(null);
  // --- СОСТОЯНИЯ АДМИН-ПАНЕЛИ ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Модальные окна CRUD
  const [dishModalOpen, setDishModalOpen] = useState(false);
  const [editingDish, setEditingDish] = useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [dishToDelete, setDishToDelete] = useState(null);

  // Статусы выполнения операций (для индикации на кнопках)
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);

  // Поля формы блюда (с поддержкой трех языков)
  const [formNameTJ, setFormNameTJ] = useState("");
  const [formNameRU, setFormNameRU] = useState("");
  const [formNameEN, setFormNameEN] = useState("");

  const [formDescriptionTJ, setFormDescriptionTJ] = useState("");
  const [formDescriptionRU, setFormDescriptionRU] = useState("");
  const [formDescriptionEN, setFormDescriptionEN] = useState("");

  const [formCompositionTJ, setFormCompositionTJ] = useState("");
  const [formCompositionRU, setFormCompositionRU] = useState("");
  const [formCompositionEN, setFormCompositionEN] = useState("");

  const [formPrice, setFormPrice] = useState("");
  const [formCurrency, setFormCurrency] = useState("СМН");
  const [formCategory, setFormCategory] = useState("pastries");
  const [formSubCategory, setFormSubCategory] = useState("art");
  const [formBestseller, setFormBestseller] = useState(false);
  const [formIsNew, setFormNew] = useState(false);
  const [formImage, setFormImage] = useState("");

  const ui = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS["TJ"];
  const menuUiData = MENU_UI[lang] || MENU_UI["TJ"];

  // Получение данных из API
  const fetchDishes = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("qrmenu")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        throw error;
      }

      setDishes(data);

    } catch (err) {
      console.error("Ошибка загрузки данных из Supabase:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  useEffect(() => {
    const handleHeaderMenuClick = () => {
      setAuthModalOpen(true);
    };
    window.addEventListener("open-menu-auth", handleHeaderMenuClick);
    return () => {
      window.removeEventListener("open-menu-auth", handleHeaderMenuClick);
    };
  }, []);

  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("menu_favorites");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const menuRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("menu_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const fade = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
  const fadeCls = () => `transition-all duration-700 ease-out ${fade}`;
  const delayStyle = (ms) => ({ transitionDelay: `${ms}ms` });

  const handleOpenMenuClick = () => {
    setShowMenu(true);
    if (onOpenMenu) onOpenMenu();

    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleAuthChoice = (choice) => {
    setAuthModalOpen(false);
    if (choice === "menu") {
      handleOpenMenuClick();
    } else if (choice === "admin") {
      setPasswordModalOpen(true);
      setPasswordInput("");
      setAuthError("");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === "shahd2012") {
      setIsAdmin(true);
      setPasswordModalOpen(false);
      setShowMenu(true);
      setTimeout(() => {
        menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      setAuthError(lang === "TJ" ? "Рамз нодуруст!" : lang === "RU" ? "Неверный пароль!" : "Incorrect password!");
    }
  };

  const resetForm = () => {
    setFormNameTJ("");
    setFormNameRU("");
    setFormNameEN("");

    setFormDescriptionTJ("");
    setFormDescriptionRU("");
    setFormDescriptionEN("");

    setFormCompositionTJ("");
    setFormCompositionRU("");
    setFormCompositionEN("");

    setFormPrice("");
    setFormCurrency("СМН");
    setFormCategory("pastries");
    // ВАЖНО: "art" — реальная подкатегория пирожных ("pastries").
    // Раньше тут стояло "bento" (подкатегория тортов), из-за чего select визуально
    // показывал "Арт-десерты" (первый пункт списка), а в state оставалось "bento" —
    // блюдо сохранялось с несуществующей для pastries подкатегорией и не находилось
    // фильтром "Арт-десерты".
    setFormSubCategory("art");

    setFormBestseller(false);
    setFormNew(false);

    setFormImage("");
    setIsImageUploading(false);
  };

  // Единый обработчик смены категории в форме: подставляет корректную
  // дефолтную подкатегорию для новой категории (или "" если подкатегорий нет)
  const handleFormCategoryChange = (newCategory) => {
    setFormCategory(newCategory);
    setFormSubCategory(DEFAULT_SUBCATEGORY_BY_CATEGORY[newCategory] || "");
  };

  const uploadImageToStorage = async (blob) => {
    if (!blob) return null;
    const fileName = `${Date.now()}.jpg`;

    const { error } = await supabase.storage
      .from("qrmenu-images")
      .upload(fileName, blob, {
        contentType: "image/jpeg"
      });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("qrmenu-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  // Сжатие изображения через canvas перед сохранением в state и фоновая отправка
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsImageUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const MAX_WIDTH = 800;
        const scale = Math.min(1, MAX_WIDTH / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Получаем файл в виде Blob для фоновой отправки
        canvas.toBlob(async (blob) => {
          if (!blob) {
            console.error("Не удалось создать Blob");
            setIsImageUploading(false);
            return;
          }

          // Показываем временное превью мгновенно
          const previewUrl = URL.createObjectURL(blob);
          setFormImage(previewUrl);

          try {
            console.log("Запуск фоновой загрузки файла на сервер...");
            const publicUrl = await uploadImageToStorage(blob);

            if (publicUrl) {
              setFormImage(publicUrl);
              console.log("Загрузка завершена. Ссылка:", publicUrl);
            } else {
              alert("Не удалось сохранить изображение.");
              setFormImage("");
            }
          } catch (uploadError) {
            console.error("Ошибка при фоновой загрузке:", uploadError);
            alert("Ошибка сохранения: " + uploadError.message);
            setFormImage("");
          } finally {
            setIsImageUploading(false);
          }
        }, "image/jpeg", 0.7);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const openAddModal = () => {
    resetForm();
    setEditingDish(null);
    setDishModalOpen(true);
  };

  const openEditModal = (dish, e) => {
    e.stopPropagation();

    setEditingDish(dish);

    setFormNameTJ(dish.name_tj || "");
    setFormNameRU(dish.name_ru || "");
    setFormNameEN(dish.name_en || "");

    setFormDescriptionTJ(dish.description_tj || "");
    setFormDescriptionRU(dish.description_ru || "");
    setFormDescriptionEN(dish.description_en || "");

    setFormCompositionTJ(dish.composition_tj || "");
    setFormCompositionRU(dish.composition_ru || "");
    setFormCompositionEN(dish.composition_en || "");

    setFormPrice(dish.price || "");
    setFormCurrency(formatCurrency(dish.currency) || "СМН");

    // ИСПРАВЛЕНО: раньше категория при редактировании всегда принудительно
    // ставилась "pastries" независимо от реальной категории блюда, и была
    // лишняя строка с символом "-" (случайно оставшийся фрагмент diff'а).
    //
    // ВАЖНО: раньше здесь использовалось "dish.sub_category || default" —
    // но у старых блюд в базе реально хранится невалидное значение "bento"
    // (не пустое!), поэтому оно проходило проверку "||" как есть, хотя не
    // подходит для категории "pastries". Из-за этого select показывал
    // "Арт-десерты" (первый пункт списка, раз "bento" туда не подходит), но
    // при сохранении без изменения списка уходило то же самое "bento" — и
    // выглядело так, будто сохранение не работает. Теперь значение сверяется
    // со списком допустимых подкатегорий для категории.
    const dishCategory = dish.category || "pastries";
    setFormCategory(dishCategory);
    setFormSubCategory(resolveSubCategory(dishCategory, dish.sub_category));

    setFormBestseller(dish.bestseller || false);
    setFormNew(dish.is_new || false);

    setFormImage(dish.image || "");

    setDishModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Защита от повторного клика во время выполнения запроса
    if (isSaving) return;

    if (isImageUploading) {
      alert(lang === "TJ"
        ? "Лутфан мунтазир шавед, то акс боргузорӣ шавад..."
        : lang === "RU"
          ? "Пожалуйста, подождите завершения загрузки изображения..."
          : "Please wait until the image upload completes..."
      );
      return;
    }

    setIsSaving(true);

    const payload = {
      name_tj: formNameTJ,
      name_ru: formNameRU,
      name_en: formNameEN,
      description_tj: formDescriptionTJ,
      description_ru: formDescriptionRU,
      description_en: formDescriptionEN,
      composition_tj: formCompositionTJ,
      composition_ru: formCompositionRU,
      composition_en: formCompositionEN,
      price: Number(formPrice),
      currency: formCurrency,
      category: formCategory,
      sub_category: formSubCategory,
      bestseller: formBestseller,
      is_new: formIsNew,
      image: formImage || null,
    };

    try {
      let error;
      if (editingDish) {
        const { error: updateError } = await supabase
          .from("qrmenu")
          .update(payload)
          .eq("id", editingDish.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from("qrmenu")
          .insert([payload]);
        error = insertError;
      }

      if (error) {
        throw error;
      }

      await fetchDishes();
      setDishModalOpen(false);
      resetForm();
    } catch (err) {
      console.error("Ошибка сохранения блюда:", err);
      alert(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const openDeleteModal = (dish, e) => {
    e.stopPropagation();
    setDishToDelete(dish);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!dishToDelete || isDeleting) return;
    setIsDeleting(true);

    try {
      const { error } = await supabase
        .from("qrmenu")
        .delete()
        .eq("id", dishToDelete.id);

      if (error) {
        throw error;
      }

      await fetchDishes();

      setDeleteConfirmOpen(false);
      setDishToDelete(null);
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const stats = [
    {
      icon: <Star className="h-4.5 w-4.5 text-[#9A7B4F]" />,
      value: "4.9",
      label: ui.rating,
    },
    {
      icon: <Clock className="h-4.5 w-4.5 text-[#9A7B4F]" />,
      value: ui.hours,
      label: ui.hoursLabel,
    },
    {
      icon: <Utensils className="h-4.5 w-4.5 text-[#9A7B4F]" />,
      value: ui.sweetsValue,
      label: ui.sweetsLabel,
    },
  ];

  // Динамическая фильтрация данных, пришедших из API (приведение ID к String для надежного сравнения)
  let filteredDishes = [];
  if (selectedCategory === "bestsellers") {
    filteredDishes = dishes.filter((dish) => dish.bestseller);

  } else if (selectedCategory === "new") {
    filteredDishes = dishes.filter((dish) => dish.is_new);

  } else if (selectedCategory === "favorites") {
    filteredDishes = dishes.filter((dish) =>
      favorites.some((favId) => String(favId) === String(dish.id))
    );

  } else if (selectedCategory === "cakes") {
    filteredDishes = dishes.filter((dish) => {
      const matchCat = dish.category === "cakes";
      if (!matchCat) return false;

      if (selectedCakeSubcategory === "all") return true;

      return dish.sub_category === selectedCakeSubcategory;
    });

  } else if (selectedCategory === "pastries") {
    filteredDishes = dishes.filter((dish) => {
      const matchCat = dish.category === "pastries";
      if (!matchCat) return false;

      if (selectedPastrySubcategory === "all") return true;

      return dish.sub_category === selectedPastrySubcategory;
    });

  } else {
    filteredDishes = dishes.filter(
      (dish) => dish.category === selectedCategory
    );
  }

  const getSelectedCategoryName = () => {
    if (selectedCategory === "bestsellers") return menuUiData.bestsellerLabel;
    if (selectedCategory === "new") return menuUiData.newArrivalsLabel;
    if (selectedCategory === "favorites") return menuUiData.favoritesLabel;
    return menuUiData.categories.find((c) => c.id === selectedCategory)?.name;
  };

  return (
    <section className="w-full pb-6 bg-[#FAF6F0] text-[#3D2E20] min-h-screen relative">
      {/* ПРЕМИАЛЬНЫЙ БАННЕР */}
      <div className="relative h-[70vh] w-full overflow-hidden rounded-b-[40px] shadow-[0_12px_40px_rgba(154,123,79,0.12)] border-b border-[#D4AF37]/20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-black/45 to-black/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative flex h-full flex-col justify-end px-5 sm:px-8 pb-16 z-10 w-full">
          <div className={fadeCls()} style={delayStyle(80)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-black/40 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-[#F5D76E] backdrop-blur-md shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              {ui.badge}
            </span>
          </div>

          <h1 className={`mt-4 font-serif text-[38px] sm:text-[46px] font-bold leading-[1.1] tracking-tight text-white ${fadeCls()}`} style={delayStyle(180)}>
            {ui.title}
          </h1>

          <div className={`mt-4 h-[1px] w-16 bg-[#D4AF37]/60 rounded-full ${fadeCls()}`} style={delayStyle(260)} />
        </div>
      </div>

      {/* КОНТЕЙНЕР ДЛЯ КНОПОК «ОТКРЫТЬ МЕНЮ» И «АДМИН» */}
      <div className="relative z-30 w-full px-5 sm:px-8 h-0">
        <div className="absolute left-5 sm:left-8 -top-21 flex items-center gap-3">
          <button
            onClick={handleOpenMenuClick}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#FAF6F0] bg-gradient-to-r from-[#E3D4C1] to-[#D9C6B0] shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-95 text-[#3D2E20] font-extrabold uppercase tracking-wider text-[11px]"
          >
            <span>{ui.openMenu}</span>
            <ArrowDown className="h-4 w-4 text-[#3D2E20]" />
          </button>

          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="flex items-center justify-center h-11 w-37 rounded-full border-2 border-[#faf6f000] bg-[#faf6f000] text-shadow-neutral-500 transition-transform duration-300 hover:scale-105 active:scale-95 text-[#faf6f000]"
            aria-label="Администратор"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-transparent">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Оптимизированный блок Статистики */}
      <div className={`relative z-10 -mt-6 max-w-md mx-auto px-5 w-full ${fadeCls()}`} style={delayStyle(500)}>
        <div className="grid grid-cols-3 gap-2.5">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#D4AF37]/35 bg-white/95 p-3 shadow-[0_10px_25px_rgba(154,123,79,0.06)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6F0] text-[#9A7B4F]">{s.icon}</div>
              <span className="text-sm sm:text-base font-black text-[#3D2E20] tracking-tight">{s.value}</span>
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#9A7B4F] text-center leading-none">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Блок меню */}
      {showMenu && (
        <div ref={menuRef} className="mt-6 mx-auto max-w-md px-5 w-full scroll-mt-6 animate-fade-in">
          <div className="text-center mb-6">
            <h2 className="font-serif text-[26px] sm:text-[32px] text-[#3D2E20] font-semibold tracking-tight">{menuUiData.menuHeaderTitle}</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-[1.5px] w-12 bg-[#9A7B4F]/40" />
              <span className="text-[#9A7B4F] text-[8px]">◆</span>
              <div className="h-[1.5px] w-12 bg-[#9A7B4F]/40" />
            </div>
          </div>

          {/* Панель администратора */}
          {isAdmin && (
            <div className="mb-8 rounded-3xl border border-[#D4AF37]/50 bg-white p-5 shadow-[0_8px_25px_rgba(154,123,79,0.08)] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#9A7B4F] flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    {ui.adminPanel}
                  </h3>
                  <p className="text-[10px] text-neutral-500 mt-0.5">{ui.adminDesc}</p>
                </div>
                <button
                  onClick={() => setIsAdmin(false)}
                  className="rounded-xl bg-red-500/10 border border-red-500/30 px-3.5 py-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider transition hover:bg-red-500/20"
                >
                  {ui.exit}
                </button>
              </div>

              <button
                onClick={openAddModal}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] py-3.5 text-xs font-bold uppercase tracking-widest text-[#3D2E20] border border-[#D4AF37]/45 shadow-[0_4px_15px_rgba(154,123,79,0.1)] transition hover:brightness-105"
              >
                {ui.addDish}
              </button>
            </div>
          )}

          {loading ? (
            <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{ui.loading}</p>
          ) : !selectedCategory ? (
            <>
              {/* Промо-карточки */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-4">
                <button onClick={() => setSelectedCategory("bestsellers")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
                  <span className="text-2xl mb-1">🔥</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuUiData.bestsellerLabel}</span>
                </button>
                <button onClick={() => setSelectedCategory("new")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
                  <span className="text-2xl mb-1">✨</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuUiData.newArrivalsLabel}</span>
                </button>
                <button onClick={() => setSelectedCategory("favorites")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
                  <span className="text-2xl mb-1">❤️</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuUiData.favoritesLabel}</span>
                </button>
              </div>

              {/* Категории */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {menuUiData.categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl border border-[#D4AF37]/30 bg-white hover:bg-[#FAF6F0] transition-all duration-300 hover:border-[#9A7B4F] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(154,123,79,0.06)] group"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF6F0] text-xl mb-3 group-hover:scale-105 transition-transform">{cat.icon}</span>
                    <span className="text-[12px] sm:text-sm font-bold text-[#3D2E20] group-hover:text-[#9A7B4F] transition-colors">{cat.name}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Блюда выбранной категории */
            <div className="animate-fade-in">
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => { setSelectedCategory(null); setSelectedCakeSubcategory("all"); setSelectedPastrySubcategory("all"); }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#e5dede] text-[#392a1b] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#E8D5CC] transition-all"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {menuUiData.backToCategories}
                  </button>
                  <span className="text-[10px] font-extrabold text-[#9A7B4F] uppercase tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1.5 rounded-full">{getSelectedCategoryName()}</span>
                </div>

                {/* Подкатегории тортов */}
                {/* Подкатегории тортов */}
                {selectedCategory === "cakes" && (
  <div className="flex flex-wrap justify-center gap-2 bg-[#FAF6F0] p-2 rounded-xl border border-[#D4AF37]/20">
    <button
      onClick={() => setSelectedCakeSubcategory("all")}
      className={`w-[140px] px-2 py-2.5 text-center text-xs sm:text-sm font-bold rounded-lg transition break-words whitespace-normal ${
        selectedCakeSubcategory === "all"
          ? "bg-[#9A7B4F] text-white shadow-sm"
          : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"
      }`}
    >
      {menuUiData.allCakesLabel}
    </button>

    {Object.entries(menuUiData.subcategories).map(([subId, subName]) => (
      <button
        key={subId}
        onClick={() => setSelectedCakeSubcategory(subId)}
        className={`w-[140px] px-2 py-2.5 text-center text-xs sm:text-sm font-bold rounded-lg transition break-words whitespace-normal ${
          selectedCakeSubcategory === subId
            ? "bg-[#9A7B4F] text-white shadow-sm"
            : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"
        }`}
      >
        {subName}
      </button>
    ))}
  </div>
)}

{selectedCategory === "pastries" && (
  <div className="flex flex-wrap justify-center gap-2 bg-[#FAF6F0] p-2 rounded-xl border border-[#D4AF37]/20">
    <button
      onClick={() => setSelectedPastrySubcategory("all")}
      className={`w-[140px] px-2 py-2.5 text-center text-xs sm:text-sm font-bold rounded-lg transition break-words whitespace-normal ${
        selectedPastrySubcategory === "all"
          ? "bg-[#9A7B4F] text-white shadow-sm"
          : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"
      }`}
    >
      {menuUiData.allPastriesLabel}
    </button>

    {Object.entries(menuUiData.pastrySubcategories).map(([subId, subName]) => (
      <button
        key={subId}
        onClick={() => setSelectedPastrySubcategory(subId)}
        className={`w-[140px] px-2 py-2.5 text-center text-xs sm:text-sm font-bold rounded-lg transition break-words whitespace-normal ${
          selectedPastrySubcategory === subId
            ? "bg-[#9A7B4F] text-white shadow-sm"
            : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"
        }`}
      >
        {subName}
      </button>
    ))}
  </div>
)}

              </div>

              {filteredDishes.length === 0 ? (
                <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{selectedCategory === "favorites" ? ui.emptyFav : menuUiData.emptyCategory}</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {filteredDishes.map((dish) => {
                    const categoryIcon = menuUiData.categories.find(c => c.id === dish.category)?.icon || "🧁";

                    // Перевод текста в зависимости от выбранного языка (lang)
                    const translation = {
                      TJ: {
                        name: dish.name_tj,
                        description: dish.description_tj,
                        composition: dish.composition_tj
                      },
                      RU: {
                        name: dish.name_ru,
                        description: dish.description_ru,
                        composition: dish.composition_ru
                      },
                      EN: {
                        name: dish.name_en,
                        description: dish.description_en,
                        composition: dish.composition_en
                      }
                    }[lang];
                    const dishName = translation.name || "";
                    const dishDesc = translation.description || "";
                    const isFavorite = favorites.some((favId) => String(favId) === String(dish.id));

                    return (
                      <div key={dish.id} onClick={() => setActiveDish(dish)} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-3 pb-4 shadow-[0_4px_15px_rgba(154,123,79,0.03)] cursor-pointer hover:border-[#9A7B4F] hover:-translate-y-0.5 transition-all min-h-[250px]">
                        {isAdmin && (
                          <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
                            <button
                              onClick={(e) => openEditModal(dish, e)}
                              className="flex-1 flex items-center justify-center rounded-lg bg-[#9A7B4F] text-white py-1 text-[9px] font-bold uppercase transition hover:brightness-110 shadow-sm"
                            >
                              ✏ {ui.editBtn}
                            </button>
                            <button
                              onClick={(e) => openDeleteModal(dish, e)}
                              className="flex-1 flex items-center justify-center rounded-lg bg-red-600 text-white py-1 text-[9px] font-bold uppercase transition hover:bg-red-700 shadow-sm"
                            >
                              🗑 {ui.delBtn}
                            </button>
                          </div>
                        )}

                        <div className="relative w-full h-28 rounded-xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-3 shrink-0 border border-[#D4AF37]/15">
                          {dish.image ? (
                            <img src={dish.image} alt={dishName} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          ) : (
                            <span className="relative text-3xl transform group-hover:scale-105 transition-transform duration-300">{categoryIcon}</span>
                          )}

                          {/* Ярлыки */}
                          <div className="absolute left-2 bottom-2 flex flex-col gap-1 z-10 pointer-events-none">
                            {dish.bestseller && (
                              <span className="bg-[#9A7B4F] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">HIT</span>
                            )}
                            {dish.is_new && (
                              <span className="bg-emerald-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                                NEW
                              </span>
                            )}
                          </div>

                          <button onClick={(e) => toggleFavorite(dish.id, e)} className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#9A7B4F] border border-[#D4AF37]/20 backdrop-blur-xs transition hover:scale-105">
                            <Heart className={`h-4 w-4 transition-colors ${isFavorite ? "fill-[#9A7B4F] text-[#9A7B4F]" : "text-[#9A7B4F]/50"}`} />
                          </button>
                        </div>

                        <div className="flex flex-1 flex-col px-1">
<h3 className="text-sm sm:text-base font-bold leading-tight text-[#3D2E20] line-clamp-2 group-hover:text-[#9A7B4F] transition-colors">{dishName}</h3>                          <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-neutral-500 line-clamp-2">{dishDesc || "—"}</p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-neutral-100 flex flex-col gap-1.5 px-1">
                          <span className="text-sm sm:text-base font-black text-[#9A7B4F]">{dish.price} {formatCurrency(dish.currency)}</span>
                          {translation.composition && <span className="inline-flex items-center self-start rounded-md bg-[#FAF6F0] border border-[#D4AF37]/25 px-1.5 py-0.5 text-[8px] font-bold text-[#9A7B4F] uppercase tracking-wider">{menuUiData.ingredientsArrow}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* МОДАЛКА ВЫБОРА: ОТКРЫТЬ ИЛИ ВОЙТИ */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="font-serif text-lg font-bold text-[#3D2E20]">{ui.adminTitle}</h3>
              <button onClick={() => setAuthModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-500 text-center">{ui.adminChoiceDesc}</p>
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={() => handleAuthChoice("menu")}
                className="w-full py-3 rounded-xl bg-neutral-5 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-[#3D2E20] transition hover:bg-neutral-100"
              >
                🍽 {ui.openMenu}
              </button>
              <button
                onClick={() => handleAuthChoice("admin")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider text-[#3D2E20] shadow-sm transition hover:brightness-105"
              >
                🔒 {ui.adminButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛКА ВВОДА ПАРОЛЯ */}
      {passwordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <form onSubmit={handlePasswordSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="font-serif text-lg font-bold text-[#3D2E20]">{ui.adminButton}</h3>
              <button type="button" onClick={() => setPasswordModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.enterPassword}</label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-4 py-3 text-sm text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none transition-colors"
                placeholder="••••••"
              />
            </div>

            {authError && (
              <div className="rounded-xl border border-red-500/10 bg-red-50 p-2 text-center">
                <p className="text-[11px] font-semibold text-red-500">{authError}</p>
              </div>
            )}

            <div className="flex gap-2 mt-4">
              <button
                type="button"
                onClick={() => setPasswordModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
              >
                {ui.cancel}
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm"
              >
                {ui.login}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* МОДАЛКА CRUD: ДОБАВЛЕНИЕ / РЕДАКТИРОВАНИЕ */}
      {dishModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <form onSubmit={handleFormSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-5 my-8 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-3 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9A7B4F]">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 shrink-0">
              <h3 className="font-serif text-lg font-bold text-[#3D2E20]">
                {editingDish ? `✏ ${ui.editBtn}` : "➕ Добавление"}
              </h3>
              <button type="button" onClick={() => setDishModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Изображение */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.formImageLabel}</label>
              <div className="relative w-full h-32 rounded-xl bg-[#FAF6F0] border border-neutral-200 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                {formImage ? (
                  <>
                    <img src={formImage} alt="Preview" className="w-full h-full object-cover" />

                    {isImageUploading && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                        <span className="h-6 w-6 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      </div>
                    )}

                    {!isImageUploading && (
                      <button
                        type="button"
                        onClick={() => setFormImage("")}
                        className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-red-500 z-20"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </>
                ) : (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    {isImageUploading ? (
                      <div className="flex flex-col items-center justify-center">
                        <span className="h-6 w-6 rounded-full border-2 border-[#9A7B4F]/40 border-t-[#9A7B4F] animate-spin" />
                        <p className="text-[10px] text-neutral-500 mt-2 font-bold">Загрузка...</p>
                      </div>
                    ) : (
                      <>
                        <span className="text-2xl">📸</span>
                        <p className="text-[10px] text-neutral-500 mt-1 font-bold">{ui.formSelectImage}</p>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                      </>
                    )}
                  </label>
                )}
              </div>
            </div>

            {/* Общие непереводимые поля */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.formPriceLabel}</label>
                <div className="flex gap-1.5">
                  <input type="text" required value={formPrice} onChange={(e) => setFormPrice(e.target.value)} className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" placeholder="15" />
                  <input type="text" required value={formCurrency} onChange={(e) => setFormCurrency(e.target.value)} className="w-20 rounded-xl border border-neutral-200 bg-[#FAF6F0] px-2 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" placeholder="СМН" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{ui.formCategoryLabel}</label>
                <select
                  value={formCategory}
                  onChange={(e) => handleFormCategoryChange(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                >
                  {menuUiData.categories.map((cat) => (
                    <option key={cat.id} value={cat.id} className="text-[#3D2E20]">
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Вложенные подкатегории в CRUD */}
            {formCategory === "cakes" && (
              <div className="flex flex-col gap-1 animate-fade-in">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuUiData.cakeSubcategoryLabel}</label>
                <select value={formSubCategory} onChange={(e) => setFormSubCategory(e.target.value)} className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none" >
                  {Object.entries(menuUiData.subcategories).map(([subId, subName]) => (
                    <option key={subId} value={subId} className="text-[#3D2E20]">
                      {subName}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {formCategory === "pastries" && (
              <div className="flex flex-col gap-1 animate-fade-in">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">
                  {menuUiData.pastrySubcategoryLabel}
                </label>

                <select
                  value={formSubCategory}
                  onChange={(e) => setFormSubCategory(e.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                >
                  {Object.entries(menuUiData.pastrySubcategories).map(([subId, subName]) => (
                    <option key={subId} value={subId}>
                      {subName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* БЛОК ЯЗЫКОВЫХ ПЕРЕВОДОВ */}
            <div className="border border-[#D4AF37]/20 p-3 rounded-2xl bg-[#FAF6F0]/50 space-y-3">
              {/* TJ */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#9A7B4F] tracking-widest block border-b border-[#D4AF37]/10 pb-0.5">TJ (Таджикский)</span>
                <input type="text" required placeholder="Ном..." value={formNameTJ} onChange={(e) => setFormNameTJ(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
                <textarea rows={1} placeholder="Тафсилот..." value={formDescriptionTJ} onChange={(e) => setFormDescriptionTJ(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs resize-none" />
                <input type="text" placeholder="Таркиб..." value={formCompositionTJ} onChange={(e) => setFormCompositionTJ(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
              </div>

              {/* RU */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#9A7B4F] tracking-widest block border-b border-[#D4AF37]/10 pb-0.5">RU (Русский)</span>
                <input type="text" required placeholder="Название..." value={formNameRU} onChange={(e) => setFormNameRU(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
                <textarea rows={1} placeholder="Описание..." value={formDescriptionRU} onChange={(e) => setFormDescriptionRU(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs resize-none" />
                <input type="text" placeholder="Состав..." value={formCompositionRU} onChange={(e) => setFormCompositionRU(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
              </div>

              {/* EN */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#9A7B4F] tracking-widest block border-b border-[#D4AF37]/10 pb-0.5">EN (English)</span>
                <input type="text" required placeholder="Name..." value={formNameEN} onChange={(e) => setFormNameEN(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
                <textarea rows={1} placeholder="Description..." value={formDescriptionEN} onChange={(e) => setFormDescriptionEN(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs resize-none" />
                <input type="text" placeholder="Ingredients..." value={formCompositionEN} onChange={(e) => setFormCompositionEN(e.target.value)} className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs" />
              </div>
            </div>

            {/* Чекбоксы: новинка и бестселлер */}
            <div className="flex items-center gap-4 mt-1 border-t border-neutral-100 pt-2">
              <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
                <input type="checkbox" checked={formBestseller} onChange={(e) => setFormBestseller(e.target.checked)} className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4" />
                {ui.formBestsellerLabel}
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
                <input type="checkbox" checked={formIsNew} onChange={(e) => setFormNew(e.target.checked)} className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4" />
                {ui.formNewLabel}
              </label>
            </div>

            <div className="flex gap-2 mt-2 shrink-0">
              <button type="button" onClick={() => setDishModalOpen(false)} disabled={isSaving} className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20] disabled:opacity-50 disabled:cursor-not-allowed" >
                {ui.cancel}
              </button>
              <button type="submit" disabled={isSaving || isImageUploading} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" >
                {isSaving && (
                  <span className="h-3 w-3 rounded-full border-2 border-[#3D2E20]/40 border-t-[#3D2E20] animate-spin" />
                )}
                {isSaving ? (editingDish ? ui.updatingBtn : ui.savingBtn) : ui.saveBtn}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ДИАЛОГ УДАЛЕНИЯ */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-red-200 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-[#3D2E20] text-center">{ui.confirmDeleteTitle}</h3>
            <p className="text-xs text-neutral-500 text-center">
              Блюдо «<span className="text-[#9A7B4F] font-bold"> {lang === "TJ" ? dishToDelete?.name_tj : lang === "RU" ? dishToDelete?.name_ru : dishToDelete?.name_en} </span>» {ui.confirmDeleteDesc}
            </p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setDeleteConfirmOpen(false)} disabled={isDeleting} className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20] disabled:opacity-50 disabled:cursor-not-allowed" >
                {ui.cancel}
              </button>
              <button onClick={confirmDelete} disabled={isDeleting} className="flex-1 py-3 rounded-xl bg-red-600 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" >
                {isDeleting && (
                  <span className="h-3 w-3 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                )}
                {isDeleting ? ui.deletingBtn : ui.confirmDeleteBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛКА ПРОСМОТРА БЛЮДА */}
      {activeDish && (() => {
        const activeTranslation = {
          name: lang === "TJ" ? activeDish.name_tj : lang === "RU" ? activeDish.name_ru : activeDish.name_en,
          description: lang === "TJ" ? activeDish.description_tj : lang === "RU" ? activeDish.description_ru : activeDish.description_en,
          composition: lang === "TJ" ? activeDish.composition_tj : lang === "RU" ? activeDish.composition_ru : activeDish.composition_en,
        };
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(154,123,79,0.12)] border border-[#D4AF37]/20 max-h-[92vh] flex flex-col">
              <div className="flex items-center justify-between mb-4 shrink-0">
                <button onClick={(e) => toggleFavorite(activeDish.id, e)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#D4AF37]/20 text-[#9A7B4F]" >
                  <Heart className={`h-4.5 w-4.5 ${favorites.some((favId) => String(favId) === String(activeDish.id)) ? "fill-[#9A7B4F] text-[#9A7B4F]" : ""}`} />
                </button>
                <button onClick={() => setActiveDish(null)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-neutral-200 text-neutral-500 hover:text-[#3D2E20]">
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Увеличено с 33vh до 50vh — фото блюда теперь занимает половину экрана */}
              <div className="relative w-full h-[50vh] rounded-2xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-4 shrink-0 border border-[#D4AF37]/15 p-3">
                {activeDish.image ? (
                  <img src={activeDish.image} alt={activeTranslation.name} className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl" />
                ) : (
                  <span className="relative text-6xl">{menuUiData.categories.find(c => c.id === activeDish.category)?.icon || "🧁"}</span>
                )}
              </div>

              <div className="overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#9A7B4F]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[20px] font-bold text-[#3D2E20] leading-snug">{activeTranslation.name}</h3>
                  <p className="text-[11px] leading-relaxed text-neutral-500">{activeTranslation.description || "—"}</p>
                  <span className="self-start mt-2 rounded-lg bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/35 px-4 py-2 text-lg font-black text-[#3D2E20] shadow-sm">{activeDish.price} {formatCurrency(activeDish.currency)}</span>
                </div>
                <div className="my-4 h-[1px] bg-neutral-100" />
                {activeTranslation.composition ? (
                  <div className="space-y-1.5">
                    <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuUiData.compositionLabel}</h4>
                    <p className="text-xs leading-relaxed text-neutral-600">{activeTranslation.composition}</p>
                  </div>
                ) : (
                  <p className="text-xs text-neutral-400 italic">Таркиб муайян нашудааст / Состав не указан</p>
                )}
                <button onClick={() => setActiveDish(null)} className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 py-3 text-xs font-bold uppercase tracking-widest text-[#3D2E20] shadow-sm">{menuUiData.closeLabel}</button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}