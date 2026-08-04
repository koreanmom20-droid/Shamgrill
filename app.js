/* ==========================================================================
   Sham Bird & Al-Asala — Full Restaurant Menu (app.js)
   ========================================================================== */

'use strict';

// ── App State ─────────────────────────────────────────────────────────────
const state = {
  currentLang: 'en', // 'en' | 'ku' | 'ar'
  activeCategory: 'all',
  searchQuery: '',
};

// ── Multi-Language Dictionary ─────────────────────────────────────────────
const i18n = {
  en: {
    hero_title: 'What Do you like to eat today?',
    hero_sub: 'Make Your Day by choosing a meal or your favorite dish , Dont be shy Cheap , quality , TASTE ...',
    search_ph: 'Search by dish name ...',
    btn_browse: 'Browse Full Menu',
    menu_title: 'Sham Bird Menu Categories',
    menu_sub: 'All prices listed in IQD · Prepared fresh with authentic ingredients',
    cat_all: 'All Items',
    cat_ch_shawarma: 'Chicken Shawarma',
    cat_meat_shawarma: 'Meat Shawarma',
    cat_pastries: 'Pastries',
    cat_sandwiches: 'Sandwiches',
    cat_meals: 'Meals',
    cat_burgers: 'Burgers',
    cat_pizza: 'Pizza',
    cat_light_rolls: 'Light Rolls & Foods',
    cat_fries: 'French Fries',
    cat_appetizers: 'Appetizers & Salads',
    cat_oriental: 'Oriental Dishes',
    cat_drinks: 'Drinks',
    search_no_results: 'No dishes found matching your search.',
    view_item: 'View Item',
    why_title: "Why Choose Sham Bird?",
    why_sub: "Uncompromising quality, authentic taste & premium hospitality",
    stats_items: "Menu Items",
    stats_years: "Years of Heritage",
    stats_guests: "Happy Guests",
    stats_halal: "Halal Certified",
    reviews_title: "What Our Guests Say",
    reviews_sub: "Real reviews from food lovers in Erbil",
    gallery_title: "Instagram Gallery",
    gallery_sub: "Tag @ShamBird to be featured in our story",
    cta_title: "Craving Authentic Shawarma & Grills?",
    cta_sub: "Visit us today or browse our full digital menu",
    order_wa: "Order via WhatsApp",
  },
  ku: {
    hero_title: 'ئەمڕۆ حەزت لە چییە بیخۆیت؟',
    hero_sub: 'تاقی بکەرەوە لە ژەمە بەتامەکانی شاورمەی مریشک و گوشت، بەرگر، هەویرکاری، پیتزا و خواردنە ڕەسەنەکان.',
    search_ph: 'گەڕان بۆ شاورمە، ژەمەکان، بەرگر، پیتزا، هەویرکاری...',
    btn_browse: 'پێشبینینی مێنیو',
    menu_title: 'مێنیوی شام بیرد و ئەلئەساله',
    menu_sub: 'سەرجەم نرخەکان بە دیناری عێراقی (IQD)ن · بە نوێترین کوالیتی ئامادەکراوە',
    cat_all: 'هەمووی',
    cat_ch_shawarma: 'شاورمەی مریشک',
    cat_meat_shawarma: 'شاورمەی گوشت',
    cat_pastries: 'هەویرکاری',
    cat_sandwiches: 'سەندویچەکان',
    cat_meals: 'ژەمەکان',
    cat_burgers: 'بەرگر',
    cat_pizza: 'پیتزا',
    cat_light_rolls: 'لوولە سووکەکان / خواردنی تر',
    cat_fries: 'بەتاتە',
    cat_appetizers: 'مقبلات و سەڵاتە',
    cat_oriental: 'خواردنی ڕۆژهەڵاتی',
    cat_drinks: 'خواردنەوەکان',
    search_no_results: 'هیچ ژەمێک نەدۆزرایەوە بەم ناوه.',
    view_item: 'تەماشای ژەمەکە بکە',
    why_title: "بۆچی شام بیرد؟",
    why_sub: "کوالیتی بەرز، تامی ڕەسەن و خزمەتگوزاری بێ وێنە",
    stats_items: "ژەمە جیاوازەکان",
    stats_years: "ساڵ ئەزموون",
    stats_guests: "مشتەری بەختەوەر",
    stats_halal: "١٠٠٪ حەڵاڵ",
    reviews_title: "ڕای مشتەرییەکانمان",
    reviews_sub: "بۆچوونی ڕاستەقینەی ئاشقانی خواردن لە هەولێر",
    gallery_title: "گالێری ئینستاگرام",
    gallery_sub: "تاگی @ShamBird بکە لە ستۆرییەکانت",
    cta_title: "حەزت لە شاورمە و برژاوی ڕەسەنە؟",
    cta_sub: "ئەمڕۆ سەردانمان بکە یان مێنیوەکە ببڕوانە",
    order_wa: "داواکردن لە ڕێگەی وەتسئەپ",
  },
  ar: {
    hero_title: 'شنو مشتهي اليوم ؟',
    hero_sub: 'شاورما، وجبات، بركر، معجنات، بيتزا، مقبلات ، كلشييي و كلاشيييي',
    search_ph: 'ابحث عن شاورما، وجبات، بركر، بيتزا، معجنات...',
    btn_browse: 'تصفح المنيو كامل',
    menu_title: 'قائمة طعام شام بيرد والأصالة',
    menu_sub: 'جميع الأسعار بالدينار العراقي (IQD) · مُحضّرة طازجة بأجود المكونات',
    cat_all: 'الكل',
    cat_ch_shawarma: 'شاورما دجاج',
    cat_meat_shawarma: 'شاورما لحم',
    cat_pastries: 'المعجنات',
    cat_sandwiches: 'السندويشات',
    cat_meals: 'الوجبات',
    cat_burgers: 'البركر',
    cat_pizza: 'البيتزا',
    cat_light_rolls: 'اللفات الخفيفة / المأكولات الأخرى',
    cat_fries: 'البطاطا',
    cat_appetizers: 'المقبلات والسلطات',
    cat_oriental: 'الأطباق الشرقية',
    cat_drinks: 'المشروبات',
    search_no_results: 'لم يتم العثور على أكلات تطابق بحثك.',
    view_item: 'عرض الوجبة',
    why_title: "لماذا تختار شام بيرد؟",
    why_sub: "جودة لا تضاهى، طعم أصيل وضيافة فاخرة",
    stats_items: "أكلة متنوعة",
    stats_years: "سنوات من الأصالة",
    stats_guests: "زبون سعيد",
    stats_halal: "مضمون",
    reviews_title: "آراء زبائننا الكرام",
    reviews_sub: "تجارب حقيقية من عشاق الشاورما والمشاوي",
    gallery_title: "معرض الإنستغرام",
    gallery_sub: "منشورات وصور زبائننا الكرام",
    cta_title: "اشتهيت شاورما أو مشويات طازجة؟",
    cta_sub: "زرنا اليوم أو تصفح القائمة الإلكترونية الكاملة",
    order_wa: "الطلب عبر واتساب",
  }
};

// ── Category Visual Themes Dictionary ─────────────────────────────────────
const catThemes = {
  ch_shawarma: { gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍗' },
  meat_shawarma: { gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥩' },
  pastries: { gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🫓' },
  sandwiches: { gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥪' },
  meals: { gradient: 'linear-gradient(135deg, rgba(217, 119, 6, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍽️' },
  burgers: { gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍔' },
  pizza: { gradient: 'linear-gradient(135deg, rgba(225, 29, 72, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍕' },
  light_rolls: { gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🌯' },
  fries: { gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍟' },
  appetizers: { gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥗' },
  oriental: { gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍚' },
  drinks: { gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥤' }
};

const menuItems = [
  {
    "num": 1,
    "id": "fr1",
    "category": "fries",
    "name": "French Fries Plate",
    "nameAr": "صحن بطاطا",
    "nameKu": "قابی بەتاتە",
    "desc": "Golden crispy french fries plate served with garlic dip.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/1.jpg",
    "badge": "🍟 Crispy"
  },
  {
    "num": 2,
    "id": "cs1",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Saj & Lebanese)",
    "nameAr": "لفة شاورما دجاج خبز صاج / لبناني",
    "nameKu": "لوولەی شاورمەی مریشک نانی ساج / لبنانی",
    "desc": "Fresh chicken shawarma wrapped in toasted Saj or soft Lebanese flatbread.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/2.jpg",
    "badge": "🔥 Popular"
  },
  {
    "num": 3,
    "id": "san1",
    "category": "sandwiches",
    "name": "Zinger Sandwich",
    "nameAr": "سندويش زنجر",
    "nameKu": "سەندویچی زنجر",
    "desc": "Spicy crispy zinger fillet served with fries & coleslaw.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/3.jpg",
    "badge": "🌶️ Zinger"
  },
  {
    "num": 4,
    "id": "ms1",
    "category": "meat_shawarma",
    "name": "Meat Shawarma Roll (French Bread)",
    "nameAr": "لفة شاورما لحم صمون فرنسي",
    "nameKu": "لوولەی شاورمەی گوشت سەموونی فەرەنسی",
    "desc": "Spiced tender meat shawarma wrapped in fresh crispy French baguette.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/4.jpg",
    "badge": " French Bread"
  },
  {
    "num": 5,
    "id": "lr1",
    "category": "light_rolls",
    "name": "Mortadella Roll with Cheese",
    "nameAr": "لفة مرتديلا مع جبن",
    "nameKu": "لوولەی مۆرتادێلا لەگەڵ پەنیر",
    "desc": "Sliced mortadella wrapped with melted cheese in warm flatbread.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/5.jpg",
    "badge": "🧀 Cheesy"
  },
  {
    "num": 6,
    "id": "ml1",
    "category": "meals",
    "name": "Chicken Rizo",
    "nameAr": "ريزو دجاج",
    "nameKu": "ریزۆ مریشک",
    "desc": "Yellow seasoned rice bowl topped with crispy chicken tenders & sweet spicy sauce.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/6.jpg",
    "badge": " Rizo Special"
  },
  {
    "num": 7,
    "id": "lr2",
    "category": "light_rolls",
    "name": "French Fries Roll (Saj Bread)",
    "nameAr": "لفة بطاطا خبز صاج",
    "nameKu": "لوولەی بەتاتە نانی ساج",
    "desc": "Crispy golden fries wrapped tightly in toasted Saj flatbread with garlic sauce.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/7.jpg",
    "badge": "🍟 Saj Fries"
  },
  {
    "num": 8,
    "id": "pas1",
    "category": "pastries",
    "name": "Akkawi / Kashkaval Cheese Pastry",
    "nameAr": "جبنة عكاوي / جبنة قشقوان",
    "nameKu": "پەنیری عەکاوی / قەشقەوان",
    "desc": "Traditional melted Akkawi or Kashkaval cheese baked on golden dough crust.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/8.jpg",
    "badge": "🧀 Cheesy"
  },
  {
    "num": 9,
    "id": "cs2",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Stone Samoon)",
    "nameAr": "لفة شاورما دجاج صمون حجري",
    "nameKu": "لوولەی شاورمەی مریشک سەموونی بەردین",
    "desc": "Fresh chicken shawarma stuffed in stone-oven baked samoon bread.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/9.jpg",
    "badge": " Stone Oven"
  },
  {
    "num": 10,
    "id": "ms2",
    "category": "meat_shawarma",
    "name": "Meat Shawarma Meal (250g)",
    "nameAr": "وجبة شاورما لحم 250g",
    "nameKu": "ژەمی شاورمەی گوشت ٢٥٠گرا‌م",
    "desc": "250g prime beef shawarma plate served with chickpea hummus & garlic dip.",
    "priceFormatted": "8,000 IQD",
    "img": "assets/10.jpg",
    "badge": " 250g Plate"
  },
  {
    "num": 11,
    "id": "cs3",
    "category": "ch_shawarma",
    "name": "Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي",
    "nameKu": "ژەمی شاورمەی عەرەبی",
    "desc": "Sliced Arabi chicken shawarma roll served with fries, pickles & garlic paste.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/11.jpg",
    "badge": " Arabi"
  },
  {
    "num": 12,
    "id": "piz1",
    "category": "pizza",
    "name": "Vegetable Pizza",
    "nameAr": "بيتزا خضار",
    "nameKu": "پیتزا سەوزەوات",
    "desc": "Fresh bell peppers, mushrooms, sweet corn, black olives & mozzarella cheese.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/12.jpg",
    "badge": " Veggie Special"
  },
  {
    "num": 13,
    "id": "piz2",
    "category": "pizza",
    "name": "Margherita Pizza",
    "nameAr": "بيتزا مارغريتا",
    "nameKu": "پیتزا مارگریتا",
    "desc": "Classic rich tomato sauce topped with melted mozzarella cheese.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/13.jpg",
    "badge": " Margherita"
  },
  {
    "num": 14,
    "id": "pas2",
    "category": "pastries",
    "name": "Laham B'Ajeen with Kashkaval",
    "nameAr": "لحم بعجين مع قشقوان",
    "nameKu": "گوشت بەعەجین لەگەڵ قەشقەوان",
    "desc": "Minced spiced meat flatbread baked under melted Kashkaval cheese layer.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/14.jpg",
    "badge": " Meat & Cheese"
  },
  {
    "num": 15,
    "id": "cs4",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Meal (250g)",
    "nameAr": "وجبة شاورما دجاج 250g",
    "nameKu": "ژەمی شاورمەی مریشک ٢٥٠گرا‌م",
    "desc": "250g freshly sliced chicken shawarma plate with garlic paste & pickles.",
    "priceFormatted": "7,000 IQD",
    "img": "assets/15.jpg",
    "badge": " 250g Plate"
  },
  {
    "num": 16,
    "id": "piz3",
    "category": "pizza",
    "name": "Pepperoni Pizza",
    "nameAr": "بيتزا ببروني",
    "nameKu": "پیتزا پیپەرۆنی",
    "desc": "Beef pepperoni slices over tomato sauce & melted mozzarella cheese.",
    "priceFormatted": "7,000 IQD",
    "img": "assets/16.jpg",
    "badge": " Pepperoni"
  },
  {
    "num": 17,
    "id": "cs5",
    "category": "ch_shawarma",
    "name": "Double Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي دبل",
    "nameKu": "ژەمی شاورمەی عەرەبی دبل",
    "desc": "Double portion sliced Arabi chicken shawarma meal with fries & dipping sauces.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/17.jpg",
    "badge": " Double Arabi"
  },
  {
    "num": 18,
    "id": "ml2",
    "category": "meals",
    "name": "Chicken Rizo Combo Bowls",
    "nameAr": "تجميعة أطباق ريزو دجاج",
    "nameKu": "کۆمەڵەی ریزۆ مریشک",
    "desc": "Special family & group chicken rizo rice bowls combo.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/18.jpg",
    "badge": " Rizo Combo"
  },
  {
    "num": 19,
    "id": "pas3",
    "category": "pastries",
    "name": "Pepperoni Pie",
    "nameAr": "فطيرة ببروني",
    "nameKu": "فەتیرەی پیپەرۆنی",
    "desc": "Oven-baked dough pie stuffed with beef pepperoni & melted cheese.",
    "priceFormatted": "2,500 IQD",
    "img": "assets/19.jpg",
    "badge": " Pepperoni Pie"
  },
  {
    "num": 20,
    "id": "san2",
    "category": "sandwiches",
    "name": "Crispy Chicken Sandwich",
    "nameAr": "سندويش كريسبي",
    "nameKu": "سەندویچی کریسپی",
    "desc": "Golden crispy fried chicken tenders sandwich with mayo, fries & coleslaw.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/20.jpg",
    "badge": " Crispy"
  },
  {
    "num": 21,
    "id": "pas4",
    "category": "pastries",
    "name": "Showcase Bakery & Meal Variety",
    "nameAr": "تشكيلة معجنات ومأكولات",
    "nameKu": "تێکەڵەی جۆراوجۆری هەویرکاری",
    "desc": "Assorted baked pastries including heart falafels, egg cheese pie & mini pizzas.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/21.jpg",
    "badge": " Variety Mix"
  },
  {
    "num": 22,
    "id": "ml3",
    "category": "meals",
    "name": "Fajita Meal",
    "nameAr": "وجبة فاهيتا",
    "nameKu": "ژەمی فاهیتا",
    "desc": "Sizzling chicken fajita platter served with sautéed peppers, fries & salad.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/22.jpg",
    "badge": " Fajita Meal"
  },
  {
    "num": 23,
    "id": "cs6",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Lebanese & Saj)",
    "nameAr": "لفة شاورما دجاج خبز لبناني مع صاج",
    "nameKu": "لوولەی شاورمەی مریشک نانی لبنانی و ساج",
    "desc": "Chicken shawarma wrapped in toasted Saj flatbread with garlic sauce.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/23.jpg",
    "badge": " Lebanese Saj"
  },
  {
    "num": 24,
    "id": "lr3",
    "category": "light_rolls",
    "name": "French Fries Roll with Cheese",
    "nameAr": "لفة بطاطا بالجبن",
    "nameKu": "لوولەی بەتاتە بە پەنیر",
    "desc": "Crispy french fries roll loaded with melted cheddar cheese sauce.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/24.jpg",
    "badge": "🧀 Cheesy Fries"
  },
  {
    "num": 25,
    "id": "lr4",
    "category": "light_rolls",
    "name": "French Fries Roll (French Baguette)",
    "nameAr": "لفة بطاطا صمون فرنسي",
    "nameKu": "لوولەی بەتاتە سەموونی فەرەنسی",
    "desc": "Golden french fries stuffed in crispy French baguette with garlic paste.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/25.jpg",
    "badge": " French Baguette"
  },
  {
    "num": 26,
    "id": "lr5",
    "category": "light_rolls",
    "name": "Falafel Roll (Stone Samoon)",
    "nameAr": "لفة فلافل صمون حجري",
    "nameKu": "لوولەی فەلافل سەموونی بەردین",
    "desc": "Crispy chickpea falafel stuffed in stone-oven baked samoon with tahini.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/26.jpg",
    "badge": "🧆 Falafel"
  },
  {
    "num": 27,
    "id": "lr6",
    "category": "light_rolls",
    "name": "Mixed Veggie Roll",
    "nameAr": "لفة مشكل",
    "nameKu": "لوولەی تێکەڵە",
    "desc": "Combination roll of falafel, fried eggplant, fries & tahini sauce.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/27.jpg",
    "badge": " Mixed Veggie"
  },
  {
    "num": 28,
    "id": "pas5",
    "category": "pastries",
    "name": "Za'atar Pastry",
    "nameAr": "زعتر",
    "nameKu": "زەعته‌ر",
    "desc": "Wild Mediterranean za'atar herb blend baked on olive oil dough crust.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/28.jpg",
    "badge": " Herbal"
  },
  {
    "num": 29,
    "id": "ml4",
    "category": "meals",
    "name": "Crispy Chicken Meal + Extra Pieces",
    "nameAr": "وجبة كريسبي + قطع",
    "nameKu": "ژەمی کریسپی + پارچەکان",
    "desc": "Golden fried crispy chicken tenders platter served with extra pieces & fries.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/29.jpg",
    "badge": " Crispy Combo"
  },
  {
    "num": 30,
    "id": "cs7",
    "category": "ch_shawarma",
    "name": "Double Chicken Shawarma Roll",
    "nameAr": "لفة شاورما دجاج خبز لبناني مع صاج",
    "nameKu": "لوولەی شاورمەی مریشک دبل",
    "desc": "Double portion toasted chicken shawarma roll filled with garlic paste.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/30.jpg",
    "badge": " Double Roll"
  },
  {
    "num": 31,
    "id": "lr7",
    "category": "light_rolls",
    "name": "Mortadella Roll with Fries & Cheese",
    "nameAr": "لفة مرتديلا مع بطاطا وجبن",
    "nameKu": "لوولەی مۆرتادێلا لەگەڵ بەتاتە و پەنیر",
    "desc": "Sliced mortadella roll stuffed with crispy french fries & melted cheese.",
    "priceFormatted": "1,750 IQD",
    "img": "assets/31.jpg",
    "badge": " Mortadella Fries"
  },
  {
    "num": 32,
    "id": "cs8",
    "category": "ch_shawarma",
    "name": "Arabi Shawarma Meal",
    "nameAr": "وجبة شاورما عربي",
    "nameKu": "ژەمی شاورمەی عەرەبی",
    "desc": "Sliced Arabi shawarma roll plate served with french fries & dipping sauce.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/32.jpg",
    "badge": " Arabi Meal"
  },
  {
    "num": 33,
    "id": "lr8",
    "category": "light_rolls",
    "name": "Mixed Veggie Roll (Stone Samoon)",
    "nameAr": "لفة مشكل صمون حجري",
    "nameKu": "لوولەی تێکەڵە سەموونی بەردین",
    "desc": "Fried eggplant, potato & veggies stuffed in stone-baked samoon.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/33.jpg",
    "badge": " Stone Veggie"
  },
  {
    "num": 34,
    "id": "lr9",
    "category": "light_rolls",
    "name": "Falafel Roll (Lebanese / Saj)",
    "nameAr": "لفة فلافل خبز لبناني / صاج",
    "nameKu": "لوولەی فەلافل نانی لبنانی / ساج",
    "desc": "Crispy falafel roll wrapped in pita or Saj flatbread with tahini.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/34.jpg",
    "badge": "🧆 Falafel Saj"
  },
  {
    "num": 35,
    "id": "cs9",
    "category": "ch_shawarma",
    "name": "Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي",
    "nameKu": "ژەمی شاورمەی عەرەبی",
    "desc": "Freshly sliced chicken shawarma Arabi platter with garlic paste.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/35.jpg",
    "badge": " Arabi Platter"
  },
  {
    "num": 36,
    "id": "ms3",
    "category": "meat_shawarma",
    "name": "Arabi Meat Shawarma Meal",
    "nameAr": "وجبة شاورما لحم عربي",
    "nameKu": "ژەمی شاورمەی عەرەبی گوشت",
    "desc": "Sliced Arabi meat shawarma meal served with french fries & tahini.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/36.jpg",
    "badge": " Arabi Meat"
  },
  {
    "num": 37,
    "id": "pas6",
    "category": "pastries",
    "name": "Mortadella with Kashkaval",
    "nameAr": "مرتديلا مع قشقوان",
    "nameKu": "مۆرتادێلا لەگەڵ قەشقەوان",
    "desc": "Sliced mortadella baked under creamy melted Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/37.jpg",
    "badge": " Mortadella Cheese"
  },
  {
    "num": 38,
    "id": "pas7",
    "category": "pastries",
    "name": "Muhammara Pastry",
    "nameAr": "محمرة",
    "nameKu": "موحەمەرە",
    "desc": "Spicy roasted red pepper paste baked into dough crust.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/38.jpg",
    "badge": "🌶️ Spicy"
  },
  {
    "num": 39,
    "id": "pas8",
    "category": "pastries",
    "name": "Assorted Bakery Pastries Mix",
    "nameAr": "تشكيلة معجنات مشكلة",
    "nameKu": "تێکەڵەی هەویرکاری جۆراوجۆر",
    "desc": "Mix of za'atar, muhammara, laham b'ajeen & mini cheese pizzas.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/39.jpg",
    "badge": " Pastry Mix"
  },
  {
    "num": 40,
    "id": "san3",
    "category": "sandwiches",
    "name": "Crispy Chicken Sandwich",
    "nameAr": "سندويش كريسبي",
    "nameKu": "سەندویچی کریسپی",
    "desc": "Crispy chicken fillet sandwich served with fries & garlic mayo.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/40.jpg",
    "badge": " Crispy Sandwich"
  },
  {
    "num": 41,
    "id": "pas9",
    "category": "pastries",
    "name": "Mortadella & Kashkaval Pie",
    "nameAr": "فطيرة مرتديلا مع قشقوان",
    "nameKu": "فەتیرەی مۆرتادێلا لەگەڵ قەشقەوان",
    "desc": "Baked dough pie stuffed with mortadella slices & Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/41.jpg",
    "badge": " Mortadella Pie"
  },
  {
    "num": 42,
    "id": "piz4",
    "category": "pizza",
    "name": "Small Garden Veggie Pizza",
    "nameAr": "بيتزا خضار صغيرة",
    "nameKu": "پیتزا سەوزەوات بچووک",
    "desc": "Small vegetable pizza topped with corn, olives, peppers & mozzarella.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/42.jpg",
    "badge": " Veggie Small"
  },
  {
    "num": 43,
    "id": "pas10",
    "category": "pastries",
    "name": "Olive with Kashkaval Pastry",
    "nameAr": "زيتون مع قشقوان",
    "nameKu": "زەیتوون لەگەڵ قەشقەوان",
    "desc": "Sliced black olives topped with melted Kashkaval cheese on dough.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/43.jpg",
    "badge": " Olive Blend"
  },
  {
    "num": 44,
    "id": "piz5",
    "category": "pizza",
    "name": "Margherita Cheese Pizza",
    "nameAr": "بيتزا مارغريتا",
    "nameKu": "پیتزا مارگریتا",
    "desc": "Classic Margherita pizza with tomato base & rich mozzarella cheese.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/44.jpg",
    "badge": " Margherita"
  },
  {
    "num": 45,
    "id": "ml5",
    "category": "meals",
    "name": "Grand Bakery & Feast Platter",
    "nameAr": "تشكيلة وجبات ومعجنات مشكلة",
    "nameKu": "سینی گەورەی هەویرکاری و ژەمەکان",
    "desc": "Grand showcase feast with heart falafels, hummus, pizza & chicken tenders.",
    "priceFormatted": "10,000 IQD",
    "img": "assets/55.jpg",
    "badge": " Grand Feast"
  },
  {
    "num": 46,
    "id": "piz6",
    "category": "pizza",
    "name": "Chicken Shawarma Pizza",
    "nameAr": "بيتزا شاورما دجاج",
    "nameKu": "پیتزا شاورمەی مریشک",
    "desc": "Topped with tender grilled chicken shawarma, olives & mozzarella cheese.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/56.jpg",
    "badge": " Chicken Pizza"
  },
  {
    "num": 47,
    "id": "san4",
    "category": "sandwiches",
    "name": "Zinger Sandwich with Cheese",
    "nameAr": "سندويش زنجر",
    "nameKu": "سەندویچی زنجر",
    "desc": "Spicy zinger chicken fillet with melted cheddar cheese & garlic mayo.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/57.jpg",
    "badge": "🌶️ Cheesy Zinger"
  },
  {
    "num": 48,
    "id": "ml6",
    "category": "meals",
    "name": "Crispy Chicken Meal Box",
    "nameAr": "وجبة كريسبي + قطع",
    "nameKu": "ژەمی کریسپی + پارچەکان",
    "desc": "Fried crispy chicken platter served with french fries, bread & garlic dip.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/58.jpg",
    "badge": " Crispy Box"
  },
  {
    "num": 49,
    "id": "pas11",
    "category": "pastries",
    "name": "Spicy Muhammara Pastry",
    "nameAr": "محمرة",
    "nameKu": "موحەمەرە",
    "desc": "Traditional spicy red pepper muhammara spread baked on flatbread.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/59.jpg",
    "badge": "🌶️ Muhammara"
  },
  {
    "num": 50,
    "id": "pas12",
    "category": "pastries",
    "name": "Laham B'Ajeen Flatbread",
    "nameAr": "لحم بعجين",
    "nameKu": "گوشت بەعەجین",
    "desc": "Crispy baked dough flatbread topped with seasoned minced meat.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/60.jpg",
    "badge": " Traditional"
  },
  {
    "num": 51,
    "id": "cs10",
    "category": "ch_shawarma",
    "name": "Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي",
    "nameKu": "ژەمی شاورمەی عەرەبی",
    "desc": "Sliced chicken shawarma roll served with fries, garlic & pickles.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/61.jpg",
    "badge": " Arabi Classic"
  },
  {
    "num": 52,
    "id": "cs11",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Saj Roll",
    "nameAr": "لفة شاورما دجاج خبز صاج",
    "nameKu": "لوولەی شاورمەی مریشک نانی ساج",
    "desc": "Chicken shawarma tightly rolled in toasted Saj bread.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/62.jpg",
    "badge": " Saj Roll"
  },
  {
    "num": 53,
    "id": "pas13",
    "category": "pastries",
    "name": "Laham B'Ajeen with Baked Egg",
    "nameAr": "لحم بعجين مع بيض",
    "nameKu": "گوشت بەعەجین لەگەڵ هێلکە",
    "desc": "Minced meat dough flatbread baked with a fresh whole egg on top.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/63.jpg",
    "badge": " Egg Special"
  },
  {
    "num": 54,
    "id": "pas14",
    "category": "pastries",
    "name": "Sujuk with Kashkaval Pastry",
    "nameAr": "سجق مع قشقوان",
    "nameKu": "سووجوق لەگەڵ قەشقەوان",
    "desc": "Spiced sujuk sausage baked under melted Kashkaval cheese.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/64.jpg",
    "badge": " Sujuk Cheese"
  },
  {
    "num": 55,
    "id": "pas15",
    "category": "pastries",
    "name": "Assorted Bakery Platter",
    "nameAr": "تشكيلة معجنات",
    "nameKu": "تێکەڵەی هەویرکاری",
    "desc": "Platter of za'atar, laham b'ajeen & mini dough pizzas.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/65.jpg",
    "badge": " Bakery Platter"
  },
  {
    "num": 56,
    "id": "ml7",
    "category": "meals",
    "name": "Crispy Chicken Tender Platter",
    "nameAr": "وجبة كريسبي + قطع",
    "nameKu": "ژەمی کریسپی + پارچەکان",
    "desc": "Golden crispy fried chicken tenders with fries & dipping garlic sauce.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/66.jpg",
    "badge": " Crispy Tenders"
  },
  {
    "num": 57,
    "id": "ml8",
    "category": "meals",
    "name": "Shish Taouk Charcoal Meal",
    "nameAr": "وجبة شيش طاووق",
    "nameKu": "ژەمی شیش تاووک",
    "desc": "Marinated chicken tikka skewers grilled over charcoal with fries & garlic.",
    "priceFormatted": "8,000 IQD",
    "img": "assets/67.jpg",
    "badge": " Charcoal Grilled"
  },
  {
    "num": 58,
    "id": "pas16",
    "category": "pastries",
    "name": "Kashkaval Cheese Dough Pastry",
    "nameAr": "جبنة قشقوان",
    "nameKu": "پەنیری قەشقەوان",
    "desc": "Melted rich Kashkaval cheese baked on fresh soft dough crust.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/68.jpg",
    "badge": "🧀 Kashkaval"
  },
  {
    "num": 59,
    "id": "lr10",
    "category": "light_rolls",
    "name": "Falafel & Fries Mix Roll",
    "nameAr": "لفة مشكل",
    "nameKu": "لوولەی تێکەڵە",
    "desc": "Combination roll of crisp falafel, golden french fries & tahini sauce.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/69.jpg",
    "badge": "🧆 Falafel & Fries"
  },
  {
    "num": 60,
    "id": "lr11",
    "category": "light_rolls",
    "name": "Falafel Pieces (8 Pcs)",
    "nameAr": "فلافل قرص (عدد 8)",
    "nameKu": "فەلافل (٨ دانە)",
    "desc": "8 pieces of fresh golden fried chickpea falafel served with tahini.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/70.jpg",
    "badge": "🧆 8 Pieces"
  },
  {
    "num": 61,
    "id": "pas17",
    "category": "pastries",
    "name": "Mortadella & Kashkaval Pastry",
    "nameAr": "مرتديلا مع قشقوان",
    "nameKu": "مۆرتادێلا لەگەڵ قەشقەوان",
    "desc": "Sliced mortadella baked under creamy Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/71.jpg",
    "badge": " Mortadella Cheese"
  },
  {
    "num": 62,
    "id": "brg1",
    "category": "burgers",
    "name": "Chicken Burger",
    "nameAr": "بركر دجاج",
    "nameKu": "بەرگری مریشک",
    "desc": "Crispy or grilled chicken burger patty with mayo, lettuce & pickles.",
    "priceFormatted": "3,000 IQD",
    "img": "assets/72.jpg",
    "badge": " Chicken Burger"
  },
  {
    "num": 63,
    "id": "app1",
    "category": "appetizers",
    "name": "Hummus Dip with Falafel (8 Pcs)",
    "nameAr": "حمص بطحينة (200g / 300g مع فلافل 8 قطع)",
    "nameKu": "حومس بە تەحین لەگەڵ ٨ دانە فەلافل",
    "desc": "Creamy chickpea hummus dip served with 8 crisp falafel pieces & fresh bread.",
    "priceFormatted": "3,000 IQD",
    "img": "assets/73.jpg",
    "badge": " Hummus & Falafel"
  },
  {
    "num": 64,
    "id": "san5",
    "category": "sandwiches",
    "name": "Crispy Chicken Sandwich Meal",
    "nameAr": "سندويش كريسبي",
    "nameKu": "سەندویچی کریسپی",
    "desc": "Crispy fried chicken sandwich served with fries & coleslaw salad.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/74.jpg",
    "badge": " Crispy Combo"
  },
  {
    "num": 65,
    "id": "dr1",
    "category": "drinks",
    "name": "Water",
    "nameAr": "ماء",
    "nameKu": "ئاو",
    "desc": "Pure chilled mineral water bottle.",
    "priceFormatted": "250 IQD",
    "img": "assets/76.png",
    "badge": "💧 Mineral Water"
  },
  {
    "num": 66,
    "id": "dr2",
    "category": "drinks",
    "name": "Pepsi",
    "nameAr": "بيبسي",
    "nameKu": "پیپسی",
    "desc": "Chilled Pepsi soft drink can.",
    "priceFormatted": "500 IQD",
    "img": "assets/77.png",
    "badge": "🥤 Chilled Soda"
  },
  {
    "num": 67,
    "id": "dr3",
    "category": "drinks",
    "name": "7Up Lemon Mint Mojito",
    "nameAr": "سفن أب ليمون ونعناع",
    "nameKu": "سڤن ئەپ لیمۆن و نەعناع",
    "desc": "Refreshing 7Up Lemon Mint Mojito soft drink can.",
    "priceFormatted": "500 IQD",
    "img": "assets/78.png",
    "badge": "🍹 Refreshing Mojito"
  }
];

// ── DOM References ────────────────────────────────────────────────────────
const splashScreen = document.getElementById('splash-screen');
const mainApp = document.getElementById('main-app');
const langDropdown = document.getElementById('lang-dropdown');
const foodGrid = document.getElementById('food-grid');
const searchInput = document.getElementById('menu-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const searchStatus = document.getElementById('search-status');
const appHeader = document.querySelector('.app-header');

// ── Initialization ────────────────────────────────────────────────────────
function initBackgroundVideo() {
  const video = document.getElementById('bg-video');
  if (!video) return;
  video.muted = true;
  video.loop = true;
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      document.addEventListener('click', () => { video.play(); }, { once: true });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundVideo();
  initBackgroundCanvas();
  renderFoodGrid();
  renderReviews();
  updateI18n();
  initScrollEffects();
});

// ── Reviews System & 1-Review Limitation ─────────────────────────────────
let selectedRating = 5;

const initialReviews = [];

function getStoredReviews() {
  const saved = localStorage.getItem('sb_user_reviews');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return [];
    }
  }
  return [];
}

function renderReviews() {
  const reviewsGrid = document.getElementById('reviews-grid');
  if (!reviewsGrid) return;

  const allReviews = getStoredReviews();

  if (allReviews.length === 0) {
    const emptyMsg = state.currentLang === 'ar'
      ? 'لا توجد تقييمات بعد. كن أول من يضيف تقييماً!'
      : state.currentLang === 'ku'
        ? 'هیچ بۆچوونێک نییە تا ئێستا. یەکەم کەس بە کە بۆچوونی خۆت بنووسیت!'
        : 'No reviews yet. Be the first to leave a review!';

    reviewsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
        <p style="font-size: 2.2rem; margin-bottom: 0.5rem;">⭐️</p>
        <p style="font-size: 1.1rem; font-weight: 600;">${emptyMsg}</p>
      </div>
    `;
    return;
  }

  reviewsGrid.innerHTML = allReviews.map(rev => {
    const starString = '★'.repeat(rev.stars || 5);
    const initial = rev.name ? rev.name.charAt(0).toUpperCase() : 'G';

    return `
      <div class="review-card glass-panel">
        <div class="review-stars">${starString}</div>
        <p class="review-text">"${rev.text.replace(/^"|"$/g, '')}"</p>
        <div class="review-author">
          <div class="author-avatar">${initial}</div>
          <div>
            <div class="author-name">${rev.name}</div>
            <div class="author-role">${rev.role || 'Verified Guest'}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openReviewModal() {
  const backdrop = document.getElementById('review-modal-backdrop');
  const limitMsg = document.getElementById('review-limit-msg');
  const submitBtn = document.getElementById('submit-review-btn');

  if (!backdrop) return;

  // Check 1-review limit
  const hasReviewed = localStorage.getItem('sb_has_submitted_review');
  if (hasReviewed === 'true') {
    limitMsg?.classList.remove('hidden');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';
      submitBtn.style.cursor = 'not-allowed';
    }
  } else {
    limitMsg?.classList.add('hidden');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'pointer';
    }
  }

  backdrop.classList.remove('hidden');
}

function closeReviewModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  const backdrop = document.getElementById('review-modal-backdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

function setReviewRating(rating) {
  selectedRating = rating;
  const spans = document.querySelectorAll('#star-picker span');
  spans.forEach((span, index) => {
    if (index < rating) {
      span.classList.add('selected');
    } else {
      span.classList.remove('selected');
    }
  });
}

function submitUserReview() {
  if (localStorage.getItem('sb_has_submitted_review') === 'true') {
    alert('You have already submitted a review. Thank you for your feedback!');
    return;
  }

  const nameInput = document.getElementById('review-name');
  const textInput = document.getElementById('review-text');

  const name = nameInput ? nameInput.value.trim() : '';
  const text = textInput ? textInput.value.trim() : '';

  if (!name || !text) {
    alert('Please fill in both your name and review message.');
    return;
  }

  const newReview = {
    id: 'user-rev-' + Date.now(),
    name: name,
    role: 'Verified Guest',
    stars: selectedRating,
    text: text
  };

  let savedUserReviews = [];
  const existing = localStorage.getItem('sb_user_reviews');
  if (existing) {
    try { savedUserReviews = JSON.parse(existing); } catch (e) { }
  }

  savedUserReviews.unshift(newReview);
  localStorage.setItem('sb_user_reviews', JSON.stringify(savedUserReviews));
  localStorage.setItem('sb_has_submitted_review', 'true');

  if (nameInput) nameInput.value = '';
  if (textInput) textInput.value = '';

  renderReviews();
  closeReviewModal();

  alert('Thank you! Your review has been published.');
}

// ── Scroll & Parallax Effects ─────────────────────────────────────────────
function initScrollEffects() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      appHeader?.classList.add('scrolled');
    } else {
      appHeader?.classList.remove('scrolled');
    }
  });
}

// ── Language Selection & Screen Logic ─────────────────────────────────────
function selectLanguage(lang) {
  state.currentLang = lang;

  // Set HTML dir attribute (RTL for Kurdish & Arabic, LTR for English)
  if (lang === 'ar' || lang === 'ku') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', lang);
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }

  // Update button flags & codes
  const flagSrcMap = window.FALLBACK_ASSETS ? { en: window.FALLBACK_ASSETS.flag_en, ku: window.FALLBACK_ASSETS.flag_ku, ar: window.FALLBACK_ASSETS.flag_ar } : { en: 'assets/flag_en.svg', ku: 'assets/flag_ku.svg', ar: 'assets/flag_ar.svg' };
  const codeMap = { en: 'EN', ku: 'KU', ar: 'AR' };
  const flagEl = document.getElementById('current-lang-flag');
  if (flagEl) {
    flagEl.innerHTML = `<img src="${flagSrcMap[lang] || flagSrcMap.en}" alt="${codeMap[lang]}" class="topbar-flag-img" />`;
  }
  const codeEl = document.getElementById('current-lang-code');
  if (codeEl) {
    codeEl.textContent = codeMap[lang];
  }

  // Update UI strings & re-render menu items
  updateI18n();
  renderFoodGrid();

  // Smooth transition from Splash Screen to Main App
  splashScreen.classList.add('hidden');
  mainApp.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSplashScreen() {
  mainApp.classList.add('hidden');
  splashScreen.classList.remove('hidden');
}

function toggleLangMenu() {
  langDropdown.classList.toggle('hidden');
}

function switchLanguage(lang) {
  langDropdown.classList.add('hidden');
  selectLanguage(lang);
}

// Update text content of all data-i18n elements
function updateI18n() {
  const dict = i18n[state.currentLang] || i18n.en;

  // Hero title & sub
  const heroQuestion = document.getElementById('hero-question');
  if (heroQuestion) heroQuestion.textContent = dict.hero_title;
  const heroSub = document.getElementById('hero-subtitle');
  if (heroSub) heroSub.textContent = dict.hero_sub;
  if (searchInput) searchInput.placeholder = dict.search_ph;

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  renderCategoryChips();
}

function renderCategoryChips() {
  const container = document.getElementById('quick-tags');
  if (!container) return;

  const dict = i18n[state.currentLang] || i18n.en;

  const categoryDefs = [
    { key: 'ch_shawarma', titleKey: 'cat_ch_shawarma', icon: '🍗' },
    { key: 'meat_shawarma', titleKey: 'cat_meat_shawarma', icon: '🥩' },
    { key: 'pastries', titleKey: 'cat_pastries', icon: '🫓' },
    { key: 'sandwiches', titleKey: 'cat_sandwiches', icon: '🥪' },
    { key: 'meals', titleKey: 'cat_meals', icon: '🍽️' },
    { key: 'burgers', titleKey: 'cat_burgers', icon: '🍔' },
    { key: 'pizza', titleKey: 'cat_pizza', icon: '🍕' },
    { key: 'light_rolls', titleKey: 'cat_light_rolls', icon: '🌯' },
    { key: 'fries', titleKey: 'cat_fries', icon: '🍟' },
    { key: 'appetizers', titleKey: 'cat_appetizers', icon: '🥗' },
    { key: 'oriental', titleKey: 'cat_oriental', icon: '🍚' },
    { key: 'drinks', titleKey: 'cat_drinks', icon: '🥤' }
  ];

  const counts = {};
  menuItems.forEach(item => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });

  let html = `
    <button class="tag-chip ${state.activeCategory === 'all' ? 'active' : ''}" onclick="filterCategory('all', this)">
      <span>✨</span> <span>${dict.cat_all || 'All Items'}</span> <span class="chip-count">${menuItems.length}</span>
    </button>
  `;

  categoryDefs.forEach(catDef => {
    const count = counts[catDef.key] || 0;
    if (count === 0) return;

    const catTitle = dict[catDef.titleKey] || catDef.key;
    const isActive = state.activeCategory === catDef.key;

    html += `
      <button class="tag-chip ${isActive ? 'active' : ''}" onclick="filterCategory('${catDef.key}', this)">
        <span>${catDef.icon}</span> <span>${catTitle}</span> <span class="chip-count">${count}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

// ── Menu Filtering & Search ───────────────────────────────────────────────
function filterCategory(category, btnEl) {
  state.activeCategory = category;

  document.querySelectorAll('.tag-chip').forEach(btn => btn.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  renderFoodGrid();

  // Smooth scroll to the menu section or selected category
  const targetId = category === 'all' ? 'menu-container' : `cat-sec-${category}`;
  const targetEl = document.getElementById(targetId) || document.getElementById('menu-container');
  if (targetEl) {
    const yOffset = -90; // Top header offset
    const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function handleSearch(val) {
  state.searchQuery = val.trim().toLowerCase();
  clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
  renderFoodGrid();
}

function clearSearch() {
  searchInput.value = '';
  state.searchQuery = '';
  clearSearchBtn.classList.add('hidden');
  renderFoodGrid();
}

// Image Error Fallback Handler
function handleMealImageError(img) {
  if (img) img.style.display = 'none';
}


// Render Food Cards Grid grouped into distinct visual sections
function renderFoodGrid() {
  const dict = i18n[state.currentLang] || i18n.en;

  const categoryDefs = [
    { key: 'ch_shawarma', titleKey: 'cat_ch_shawarma', icon: '🍗' },
    { key: 'meat_shawarma', titleKey: 'cat_meat_shawarma', icon: '🥩' },
    { key: 'pastries', titleKey: 'cat_pastries', icon: '🫓' },
    { key: 'sandwiches', titleKey: 'cat_sandwiches', icon: '🥪' },
    { key: 'meals', titleKey: 'cat_meals', icon: '🍽️' },
    { key: 'burgers', titleKey: 'cat_burgers', icon: '🍔' },
    { key: 'pizza', titleKey: 'cat_pizza', icon: '🍕' },
    { key: 'light_rolls', titleKey: 'cat_light_rolls', icon: '🌯' },
    { key: 'fries', titleKey: 'cat_fries', icon: '🍟' },
    { key: 'appetizers', titleKey: 'cat_appetizers', icon: '🥗' },
    { key: 'oriental', titleKey: 'cat_oriental', icon: '🍚' },
    { key: 'drinks', titleKey: 'cat_drinks', icon: '🥤' }
  ];

  const q = state.searchQuery;
  const filteredAll = menuItems.filter(item => {
    const matchCat = state.activeCategory === 'all' || item.category === state.activeCategory;
    const matchSearch = q === '' ||
      item.name.toLowerCase().includes(q) ||
      item.nameAr.toLowerCase().includes(q) ||
      item.nameKu.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q);

    return matchCat && matchSearch;
  });

  if (q !== '') {
    searchStatus.classList.remove('hidden');
    searchStatus.textContent = filteredAll.length > 0
      ? `Found ${filteredAll.length} matching dish(es)`
      : dict.search_no_results;
  } else {
    searchStatus.classList.add('hidden');
  }

  if (filteredAll.length === 0) {
    foodGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</p>
        <p style="font-size: 1.2rem; font-weight: 600;">${dict.search_no_results}</p>
      </div>
    `;
    return;
  }

  // Filter categories to render
  const categoriesToRender = state.activeCategory === 'all'
    ? categoryDefs
    : categoryDefs.filter(c => c.key === state.activeCategory);

  let html = '';

  categoriesToRender.forEach(catDef => {
    const itemsInCat = filteredAll.filter(item => item.category === catDef.key);
    if (itemsInCat.length === 0) return;

    const catTitle = dict[catDef.titleKey] || catDef.key;

    html += `
      <div class="menu-cat-block" id="cat-sec-${catDef.key}">
        <div class="menu-cat-header">
          <h2 class="menu-cat-title">
            <span class="menu-cat-icon">${catDef.icon}</span>
            <span class="menu-cat-text">${catTitle}</span>
          </h2>
          <span class="menu-cat-count">${itemsInCat.length} ${state.currentLang === 'ar' ? 'أكلات' : state.currentLang === 'ku' ? 'ژەم' : 'Dishes'}</span>
        </div>
        <div class="food-grid">
          ${itemsInCat.map(item => renderFoodCardHtml(item, dict)).join('')}
        </div>
      </div>
    `;
  });

  foodGrid.innerHTML = html;
}

function renderFoodCardHtml(item, dict) {
  const theme = catThemes[item.category] || catThemes.ch_shawarma;

  let primaryTitle = item.name;
  let subTitle = `${item.nameKu} · ${item.nameAr}`;

  if (state.currentLang === 'ar') {
    primaryTitle = item.nameAr;
    subTitle = `${item.name} · ${item.nameKu}`;
  } else if (state.currentLang === 'ku') {
    primaryTitle = item.nameKu;
    subTitle = `${item.nameAr} · ${item.name}`;
  }

  const topHeaderHtml = item.img ? `
    <div class="food-img-wrapper" style="background: ${theme.gradient};">
      <img 
        src="${item.img}" 
        alt="${item.name}" 
        class="food-img" 
        loading="lazy" 
        onerror="handleMealImageError(this)"
      />
      <div class="food-card-overlay"></div>
      <span class="badge-tag">${item.badge}</span>
      <span class="cat-icon-badge" title="Item #${item.num}">#${item.num} ${theme.icon}</span>
    </div>
  ` : `
    <div class="no-photo-card-header" style="background: ${theme.gradient};">
      <span class="cat-icon-badge" title="Item #${item.num}">#${item.num} ${theme.icon}</span>
      <span class="badge-tag-inline">${item.badge}</span>
    </div>
  `;

  return `
    <div class="food-card ${!item.img ? 'card-no-photo' : ''}">
      ${topHeaderHtml}
      <div class="food-info">
        <h3 class="food-name">${primaryTitle}</h3>
        <div class="food-subname">${subTitle}</div>
        <p class="food-desc">${item.desc}</p>
        
        <div class="food-footer">
          <div class="price-tag">
            ${item.priceFormatted}
          </div>
          <button class="view-item-btn" onclick="openItemModal('${item.id}')">
            <span>✨</span> <span>${dict.view_item}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ── Cinematic Floating Embers, Smoke & Fire Glow Canvas ────────────────────
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const embers = [];
  const numEmbers = 80;
  const colors = ['rgba(255, 140, 0, ', 'rgba(255, 179, 71, ', 'rgba(255, 215, 0, ', 'rgba(239, 68, 68, '];

  for (let i = 0; i < numEmbers; i++) {
    embers.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.7 + 0.2,
      baseAlpha: Math.random() * 0.5 + 0.2,
      vy: -(Math.random() * 0.9 + 0.3),
      vx: (Math.random() - 0.5) * 0.5,
      oscillationSpeed: Math.random() * 0.03 + 0.01,
      oscillationAmplitude: Math.random() * 1.8 + 0.5,
      angle: Math.random() * Math.PI * 2,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Warm radial glow at bottom center
    const flameGlow = ctx.createRadialGradient(
      width / 2, height + 120, 80,
      width / 2, height + 120, height * 0.75
    );
    flameGlow.addColorStop(0, 'rgba(255, 140, 0, 0.18)');
    flameGlow.addColorStop(0.5, 'rgba(239, 68, 68, 0.06)');
    flameGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = flameGlow;
    ctx.fillRect(0, 0, width, height);

    // Render embers
    embers.forEach(p => {
      p.y += p.vy;
      p.angle += p.oscillationSpeed;
      p.x += p.vx + Math.sin(p.angle) * p.oscillationAmplitude * 0.18;
      p.alpha = p.baseAlpha + Math.sin(p.angle * 3) * 0.15;

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.max(0, Math.min(1, p.alpha)) + ')';
      ctx.shadowBlur = 14;
      ctx.shadowColor = 'rgba(255, 140, 0, 0.85)';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ── Item Detail Modal & Photo Zoom Lightbox Logic ─────────────────────────
let currentModalItem = null;
let currentZoomScale = 1;

function openItemModal(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  currentModalItem = item;
  const theme = catThemes[item.category] || catThemes.ch_shawarma;
  const dict = i18n[state.currentLang] || i18n.en;

  let primaryTitle = item.name;
  let subTitle = `${item.nameKu} · ${item.nameAr}`;

  if (state.currentLang === 'ar') {
    primaryTitle = item.nameAr;
    subTitle = `${item.name} · ${item.nameKu}`;
  } else if (state.currentLang === 'ku') {
    primaryTitle = item.nameKu;
    subTitle = `${item.nameAr} · ${item.name}`;
  }

  const modalImgContainer = document.querySelector('.item-modal-img-container');
  const zoomBtn = document.querySelector('.zoom-btn');
  const modalCard = document.querySelector('.item-modal-card');
  const modalImg = document.getElementById('item-modal-img');

  if (item.img) {
    if (modalImgContainer) modalImgContainer.style.display = 'block';
    if (zoomBtn) zoomBtn.style.display = 'inline-flex';
    if (modalCard) modalCard.classList.remove('no-photo-modal');
    if (modalImg) {
      modalImg.src = item.img;
      modalImg.style.display = 'block';
    }
  } else {
    if (modalImgContainer) modalImgContainer.style.display = 'none';
    if (zoomBtn) zoomBtn.style.display = 'none';
    if (modalCard) modalCard.classList.add('no-photo-modal');
    if (modalImg) {
      modalImg.src = '';
      modalImg.style.display = 'none';
    }
  }

  const badgeEl = document.getElementById('item-modal-badge');
  if (badgeEl) badgeEl.textContent = item.badge || '⭐ Signature';

  const titleEl = document.getElementById('item-modal-title');
  if (titleEl) titleEl.textContent = primaryTitle;

  const subEl = document.getElementById('item-modal-subtitle');
  if (subEl) subEl.textContent = subTitle;

  const descEl = document.getElementById('item-modal-desc');
  if (descEl) descEl.textContent = item.desc;

  const priceEl = document.getElementById('item-modal-price');
  if (priceEl) priceEl.textContent = item.priceFormatted;

  const waBtn = document.getElementById('item-modal-wa-btn');
  if (waBtn) {
    const waText = encodeURIComponent(`Hello Sham Bird! I would like to order:\n📌 #${item.num} ${item.nameAr} / ${item.name}\n💰 Price: ${item.priceFormatted}`);
    waBtn.href = `https://wa.me/9647509661218?text=${waText}`;
  }

  const backdrop = document.getElementById('item-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeItemModal(e) {
  const backdrop = document.getElementById('item-modal-backdrop');
  if (backdrop) {
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function openPhotoZoom() {
  if (!currentModalItem || !currentModalItem.img) return;

  const zoomBackdrop = document.getElementById('photo-zoom-backdrop');
  const zoomImg = document.getElementById('lightbox-img');
  const zoomTitle = document.getElementById('lightbox-title');

  if (zoomBackdrop && zoomImg) {
    zoomImg.src = currentModalItem.img;
    zoomImg.alt = currentModalItem.name;
    if (zoomTitle) zoomTitle.textContent = `#${currentModalItem.num} ${currentModalItem.name}`;

    currentZoomScale = 1;
    zoomImg.style.transform = `scale(${currentZoomScale})`;
    zoomBackdrop.classList.remove('hidden');
  }
}

function closePhotoZoom(e) {
  const zoomBackdrop = document.getElementById('photo-zoom-backdrop');
  if (zoomBackdrop) {
    zoomBackdrop.classList.add('hidden');
  }
}

function zoomPhoto(delta) {
  const zoomImg = document.getElementById('lightbox-img');
  if (!zoomImg) return;

  currentZoomScale = Math.max(0.8, Math.min(3.0, currentZoomScale + delta));
  zoomImg.style.transform = `scale(${currentZoomScale})`;
}

function resetPhotoZoom() {
  const zoomImg = document.getElementById('lightbox-img');
  if (!zoomImg) return;

  currentZoomScale = 1;
  zoomImg.style.transform = `scale(1)`;
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePhotoZoom();
    closeItemModal();
    closeReviewModal();
  }
});
