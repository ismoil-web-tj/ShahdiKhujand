// // // src/components/Hero.jsx
// // import { useEffect, useState, useRef } from "react";
// // import { useLanguage } from "../context/LanguageContext";
// // import { 
// //   Star, 
// //   Clock, 
// //   Utensils, 
// //   Heart, 
// //   ArrowLeft, 
// //   X,
// //   ArrowDown
// // } from "lucide-react";

// // const MENU_TRANSLATIONS = {
// //   TJ: {
// //     backToCategories: "← Бозгашт ба категорияҳо",
// //     emptyCategory: "Ин бахш ҳоло холӣ аст...",
// //     emptyFavorites: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст...",
// //     compositionLabel: "Таркиби таом:",
// //     closeLabel: "Пӯшидан",
// //     ingredientsArrow: "Таркиб",
// //     menuHeaderTitle: "Менюи мо",
// //     bestsellerLabel: "Хитҳои фурӯш",
// //     newArrivalsLabel: "Навтаринҳо",
// //     favoritesLabel: "Дӯстдоштаҳо",
// //     allCakesLabel: "Ҳамаи тортҳо",
// //     cakeSubcategoryLabel: "Намуди торт",
// //     subcategories: {
// //       kids: "Кӯдакона",
// //       adults: "Барои калонсолон",
// //       bento: "Бенто-тортҳо",
// //       wedding: "Тортҳои тӯёна"
// //     },
// //     categories: [
// //       { id: "burgers", name: "Бургерҳо", icon: "🍔" },
// //       { id: "breakfasts", name: "Ноништаҳо", icon: "🍳" },
// //       { id: "waffles", name: "Вафлиҳо", icon: "🧇" },
// //       { id: "pizza", name: "Питса", icon: "🍕" },
// //       { id: "pastries", name: "Пирожниҳо", icon: "🧁" },
// //       { id: "cakes", name: "Тортҳо", icon: "🍰" },
// //       { id: "drinks", name: "Нӯшокиҳо", icon: "🍹" },
// //       { id: "coffee", name: "Кофе", icon: "☕" },
// //     ],
// //     dishes: [
// //       {
// //         id: 1,
// //         category: "cakes",
// //         subCategory: "bento",
// //         name: "Бенто Торти Кулпунай",
// //         price: "15 смн",
// //         image: "",
// //         description: "Мини-торти машҳур бо Тарбуз ва қаймоқи сабук.",
// //         composition: "Бисквит, Тарбузи тару тоза, қаймоқи лазиз.",
// //         bestseller: true
// //       },
// //       {
// //         id: 2,
// //         category: "cakes",
// //         subCategory: "kids",
// //         name: "Торти Кӯдаконаи «Хайвонот»",
// //         price: "22 смн",
// //         image: "",
// //         description: "Торти рангоранги кӯдакона бо ороиши бозичаҳои лазиз.",
// //         composition: "Хамири нарм, қаймоқи табиии ванилӣ."
// //       },
// //       {
// //         id: 3,
// //         category: "burgers",
// //         name: "Бургери Классикӣ",
// //         price: "18 смн",
// //         image: "",
// //         description: "Бургери болаззат бо гӯшти гов ва чошнии махсус.",
// //         composition: "Гӯшти гов, панир, помидор, хӯриш, чошнии фирмавӣ."
// //       }
// //     ]
// //   },
// //   RU: {
// //     backToCategories: "← Назад к категориям",
// //     emptyCategory: "Раздел наполняется вкусными новинками...",
// //     emptyFavorites: "Список избранного пока пуст...",
// //     compositionLabel: "Состав блюда:",
// //     closeLabel: "Закрыть",
// //     ingredientsArrow: "Состав",
// //     menuHeaderTitle: "Наше Меню",
// //     bestsellerLabel: "Хиты продаж",
// //     newArrivalsLabel: "Новинки",
// //     favoritesLabel: "Избранное",
// //     allCakesLabel: "Все торты",
// //     cakeSubcategoryLabel: "Тип торта",
// //     subcategories: {
// //       kids: "Детские торты",
// //       adults: "Взрослые торты",
// //       bento: "Бенто торты",
// //       wedding: "Свадебные торты"
// //     },
// //     categories: [
// //       { id: "burgers", name: "Бургеры", icon: "🍔" },
// //       { id: "breakfasts", name: "Завтраки", icon: "🍳" },
// //       { id: "waffles", name: "Вафли", icon: "🧇" },
// //       { id: "pizza", name: "Пицца", icon: "🍕" },
// //       { id: "pastries", name: "Пирожные", icon: "🧁" },
// //       { id: "cakes", name: "Торты", icon: "🍰" },
// //       { id: "drinks", name: "Напитки", icon: "🍹" },
// //       { id: "coffee", name: "Кофе", icon: "☕" },
// //     ],
// //     dishes: [
// //       {
// //         id: 1,
// //         category: "cakes",
// //         subCategory: "bento",
// //         name: "Бенто Торт Клубничный",
// //         price: "15 смн",
// //         image: "",
// //         description: "Популярный мини-торт с нежным клубничным конфитюром.",
// //         composition: "Бисквит, натуральная клубника, крем-чиз.",
// //         bestseller: true
// //       },
// //       {
// //         id: 2,
// //         category: "cakes",
// //         subCategory: "kids",
// //         name: "Детский Торт «Зоопарк»",
// //         price: "22 смн",
// //         image: "",
// //         description: "Красочный торт с фигурками из мастики для праздника.",
// //         composition: "Ванильный бисквит, йогуртовый крем, фруктовая начинка."
// //       },
// //       {
// //         id: 3,
// //         category: "burgers",
// //         name: "Бургер Классический",
// //         price: "18 смн",
// //         image: "",
// //         description: "Сочный бургер с котлетой из мраморной говядины.",
// //         composition: "Говяжья котлета, сыр чеддер, соус барбекю, свежие овощи."
// //       }
// //     ]
// //   },
// //   EN: {
// //     backToCategories: "← Back to categories",
// //     emptyCategory: "This section is being filled with yummy food...",
// //     emptyFavorites: "Your favorites list is currently empty...",
// //     compositionLabel: "Ingredients:",
// //     closeLabel: "Close",
// //     ingredientsArrow: "Ingredients",
// //     menuHeaderTitle: "Our Menu",
// //     bestsellerLabel: "Bestsellers",
// //     newArrivalsLabel: "New Arrivals",
// //     favoritesLabel: "Favorites",
// //     allCakesLabel: "All Cakes",
// //     cakeSubcategoryLabel: "Cake Type",
// //     subcategories: {
// //       kids: "Kids' Cakes",
// //       adults: "Adult Cakes",
// //       bento: "Bento Cakes",
// //       wedding: "Wedding Cakes"
// //     },
// //     categories: [
// //       { id: "burgers", name: "Burgers", icon: "🍔" },
// //       { id: "breakfasts", name: "Breakfasts", icon: "🍳" },
// //       { id: "waffles", name: "Waffles", icon: "🧇" },
// //       { id: "pizza", name: "Pizza", icon: "🍕" },
// //       { id: "pastries", name: "Pastries", icon: "🧁" },
// //       { id: "cakes", name: "Cakes", icon: "🍰" },
// //       { id: "drinks", name: "Drinks", icon: "🍹" },
// //       { id: "coffee", name: "Coffee", icon: "☕" },
// //     ],
// //     dishes: [
// //       {
// //         id: 1,
// //         category: "cakes",
// //         subCategory: "bento",
// //         name: "Strawberry Bento Cake",
// //         price: "15 smn",
// //         image: "",
// //         description: "Trending mini-cake with cream cheese and strawberries.",
// //         composition: "Sponge cake, natural strawberries, cream cheese fillings.",
// //         bestseller: true
// //       },
// //       {
// //         id: 2,
// //         category: "cakes",
// //         subCategory: "kids",
// //         name: "Kids' 'Zoo' Cake",
// //         price: "22 smn",
// //         image: "",
// //         description: "Colorful kids cake decorated with cute edible animals.",
// //         composition: "Sponge layers, yogurt cream, fruit jam."
// //       },
// //       {
// //         id: 3,
// //         category: "burgers",
// //         name: "Classic Burger",
// //         price: "18 smn",
// //         image: "",
// //         description: "Classic juicy burger with beef cutlet and secret sauce.",
// //         composition: "Beef cutlet, cheddar, lettuce, fresh tomatoes, burger sauce."
// //       }
// //     ]
// //   }
// // };

// // export default function Hero({
// //   backgroundImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
// //   onOpenMenu,
// // }) {
// //   const { lang, t } = useLanguage(); 
// //   const [mounted, setMounted] = useState(false);
  
// //   const [showMenu, setShowMenu] = useState(false);
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [selectedCakeSubcategory, setSelectedCakeSubcategory] = useState("all");
// //   const [activeDish, setActiveDish] = useState(null);

// //   // --- СОСТОЯНИЯ АДМИН-ПАНЕЛИ ---
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [authModalOpen, setAuthModalOpen] = useState(false);
// //   const [passwordModalOpen, setPasswordModalOpen] = useState(false);
// //   const [passwordInput, setPasswordInput] = useState("");
// //   const [authError, setAuthError] = useState("");

// //   // Модальные окна CRUD
// //   const [dishModalOpen, setDishModalOpen] = useState(false);
// //   const [editingDish, setEditingDish] = useState(null);
// //   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
// //   const [dishToDelete, setDishToDelete] = useState(null);

// //   // Поля формы блюда
// //   const [formName, setFormName] = useState("");
// //   const [formPrice, setFormPrice] = useState("");
// //   const [formCategory, setFormCategory] = useState("burgers");
// //   const [formSubCategory, setFormSubCategory] = useState("bento"); // Для тортов
// //   const [formDescription, setFormDescription] = useState("");
// //   const [formComposition, setFormComposition] = useState("");
// //   const [formBestseller, setFormBestseller] = useState(false);
// //   const [formIsNew, setFormNew] = useState(false);
// //   const [formImage, setFormImage] = useState("");

// //   const [menuTranslations, setMenuTranslations] = useState(() => {
// //     if (typeof window !== "undefined") {
// //       const saved = localStorage.getItem("custom_menu_translations");
// //       if (saved) {
// //         try {
// //           return JSON.parse(saved);
// //         } catch (e) {
// //           return MENU_TRANSLATIONS;
// //         }
// //       }
// //     }
// //     return MENU_TRANSLATIONS;
// //   });

// //   useEffect(() => {
// //     localStorage.setItem("custom_menu_translations", JSON.stringify(menuTranslations));
// //   }, [menuTranslations]);

// //   useEffect(() => {
// //     const handleHeaderMenuClick = () => {
// //       setAuthModalOpen(true);
// //     };
// //     window.addEventListener("open-menu-auth", handleHeaderMenuClick);
// //     return () => {
// //       window.removeEventListener("open-menu-auth", handleHeaderMenuClick);
// //     };
// //   }, []);

// //   const [favorites, setFavorites] = useState(() => {
// //     if (typeof window !== "undefined") {
// //       const saved = localStorage.getItem("menu_favorites");
// //       return saved ? JSON.parse(saved) : [];
// //     }
// //     return [];
// //   });

// //   const menuRef = useRef(null);
// //   const menuData = menuTranslations[lang] || menuTranslations["TJ"];

// //   useEffect(() => {
// //     localStorage.setItem("menu_favorites", JSON.stringify(favorites));
// //   }, [favorites]);

// //   useEffect(() => {
// //     const frame = requestAnimationFrame(() => setMounted(true));
// //     return () => cancelAnimationFrame(frame);
// //   }, []);

// //   const fade = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
// //   const fadeCls = () => `transition-all duration-700 ease-out ${fade}`;
// //   const delayStyle = (ms) => ({ transitionDelay: `${ms}ms` });

// //   const handleOpenMenuClick = () => {
// //     setShowMenu(true);
// //     if (onOpenMenu) onOpenMenu();
    
// //     setTimeout(() => {
// //       menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
// //     }, 120);
// //   };

// //   const toggleFavorite = (id, e) => {
// //     e.stopPropagation();
// //     setFavorites((prev) =>
// //       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
// //     );
// //   };

// //   const handleAuthChoice = (choice) => {
// //     setAuthModalOpen(false);
// //     if (choice === "menu") {
// //       handleOpenMenuClick();
// //     } else if (choice === "admin") {
// //       setPasswordModalOpen(true);
// //       setPasswordInput("");
// //       setAuthError("");
// //     }
// //   };

// //   const handlePasswordSubmit = (e) => {
// //     e.preventDefault();
// //     if (passwordInput === "123456") {
// //       setIsAdmin(true);
// //       setPasswordModalOpen(false);
// //       setShowMenu(true);
// //       setTimeout(() => {
// //         menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
// //       }, 100);
// //     } else {
// //       setAuthError("Пароли нодуруст. Бори дигар кӯшиш кунед.");
// //     }
// //   };

// //   const resetForm = () => {
// //     setFormName("");
// //     setFormPrice("");
// //     setFormCategory("burgers");
// //     setFormSubCategory("bento");
// //     setFormDescription("");
// //     setFormComposition("");
// //     setFormBestseller(false);
// //     setFormNew(false);
// //     setFormImage("");
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setFormImage(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const openAddModal = () => {
// //     resetForm();
// //     setEditingDish(null);
// //     setDishModalOpen(true);
// //   };

// //   const openEditModal = (dish, e) => {
// //     e.stopPropagation();
// //     setEditingDish(dish);
// //     setFormName(dish.name || "");
// //     setFormPrice(dish.price || "");
// //     setFormCategory(dish.category || "burgers");
// //     setFormSubCategory(dish.subCategory || "bento");
// //     setFormDescription(dish.description || "");
// //     setFormComposition(dish.composition || "");
// //     setFormBestseller(!!dish.bestseller);
// //     setFormNew(!!dish.isNew);
// //     setFormImage(dish.image || "");
// //     setDishModalOpen(true);
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     const updated = { ...menuTranslations };

// //     if (editingDish) {
// //       Object.keys(updated).forEach((langKey) => {
// //         updated[langKey].dishes = updated[langKey].dishes.map((d) => {
// //           if (d.id === editingDish.id) {
// //             return {
// //               ...d,
// //               category: formCategory,
// //               subCategory: formCategory === "cakes" ? formSubCategory : undefined,
// //               price: formPrice,
// //               image: formImage,
// //               bestseller: formBestseller,
// //               isNew: formIsNew,
// //               ...(langKey === lang ? {
// //                 name: formName,
// //                 description: formDescription,
// //                 composition: formComposition
// //               } : {})
// //             };
// //           }
// //           return d;
// //         });
// //       });
// //     } else {
// //       const newId = Date.now();
// //       const newDish = {
// //         id: newId,
// //         category: formCategory,
// //         subCategory: formCategory === "cakes" ? formSubCategory : undefined,
// //         name: formName,
// //         price: formPrice,
// //         image: formImage,
// //         description: formDescription,
// //         composition: formComposition,
// //         bestseller: formBestseller,
// //         isNew: formIsNew
// //       };

// //       Object.keys(updated).forEach((langKey) => {
// //         updated[langKey].dishes = [newDish, ...updated[langKey].dishes];
// //       });
// //     }

// //     setMenuTranslations(updated);
// //     setDishModalOpen(false);
// //     resetForm();
// //   };

// //   const openDeleteModal = (dish, e) => {
// //     e.stopPropagation();
// //     setDishToDelete(dish);
// //     setDeleteConfirmOpen(true);
// //   };

// //   const confirmDelete = () => {
// //     if (!dishToDelete) return;
// //     const updated = { ...menuTranslations };

// //     Object.keys(updated).forEach((langKey) => {
// //       updated[langKey].dishes = updated[langKey].dishes.filter((d) => d.id !== dishToDelete.id);
// //     });

// //     setMenuTranslations(updated);
// //     setDeleteConfirmOpen(false);
// //     setDishToDelete(null);
// //   };

// //   const stats = [
// //     {
// //       icon: <Star className="h-4.5 w-4.5 text-[#9A7B4F]" />,
// //       value: "4.9",
// //       label: lang === "TJ" ? "Рейтинг" : lang === "RU" ? "Рейтинг" : "Rating",
// //     },
// //     {
// //       icon: <Clock className="h-4.5 w-4.5 text-[#9A7B4F]" />,
// //       value: "10:00 - 23:00",
// //       label: lang === "TJ" ? "Соатҳо" : lang === "RU" ? "Часы" : "Hours",
// //     },
// //     {
// //       icon: <Utensils className="h-4.5 w-4.5 text-[#9A7B4F]" />,
// //       value: "100+",
// //       label: lang === "TJ" ? "Шириниҳо" : lang === "RU" ? "Сладости" : "Sweets",
// //     },
// //   ];

// //   let filteredDishes = [];
// //   if (selectedCategory === "bestsellers") {
// //     filteredDishes = menuData.dishes.filter((dish) => dish.bestseller);
// //   } else if (selectedCategory === "new") {
// //     filteredDishes = menuData.dishes.filter((dish) => dish.isNew);
// //   } else if (selectedCategory === "favorites") {
// //     filteredDishes = menuData.dishes.filter((dish) => favorites.includes(dish.id));
// //   } else if (selectedCategory === "cakes") {
// //     filteredDishes = menuData.dishes.filter((dish) => {
// //       const matchCat = dish.category === "cakes";
// //       if (!matchCat) return false;
// //       if (selectedCakeSubcategory === "all") return true;
// //       return dish.subCategory === selectedCakeSubcategory;
// //     });
// //   } else {
// //     filteredDishes = menuData.dishes.filter((dish) => dish.category === selectedCategory);
// //   }

// //   const getSelectedCategoryName = () => {
// //     if (selectedCategory === "bestsellers") return menuData.bestsellerLabel;
// //     if (selectedCategory === "new") return menuData.newArrivalsLabel;
// //     if (selectedCategory === "favorites") return menuData.favoritesLabel;
// //     return menuData.categories.find((c) => c.id === selectedCategory)?.name;
// //   };

// //   return (
// //     <section className="w-full pb-16 bg-[#FAF6F0] text-[#3D2E20] min-h-screen relative">
      
// //       {/* ПРЕМИАЛЬНЫЙ БАННЕР */}
// //       <div className="group/hero relative h-[70vh] w-full overflow-hidden rounded-b-[40px] shadow-[0_12px_40px_rgba(154,123,79,0.12)] border-b border-[#D4AF37]/20">
// //         <div 
// //           className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out group-hover/hero:scale-105"
// //           style={{ backgroundImage: `url(${backgroundImage})` }}
// //         />
// //         {/* Затемнения и градиенты для читаемости на светлом сайте */}
// //         <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-black/40 to-black/30" />
// //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />

// //         <div className="relative flex h-full flex-col justify-end px-5 sm:px-8 pb-16 z-10 w-full">
// //           <div className={fadeCls()} style={delayStyle(80)}>
// //             <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-black/40 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-[#F5D76E] backdrop-blur-md shadow-md">
// //               <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
// //               КАННОДИИ ПРЕМИУМ
// //             </span>
// //           </div>

// //           <h1 className={`mt-4 font-serif text-[38px] sm:text-[46px] font-bold leading-[1.1] tracking-tight text-white ${fadeCls()}`} style={delayStyle(180)}>
// //             Шаҳди Хуҷанд
// //           </h1>

// //           <div className={`mt-4 h-[1px] w-16 bg-[#D4AF37]/60 rounded-full ${fadeCls()}`} style={delayStyle(260)} />

// //           <p className={`mt-4 text-xs sm:text-sm font-medium leading-relaxed text-neutral-200 max-w-xl ${fadeCls()}`} style={delayStyle(320)}>
// //             {lang === "TJ" 
// //               ? "Шоҳкориҳои қаннодии дастӣ ва шириниҳои шарқӣ бо сифати олӣ" 
// //               : lang === "RU" 
// //                 ? "Кондитерские шедевры ручной работы и восточные сладости премиум-класса" 
// //                 : "Handcrafted confectionery masterpieces and premium oriental sweets"}
// //           </p>

// //           {/* ФИГУРНАЯ КНОПКА КУШОДАНИ МЕНЮ СЛЕВА НА ГРАНИЦЕ (КАК НА МАКЕТЕ) */}
// //           <div className="absolute left-6 -bottom-10 z-20">
// //             <button
// //               onClick={handleOpenMenuClick}
// //               className="flex flex-col items-center justify-center h-24 w-24 rounded-full border-4 border-[#FAF6F0] bg-[#D9C6B0] shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 text-[#3D2E20] group"
// //               style={{ backgroundImage: "radial-gradient(circle, #E3D4C1 60%, #D9C6B0 100%)" }}
// //             >
// //               <span className="text-[10px] font-extrabold uppercase tracking-tight text-center leading-tight px-1 select-none">
// //                 {lang === "TJ" ? "КУШОДАНИ МЕНЮ" : lang === "RU" ? "ОТКРЫТЬ МЕНЮ" : "OPEN MENU"}
// //               </span>
// //               <ArrowDown className="h-4 w-4 mt-1 text-[#3D2E20] transition-transform duration-300 group-hover:translate-y-1" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Информационные плашки (Рейтинг, Часы, Сладости) */}
// //       <div className={`relative z-10 -mt-6 grid grid-cols-3 gap-3 px-4 sm:px-6 w-full ${fadeCls()}`} style={delayStyle(500)}>
// //         <div className="col-span-1 invisible h-8 pointer-events-none" /> {/* Пропуск для кнопки-печати меню */}
// //         <div className="col-span-3 grid grid-cols-3 gap-3">
// //           {stats.map((s) => (
// //             <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#D4AF37]/35 bg-white/95 p-3 sm:p-4 shadow-[0_10px_25px_rgba(154,123,79,0.06)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]">
// //               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6F0] text-[#9A7B4F]">{s.icon}</div>
// //               <span className="text-sm sm:text-base font-black text-[#3D2E20] tracking-tight">{s.value}</span>
// //               <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#9A7B4F] text-center">{s.label}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Блок меню */}
// //       {showMenu && (
// //         <div ref={menuRef} className="mt-16 px-4 sm:px-6 w-full scroll-mt-6 animate-fade-in">
          
// //           {/* Декоративный заголовок раздела */}
// //           <div className="text-center mb-8">
// //             <h2 className="font-serif text-[26px] sm:text-[32px] text-[#3D2E20] font-semibold tracking-tight">{menuData.menuHeaderTitle}</h2>
// //             <div className="flex items-center justify-center gap-2 mt-2">
// //               <div className="h-[1.5px] w-12 bg-[#9A7B4F]/40" />
// //               <span className="text-[#9A7B4F] text-[8px]">◆</span>
// //               <div className="h-[1.5px] w-12 bg-[#9A7B4F]/40" />
// //             </div>
// //           </div>

// //           {/* ПАНЕЛЬ АДМИНИСТРАТОРА */}
// //           {isAdmin && (
// //             <div className="mb-8 rounded-3xl border border-[#D4AF37]/50 bg-white p-5 shadow-[0_8px_25px_rgba(154,123,79,0.08)] flex flex-col gap-4">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <h3 className="text-sm font-bold text-[#9A7B4F] flex items-center gap-2">
// //                     <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
// //                     Режими администратор
// //                   </h3>
// //                   <p className="text-[10px] text-neutral-500 mt-0.5">Вносите изменения в режиме реального времени</p>
// //                 </div>
// //                 <button
// //                   onClick={() => setIsAdmin(false)}
// //                   className="rounded-xl bg-red-500/10 border border-red-500/30 px-3.5 py-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider transition hover:bg-red-500/20"
// //                 >
// //                   Баромад
// //                 </button>
// //               </div>

// //               <button 
// //                 onClick={openAddModal}
// //                 className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] py-3.5 text-xs font-bold uppercase tracking-widest text-[#3D2E20] border border-[#D4AF37]/45 shadow-[0_4px_15px_rgba(154,123,79,0.1)] transition hover:brightness-105"
// //               >
// //                 ➕ Иловаи таом / десерт
// //               </button>
// //             </div>
// //           )}

// //           {!selectedCategory ? (
// //             <>
// //               {/* Промо-карточки */}
// //               <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-4">
// //                 <button onClick={() => setSelectedCategory("bestsellers")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
// //                   <span className="text-2xl mb-1">🔥</span>
// //                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.bestsellerLabel}</span>
// //                 </button>
// //                 <button onClick={() => setSelectedCategory("new")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
// //                   <span className="text-2xl mb-1">✨</span>
// //                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.newArrivalsLabel}</span>
// //                 </button>
// //                 <button onClick={() => setSelectedCategory("favorites")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
// //                   <span className="text-2xl mb-1">❤️</span>
// //                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.favoritesLabel}</span>
// //                 </button>
// //               </div>

// //               {/* КАРТОЧКИ КАТЕГОРИЙ (СВЕТЛЫЕ ЗОЛОТЫЕ) */}
// //               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
// //                 {menuData.categories.map((cat) => (
// //                   <button 
// //                     key={cat.id} 
// //                     onClick={() => setSelectedCategory(cat.id)} 
// //                     className="flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl border border-[#D4AF37]/30 bg-white hover:bg-[#FAF6F0] transition-all duration-300 hover:border-[#9A7B4F] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(154,123,79,0.06)] group"
// //                   >
// //                     <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF6F0] text-xl mb-3 group-hover:scale-105 transition-transform">{cat.icon}</span>
// //                     <span className="text-[12px] sm:text-sm font-bold text-[#3D2E20] group-hover:text-[#9A7B4F] transition-colors">{cat.name}</span>
// //                   </button>
// //                 ))}
// //               </div>
// //             </>
// //           ) : (
// //             /* Список блюд */
// //             <div className="animate-fade-in">
// //               <div className="flex flex-col gap-4 mb-6">
// //                 <div className="flex items-center justify-between">
// //                   <button onClick={() => { setSelectedCategory(null); setSelectedCakeSubcategory("all"); }} className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9A7B4F] hover:text-[#3D2E20] transition-colors">
// //                     <ArrowLeft className="h-4 w-4" />
// //                     {menuData.backToCategories}
// //                   </button>
// //                   <span className="text-[10px] font-extrabold text-[#9A7B4F] uppercase tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1.5 rounded-full">{getSelectedCategoryName()}</span>
// //                 </div>

// //                 {/* ВЛОЖЕННЫЕ ФИЛЬТРЫ ДЛЯ ТОРТОВ (Детские, Взрослые, Бенто, Свадебные) */}
// //                 {selectedCategory === "cakes" && (
// //                   <div className="flex flex-wrap gap-1.5 bg-[#FAF6F0] p-1 rounded-xl border border-[#D4AF37]/20">
// //                     <button 
// //                       onClick={() => setSelectedCakeSubcategory("all")}
// //                       className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedCakeSubcategory === "all" ? "bg-[#9A7B4F] text-white shadow-sm" : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"}`}
// //                     >
// //                       {menuData.allCakesLabel}
// //                     </button>
// //                     {Object.entries(menuData.subcategories).map(([subId, subName]) => (
// //                       <button 
// //                         key={subId}
// //                         onClick={() => setSelectedCakeSubcategory(subId)}
// //                         className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedCakeSubcategory === subId ? "bg-[#9A7B4F] text-white shadow-sm" : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"}`}
// //                       >
// //                         {subName}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               {filteredDishes.length === 0 ? (
// //                 <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{selectedCategory === "favorites" ? menuData.emptyFavorites : menuData.emptyCategory}</p>
// //               ) : (
// //                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
// //                   {filteredDishes.map((dish) => {
// //                     const categoryIcon = menuData.categories.find(c => c.id === dish.category)?.icon || "🧁";
// //                     return (
// //                       <div key={dish.id} onClick={() => setActiveDish(dish)} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-3 pb-4 shadow-[0_4px_15px_rgba(154,123,79,0.03)] cursor-pointer hover:border-[#9A7B4F] hover:-translate-y-0.5 transition-all min-h-[250px]">
                        
// //                         {/* Быстрое управление для администратора */}
// //                         {isAdmin && (
// //                           <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
// //                             <button
// //                               onClick={(e) => openEditModal(dish, e)}
// //                               className="flex-1 flex items-center justify-center rounded-lg bg-[#9A7B4F] text-white py-1 text-[9px] font-bold uppercase transition hover:brightness-110 shadow-sm"
// //                             >
// //                               ✏ Правка
// //                             </button>
// //                             <button
// //                               onClick={(e) => openDeleteModal(dish, e)}
// //                               className="flex-1 flex items-center justify-center rounded-lg bg-red-600 text-white py-1 text-[9px] font-bold uppercase transition hover:bg-red-700 shadow-sm"
// //                             >
// //                               🗑 Дел
// //                             </button>
// //                           </div>
// //                         )}

// //                         <div className="relative w-full h-28 rounded-xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-3 shrink-0 border border-[#D4AF37]/15">
// //                           {dish.image ? (
// //                             <img src={dish.image} alt={dish.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
// //                           ) : (
// //                             <span className="relative text-3xl transform group-hover:scale-105 transition-transform duration-300">{categoryIcon}</span>
// //                           )}

// //                           {/* Ярлыки */}
// //                           <div className="absolute left-2 bottom-2 flex flex-col gap-1 z-10 pointer-events-none">
// //                             {dish.bestseller && (
// //                               <span className="bg-[#9A7B4F] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">HIT</span>
// //                             )}
// //                             {dish.isNew && (
// //                               <span className="bg-emerald-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">NEW</span>
// //                             )}
// //                           </div>

// //                           <button onClick={(e) => toggleFavorite(dish.id, e)} className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#9A7B4F] border border-[#D4AF37]/20 backdrop-blur-xs transition hover:scale-105">
// //                             <Heart className={`h-4 w-4 transition-colors ${favorites.includes(dish.id) ? "fill-[#9A7B4F] text-[#9A7B4F]" : "text-[#9A7B4F]/50"}`} />
// //                           </button>
// //                         </div>

// //                         <div className="flex flex-1 flex-col px-1">
// //                           <h3 className="text-xs sm:text-sm font-bold leading-tight text-[#3D2E20] line-clamp-2 group-hover:text-[#9A7B4F] transition-colors">{dish.name}</h3>
// //                           <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-neutral-500 line-clamp-2">{dish.description || "—"}</p>
// //                         </div>

// //                         <div className="mt-3 pt-2 border-t border-neutral-100 flex flex-col gap-1.5 px-1">
// //                           <span className="text-[11px] sm:text-xs font-black text-[#9A7B4F]">{dish.price}</span>
// //                           {dish.composition && <span className="inline-flex items-center self-start rounded-md bg-[#FAF6F0] border border-[#D4AF37]/25 px-1.5 py-0.5 text-[8px] font-bold text-[#9A7B4F] uppercase tracking-wider">{menuData.ingredientsArrow}</span>}
// //                         </div>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* КНОПКА-ТРИГГЕР ДЛЯ СЕКРЕТНОГО ВХОДА В УГЛУ */}
// //       <button
// //         type="button"
// //         onClick={() => setAuthModalOpen(true)}
// //         className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#D4AF37]/40 shadow-[0_4px_15px_rgba(154,123,79,0.15)] text-[#9A7B4F] backdrop-blur-md transition hover:scale-105"
// //         aria-label="Настройки Администратора"
// //       >
// //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
// //         </svg>
// //       </button>

// //       {/* МОДАЛКА ВЫБОРА: ОТКРЫТЬ ИЛИ ВОЙТИ */}
// //       {authModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
// //           <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-4">
// //             <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
// //               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">Панели дастрасӣ</h3>
// //               <button onClick={() => setAuthModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
// //                 <X className="h-4 w-4" />
// //               </button>
// //             </div>
// //             <p className="text-xs text-neutral-500 text-center">Режими намоишро интихоб кунед</p>
// //             <div className="flex flex-col gap-2 mt-2">
// //               <button
// //                 onClick={() => handleAuthChoice("menu")}
// //                 className="w-full py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-[#3D2E20] transition hover:bg-neutral-100"
// //               >
// //                 🍽 Кушодани меню
// //               </button>
// //               <button
// //                 onClick={() => handleAuthChoice("admin")}
// //                 className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider text-[#3D2E20] shadow-sm transition hover:brightness-105"
// //               >
// //                 🔒 Мудири сайт (Admin)
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* МОДАЛКА ВВОДА ПАРОЛЯ */}
// //       {passwordModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
// //           <form onSubmit={handlePasswordSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-4">
// //             <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
// //               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">Авторизатсия</h3>
// //               <button type="button" onClick={() => setPasswordModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
// //                 <X className="h-4 w-4" />
// //               </button>
// //             </div>

// //             <div className="flex flex-col gap-1.5 mt-2">
// //               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Рамзро ворид кунед (Пароль)</label>
// //               <input
// //                 type="password"
// //                 required
// //                 value={passwordInput}
// //                 onChange={(e) => setPasswordInput(e.target.value)}
// //                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-4 py-3 text-sm text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none transition-colors"
// //                 placeholder="••••••"
// //               />
// //             </div>

// //             {authError && (
// //               <div className="rounded-xl border border-red-500/10 bg-red-50 p-2 text-center">
// //                 <p className="text-[11px] font-semibold text-red-500">{authError}</p>
// //               </div>
// //             )}

// //             <div className="flex gap-2 mt-4">
// //               <button
// //                 type="button"
// //                 onClick={() => setPasswordModalOpen(false)}
// //                 className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
// //               >
// //                 Қатъ
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm"
// //               >
// //                 Вход
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       )}

// //       {/* МОДАЛКА CRUD: ДОБАВЛЕНИЕ / РЕДАКТИРОВАНИЕ */}
// //       {dishModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in overflow-y-auto">
// //           <form onSubmit={handleFormSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-5 my-8 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-3 max-h-[90vh] overflow-y-auto no-scrollbar">
            
// //             <div className="flex items-center justify-between border-b border-neutral-100 pb-3 shrink-0">
// //               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">
// //                 {editingDish ? "✏ Изменение" : "➕ Добавление"}
// //               </h3>
// //               <button type="button" onClick={() => setDishModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
// //                 <X className="h-4 w-4" />
// //               </button>
// //             </div>

// //             {/* Изображение */}
// //             <div className="flex flex-col gap-1.5">
// //               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Фото блюда</label>
// //               <div className="relative w-full h-32 rounded-xl bg-[#FAF6F0] border border-neutral-200 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
// //                 {formImage ? (
// //                   <>
// //                     <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
// //                     <button 
// //                       type="button" 
// //                       onClick={() => setFormImage("")}
// //                       className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-red-500"
// //                     >
// //                       <X className="h-3.5 w-3.5" />
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <div className="text-center p-4">
// //                     <span className="text-2xl">📸</span>
// //                     <p className="text-[10px] text-neutral-500 mt-1 font-bold">Выберите изображение</p>
// //                   </div>
// //                 )}
// //                 <input 
// //                   type="file" 
// //                   accept="image/*" 
// //                   onChange={handleFileChange}
// //                   className="absolute inset-0 opacity-0 cursor-pointer"
// //                 />
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-2.5">
// //               <div className="flex flex-col gap-1">
// //                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Название</label>
// //                 <input
// //                   type="text"
// //                   required
// //                   value={formName}
// //                   onChange={(e) => setFormName(e.target.value)}
// //                   className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
// //                   placeholder="Бургери Махсус"
// //                 />
// //               </div>
// //               <div className="flex flex-col gap-1">
// //                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Цена</label>
// //                 <input
// //                   type="text"
// //                   required
// //                   value={formPrice}
// //                   onChange={(e) => setFormPrice(e.target.value)}
// //                   className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
// //                   placeholder="15 смн"
// //                 />
// //               </div>
// //             </div>

// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Категория</label>
// //               <select
// //                 value={formCategory}
// //                 onChange={(e) => setFormCategory(e.target.value)}
// //                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
// //               >
// //                 {menuData.categories.map((cat) => (
// //                   <option key={cat.id} value={cat.id} className="text-[#3D2E20]">
// //                     {cat.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* ВЛОЖЕННЫЕ ПОДКАТЕГОРИИ ДЛЯ ТОРТОВ В CRUD */}
// //             {formCategory === "cakes" && (
// //               <div className="flex flex-col gap-1 animate-fade-in">
// //                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuData.cakeSubcategoryLabel}</label>
// //                 <select
// //                   value={formSubCategory}
// //                   onChange={(e) => setFormSubCategory(e.target.value)}
// //                   className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
// //                 >
// //                   {Object.entries(menuData.subcategories).map(([subId, subName]) => (
// //                     <option key={subId} value={subId} className="text-[#3D2E20]">
// //                       {subName}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //             )}

// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Описание</label>
// //               <textarea
// //                 rows={2}
// //                 required
// //                 value={formDescription}
// //                 onChange={(e) => setFormDescription(e.target.value)}
// //                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
// //                 placeholder="Тафсилот..."
// //               />
// //             </div>

// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Состав</label>
// //               <textarea
// //                 rows={2}
// //                 value={formComposition}
// //                 onChange={(e) => setFormComposition(e.target.value)}
// //                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
// //                 placeholder="Таркиб..."
// //               />
// //             </div>

// //             <div className="flex items-center gap-4 mt-1 border-t border-neutral-100 pt-2">
// //               <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
// //                 <input 
// //                   type="checkbox" 
// //                   checked={formBestseller}
// //                   onChange={(e) => setFormBestseller(e.target.checked)}
// //                   className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4"
// //                 />
// //                 Хит продаж
// //               </label>
// //               <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
// //                 <input 
// //                   type="checkbox" 
// //                   checked={formIsNew}
// //                   onChange={(e) => setFormNew(e.target.checked)}
// //                   className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4"
// //                 />
// //                 Новинка
// //               </label>
// //             </div>

// //             <div className="flex gap-2 mt-2 shrink-0">
// //               <button
// //                 type="button"
// //                 onClick={() => setDishModalOpen(false)}
// //                 className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
// //               >
// //                 Отмена
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm"
// //               >
// //                 Сохранить
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       )}

// //       {/* ДИАЛОГ УДАЛЕНИЯ */}
// //       {deleteConfirmOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
// //           <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-red-200 flex flex-col gap-4">
// //             <h3 className="font-serif text-lg font-bold text-[#3D2E20] text-center">Вы действительно хотите удалить?</h3>
// //             <p className="text-xs text-neutral-500 text-center">
// //               Блюдо «<span className="text-[#9A7B4F] font-bold">{dishToDelete?.name}</span>» будет удалено навсегда.
// //             </p>
// //             <div className="flex gap-2 mt-2">
// //               <button
// //                 onClick={() => setDeleteConfirmOpen(false)}
// //                 className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
// //               >
// //                 Отмена
// //               </button>
// //               <button
// //                 onClick={confirmDelete}
// //                 className="flex-1 py-3 rounded-xl bg-red-600 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
// //               >
// //                 Удалить
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* МОДАЛКА ПРОСМОТРА БЛЮДА */}
// //       {activeDish && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
// //           <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(154,123,79,0.12)] border border-[#D4AF37]/20 max-h-[90vh] flex flex-col">
// //             <div className="flex items-center justify-between mb-4 shrink-0">
// //               <button onClick={(e) => toggleFavorite(activeDish.id, e)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#D4AF37]/20 text-[#9A7B4F]">
// //                 <Heart className={`h-4.5 w-4.5 ${favorites.includes(activeDish.id) ? "fill-[#9A7B4F]" : ""}`} />
// //               </button>
// //               <button onClick={() => setActiveDish(null)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-neutral-200 text-neutral-500 hover:text-[#3D2E20]">
// //                 <X className="h-4.5 w-4.5" />
// //               </button>
// //             </div>
            
// //             <div className="relative w-full h-32 rounded-2xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-4 shrink-0 border border-[#D4AF37]/15">
// //               {activeDish.image ? (
// //                 <img src={activeDish.image} alt={activeDish.name} className="w-full h-full object-cover" />
// //               ) : (
// //                 <span className="relative text-5xl">{menuData.categories.find(c => c.id === activeDish.category)?.icon || "🧁"}</span>
// //               )}
// //             </div>

// //             <div className="overflow-y-auto pr-1">
// //               <div className="flex flex-col gap-2">
// //                 <h3 className="font-serif text-[20px] font-bold text-[#3D2E20] leading-snug">{activeDish.name}</h3>
// //                 <p className="text-[11px] leading-relaxed text-neutral-500">{activeDish.description || "—"}</p>
// //                 <span className="self-start mt-2 rounded-lg bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/35 px-4 py-1.5 text-xs font-black text-[#3D2E20] shadow-sm">{activeDish.price}</span>
// //               </div>
// //               <div className="my-4 h-[1px] bg-neutral-100" />
// //               {activeDish.composition ? (
// //                 <div className="space-y-1.5">
// //                   <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuData.compositionLabel}</h4>
// //                   <p className="text-xs leading-relaxed text-neutral-600">{activeDish.composition}</p>
// //                 </div>
// //               ) : (
// //                 <p className="text-xs text-neutral-400 italic">Таркиб муайян нашудааст</p>
// //               )}
// //               <button onClick={() => setActiveDish(null)} className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 py-3 text-xs font-bold uppercase tracking-widest text-[#3D2E20] shadow-sm">{menuData.closeLabel}</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }



// // src/components/Hero.jsx
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

// // Гарантированные переводы элементов интерфейса, которые меняются мгновенно при переключении языка
// const UI_TRANSLATIONS = {
//   TJ: {
//     badge: "КАННОДИИ ПРЕМИУМ",
//     title: "Шаҳди Хуҷанд",
//     // subtitle: "Шоҳкориҳои қаннодии дастӣ ва шириниҳои шарқӣ бо сифати олӣ",
//     openMenu: "КУШОДАНИ МЕНЮ",
//     rating: "Рейтинг",
//     hoursLabel: "Соатҳо",
//     sweetsLabel: "Шириниҳо",
//     hours: "10:00 - 23:00",
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
//     emptyFav: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст..."
//   },
//   RU: {
//     badge: "ПРЕМИУМ ВЫПЕЧКА",
//     title: "Шахди Хужанд",
//     // subtitle: "Кондитерские шедевры ручной работы и восточные сладости премиум-класса",
//     openMenu: "ОТКРЫТЬ МЕНЮ",
//     rating: "Рейтинг",
//     hoursLabel: "Часы работы",
//     sweetsLabel: "Сладости",
//     hours: "10:00 - 23:00",
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
//     emptyFav: "Список избранного пока пуст..."
//   },
//   EN: {
//     badge: "PREMIUM BAKERY",
//     title: "Shahdi Khujand",
//     // subtitle: "Handcrafted confectionery masterpieces and premium oriental sweets",
//     openMenu: "OPEN MENU",
//     rating: "Rating",
//     hoursLabel: "Hours",
//     sweetsLabel: "Sweets",
//     hours: "10:00 - 23:00",
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
//     emptyFav: "Your favorites list is currently empty..."
//   }
// };

// const MENU_TRANSLATIONS = {
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
//     categories: [
//       { id: "burgers", name: "Бургерҳо", icon: "🍔" },
//       { id: "breakfasts", name: "Ноништаҳо", icon: "🍳" },
//       { id: "waffles", name: "Вафлиҳо", icon: "🧇" },
//       { id: "pizza", name: "Питса", icon: "🍕" },
//       { id: "pastries", name: "Пирожниҳо", icon: "🧁" },
//       { id: "cakes", name: "Тортҳо", icon: "🍰" },
//       { id: "drinks", name: "Нӯшокиҳо", icon: "🍹" },
//       { id: "coffee", name: "Кофе", icon: "☕" },
//     ],
//     dishes: [
//       {
//         id: 1,
//         category: "cakes",
//         subCategory: "bento",
//         name: "Бенто Торти Кулпунай",
//         price: "15 смн",
//         image: "",
//         description: "Мини-торти машҳур бо Тарбуз ва қаймоқи сабук.",
//         composition: "Бисквит, Тарбузи тару тоза, қаймоқи лазиз.",
//         bestseller: true
//       },
//       {
//         id: 2,
//         category: "cakes",
//         subCategory: "kids",
//         name: "Торти Кӯдаконаи «Хайвонот»",
//         price: "22 смн",
//         image: "",
//         description: "Торти рангоранги кӯдакона бо ороиши бозичаҳои лазиз.",
//         composition: "Хамири нарм, қаймоқи табиии ванилӣ."
//       },
//       {
//         id: 3,
//         category: "burgers",
//         name: "Бургери Классикӣ",
//         price: "18 смн",
//         image: "",
//         description: "Бургери болаззат бо гӯшти гов ва чошнии махсус.",
//         composition: "Гӯшти гов, панир, помидор, хӯриш, чошнии фирмавӣ."
//       }
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
//     categories: [
//       { id: "burgers", name: "Бургеры", icon: "🍔" },
//       { id: "breakfasts", name: "Завтраки", icon: "🍳" },
//       { id: "waffles", name: "Вафли", icon: "🧇" },
//       { id: "pizza", name: "Пицца", icon: "🍕" },
//       { id: "pastries", name: "Пирожные", icon: "🧁" },
//       { id: "cakes", name: "Торты", icon: "🍰" },
//       { id: "drinks", name: "Напитки", icon: "🍹" },
//       { id: "coffee", name: "Кофе", icon: "☕" },
//     ],
//     dishes: [
//       {
//         id: 1,
//         category: "cakes",
//         subCategory: "bento",
//         name: "Бенто Торт Клубничный",
//         price: "15 смн",
//         image: "",
//         description: "Популярный mini-торт с нежным клубничным конфитюром.",
//         composition: "Бисквит, натуральная клубника, крем-чиз.",
//         bestseller: true
//       },
//       {
//         id: 2,
//         category: "cakes",
//         subCategory: "kids",
//         name: "Детский Торт «Зоопарк»",
//         price: "22 смн",
//         image: "",
//         description: "Красочный торт с фигурками из мастики для праздника.",
//         composition: "Ванильный бисквит, йогуртовый крем, фруктовая начинка."
//       },
//       {
//         id: 3,
//         category: "burgers",
//         name: "Бургер Классический",
//         price: "18 смн",
//         image: "",
//         description: "Сочный бургер с котлетой из мраморной говядины.",
//         composition: "Говяжья котлета, сыр чеддер, соус барбекю, свежие овощи."
//       }
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
//     categories: [
//       { id: "burgers", name: "Burgers", icon: "🍔" },
//       { id: "breakfasts", name: "Breakfasts", icon: "🍳" },
//       { id: "waffles", name: "Waffles", icon: "🧇" },
//       { id: "pizza", name: "Pizza", icon: "🍕" },
//       { id: "pastries", name: "Pastries", icon: "🧁" },
//       { id: "cakes", name: "Cakes", icon: "🍰" },
//       { id: "drinks", name: "Drinks", icon: "🍹" },
//       { id: "coffee", name: "Coffee", icon: "☕" },
//     ],
//     dishes: [
//       {
//         id: 1,
//         category: "cakes",
//         subCategory: "bento",
//         name: "Strawberry Bento Cake",
//         price: "15 smn",
//         image: "",
//         description: "Trending mini-cake with cream cheese and strawberries.",
//         composition: "Sponge cake, natural strawberries, cream cheese fillings.",
//         bestseller: true
//       },
//       {
//         id: 2,
//         category: "cakes",
//         subCategory: "kids",
//         name: "Kids' 'Zoo' Cake",
//         price: "22 smn",
//         image: "",
//         description: "Colorful kids cake decorated with cute edible animals.",
//         composition: "Sponge layers, yogurt cream, fruit jam."
//       },
//       {
//         id: 3,
//         category: "burgers",
//         name: "Classic Burger",
//         price: "18 smn",
//         image: "",
//         description: "Classic juicy burger with beef cutlet and secret sauce.",
//         composition: "Beef cutlet, cheddar, lettuce, fresh tomatoes, burger sauce."
//       }
//     ]
//   }
// };

// export default function Hero({
//   backgroundImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
//   onOpenMenu,
// }) {
//   const { lang } = useLanguage(); 
//   const [mounted, setMounted] = useState(false);
  
//   const [showMenu, setShowMenu] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedCakeSubcategory, setSelectedCakeSubcategory] = useState("all");
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

//   // Поля формы блюда
//   const [formName, setFormName] = useState("");
//   const [formPrice, setFormPrice] = useState("");
//   const [formCategory, setFormCategory] = useState("burgers");
//   const [formSubCategory, setFormSubCategory] = useState("bento");
//   const [formDescription, setFormDescription] = useState("");
//   const [formComposition, setFormComposition] = useState("");
//   const [formBestseller, setFormBestseller] = useState(false);
//   const [formIsNew, setFormNew] = useState(false);
//   const [formImage, setFormImage] = useState("");

//   // Локальный словарь интерфейса для мгновенного перевода
//   const ui = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS["TJ"];

//   const [menuTranslations, setMenuTranslations] = useState(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("custom_menu_translations");
//       if (saved) {
//         try {
//           const parsed = JSON.parse(saved);
//           // Умный сброс кэша: если в сохраненных данных старые категории - сбрасываем
//           const hasBurgers = parsed.TJ?.categories?.some(c => c.id === "burgers");
//           if (hasBurgers) {
//             return parsed;
//           }
//         } catch (e) {
//           // Игнорируем ошибку
//         }
//       }
//     }
//     return MENU_TRANSLATIONS;
//   });

//   useEffect(() => {
//     localStorage.setItem("custom_menu_translations", JSON.stringify(menuTranslations));
//   }, [menuTranslations]);

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
//   const menuData = menuTranslations[lang] || menuTranslations["TJ"];

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
//     if (passwordInput === "123456") {
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
//     setFormName("");
//     setFormPrice("");
//     setFormCategory("burgers");
//     setFormSubCategory("bento");
//     setFormDescription("");
//     setFormComposition("");
//     setFormBestseller(false);
//     setFormNew(false);
//     setFormImage("");
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const openAddModal = () => {
//     resetForm();
//     setEditingDish(null);
//     setDishModalOpen(true);
//   };

//   const openEditModal = (dish, e) => {
//     e.stopPropagation();
//     setEditingDish(dish);
//     setFormName(dish.name || "");
//     setFormPrice(dish.price || "");
//     setFormCategory(dish.category || "burgers");
//     setFormSubCategory(dish.subCategory || "bento");
//     setFormDescription(dish.description || "");
//     setFormComposition(dish.composition || "");
//     setFormBestseller(!!dish.bestseller);
//     setFormNew(!!dish.isNew);
//     setFormImage(dish.image || "");
//     setDishModalOpen(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const updated = { ...menuTranslations };

//     if (editingDish) {
//       Object.keys(updated).forEach((langKey) => {
//         updated[langKey].dishes = updated[langKey].dishes.map((d) => {
//           if (d.id === editingDish.id) {
//             return {
//               ...d,
//               category: formCategory,
//               subCategory: formCategory === "cakes" ? formSubCategory : undefined,
//               price: formPrice,
//               image: formImage,
//               bestseller: formBestseller,
//               isNew: formIsNew,
//               ...(langKey === lang ? {
//                 name: formName,
//                 description: formDescription,
//                 composition: formComposition
//               } : {})
//             };
//           }
//           return d;
//         });
//       });
//     } else {
//       const newId = Date.now();
//       const newDish = {
//         id: newId,
//         category: formCategory,
//         subCategory: formCategory === "cakes" ? formSubCategory : undefined,
//         name: formName,
//         price: formPrice,
//         image: formImage,
//         description: formDescription,
//         composition: formComposition,
//         bestseller: formBestseller,
//         isNew: formIsNew
//       };

//       Object.keys(updated).forEach((langKey) => {
//         updated[langKey].dishes = [newDish, ...updated[langKey].dishes];
//       });
//     }

//     setMenuTranslations(updated);
//     setDishModalOpen(false);
//     resetForm();
//   };

//   const openDeleteModal = (dish, e) => {
//     e.stopPropagation();
//     setDishToDelete(dish);
//     setDeleteConfirmOpen(true);
//   };

//   const confirmDelete = () => {
//     if (!dishToDelete) return;
//     const updated = { ...menuTranslations };

//     Object.keys(updated).forEach((langKey) => {
//       updated[langKey].dishes = updated[langKey].dishes.filter((d) => d.id !== dishToDelete.id);
//     });

//     setMenuTranslations(updated);
//     setDeleteConfirmOpen(false);
//     setDishToDelete(null);
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

//   let filteredDishes = [];
//   if (selectedCategory === "bestsellers") {
//     filteredDishes = menuData.dishes.filter((dish) => dish.bestseller);
//   } else if (selectedCategory === "new") {
//     filteredDishes = menuData.dishes.filter((dish) => dish.isNew);
//   } else if (selectedCategory === "favorites") {
//     filteredDishes = menuData.dishes.filter((dish) => favorites.includes(dish.id));
//   } else if (selectedCategory === "cakes") {
//     filteredDishes = menuData.dishes.filter((dish) => {
//       const matchCat = dish.category === "cakes";
//       if (!matchCat) return false;
//       if (selectedCakeSubcategory === "all") return true;
//       return dish.subCategory === selectedCakeSubcategory;
//     });
//   } else {
//     filteredDishes = menuData.dishes.filter((dish) => dish.category === selectedCategory);
//   }

//   const getSelectedCategoryName = () => {
//     if (selectedCategory === "bestsellers") return menuData.bestsellerLabel;
//     if (selectedCategory === "new") return menuData.newArrivalsLabel;
//     if (selectedCategory === "favorites") return menuData.favoritesLabel;
//     return menuData.categories.find((c) => c.id === selectedCategory)?.name;
//   };

//   return (
//     <section className="w-full pb-16 bg-[#FAF6F0] text-[#3D2E20] min-h-screen relative">
      
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

//           <p className={`mt-4 text-xs sm:text-sm font-medium leading-relaxed text-neutral-200 max-w-xl ${fadeCls()}`} style={delayStyle(320)}>
//             {ui.subtitle}
//           </p>
//         </div>
//       </div>

//       {/* НОВЫЙ КОНТЕЙНЕР ДЛЯ КНОПОК «ОТКРЫТЬ МЕНЮ» И «АДМИН» (вне overflow-hidden, поверх рейтинга и графика) */}
//       <div className="relative z-30 w-full px-5 sm:px-8 h-0">
//         <div className="absolute left-5 sm:left-5 -top-20 flex items-center gap-3">
//           {/* Продолговатая кнопка открытия меню */}
//           <button
//             onClick={handleOpenMenuClick}
//             className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#FAF6F0] bg-gradient-to-r from-[#E3D4C1] to-[#D9C6B0] shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-95 text-[#3D2E20] font-extrabold uppercase tracking-wider text-[11px]"
//           >
//             <span>{ui.openMenu}</span>
//             <ArrowDown className="h-4 w-4 text-[#3D2E20]" />
//           </button>

//           {/* Кнопка админа */}
//           <button
//             type="button"
//             onClick={() => setAuthModalOpen(true)}
//             className="flex items-center justify-center h-11 w-40 rounded-full border-2 border-transparent bg-transparent  transition-transform duration-300 hover:scale-105 active:scale-95 text-transparent"
//             aria-label="Администратор"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Статистика */}
//       <div className={`relative z-10 -mt-6 grid grid-cols-3 gap-3 px-4 sm:px-6 w-full ${fadeCls()}`} style={delayStyle(500)}>
//         <div className="col-span-3 grid grid-cols-3 gap-3">
//           {stats.map((s) => (
//             <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#D4AF37]/35 bg-white/95 p-3 sm:p-4 shadow-[0_10px_25px_rgba(154,123,79,0.06)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6F0] text-[#9A7B4F]">{s.icon}</div>
//               <span className="text-sm sm:text-base font-black text-[#3D2E20] tracking-tight">{s.value}</span>
//               <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#9A7B4F] text-center">{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Меню */}
//       {showMenu && (
//         <div ref={menuRef} className="mt-16 px-4 sm:px-6 w-full scroll-mt-6 animate-fade-in">
          
//           <div className="text-center mb-8">
//             <h2 className="font-serif text-[26px] sm:text-[32px] text-[#3D2E20] font-semibold tracking-tight">{menuData.menuHeaderTitle}</h2>
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

//           {!selectedCategory ? (
//             <>
//               {/* Промо-карточки */}
//               <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-4">
//                 <button onClick={() => setSelectedCategory("bestsellers")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
//                   <span className="text-2xl mb-1">🔥</span>
//                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.bestsellerLabel}</span>
//                 </button>
//                 <button onClick={() => setSelectedCategory("new")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
//                   <span className="text-2xl mb-1">✨</span>
//                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.newArrivalsLabel}</span>
//                 </button>
//                 <button onClick={() => setSelectedCategory("favorites")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
//                   <span className="text-2xl mb-1">❤️</span>
//                   <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.favoritesLabel}</span>
//                 </button>
//               </div>

//               {/* Категории */}
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//                 {menuData.categories.map((cat) => (
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
//                   <button onClick={() => { setSelectedCategory(null); setSelectedCakeSubcategory("all"); }} className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9A7B4F] hover:text-[#3D2E20] transition-colors">
//                     <ArrowLeft className="h-4 w-4" />
//                     {menuData.backToCategories}
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
//                       {menuData.allCakesLabel}
//                     </button>
//                     {Object.entries(menuData.subcategories).map(([subId, subName]) => (
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
//               </div>

//               {filteredDishes.length === 0 ? (
//                 <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{selectedCategory === "favorites" ? ui.emptyFav : menuData.emptyCategory}</p>
//               ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//                   {filteredDishes.map((dish) => {
//                     const categoryIcon = menuData.categories.find(c => c.id === dish.category)?.icon || "🧁";
//                     return (
//                       <div key={dish.id} onClick={() => setActiveDish(dish)} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-3 pb-4 shadow-[0_4px_15px_rgba(154,123,79,0.03)] cursor-pointer hover:border-[#9A7B4F] hover:-translate-y-0.5 transition-all min-h-[250px]">
                        
//                         {isAdmin && (
//                           <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
//                             <button
//                               onClick={(e) => openEditModal(dish, e)}
//                               className="flex-1 flex items-center justify-center rounded-lg bg-[#9A7B4F] text-white py-1 text-[9px] font-bold uppercase transition hover:brightness-110 shadow-sm"
//                             >
//                               ✏ Правка
//                             </button>
//                             <button
//                               onClick={(e) => openDeleteModal(dish, e)}
//                               className="flex-1 flex items-center justify-center rounded-lg bg-red-600 text-white py-1 text-[9px] font-bold uppercase transition hover:bg-red-700 shadow-sm"
//                             >
//                               🗑 Дел
//                             </button>
//                           </div>
//                         )}

//                         <div className="relative w-full h-28 rounded-xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-3 shrink-0 border border-[#D4AF37]/15">
//                           {dish.image ? (
//                             <img src={dish.image} alt={dish.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
//                           ) : (
//                             <span className="relative text-3xl transform group-hover:scale-105 transition-transform duration-300">{categoryIcon}</span>
//                           )}

//                           {/* Ярлыки */}
//                           <div className="absolute left-2 bottom-2 flex flex-col gap-1 z-10 pointer-events-none">
//                             {dish.bestseller && (
//                               <span className="bg-[#9A7B4F] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">HIT</span>
//                             )}
//                             {dish.isNew && (
//                               <span className="bg-emerald-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">NEW</span>
//                             )}
//                           </div>

//                           <button onClick={(e) => toggleFavorite(dish.id, e)} className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#9A7B4F] border border-[#D4AF37]/20 backdrop-blur-xs transition hover:scale-105">
//                             <Heart className={`h-4 w-4 transition-colors ${favorites.includes(dish.id) ? "fill-[#9A7B4F] text-[#9A7B4F]" : "text-[#9A7B4F]/50"}`} />
//                           </button>
//                         </div>

//                         <div className="flex flex-1 flex-col px-1">
//                           <h3 className="text-xs sm:text-sm font-bold leading-tight text-[#3D2E20] line-clamp-2 group-hover:text-[#9A7B4F] transition-colors">{dish.name}</h3>
//                           <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-neutral-500 line-clamp-2">{dish.description || "—"}</p>
//                         </div>

//                         <div className="mt-3 pt-2 border-t border-neutral-100 flex flex-col gap-1.5 px-1">
//                           <span className="text-[11px] sm:text-xs font-black text-[#9A7B4F]">{dish.price}</span>
//                           {dish.composition && <span className="inline-flex items-center self-start rounded-md bg-[#FAF6F0] border border-[#D4AF37]/25 px-1.5 py-0.5 text-[8px] font-bold text-[#9A7B4F] uppercase tracking-wider">{menuData.ingredientsArrow}</span>}
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
//           <form onSubmit={handleFormSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-5 my-8 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-3 max-h-[90vh] overflow-y-auto no-scrollbar">
            
//             <div className="flex items-center justify-between border-b border-neutral-100 pb-3 shrink-0">
//               <h3 className="font-serif text-lg font-bold text-[#3D2E20]">
//                 {editingDish ? "✏ Изменение" : "➕ Добавление"}
//               </h3>
//               <button type="button" onClick={() => setDishModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
//                 <X className="h-4 w-4" />
//               </button>
//             </div>

//             {/* Изображение */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Фото блюда</label>
//               <div className="relative w-full h-32 rounded-xl bg-[#FAF6F0] border border-neutral-200 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
//                 {formImage ? (
//                   <>
//                     <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
//                     <button 
//                       type="button" 
//                       onClick={() => setFormImage("")}
//                       className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-red-500"
//                     >
//                       <X className="h-3.5 w-3.5" />
//                     </button>
//                   </>
//                 ) : (
//                   <div className="text-center p-4">
//                     <span className="text-2xl">📸</span>
//                     <p className="text-[10px] text-neutral-500 mt-1 font-bold">Выберите изображение</p>
//                   </div>
//                 )}
//                 <input 
//                   type="file" 
//                   accept="image/*" 
//                   onChange={handleFileChange}
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-2.5">
//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Название</label>
//                 <input
//                   type="text"
//                   required
//                   value={formName}
//                   onChange={(e) => setFormName(e.target.value)}
//                   className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//                   placeholder="Название..."
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Цена</label>
//                 <input
//                   type="text"
//                   required
//                   value={formPrice}
//                   onChange={(e) => setFormPrice(e.target.value)}
//                   className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//                   placeholder="15 смн"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Категория</label>
//               <select
//                 value={formCategory}
//                 onChange={(e) => setFormCategory(e.target.value)}
//                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//               >
//                 {menuData.categories.map((cat) => (
//                   <option key={cat.id} value={cat.id} className="text-[#3D2E20]">
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Вложенные подкатегории в CRUD */}
//             {formCategory === "cakes" && (
//               <div className="flex flex-col gap-1 animate-fade-in">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuData.cakeSubcategoryLabel}</label>
//                 <select
//                   value={formSubCategory}
//                   onChange={(e) => setFormSubCategory(e.target.value)}
//                   className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//                 >
//                   {Object.entries(menuData.subcategories).map(([subId, subName]) => (
//                     <option key={subId} value={subId} className="text-[#3D2E20]">
//                       {subName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             <div className="flex flex-col gap-1">
//               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Описание</label>
//               <textarea
//                 rows={2}
//                 required
//                 value={formDescription}
//                 onChange={(e) => setFormDescription(e.target.value)}
//                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//                 placeholder="Тафсилот..."
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Состав</label>
//               <textarea
//                 rows={2}
//                 value={formComposition}
//                 onChange={(e) => setFormComposition(e.target.value)}
//                 className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
//                 placeholder="Таркиб..."
//               />
//             </div>

//             <div className="flex items-center gap-4 mt-1 border-t border-neutral-100 pt-2">
//               <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
//                 <input 
//                   type="checkbox" 
//                   checked={formBestseller}
//                   onChange={(e) => setFormBestseller(e.target.checked)}
//                   className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4"
//                 />
//                 Хит продаж
//               </label>
//               <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
//                 <input 
//                   type="checkbox" 
//                   checked={formIsNew}
//                   onChange={(e) => setFormNew(e.target.checked)}
//                   className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4"
//                 />
//                 Новинка
//               </label>
//             </div>

//             <div className="flex gap-2 mt-2 shrink-0">
//               <button
//                 type="button"
//                 onClick={() => setDishModalOpen(false)}
//                 className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
//               >
//                 {ui.cancel}
//               </button>
//               <button
//                 type="submit"
//                 className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm"
//               >
//                 Сохранить
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* ДИАЛОГ УДАЛЕНИЯ */}
//       {deleteConfirmOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
//           <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-red-200 flex flex-col gap-4">
//             <h3 className="font-serif text-lg font-bold text-[#3D2E20] text-center">Вы действительно хотите удалить?</h3>
//             <p className="text-xs text-neutral-500 text-center">
//               Блюдо «<span className="text-[#9A7B4F] font-bold">{dishToDelete?.name}</span>» будет удалено навсегда.
//             </p>
//             <div className="flex gap-2 mt-2">
//               <button
//                 onClick={() => setDeleteConfirmOpen(false)}
//                 className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
//               >
//                 {ui.cancel}
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="flex-1 py-3 rounded-xl bg-red-600 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
//               >
//                 Удалить
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* МОДАЛКА ПРОСМОТРА БЛЮДА */}
//       {activeDish && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
//           <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(154,123,79,0.12)] border border-[#D4AF37]/20 max-h-[90vh] flex flex-col">
//             <div className="flex items-center justify-between mb-4 shrink-0">
//               <button onClick={(e) => toggleFavorite(activeDish.id, e)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#D4AF37]/20 text-[#9A7B4F]">
//                 <Heart className={`h-4.5 w-4.5 ${favorites.includes(activeDish.id) ? "fill-[#9A7B4F]" : ""}`} />
//               </button>
//               <button onClick={() => setActiveDish(null)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-neutral-200 text-neutral-500 hover:text-[#3D2E20]">
//                 <X className="h-4.5 w-4.5" />
//               </button>
//             </div>
            
//             <div className="relative w-full h-32 rounded-2xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-4 shrink-0 border border-[#D4AF37]/15">
//               {activeDish.image ? (
//                 <img src={activeDish.image} alt={activeDish.name} className="w-full h-full object-cover" />
//               ) : (
//                 <span className="relative text-5xl">{menuData.categories.find(c => c.id === activeDish.category)?.icon || "🧁"}</span>
//               )}
//             </div>

//             <div className="overflow-y-auto pr-1">
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-serif text-[20px] font-bold text-[#3D2E20] leading-snug">{activeDish.name}</h3>
//                 <p className="text-[11px] leading-relaxed text-neutral-500">{activeDish.description || "—"}</p>
//                 <span className="self-start mt-2 rounded-lg bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/35 px-4 py-1.5 text-xs font-black text-[#3D2E20] shadow-sm">{activeDish.price}</span>
//               </div>
//               <div className="my-4 h-[1px] bg-neutral-100" />
//               {activeDish.composition ? (
//                 <div className="space-y-1.5">
//                   <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuData.compositionLabel}</h4>
//                   <p className="text-xs leading-relaxed text-neutral-600">{activeDish.composition}</p>
//                 </div>
//               ) : (
//                 <p className="text-xs text-neutral-400 italic">Таркиб муайян нашудааст</p>
//               )}
//               <button onClick={() => setActiveDish(null)} className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 py-3 text-xs font-bold uppercase tracking-widest text-[#3D2E20] shadow-sm">{menuData.closeLabel}</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }





// src/components/Hero.jsx
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

// Гарантированные переводы элементов интерфейса, которые меняются мгновенно при переключении языка
const UI_TRANSLATIONS = {
  TJ: {
    badge: "КАННОДИИ ПРЕМИУМ",
    title: "Шаҳди Хуҷанд",
    // subtitle: "Шоҳкориҳои қаннодии дастӣ ва шириниҳои шарқӣ бо сифати олӣ",
    openMenu: "КУШОДАНИ МЕНЮ",
    rating: "Рейтинг",
    hoursLabel: "Соатҳо",
    sweetsLabel: "Шириниҳо",
    hours: "10:00 - 23:00",
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
    emptyFav: "Рӯйхати дӯстдоштаҳо ҳоло холӣ аст..."
  },
  RU: {
    badge: "ПРЕМИУМ ВЫПЕЧКА",
    title: "Шахди Хужанд",
    // subtitle: "Кондитерские шедевры ручной работы и восточные сладости премиум-класса",
    openMenu: "ОТКРЫТЬ МЕНЮ",
    rating: "Рейтинг",
    hoursLabel: "Часы работы",
    sweetsLabel: "Сладости",
    hours: "10:00 - 23:00",
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
    emptyFav: "Список избранного пока пуст..."
  },
  EN: {
    badge: "PREMIUM BAKERY",
    title: "Shahdi Khujand",
    // subtitle: "Handcrafted confectionery masterpieces and premium oriental sweets",
    openMenu: "OPEN MENU",
    rating: "Rating",
    hoursLabel: "Hours",
    sweetsLabel: "Sweets",
    hours: "10:00 - 23:00",
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
    emptyFav: "Your favorites list is currently empty..."
  }
};

const MENU_TRANSLATIONS = {
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
    cakeSubcategoryLabel: "Намуди торт",
    subcategories: {
      kids: "Кӯдакона",
      adults: "Барои калонсолон",
      bento: "Бенто-тортҳо",
      wedding: "Тортҳои тӯёна"
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
    ],
    dishes: [
      {
        id: 1,
        category: "cakes",
        subCategory: "bento",
        name: "Бенто Торти Кулпунай",
        price: "15 смн",
        image: "",
        description: "Мини-торти машҳур бо Тарбуз ва қаймоқи сабук.",
        composition: "Бисквит, Тарбузи тару тоза, қаймоқи лазиз.",
        bestseller: true
      },
      {
        id: 2,
        category: "cakes",
        subCategory: "kids",
        name: "Торти Кӯдаконаи «Хайвонот»",
        price: "22 смн",
        image: "",
        description: "Торти рангоранги кӯдакона бо ороиши бозичаҳои лазиз.",
        composition: "Хамири нарм, қаймоқи табиии ванилӣ."
      },
      {
        id: 3,
        category: "burgers",
        name: "Бургери Классикӣ",
        price: "18 смн",
        image: "",
        description: "Бургери болаззат бо гӯшти гов ва чошнии махсус.",
        composition: "Гӯшти гов, панир, помидор, хӯриш, чошнии фирмавӣ."
      }
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
    cakeSubcategoryLabel: "Тип торта",
    subcategories: {
      kids: "Детские торты",
      adults: "Взрослые торты",
      bento: "Бенто торты",
      wedding: "Свадебные торты"
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
    ],
    dishes: [
      {
        id: 1,
        category: "cakes",
        subCategory: "bento",
        name: "Бенто Торт Клубничный",
        price: "15 смн",
        image: "",
        description: "Популярный mini-торт с нежным клубничным конфитюром.",
        composition: "Бисквит, натуральная клубника, крем-чиз.",
        bestseller: true
      },
      {
        id: 2,
        category: "cakes",
        subCategory: "kids",
        name: "Детский Торт «Зоопарк»",
        price: "22 смн",
        image: "",
        description: "Красочный торт с фигурками из мастики для праздника.",
        composition: "Ванильный бисквит, йогуртовый крем, фруктовая начинка."
      },
      {
        id: 3,
        category: "burgers",
        name: "Бургер Классический",
        price: "18 смн",
        image: "",
        description: "Сочный бургер с котлетой из мраморной говядины.",
        composition: "Говяжья котлета, сыр чеддер, соус барбекю, свежие овощи."
      }
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
    cakeSubcategoryLabel: "Cake Type",
    subcategories: {
      kids: "Kids' Cakes",
      adults: "Adult Cakes",
      bento: "Bento Cakes",
      wedding: "Wedding Cakes"
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
    ],
    dishes: [
      {
        id: 1,
        category: "cakes",
        subCategory: "bento",
        name: "Strawberry Bento Cake",
        price: "15 smn",
        image: "",
        description: "Trending mini-cake with cream cheese and strawberries.",
        composition: "Sponge cake, natural strawberries, cream cheese fillings.",
        bestseller: true
      },
      {
        id: 2,
        category: "cakes",
        subCategory: "kids",
        name: "Kids' 'Zoo' Cake",
        price: "22 smn",
        image: "",
        description: "Colorful kids cake decorated with cute edible animals.",
        composition: "Sponge layers, yogurt cream, fruit jam."
      },
      {
        id: 3,
        category: "burgers",
        name: "Classic Burger",
        price: "18 smn",
        image: "",
        description: "Classic juicy burger with beef cutlet and secret sauce.",
        composition: "Beef cutlet, cheddar, lettuce, fresh tomatoes, burger sauce."
      }
    ]
  }
};

export default function Hero({
  backgroundImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
  onOpenMenu,
}) {
  const { lang } = useLanguage(); 
  const [mounted, setMounted] = useState(false);
  
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCakeSubcategory, setSelectedCakeSubcategory] = useState("all");
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

  // Поля формы блюда
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formCategory, setFormCategory] = useState("burgers");
  const [formSubCategory, setFormSubCategory] = useState("bento");
  const [formDescription, setFormDescription] = useState("");
  const [formComposition, setFormComposition] = useState("");
  const [formBestseller, setFormBestseller] = useState(false);
  const [formIsNew, setFormNew] = useState(false);
  const [formImage, setFormImage] = useState("");

  // Локальный словарь интерфейса для мгновенного перевода
  const ui = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS["TJ"];

  const [menuTranslations, setMenuTranslations] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("custom_menu_translations");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Умный сброс кэша при несовпадении версий категорий
          const hasBurgers = parsed.TJ?.categories?.some(c => c.id === "burgers");
          if (hasBurgers) {
            return parsed;
          }
        } catch (e) {
          // Игнорируем ошибку
        }
      }
    }
    return MENU_TRANSLATIONS;
  });

  useEffect(() => {
    localStorage.setItem("custom_menu_translations", JSON.stringify(menuTranslations));
  }, [menuTranslations]);

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
  const menuData = menuTranslations[lang] || menuTranslations["TJ"];

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
    if (passwordInput === "123456") {
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
    setFormName("");
    setFormPrice("");
    setFormCategory("burgers");
    setFormSubCategory("bento");
    setFormDescription("");
    setFormComposition("");
    setFormBestseller(false);
    setFormNew(false);
    setFormImage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openAddModal = () => {
    resetForm();
    setEditingDish(null);
    setDishModalOpen(true);
  };

  const openEditModal = (dish, e) => {
    e.stopPropagation();
    setEditingDish(dish);
    setFormName(dish.name || "");
    setFormPrice(dish.price || "");
    setFormCategory(dish.category || "burgers");
    setFormSubCategory(dish.subCategory || "bento");
    setFormDescription(dish.description || "");
    setFormComposition(dish.composition || "");
    setFormBestseller(!!dish.bestseller);
    setFormNew(!!dish.isNew);
    setFormImage(dish.image || "");
    setDishModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updated = { ...menuTranslations };

    if (editingDish) {
      Object.keys(updated).forEach((langKey) => {
        updated[langKey].dishes = updated[langKey].dishes.map((d) => {
          if (d.id === editingDish.id) {
            return {
              ...d,
              category: formCategory,
              subCategory: formCategory === "cakes" ? formSubCategory : undefined,
              price: formPrice,
              image: formImage,
              bestseller: formBestseller,
              isNew: formIsNew,
              ...(langKey === lang ? {
                name: formName,
                description: formDescription,
                composition: formComposition
              } : {})
            };
          }
          return d;
        });
      });
    } else {
      const newId = Date.now();
      const newDish = {
        id: newId,
        category: formCategory,
        subCategory: formCategory === "cakes" ? formSubCategory : undefined,
        name: formName,
        price: formPrice,
        image: formImage,
        description: formDescription,
        composition: formComposition,
        bestseller: formBestseller,
        isNew: formIsNew
      };

      Object.keys(updated).forEach((langKey) => {
        updated[langKey].dishes = [newDish, ...updated[langKey].dishes];
      });
    }

    setMenuTranslations(updated);
    setDishModalOpen(false);
    resetForm();
  };

  const openDeleteModal = (dish, e) => {
    e.stopPropagation();
    setDishToDelete(dish);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (!dishToDelete) return;
    const updated = { ...menuTranslations };

    Object.keys(updated).forEach((langKey) => {
      updated[langKey].dishes = updated[langKey].dishes.filter((d) => d.id !== dishToDelete.id);
    });

    setMenuTranslations(updated);
    setDeleteConfirmOpen(false);
    setDishToDelete(null);
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

  let filteredDishes = [];
  if (selectedCategory === "bestsellers") {
    filteredDishes = menuData.dishes.filter((dish) => dish.bestseller);
  } else if (selectedCategory === "new") {
    filteredDishes = menuData.dishes.filter((dish) => dish.isNew);
  } else if (selectedCategory === "favorites") {
    filteredDishes = menuData.dishes.filter((dish) => favorites.includes(dish.id));
  } else if (selectedCategory === "cakes") {
    filteredDishes = menuData.dishes.filter((dish) => {
      const matchCat = dish.category === "cakes";
      if (!matchCat) return false;
      if (selectedCakeSubcategory === "all") return true;
      return dish.subCategory === selectedCakeSubcategory;
    });
  } else {
    filteredDishes = menuData.dishes.filter((dish) => dish.category === selectedCategory);
  }

  const getSelectedCategoryName = () => {
    if (selectedCategory === "bestsellers") return menuData.bestsellerLabel;
    if (selectedCategory === "new") return menuData.newArrivalsLabel;
    if (selectedCategory === "favorites") return menuData.favoritesLabel;
    return menuData.categories.find((c) => c.id === selectedCategory)?.name;
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

          <p className={`mt-4 text-xs sm:text-sm font-medium leading-relaxed text-neutral-200 max-w-xl ${fadeCls()}`} style={delayStyle(320)}>
            {ui.subtitle}
          </p>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
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
            <h2 className="font-serif text-[26px] sm:text-[32px] text-[#3D2E20] font-semibold tracking-tight">{menuData.menuHeaderTitle}</h2>
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

          {!selectedCategory ? (
            <>
              {/* Промо-карточки */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-4">
                <button onClick={() => setSelectedCategory("bestsellers")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
                  <span className="text-2xl mb-1">🔥</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.bestsellerLabel}</span>
                </button>
                <button onClick={() => setSelectedCategory("new")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
                  <span className="text-2xl mb-1">✨</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.newArrivalsLabel}</span>
                </button>
                <button onClick={() => setSelectedCategory("favorites")} className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm hover:border-[#D4AF37]/60 hover:-translate-y-0.5 transition-all group overflow-hidden">
                  <span className="text-2xl mb-1">❤️</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#3D2E20] tracking-tight text-center">{menuData.favoritesLabel}</span>
                </button>
              </div>

              {/* Категории */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {menuData.categories.map((cat) => (
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
                  <button onClick={() => { setSelectedCategory(null); setSelectedCakeSubcategory("all"); }} className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9A7B4F] hover:text-[#3D2E20] transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    {menuData.backToCategories}
                  </button>
                  <span className="text-[10px] font-extrabold text-[#9A7B4F] uppercase tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1.5 rounded-full">{getSelectedCategoryName()}</span>
                </div>

                {/* Подкатегории тортов */}
                {selectedCategory === "cakes" && (
                  <div className="flex flex-wrap gap-1.5 bg-[#FAF6F0] p-1 rounded-xl border border-[#D4AF37]/20">
                    <button 
                      onClick={() => setSelectedCakeSubcategory("all")}
                      className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedCakeSubcategory === "all" ? "bg-[#9A7B4F] text-white shadow-sm" : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"}`}
                    >
                      {menuData.allCakesLabel}
                    </button>
                    {Object.entries(menuData.subcategories).map(([subId, subName]) => (
                      <button 
                        key={subId}
                        onClick={() => setSelectedCakeSubcategory(subId)}
                        className={`flex-1 min-w-[70px] text-center px-3 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition ${selectedCakeSubcategory === subId ? "bg-[#9A7B4F] text-white shadow-sm" : "text-[#9A7B4F] hover:bg-[#D4AF37]/10"}`}
                      >
                        {subName}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {filteredDishes.length === 0 ? (
                <p className="text-center py-12 text-xs text-[#9A7B4F] font-medium">{selectedCategory === "favorites" ? ui.emptyFav : menuData.emptyCategory}</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {filteredDishes.map((dish) => {
                    const categoryIcon = menuData.categories.find(c => c.id === dish.category)?.icon || "🧁";
                    return (
                      <div key={dish.id} onClick={() => setActiveDish(dish)} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-3 pb-4 shadow-[0_4px_15px_rgba(154,123,79,0.03)] cursor-pointer hover:border-[#9A7B4F] hover:-translate-y-0.5 transition-all min-h-[250px]">
                        
                        {isAdmin && (
                          <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
                            <button
                              onClick={(e) => openEditModal(dish, e)}
                              className="flex-1 flex items-center justify-center rounded-lg bg-[#9A7B4F] text-white py-1 text-[9px] font-bold uppercase transition hover:brightness-110 shadow-sm"
                            >
                              ✏ Правка
                            </button>
                            <button
                              onClick={(e) => openDeleteModal(dish, e)}
                              className="flex-1 flex items-center justify-center rounded-lg bg-red-600 text-white py-1 text-[9px] font-bold uppercase transition hover:bg-red-700 shadow-sm"
                            >
                              🗑 Дел
                            </button>
                          </div>
                        )}

                        <div className="relative w-full h-28 rounded-xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-3 shrink-0 border border-[#D4AF37]/15">
                          {dish.image ? (
                            <img src={dish.image} alt={dish.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          ) : (
                            <span className="relative text-3xl transform group-hover:scale-105 transition-transform duration-300">{categoryIcon}</span>
                          )}

                          {/* Ярлыки */}
                          <div className="absolute left-2 bottom-2 flex flex-col gap-1 z-10 pointer-events-none">
                            {dish.bestseller && (
                              <span className="bg-[#9A7B4F] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">HIT</span>
                            )}
                            {dish.isNew && (
                              <span className="bg-emerald-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">NEW</span>
                            )}
                          </div>

                          <button onClick={(e) => toggleFavorite(dish.id, e)} className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#9A7B4F] border border-[#D4AF37]/20 backdrop-blur-xs transition hover:scale-105">
                            <Heart className={`h-4 w-4 transition-colors ${favorites.includes(dish.id) ? "fill-[#9A7B4F] text-[#9A7B4F]" : "text-[#9A7B4F]/50"}`} />
                          </button>
                        </div>

                        <div className="flex flex-1 flex-col px-1">
                          <h3 className="text-xs sm:text-sm font-bold leading-tight text-[#3D2E20] line-clamp-2 group-hover:text-[#9A7B4F] transition-colors">{dish.name}</h3>
                          <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-neutral-500 line-clamp-2">{dish.description || "—"}</p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-neutral-100 flex flex-col gap-1.5 px-1">
                          <span className="text-[11px] sm:text-xs font-black text-[#9A7B4F]">{dish.price}</span>
                          {dish.composition && <span className="inline-flex items-center self-start rounded-md bg-[#FAF6F0] border border-[#D4AF37]/25 px-1.5 py-0.5 text-[8px] font-bold text-[#9A7B4F] uppercase tracking-wider">{menuData.ingredientsArrow}</span>}
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
          <form onSubmit={handleFormSubmit} className="relative w-full max-w-sm rounded-3xl bg-white p-5 my-8 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-[#D4AF37]/35 flex flex-col gap-3 max-h-[90vh] overflow-y-auto no-scrollbar">
            
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 shrink-0">
              <h3 className="font-serif text-lg font-bold text-[#3D2E20]">
                {editingDish ? "✏ Изменение" : "➕ Добавление"}
              </h3>
              <button type="button" onClick={() => setDishModalOpen(false)} className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:text-[#3D2E20]">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Изображение */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Фото блюда</label>
              <div className="relative w-full h-32 rounded-xl bg-[#FAF6F0] border border-neutral-200 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                {formImage ? (
                  <>
                    <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      type="button" 
                      onClick={() => setFormImage("")}
                      className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-red-500"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <span className="text-2xl">📸</span>
                    <p className="text-[10px] text-neutral-500 mt-1 font-bold">Выберите изображение</p>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Название</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                  placeholder="Название..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Цена</label>
                <input
                  type="text"
                  required
                  value={formPrice}
                  onChange={(e) => setFormPrice(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                  placeholder="15 смн"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Категория</label>
              <select
                value={formCategory}
                onChange={(e) => setFormCategory(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
              >
                {menuData.categories.map((cat) => (
                  <option key={cat.id} value={cat.id} className="text-[#3D2E20]">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Вложенные подкатегории в CRUD */}
            {formCategory === "cakes" && (
              <div className="flex flex-col gap-1 animate-fade-in">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuData.cakeSubcategoryLabel}</label>
                <select
                  value={formSubCategory}
                  onChange={(e) => setFormSubCategory(e.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/50 bg-[#FAF6F0] px-3 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                >
                  {Object.entries(menuData.subcategories).map(([subId, subName]) => (
                    <option key={subId} value={subId} className="text-[#3D2E20]">
                      {subName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Описание</label>
              <textarea
                rows={2}
                required
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                placeholder="Тафсилот..."
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F]">Состав</label>
              <textarea
                rows={2}
                value={formComposition}
                onChange={(e) => setFormComposition(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-[#FAF6F0] px-3.5 py-2 text-xs text-[#3D2E20] focus:border-[#9A7B4F] focus:outline-none"
                placeholder="Таркиб..."
              />
            </div>

            <div className="flex items-center gap-4 mt-1 border-t border-neutral-100 pt-2">
              <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
                <input 
                  type="checkbox" 
                  checked={formBestseller}
                  onChange={(e) => setFormBestseller(e.target.checked)}
                  className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4"
                />
                Хит продаж
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#3D2E20] font-bold">
                <input 
                  type="checkbox" 
                  checked={formIsNew}
                  onChange={(e) => setFormNew(e.target.checked)}
                  className="rounded border-neutral-300 accent-[#9A7B4F] h-4 w-4"
                />
                Новинка
              </label>
            </div>

            <div className="flex gap-2 mt-2 shrink-0">
              <button
                type="button"
                onClick={() => setDishModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
              >
                {ui.cancel}
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] text-xs font-bold uppercase tracking-wider text-[#3D2E20] border border-[#D4AF37]/30 shadow-sm"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ДИАЛОГ УДАЛЕНИЯ */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(154,123,79,0.15)] border border-red-200 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-[#3D2E20] text-center">Вы действительно хотите удалить?</h3>
            <p className="text-xs text-neutral-500 text-center">
              Блюдо «<span className="text-[#9A7B4F] font-bold">{dishToDelete?.name}</span>» будет удалено навсегда.
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                className="flex-1 py-3 rounded-xl bg-neutral-100 text-xs font-bold uppercase tracking-wider text-[#3D2E20]"
              >
                {ui.cancel}
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 rounded-xl bg-red-600 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛКА ПРОСМОТРА БЛЮДА */}
      {activeDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(154,123,79,0.12)] border border-[#D4AF37]/20 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between mb-4 shrink-0">
              <button onClick={(e) => toggleFavorite(activeDish.id, e)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#D4AF37]/20 text-[#9A7B4F]">
                <Heart className={`h-4.5 w-4.5 ${favorites.includes(activeDish.id) ? "fill-[#9A7B4F]" : ""}`} />
              </button>
              <button onClick={() => setActiveDish(null)} className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#FAF6F0] border border-neutral-200 text-neutral-500 hover:text-[#3D2E20]">
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            
            <div className="relative w-full h-32 rounded-2xl bg-[#FAF6F0] flex items-center justify-center overflow-hidden mb-4 shrink-0 border border-[#D4AF37]/15">
              {activeDish.image ? (
                <img src={activeDish.image} alt={activeDish.name} className="w-full h-full object-cover" />
              ) : (
                <span className="relative text-5xl">{menuData.categories.find(c => c.id === activeDish.category)?.icon || "🧁"}</span>
              )}
            </div>

            <div className="overflow-y-auto pr-1">
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[20px] font-bold text-[#3D2E20] leading-snug">{activeDish.name}</h3>
                <p className="text-[11px] leading-relaxed text-neutral-500">{activeDish.description || "—"}</p>
                <span className="self-start mt-2 rounded-lg bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/35 px-4 py-1.5 text-xs font-black text-[#3D2E20] shadow-sm">{activeDish.price}</span>
              </div>
              <div className="my-4 h-[1px] bg-neutral-100" />
              {activeDish.composition ? (
                <div className="space-y-1.5">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#9A7B4F]">{menuData.compositionLabel}</h4>
                  <p className="text-xs leading-relaxed text-neutral-600">{activeDish.composition}</p>
                </div>
              ) : (
                <p className="text-xs text-neutral-400 italic">Таркиб муайян нашудааст</p>
              )}
              <button onClick={() => setActiveDish(null)} className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#D9C6B0] to-[#E3D4C1] border border-[#D4AF37]/30 py-3 text-xs font-bold uppercase tracking-widest text-[#3D2E20] shadow-sm">{menuData.closeLabel}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}