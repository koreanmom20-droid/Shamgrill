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
  ch_shawarma: { fallbackImg: 'assets/shawarma.png', gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍗' },
  meat_shawarma: { fallbackImg: 'assets/mixed_grill.png', gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥩' },
  pastries: { fallbackImg: 'assets/starters.png', gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🫓' },
  sandwiches: { fallbackImg: 'assets/mixed_grill.png', gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥪' },
  meals: { fallbackImg: 'assets/broasted.png', gradient: 'linear-gradient(135deg, rgba(217, 119, 6, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍽️' },
  burgers: { fallbackImg: 'assets/broasted.png', gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍔' },
  pizza: { fallbackImg: 'assets/starters.png', gradient: 'linear-gradient(135deg, rgba(225, 29, 72, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍕' },
  light_rolls: { fallbackImg: 'assets/shawarma.png', gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🌯' },
  fries: { fallbackImg: 'assets/starters.png', gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍟' },
  appetizers: { fallbackImg: 'assets/starters.png', gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥗' },
  oriental: { fallbackImg: 'assets/shawarma.png', gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🍚' },
  drinks: { fallbackImg: 'assets/starters.png', gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)', icon: '🥤' }
};

const menuItems = [
  {
    "num": 1,
    "id": "cs1",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Lebanese & Saj)",
    "nameAr": "لفة شاورما دجاج خبز لبناني مع صاج",
    "nameKu": "لوولەی شاورمەی مریشک نانی لبنانی و ساج",
    "desc": "Fresh chicken shawarma wrapped with Lebanese & Saj flatbread.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/23.jpg",
    "badge": "🔥 Popular"
  },
  {
    "num": 2,
    "id": "cs2",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Lebanese Bread)",
    "nameAr": "لفة شاورما دجاج خبز لبناني",
    "nameKu": "لوولەی شاورمەی مریشک نانی لبنانی",
    "desc": "Classic chicken shawarma wrapped in soft Lebanese pita bread.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/2.jpg",
    "badge": " Classic"
  },
  {
    "num": 3,
    "id": "cs3",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Stone Samoon)",
    "nameAr": "لفة شاورما دجاج صمون حجري",
    "nameKu": "لوولەی شاورمەی مریشک سەموونی بەردین",
    "desc": "Fresh chicken shawarma in stone-oven baked samoon.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/9.jpg",
    "badge": " Stone Oven"
  },
  {
    "num": 4,
    "id": "cs4",
    "category": "ch_shawarma",
    "name": "Chicken Shawarma Roll (Lebanese Deluxe)",
    "nameAr": "لفة شاورما دجاج خبز لبناني ممتازة",
    "nameKu": "لوولەی شاورمەی مریشک نانی لبنانی",
    "desc": "Chicken shawarma roll wrapped tightly in toasted Lebanese bread.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/30.jpg",
    "badge": " Classic"
  },
  {
    "num": 5,
    "id": "cs5",
    "category": "ch_shawarma",
    "name": "Double Chicken Shawarma Roll",
    "nameAr": "لفة شاورما دجاج دبل",
    "nameKu": "لوولەی شاورمەی مریشک دبل",
    "desc": "Double portion chicken shawarma roll toasted on wooden board.",
    "priceFormatted": "3,000 IQD",
    "img": "assets/62.jpg",
    "badge": " Double Extra"
  },
  {
    "num": 6,
    "id": "cs6",
    "category": "ch_shawarma",
    "name": "Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي دجاج",
    "nameKu": "ژەمی شاورمەی عەرەبی مریشک",
    "desc": "Sliced Arabi chicken shawarma roll served with fries & garlic dip.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/17.jpg",
    "badge": "⭐ Favorite"
  },
  {
    "num": 7,
    "id": "cs7",
    "category": "ch_shawarma",
    "name": "Double Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي دبل",
    "nameKu": "ژەمی شاورمەی عەرەبی دبل",
    "desc": "Double portion Arabi chicken shawarma platter with extra fries.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/32.jpg",
    "badge": "🔥 Huge Portion"
  },
  {
    "num": 8,
    "id": "cs8",
    "category": "ch_shawarma",
    "name": "250g Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما دجاج 250g",
    "nameKu": "ژەمی شاورمەی مریشک ٢٥٠ گرام",
    "desc": "Quarter kilo chicken shawarma platter with garlic dip & bread.",
    "priceFormatted": "7,000 IQD",
    "img": "assets/15.jpg",
    "badge": " 250g Box"
  },
  {
    "num": 9,
    "id": "cs9",
    "category": "ch_shawarma",
    "name": "Family Arabi Chicken Shawarma Meal",
    "nameAr": "وجبة شاورما عربي عائلي",
    "nameKu": "ژەمی شاورمەی عەرەبی عائلی",
    "desc": "Family size Arabi chicken shawarma platter with garlic dip, fries & veggies.",
    "priceFormatted": "11,000 IQD",
    "img": "assets/35.jpg",
    "badge": "👨‍👩‍👧‍👦 Family"
  },
  {
    "num": 10,
    "id": "ms1",
    "category": "meat_shawarma",
    "name": "Meat Shawarma Roll (French Samoon)",
    "nameAr": "لفة شاورما لحم صمون فرنسي",
    "nameKu": "لوولەی شاورمەی گوشت سەموونی فەرەنسی",
    "desc": "Meat shawarma inside crispy French baguette samoon with parsley & tomato.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/4.jpg",
    "badge": "🥩 Juicy Meat"
  },
  {
    "num": 11,
    "id": "ms2",
    "category": "meat_shawarma",
    "name": "250g Meat Shawarma Platter on Hummus",
    "nameAr": "وجبة شاورما لحم 250g مع حمص",
    "nameKu": "ژەمی شاورمەی گوشت ٢٥٠ گرام لەگەڵ حمس",
    "desc": "Tender beef shawarma slices arranged around creamy hummus dip.",
    "priceFormatted": "8,000 IQD",
    "img": "assets/10.jpg",
    "badge": " 250g Box"
  },
  {
    "num": 12,
    "id": "ms3",
    "category": "meat_shawarma",
    "name": "Arabi Meat Shawarma Meal",
    "nameAr": "وجبة شاورما لحم عربي",
    "nameKu": "ژەمی شاورمەی گوشتي عەرەبی",
    "desc": "Sliced Arabi meat shawarma platter with fries & tahini dip.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/36.jpg",
    "badge": "⭐ Favorite"
  },
  {
    "num": 13,
    "id": "ms4",
    "category": "meat_shawarma",
    "name": "Double Arabi Meat Shawarma Meal",
    "nameAr": "وجبة شاورما لحم عربي دبل",
    "nameKu": "ژەمی شاورمەی گوشتي عەرەبی دبل",
    "desc": "Double portion Arabi meat shawarma platter with extra fries & tahini.",
    "priceFormatted": "6,500 IQD",
    "img": "assets/47.jpg",
    "badge": "🔥 Huge Portion"
  },
  {
    "num": 14,
    "id": "ms5",
    "category": "meat_shawarma",
    "name": "Double Arabi Meat Shawarma (Special Tray)",
    "nameAr": "وجبة شاورما لحم عربي دبل خيرة",
    "nameKu": "ژەمی شاورمەی گوشتي عەرەبی دبل تایبەت",
    "desc": "Double portion Arabi meat shawarma platter with pickles & sauce.",
    "priceFormatted": "7,000 IQD",
    "img": "assets/61.jpg",
    "badge": "🥩 Double Meat"
  },
  {
    "num": 15,
    "id": "p1",
    "category": "pastries",
    "name": "Za'atar Pastry",
    "nameAr": "زعتر",
    "nameKu": "زەعتەر",
    "desc": "Oven-fresh thyme & olive oil pastry.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/28.jpg",
    "badge": " Fresh Baked"
  },
  {
    "num": 16,
    "id": "p2",
    "category": "pastries",
    "name": "Muhammara Pastry",
    "nameAr": "محمرة",
    "nameKu": "محەمەرە",
    "desc": "Spiced red pepper paste pastry baked fresh in stone oven.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/38.jpg",
    "badge": " Spiced"
  },
  {
    "num": 17,
    "id": "p3",
    "category": "pastries",
    "name": "Sujuk / Pepperoni Pie",
    "nameAr": "فطيرة سجق / ببروني",
    "nameKu": "فەتیرەی سوجوک / پێپەرۆنی",
    "desc": "Seasoned sujuk beef sausage & pepperoni pie with cheese.",
    "priceFormatted": "2,500 IQD",
    "img": "assets/19.jpg",
    "badge": " Sujuk & Cheese"
  },
  {
    "num": 18,
    "id": "p4",
    "category": "pastries",
    "name": "Akkawi Cheese Pastry",
    "nameAr": "جبنة عكاوي",
    "nameKu": "پەنیری عەکاوی",
    "desc": "Authentic Akkawi cheese baked inside fresh oven dough.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/8.jpg",
    "badge": "🧀 Cheesy"
  },
  {
    "num": 19,
    "id": "p5",
    "category": "pastries",
    "name": "Akkawi Cheese Pastry (Black Seed)",
    "nameAr": "جبنة عكاوي بالحبّة السوداء",
    "nameKu": "پەنیری عەکاوی",
    "desc": "Akkawi cheese pie baked with black seeds & herbs.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/68.jpg",
    "badge": " Cheesy"
  },
  {
    "num": 20,
    "id": "p6",
    "category": "pastries",
    "name": "Kashkaval Cheese Pastry Boat",
    "nameAr": "جبنة قشقوان قارب",
    "nameKu": "پەنیری قەشقەوان بەلەمی",
    "desc": "Melted Kashkaval cheese baked in dough boat.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/49.jpg",
    "badge": " Kashkaval"
  },
  {
    "num": 21,
    "id": "p7",
    "category": "pastries",
    "name": "Lahm Bi Ajeen (Meat Pie)",
    "nameAr": "لحم بعجين",
    "nameKu": "گوشت بە هەویر",
    "desc": "Oven fresh meat pie topped with spiced minced meat.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/60.jpg",
    "badge": " Traditional"
  },
  {
    "num": 22,
    "id": "p8",
    "category": "pastries",
    "name": "Lahm Bi Ajeen Poster Special",
    "nameAr": "لحم بعجين عائلي",
    "nameKu": "گوشت بە هەویر عائلی",
    "desc": "Traditional pie topped with spiced minced meat.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/45.jpg",
    "badge": " Traditional"
  },
  {
    "num": 23,
    "id": "p9",
    "category": "pastries",
    "name": "Muhammara with Kashkaval Pastry",
    "nameAr": "محمرة مع قشقوان",
    "nameKu": "محەمەرە لەگەڵ پەنیری قەشقەوان",
    "desc": "Spiced red pepper paste topped with melted Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/11.jpg",
    "badge": "🌶️ Cheesy & Spicy"
  },
  {
    "num": 24,
    "id": "p10",
    "category": "pastries",
    "name": "Mortadella with Kashkaval Pastry",
    "nameAr": "مرتديلا مع قشقوان",
    "nameKu": "مۆرتادێلا لەگەڵ پەنیری قەشقەوان",
    "desc": "Shredded mortadella topped with melted Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/37.jpg",
    "badge": " Delish"
  },
  {
    "num": 25,
    "id": "p11",
    "category": "pastries",
    "name": "Olives with Kashkaval Pastry",
    "nameAr": "زيتون مع قشقوان",
    "nameKu": "زەیتوون لەگەڵ پەنیری قەشقەوان",
    "desc": "Black & green olives baked with Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/43.jpg",
    "badge": " Olives & Cheese"
  },
  {
    "num": 26,
    "id": "p12",
    "category": "pastries",
    "name": "Lahm Bi Ajeen with Kashkaval",
    "nameAr": "لحم بعجين مع قشقوان",
    "nameKu": "گوشت بە هەویر لەگەڵ پەنیری قەشقەوان",
    "desc": "Traditional meat pie topped with melted Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/14.jpg",
    "badge": " Cheesy Meat"
  },
  {
    "num": 27,
    "id": "p13",
    "category": "pastries",
    "name": "Lahm Bi Ajeen with Fried Egg",
    "nameAr": "لحم بعجين مع بيض مقلي",
    "nameKu": "گوشت بە هەویر لەگەڵ هێلکەی سورکراوە",
    "desc": "Traditional meat pie baked with fried egg on top.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/59.jpg",
    "badge": " Special Egg"
  },
  {
    "num": 28,
    "id": "p14",
    "category": "pastries",
    "name": "Lahm Bi Ajeen with Egg (Oven Rack)",
    "nameAr": "لحم بعجين مع بيض على الشبك",
    "nameKu": "گوشت بە هەویر لەگەڵ هێلکە",
    "desc": "Traditional meat pie baked with fresh egg on oven rack.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/63.jpg",
    "badge": " Special Egg"
  },
  {
    "num": 29,
    "id": "p15",
    "category": "pastries",
    "name": "Shish Tawook with Kashkaval Pastry",
    "nameAr": "شيش مع قشقوان",
    "nameKu": "شیش لەگەڵ پەنیری قەشقەوان",
    "desc": "Chicken tawook pastry topped with melted Kashkaval cheese.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/64.jpg",
    "badge": " Chicken Tawook"
  },
  {
    "num": 30,
    "id": "p16",
    "category": "pastries",
    "name": "Small Mini Pizza",
    "nameAr": "بيتزا صغيرة",
    "nameKu": "پیتزای بچووک",
    "desc": "Personal mini pizza baked with cheese, olives & tomato sauce.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/42.jpg",
    "badge": " Mini Pizza"
  },
  {
    "num": 31,
    "id": "p17",
    "category": "pastries",
    "name": "Smoked Turkey / Beef Pie",
    "nameAr": "فطيرة جيش مدخن",
    "nameKu": "فەتیرەی دووکەڵاوی",
    "desc": "Smoked deli meat pie stuffed with melted cheese.",
    "priceFormatted": "2,500 IQD",
    "img": "assets/40.jpg",
    "badge": " Smoked"
  },
  {
    "num": 32,
    "id": "p18",
    "category": "pastries",
    "name": "Smoked Turkey Deluxe Pie Platter",
    "nameAr": "فطيرة جيش مدخن ديلوكس",
    "nameKu": "فەتیرەی دووکەڵاوی دێلۆکس",
    "desc": "Deluxe smoked turkey pie baked with double cheese.",
    "priceFormatted": "3,000 IQD",
    "img": "assets/41.jpg",
    "badge": " Deluxe Smoked"
  },
  {
    "num": 33,
    "id": "p19",
    "category": "pastries",
    "name": "Half Kilo Shamia Pie Platter (500g)",
    "nameAr": "فطيرة شامية نص كيلو",
    "nameKu": "فەتیرەی شامی نیوە کیلۆ",
    "desc": "500g large authentic Shamia mini pie feast platter.",
    "priceFormatted": "15,000 IQD",
    "img": "assets/39.jpg",
    "badge": "📦 500g Pie"
  },
  {
    "num": 34,
    "id": "p20",
    "category": "pastries",
    "name": "1 KG Shamia Pie Feast",
    "nameAr": "فطيرة شامية كيلو",
    "nameKu": "فەتیرەی شامی یەک کیلۆ",
    "desc": "Full 1 KG giant Shamia pie feast platter for family sharing.",
    "priceFormatted": "30,000 IQD",
    "img": "assets/65.jpg",
    "badge": "👑 1 KG Feast"
  },
  {
    "num": 35,
    "id": "sw1",
    "category": "sandwiches",
    "name": "Crispy Chicken Sandwich",
    "nameAr": "سندويش كريسبي",
    "nameKu": "سەندویچی کریسپی",
    "desc": "Golden crispy chicken breast with mayo, lettuce & pickles.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/3.jpg",
    "badge": " Crisp"
  },
  {
    "num": 36,
    "id": "sw2",
    "category": "sandwiches",
    "name": "Shish Tawook Sandwich Platter",
    "nameAr": "سندويش شيش طاووق",
    "nameKu": "سەندویچی شیش طاووق",
    "desc": "Grilled chicken skewers, garlic paste & pickles in sandwich bread with fries.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/20.jpg",
    "badge": " Grilled"
  },
  {
    "num": 37,
    "id": "sw3",
    "category": "sandwiches",
    "name": "Francisco / Escalope Sandwich",
    "nameAr": "سندويش فرانسيسكو / سكاليوب",
    "nameKu": "سەندویچی فرانسیسکۆ",
    "desc": "Breaded chicken escalope with mozzarella & sweet corn glaze.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/52.jpg",
    "badge": " Special"
  },
  {
    "num": 38,
    "id": "sw4",
    "category": "sandwiches",
    "name": "Fajita Sandwich",
    "nameAr": "سندويش فاهيتا",
    "nameKu": "سەندویچی فاهيتا",
    "desc": "Sautéed chicken strips, peppers, onions & melted cheese.",
    "priceFormatted": "4,000 IQD",
    "img": "assets/53.jpg",
    "badge": " Sizzling"
  },
  {
    "num": 39,
    "id": "sw5",
    "category": "sandwiches",
    "name": "Spicy Zinger Sandwich with Cheddar",
    "nameAr": "سندويش زنجر مع شيدر",
    "nameKu": "سەندویچی زنجر بە چێدار",
    "desc": "Spicy zinger chicken fillet with melted cheddar cheese & spicy mayo.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/57.jpg",
    "badge": "🌶️ Spicy"
  },
  {
    "num": 40,
    "id": "sw6",
    "category": "sandwiches",
    "name": "Shish Tawook Sandwich Platter with Coleslaw",
    "nameAr": "سندويش شيش طاووق مع كولسلو",
    "nameKu": "سەندویچی شیش طاووق لەگەڵ کۆلسڵۆ",
    "desc": "Baguette samoon filled with grilled tawook, fries & coleslaw.",
    "priceFormatted": "4,500 IQD",
    "img": "assets/74.jpg",
    "badge": " Tawook Deluxe"
  },
  {
    "num": 41,
    "id": "m1",
    "category": "meals",
    "name": "Rizo Chicken Rice Bowl",
    "nameAr": "ريزو دجاج",
    "nameKu": "ریزووی مریشک",
    "desc": "Spiced rice bowl topped with crispy chicken & special sauce.",
    "priceFormatted": "5,000 IQD",
    "img": "assets/6.jpg",
    "badge": "⭐ Popular Rice"
  },
  {
    "num": 42,
    "id": "m2",
    "category": "meals",
    "name": "Rizo Chicken Feast Special",
    "nameAr": "وجبة ريزو دجاج عائلية",
    "nameKu": "ژەمی تایبەتی ریزووی مریشک",
    "desc": "Special Rizo chicken rice bowl feast with crispy strips.",
    "priceFormatted": "6,000 IQD",
    "img": "assets/18.jpg",
    "badge": " Rice Special"
  },
  {
    "num": 43,
    "id": "m3",
    "category": "meals",
    "name": "Rizo Chicken Commercial Bowl",
    "nameAr": "ريزو دجاج ميجا",
    "nameKu": "ریزووی مریشک میگا",
    "desc": "Mega size Rizo rice bowl with double crispy chicken.",
    "priceFormatted": "7,000 IQD",
    "img": "assets/54.jpg",
    "badge": " Mega Bowl"
  },
  {
    "num": 44,
    "id": "m4",
    "category": "meals",
    "name": "Fajita Meal Platter",
    "nameAr": "وجبة فاهيتا",
    "nameKu": "ژەمی فاهيتا",
    "desc": "Sizzling chicken fajita served with rice, fries & salad.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/22.jpg",
    "badge": " Sizzling"
  },
  {
    "num": 45,
    "id": "m5",
    "category": "meals",
    "name": "Crispy Chicken Tenders with Cheddar",
    "nameAr": "وجبة كريسبي مع جبن شيدر",
    "nameKu": "ژەمی کریسپی لەگەڵ پەنیری چێدار",
    "desc": "Crispy chicken breast tenders served with cheddar cheese & fries.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/29.jpg",
    "badge": " Cheesy Crispy"
  },
  {
    "num": 46,
    "id": "m6",
    "category": "meals",
    "name": "Crispy Chicken Meal Platter",
    "nameAr": "وجبة كريسبي دجاج",
    "nameKu": "ژەمی کریسپی مریشک",
    "desc": "Crispy chicken tenders platter with fries, coleslaw & baguette.",
    "priceFormatted": "9,000 IQD",
    "img": "assets/51.jpg",
    "badge": " Crispy Combo"
  },
  {
    "num": 47,
    "id": "m7",
    "category": "meals",
    "name": "Crispy Chicken Meal + Extra Pieces",
    "nameAr": "وجبة كريسبي + قطع إضافية",
    "nameKu": "ژەمی کریسپی + پارچەی زیاتر",
    "desc": "Crispy chicken strips & extra pieces platter with fries & coleslaw.",
    "priceFormatted": "10,000 IQD",
    "img": "assets/58.jpg",
    "badge": " Deluxe Tenders"
  },
  {
    "num": 48,
    "id": "m8",
    "category": "meals",
    "name": "Spicy Zinger Meal Platter with Mozzarella",
    "nameAr": "وجبة زنجر مع جبنة موزاريلا",
    "nameKu": "ژەمی زنجر لەگەڵ پەنیری موزاريلا",
    "desc": "Spicy Zinger chicken fillets platter topped with melted mozzarella.",
    "priceFormatted": "10,000 IQD",
    "img": "assets/66.jpg",
    "badge": "🌶️ Spicy Feast"
  },
  {
    "num": 49,
    "id": "m9",
    "category": "meals",
    "name": "Shish Tawook Meal Platter",
    "nameAr": "وجبة شيش طاووق",
    "nameKu": "ژەمی شیش طاووق",
    "desc": "Grilled chicken tawook skewers served with fries, lemon & garlic dip.",
    "priceFormatted": "8,000 IQD",
    "img": "assets/67.jpg",
    "badge": "⭐ Platter"
  },
  {
    "num": 50,
    "id": "m10",
    "category": "meals",
    "name": "Sham Bird Grand Feast Platter",
    "nameAr": "وجبة شام بيرد الفاخرة",
    "nameKu": "ژەمی بەرز و تایبەتی شام بیرد",
    "desc": "Full spread platter featuring mini pies, falafel, chicken strips & sides.",
    "priceFormatted": "15,000 IQD",
    "img": "assets/21.jpg",
    "badge": "👑 Grand Feast"
  },
  {
    "num": 51,
    "id": "m11",
    "category": "meals",
    "name": "Sham Bird Royal Feast",
    "nameAr": "وجبة شام بيرد الملكية",
    "nameKu": "ژەمی پاشایەتی شام بیرد",
    "desc": "Full feast banner featuring shawarma, pizza, pastries & fries.",
    "priceFormatted": "20,000 IQD",
    "img": "assets/55.jpg",
    "badge": "👑 Royal Feast"
  },
  {
    "num": 52,
    "id": "b1",
    "category": "burgers",
    "name": "Beef Burger",
    "nameAr": "بركر لحم",
    "nameKu": "بەرگری گوشت",
    "desc": "Juicy beef patty, tomato, onion & burger house sauce on wooden block.",
    "priceFormatted": "3,500 IQD",
    "img": "assets/50.jpg",
    "badge": "🥩 Beef"
  },
  {
    "num": 53,
    "id": "b2",
    "category": "burgers",
    "name": "Chicken Burger",
    "nameAr": "بركر دجاج",
    "nameKu": "بەرگری مریشک",
    "desc": "Chicken patty, lettuce, mayo & pickles in soft burger bun.",
    "priceFormatted": "3,000 IQD",
    "img": "assets/72.jpg",
    "badge": " Classic"
  },
  {
    "num": 54,
    "id": "pz1",
    "category": "pizza",
    "name": "Vegetable Pizza",
    "nameAr": "بيتزا خضار",
    "nameKu": "پیتزای سەوزە",
    "desc": "Fresh bell peppers, olives, mushrooms, tomatoes & mozzarella.",
    "priceFormatted": "Small 4k · Mid 5k · Large 7k IQD",
    "img": "assets/12.jpg",
    "badge": " Veggie"
  },
  {
    "num": 55,
    "id": "pz2",
    "category": "pizza",
    "name": "Margherita Pizza",
    "nameAr": "بيتزا مارغريتا",
    "nameKu": "پیتزای مارگەريتا",
    "desc": "Classic rich tomato sauce with melted mozzarella cheese.",
    "priceFormatted": "Small 4k · Mid 5k · Large 7k IQD",
    "img": "assets/13.jpg",
    "badge": " Classic"
  },
  {
    "num": 56,
    "id": "pz3",
    "category": "pizza",
    "name": "Margherita Pizza (Wooden Board)",
    "nameAr": "بيتزا مارغريتا خشبي",
    "nameKu": "پیتزای مارگەریتا لەسەر تەختە",
    "desc": "Classic rich tomato sauce & melted mozzarella cheese on wooden board.",
    "priceFormatted": "Small 4k · Mid 5k · Large 7k IQD",
    "img": "assets/44.jpg",
    "badge": " Wood Fired"
  },
  {
    "num": 57,
    "id": "pz4",
    "category": "pizza",
    "name": "Pepperoni Pizza",
    "nameAr": "بيتزا ببروني",
    "nameKu": "پیتزای پێپەرۆنی",
    "desc": "Sliced beef pepperoni & melted mozzarella cheese.",
    "priceFormatted": "Small 5k · Mid 7k · Large 8k IQD",
    "img": "assets/16.jpg",
    "badge": " Pepperoni"
  },
  {
    "num": 58,
    "id": "pz5",
    "category": "pizza",
    "name": "Meat Shawarma Pizza",
    "nameAr": "بيتزا لحم شاورما",
    "nameKu": "پیتزای گوشتی شاورمە",
    "desc": "Seasoned meat shawarma, mushrooms & melted mozzarella.",
    "priceFormatted": "Small 6k · Mid 8k · Large 9k IQD",
    "img": "assets/46.jpg",
    "badge": " Meat Lover"
  },
  {
    "num": 59,
    "id": "pz6",
    "category": "pizza",
    "name": "Chicken Shawarma Pizza",
    "nameAr": "بيتزا دجاج شاورما",
    "nameKu": "پیتزای مریشکی شاورمە",
    "desc": "Tender chicken shawarma pieces, bell peppers & mozzarella.",
    "priceFormatted": "Small 5k · Mid 7k · Large 8k IQD",
    "img": "assets/56.jpg",
    "badge": " Chicken"
  },
  {
    "num": 60,
    "id": "pz7",
    "category": "pizza",
    "name": "Smoked Turkey / Beef Pizza",
    "nameAr": "بيتزا جيش مدخن",
    "nameKu": "پیتزای دووکەڵاوی",
    "desc": "Smoked deli slices, herbs & mozzarella cheese.",
    "priceFormatted": "Small 5k · Mid 7k · Large 8k IQD",
    "img": "assets/71.jpg",
    "badge": " Smoked"
  },
  {
    "num": 61,
    "id": "lr1",
    "category": "light_rolls",
    "name": "Mortadella Roll (Saj Bread)",
    "nameAr": "لفة مرتديلا خبز صاج",
    "nameKu": "لوولەی مۆرتادێلا نانی ساج",
    "desc": "Mortadella slices roll wrapped in Saj bread with pickles.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/5.jpg",
    "badge": " Mortadella"
  },
  {
    "num": 62,
    "id": "lr2",
    "category": "light_rolls",
    "name": "Mortadella Roll with Fries",
    "nameAr": "لفت مرتديلا مع بطاطا",
    "nameKu": "لوولەی مۆرتادێلا بە بەتاتە",
    "desc": "Mortadella roll stuffed with crispy french fries & pickles.",
    "priceFormatted": "1,500 IQD",
    "img": "assets/31.jpg",
    "badge": " Mortadella & Fries"
  },
  {
    "num": 63,
    "id": "lr3",
    "category": "light_rolls",
    "name": "Fries Roll (Stone Samoon)",
    "nameAr": "لفة بطاطا صمون حجري",
    "nameKu": "لوولەی بەتاتە سەموونی بەردین",
    "desc": "French fries & garlic paste in stone-baked samoon.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/7.jpg",
    "badge": "🍟 Fries"
  },
  {
    "num": 64,
    "id": "lr4",
    "category": "light_rolls",
    "name": "Fries Roll (Lebanese Bread)",
    "nameAr": "لفة بطاطا خبز لبناني",
    "nameKu": "لوولەی بەتاتە نانی لبنانی",
    "desc": "French fries roll wrapped in soft Lebanese pita bread.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/24.jpg",
    "badge": "🍟 Fries"
  },
  {
    "num": 65,
    "id": "lr5",
    "category": "light_rolls",
    "name": "Fries Roll (French Samoon)",
    "nameAr": "لفة بطاطا صمون فرنسي",
    "nameKu": "لوولەی بەتاتە سەموونی فەرەنسی",
    "desc": "French fries roll inside crispy French baguette samoon.",
    "priceFormatted": "2,000 IQD",
    "img": "assets/25.jpg",
    "badge": " Baguette Fries"
  },
  {
    "num": 66,
    "id": "lr6",
    "category": "light_rolls",
    "name": "Falafel Roll (Stone Samoon)",
    "nameAr": "لفة فلافل صمون حجري",
    "nameKu": "لوولەی فەلافل سەموونی بەردین",
    "desc": "Crispy falafel, tahini & salad in stone samoon.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/26.jpg",
    "badge": " Crispy"
  },
  {
    "num": 67,
    "id": "lr7",
    "category": "light_rolls",
    "name": "Falafel Roll (Lebanese Bread)",
    "nameAr": "لفة فلافل خبز لبناني",
    "nameKu": "لوولەی فەلافل نانی لبنانی",
    "desc": "Falafel roll in thin Lebanese pita bread with tahini.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/34.jpg",
    "badge": " Classic"
  },
  {
    "num": 68,
    "id": "lr8",
    "category": "light_rolls",
    "name": "Falafel Roll (Saj Bread)",
    "nameAr": "لفة فلافل خبز صاج",
    "nameKu": "لوولەی فەلافل نانی ساج",
    "desc": "Falafel roll wrapped in thin Saj flatbread.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/27.jpg",
    "badge": " Saj Roll"
  },
  {
    "num": 69,
    "id": "lr9",
    "category": "light_rolls",
    "name": "Falafel Pieces (8 Pcs with Hummus)",
    "nameAr": "فلافل قرص (عدد 8) مع حمص",
    "nameKu": "قورسی فەلافل (٨ دانە) لەگەڵ حمس",
    "desc": "8 freshly fried golden falafel discs served with hummus dip.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/73.jpg",
    "badge": " 8 Pcs"
  },
  {
    "num": 70,
    "id": "lr10",
    "category": "light_rolls",
    "name": "Syrian Falafel Feast Banner",
    "nameAr": "فلافل سورية طازجة",
    "nameKu": "فەلافلی سوری تازە",
    "desc": "Freshly fried Syrian falafel poster.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/70.jpg",
    "badge": " Syrian Falafel"
  },
  {
    "num": 71,
    "id": "lr11",
    "category": "light_rolls",
    "name": "Mixed Veggie Roll (Stone Samoon)",
    "nameAr": "لفة مشكل صمون حجري",
    "nameKu": "لوولەی تێکەڵە سەموونی بەردین",
    "desc": "Mixed grilled veggies & falafel in stone samoon.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/33.jpg",
    "badge": " Mixed"
  },
  {
    "num": 72,
    "id": "lr12",
    "category": "light_rolls",
    "name": "Mixed Veggie Roll (Saj Bread)",
    "nameAr": "لفة مشكل خبز صاج",
    "nameKu": "لوولەی تێکەڵە نانی ساج",
    "desc": "Mixed veggies, cucumber, cabbage & fries roll in Saj bread.",
    "priceFormatted": "1,250 IQD",
    "img": "assets/69.jpg",
    "badge": " Mixed"
  },
  {
    "num": 73,
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
    "num": 74,
    "id": "fr2",
    "category": "fries",
    "name": "French Fries with Cheese",
    "nameAr": "صحن بطاطا بالجبن",
    "nameKu": "قابی بەتاتە بە پەنیر",
    "desc": "Crispy fries topped with melted cheddar cheese sauce.",
    "priceFormatted": "2,500 IQD",
    "img": "assets/48.jpg",
    "badge": "🧀 Cheesy"
  },
  {
    "num": 75,
    "id": "dr1",
    "category": "drinks",
    "name": "Pepsi",
    "nameAr": "بيبسي",
    "nameKu": "پیپسی",
    "desc": "Refreshing chilled Pepsi cola.",
    "priceFormatted": "1,000 IQD",
    "badge": "🥤 Cold"
  },
  {
    "num": 76,
    "id": "dr2",
    "category": "drinks",
    "name": "Water",
    "nameAr": "ماء",
    "nameKu": "ئاو",
    "desc": "Bottled drinking water.",
    "priceFormatted": "500 IQD",
    "img": "assets/76.png",
    "badge": "💧 Fresh"
  },
  {
    "num": 77,
    "id": "dr3",
    "category": "drinks",
    "name": "Pepsi Diet",
    "nameAr": "بيبسي دايت",
    "nameKu": "پیپسی دایت",
    "desc": "Chilled Diet Pepsi cola.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/77.png",
    "badge": "🥤 Diet"
  },
  {
    "num": 78,
    "id": "dr4",
    "category": "drinks",
    "name": "7up",
    "nameAr": "سفن اب",
    "nameKu": "سڤن ئەپ",
    "desc": "Chilled 7up.",
    "priceFormatted": "1,000 IQD",
    "img": "assets/78.png",
    "badge": "🍋 Lemon"
  }
];

// ── DOM References// ── DOM References ────────────────────────────────────────────────────────
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
function handleMealImageError(img, itemNum, catKey) {
  const catFallbacks = {
    ch_shawarma: 'assets/shawarma.png',
    meat_shawarma: 'assets/mixed_grill.png',
    pastries: 'assets/28.jpg',
    sandwiches: 'assets/broasted.png',
    meals: 'assets/broasted.png',
    burgers: 'assets/50.jpg',
    pizza: 'assets/12.jpg',
    light_rolls: 'assets/26.jpg',
    fries: 'assets/1.jpg',
    appetizers: 'assets/starters.png',
    oriental: 'assets/mixed_grill.png'
  };

  if (!img.dataset.triedFallback && catFallbacks[catKey]) {
    img.dataset.triedFallback = 'true';
    img.src = catFallbacks[catKey];
  } else {
    img.style.display = 'none';
  }
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

  const imageHtml = item.img ? `
    <img 
      src="${item.img}" 
      alt="${item.name}" 
      class="food-img" 
      loading="lazy" 
      onerror="handleMealImageError(this, ${item.num}, '${item.category}')"
    />
  ` : `
    <div class="no-photo-banner">
      <span class="no-photo-icon">${theme.icon}</span>
    </div>
  `;

  return `
    <div class="food-card ${!item.img ? 'card-no-photo' : ''}">
      <div class="food-img-wrapper" style="background: ${theme.gradient};">
        ${imageHtml}
        <div class="food-card-overlay"></div>
        <span class="badge-tag">${item.badge}</span>
        <span class="cat-icon-badge" title="Item #${item.num}">#${item.num} ${theme.icon}</span>
      </div>
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

  const imageSrc = item.img || theme.fallbackImg;

  const modalImg = document.getElementById('item-modal-img');
  if (modalImg) {
    modalImg.dataset.extIndex = '-1';
    modalImg.src = imageSrc;
    modalImg.onerror = function () {
      handleMealImageError(this, item.num, item.category);
    };
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
  if (!currentModalItem) return;

  const theme = catThemes[currentModalItem.category] || catThemes.ch_shawarma;
  const imageSrc = currentModalItem.img || theme.fallbackImg;

  const zoomBackdrop = document.getElementById('photo-zoom-backdrop');
  const zoomImg = document.getElementById('lightbox-img');
  const zoomTitle = document.getElementById('lightbox-title');

  if (zoomBackdrop && zoomImg) {
    zoomImg.dataset.extIndex = '-1';
    zoomImg.src = imageSrc;
    zoomImg.onerror = function () {
      handleMealImageError(this, currentModalItem.num, currentModalItem.category);
    };
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
