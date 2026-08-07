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
    empty_menu_msg: 'Menu items cleared. Ready for new menu updates!',
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
    empty_menu_msg: 'مێنیوی کۆن سڕایەوە. ئامادەیە بۆ زیادکردنی ژەمە نوێیەکان!',
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
    empty_menu_msg: 'تم إزالة المنيو القديم بالكامل. جاهز لإضافة المنيو الجديد!',
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
    id: 'crispy-meal',
    num: 1,
    category: 'meals',
    name: 'Crispy Meal',
    nameAr: 'وجبة كرسبي',
    nameKu: 'ژەمی کرسپی',
    desc: 'يقدم مع بطاطا مقلية · Served with French fries · لەگەڵ بەتاتەی سوورکراوە پێشکەش دەکرێت',
    price: 9000,
    priceFormatted: '9,000 د.ع',
    badge: '🍗 Crispy',
    img: 'assets/photo1.jpeg'
  },
  {
    id: 'fajita-sandwich',
    num: 2,
    category: 'sandwiches',
    name: 'Fajita Sandwich',
    nameAr: 'ساندويش فاهيتا',
    nameKu: 'ساندویچی فاهیتا',
    desc: 'صمون فرنسي وفاهيتا · French bread & Fajita · سەموونی فەرەنسی و فاهیتا',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🥪 Fajita',
    img: 'assets/2.jpeg'
  },
  {
    id: 'shish-tawook-sandwich',
    num: 3,
    category: 'sandwiches',
    name: 'Shish Tawook Sandwich',
    nameAr: 'ساندويش شيش طاووق',
    nameKu: 'ساندویچی شیش تاووق',
    desc: 'صمون فرنسي و شيش طاووق · French bread & Shish Tawook · سەموونی فەرەنسی و شیش تاووق',
    price: 4000,
    priceFormatted: '4,000 د.ع',
    badge: '🥪 Shish Tawook',
    img: 'assets/3.jpeg'
  },
  {
    id: 'family-arabic-shawarma-meal',
    num: 4,
    category: 'ch_shawarma',
    name: 'Family Arabic Shawarma Meal',
    nameAr: 'وجبة شاورما عربي عائلية',
    nameKu: 'ژەمی شاورمەی عەرەبی خێزانی',
    desc: 'قطع صمون، مخلل، كريمة ثوم، بطاطا مقلية وخضروات · Samoon pieces, pickles, garlic cream, fries & vegetables · پارچە سەموون، ترشی، کرێمی سێر، بەتاتە و سەوزەوات',
    price: 11000,
    priceFormatted: '11,000 د.ع',
    badge: '🍗 Family Meal',
    img: 'assets/4.jpeg'
  },
  {
    id: 'maria-shawarma',
    num: 5,
    category: 'ch_shawarma',
    name: 'Maria Shawarma',
    nameAr: 'شاورما ماريا',
    nameKu: 'شاورمەی ماریا',
    desc: 'شاورما دجاج و بطاطس · Chicken Shawarma & Fries · شاورمەی مریشک و بەتاتە',
    price: 6000,
    priceFormatted: '6,000 د.ع',
    badge: '🍗 Maria',
    img: 'assets/5.jpeg'
  },
  {
    id: 'chicken-shawarma-plate',
    num: 6,
    category: 'ch_shawarma',
    name: 'Chicken Shawarma Plate',
    nameAr: 'شاورما دجاج',
    nameKu: 'شاورمەی مریشک',
    desc: 'يقدم مع خبز و سلطة خضراء · Served with bread & green salad · لەگەڵ نان و سەڵاتەی سەوز پێشکەش دەکرێت',
    price: 13000,
    priceFormatted: '13,000 د.ع',
    badge: '🍗 Chicken Shawarma',
    img: 'assets/6.jpeg'
  },
  {
    id: 'double-chicken-shawarma-meal',
    num: 8,
    category: 'ch_shawarma',
    name: 'Double Chicken Shawarma Meal',
    nameAr: 'وجبة شاورما دجاج دوبل',
    nameKu: 'ژەمی شاورمەی مریشکی دووبل',
    desc: 'خبز لبناني و شاورما دجاج · Lebanese bread & chicken shawarma · نانی لبنانی و شاورمەی مریشک',
    price: 6000,
    priceFormatted: '6,000 د.ع',
    badge: '🍗 Double Shawarma',
    img: 'assets/8.jpeg'
  },
  {
    id: 'arabic-shawarma-meal',
    num: 9,
    category: 'ch_shawarma',
    name: 'Arabic Shawarma Meal',
    nameAr: 'وجبة شاورمه عربي',
    nameKu: 'ژەمی شاورمەی عەرەبی',
    desc: 'خبز لبناني و شاورما دجاج · Lebanese bread & chicken shawarma · نانی لبنانی و شاورمەی مریشک',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🍗 Arabic Shawarma',
    img: 'assets/9.jpeg'
  },
  {
    id: 'chicken-shawarma-french-samoon',
    num: 10,
    category: 'ch_shawarma',
    name: 'Chicken Shawarma (French Samoon)',
    nameAr: 'شاورما دجاج-صمون فرنسي',
    nameKu: 'شاورمەی مریشک (سەموونی فەرەنسی)',
    desc: 'شاورما دجاج وبطاطس · Chicken shawarma & fries · شاورمەی مریشک و بەتاتە',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🍗 French Samoon',
    img: 'assets/10.jpeg'
  },
  {
    id: 'chicken-shawarma-stone-samoon',
    num: 11,
    category: 'ch_shawarma',
    name: 'Chicken Shawarma (Stone Samoon)',
    nameAr: 'شاورما دجاج-صمون حجري',
    nameKu: 'شاورمەی مریشک (سەموونی بەردین)',
    desc: 'شاورما دجاج و بطاطس · Chicken shawarma & fries · شاورمەی مریشک و بەتاتە',
    price: 1500,
    priceFormatted: '1,500 د.ع',
    badge: '🍗 Stone Samoon',
    img: 'assets/11.jpeg'
  },
  {
    id: 'chicken-saj-shawarma-lebanese-bread',
    num: 12,
    category: 'ch_shawarma',
    name: 'Chicken Saj Shawarma (Lebanese Bread)',
    nameAr: 'شاورما صاج دجاج-خبز لبناني',
    nameKu: 'شاورمەی صاجی مریشک (نانی لبنانی)',
    desc: 'شاورما دجاج و بطاطس · Chicken shawarma & fries · شاورمەی مریشک و بەتاتە',
    price: 1500,
    priceFormatted: '1,500 د.ع',
    badge: '🍗 Saj Shawarma',
    img: 'assets/12.jpeg'
  },
  {
    id: 'chicken-shawarma-lebanese-bread',
    num: 13,
    category: 'ch_shawarma',
    name: 'Chicken Shawarma (Lebanese Bread)',
    nameAr: 'شاورما دجاج -خبز لبناني',
    nameKu: 'شاورمەی مریشک (نانی لبنانی)',
    desc: 'شاورما دجاج وبطاطس · Chicken shawarma & fries · شاورمەی مریشک و بەتاتە',
    price: 2500,
    priceFormatted: '2,500 د.ع',
    badge: '🍗 Chicken Shawarma',
    img: 'assets/13.jpeg'
  },
  {
    id: 'margherita-pizza',
    num: 14,
    category: 'pizza',
    name: 'Margherita Pizza',
    nameAr: 'بيتزا مارجريتا',
    nameKu: 'پیتزا مارگریتا',
    desc: 'عجينه بيتزا وجبينه · Pizza dough & cheese · هەویری پیتزا و پەنیری مۆزارێلا',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🍕 Pizza',
    img: 'assets/14.jpeg'
  },
  {
    id: 'pepperoni-pizza',
    num: 15,
    category: 'pizza',
    name: 'Pepperoni Pizza',
    nameAr: 'بيتزا ببروني',
    nameKu: 'پیتزا پێپەرۆنی',
    desc: 'عجينه بيتزا، ببروني وجبنه · Pizza dough, pepperoni & cheese · هەویری پیتزا، پێپەرۆنی و پەنیر',
    price: 5500,
    priceFormatted: '5,500 د.ع',
    badge: '🍕 Pepperoni',
    img: 'assets/15.jpeg'
  },
  {
    id: 'mixed-pizza',
    num: 16,
    category: 'pizza',
    name: 'Mixed Supreme Pizza',
    nameAr: 'بيتزا مشكل',
    nameKu: 'پیتزا تێکەڵاو',
    desc: 'دجاج، لحم، فلفل ملون، مشروم وجبنة · Chicken, meat, bell peppers, mushroom & cheese · مریشک، گوشت، بیبەری ڕەنگاوڕەنگ، قارچک و پەنیر',
    price: 6500,
    priceFormatted: '6,500 د.ع',
    badge: '🍕 Mix Pizza',
    img: 'assets/16.jpeg'
  },
  {
    id: 'chicken-pizza',
    num: 17,
    category: 'pizza',
    name: 'Chicken Pizza',
    nameAr: 'بيتزا دجاج',
    nameKu: 'پیتزا مریشک',
    desc: 'عجينه بيتزا، دجاج فلفل ملون، مشروم وجبنه · Pizza dough, chicken, bell peppers, mushroom & cheese · هەویری پیتزا، مریشک، بیبەری ڕەنگاوڕەنگ، قارچک و پەنیر',
    price: 5500,
    priceFormatted: '5,500 د.ع',
    badge: '🍕 Chicken Pizza',
    img: 'assets/17.jpeg'
  },
  {
    id: 'vegetable-pizza',
    num: 18,
    category: 'pizza',
    name: 'Vegetable Pizza',
    nameAr: 'بيتزا خضراوات',
    nameKu: 'پیتزای سەوزەوات',
    desc: 'عجينة بيتزا، فلفل ملون، مشروم وجبنة · Pizza dough, bell peppers, mushroom & cheese · هەویری پیتزا، بیبەری ڕەنگاوڕەنگ، قارچک و پەنیر',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🍕 Veggie',
    img: 'assets/18.jpeg'
  },
  {
    id: 'falafel-stone-samoon',
    num: 19,
    category: 'sandwiches',
    name: 'Falafel Sandwich (Stone Samoon)',
    nameAr: 'سندويتش فلافل - صمون حجري',
    nameKu: 'سەندویچی فەلافل (سەموونی بەردین)',
    desc: 'فلافل، صمون حجري، طماطم، خيار و بصل · Falafel, stone samoon, tomato, cucumber & onion · فەلافل، سەموونی بەردین، تەماتە، خەیار و پیاز',
    price: 750,
    priceFormatted: '750 د.ع',
    badge: '🥪 Falafel',
    img: 'assets/19.jpeg'
  },
  {
    id: 'falafel-saj-sandwich',
    num: 20,
    category: 'sandwiches',
    name: 'Falafel Saj Sandwich',
    nameAr: 'سندويتش صاج فلافل',
    nameKu: 'سەندویچی صاجی فەلافل',
    desc: 'خبز لبناني وفلافل · Lebanese bread & falafel · نانی لبنانی و فەلافل',
    price: 1250,
    priceFormatted: '1,250 د.ع',
    badge: '🥪 Falafel Saj',
    img: 'assets/20.jpeg'
  },
  {
    id: 'falafel-lebanese-bread',
    num: 21,
    category: 'sandwiches',
    name: 'Falafel Sandwich (Lebanese Bread)',
    nameAr: 'سندويش فلافل-خبز لبناني',
    nameKu: 'سەندویچی فەلافل (نانی لبنانی)',
    desc: 'فلافل، خبز لبناني، طماطم، خيار و بصل · Falafel, Lebanese bread, tomato, cucumber & onion · فەلافل، نانی لبنانی، تەماتە، خەیار و پیاز',
    price: 1000,
    priceFormatted: '1,000 د.ع',
    badge: '🥪 Falafel',
    img: 'assets/21.jpeg'
  },
  {
    id: 'hummus-with-meat',
    num: 22,
    category: 'appetizers',
    name: 'Hummus with Meat',
    nameAr: 'حمص لحم',
    nameKu: 'حومس بە گوشت',
    desc: 'حمص كريمي يقدم مع قطعة لحم · Creamy hummus topped with tender meat · حومسی کرێمی لەگەڵ گوشت',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🥗 Appetizer',
    img: 'assets/22.jpeg'
  },
  {
    id: 'hummus-with-chicken',
    num: 23,
    category: 'appetizers',
    name: 'Hummus with Chicken',
    nameAr: 'حمص دجاج',
    nameKu: 'حومس بە مریشک',
    desc: 'حمص كريمي يقدم مع قطع دجاج · Creamy hummus topped with chicken pieces · حومسی کرێمی لەگەڵ مریشک',
    price: 3500,
    priceFormatted: '3,500 د.ع',
    badge: '🥗 Appetizer',
    img: 'assets/23.jpeg'
  },
  {
    id: 'classic-hummus',
    num: 24,
    category: 'appetizers',
    name: 'Classic Hummus',
    nameAr: 'حمص',
    nameKu: 'حومسی كلاسیك',
    desc: 'طبق حمص بالطحينة وزيت الزيتون · Creamy hummus plate with tahini & olive oil · قاپی حومس بە تەحین و زەیتی زەیتوون',
    price: 2500,
    priceFormatted: '2,500 د.ع',
    badge: '🥗 Appetizer',
    img: 'assets/24.jpeg'
  },
  {
    id: 'shish-tawook-meal',
    num: 25,
    category: 'meals',
    name: 'Shish Tawook Meal',
    nameAr: 'وجبة شيش طاووق',
    nameKu: 'ژەمی شیش تاووق',
    desc: 'يقدم مع بطاطا مقلية · Served with French fries · لەگەڵ بەتاتەی سوورکراوە پێشکەش دەکرێت',
    price: 8000,
    priceFormatted: '8,000 د.ع',
    badge: '🍽️ Meal',
    img: 'assets/25.jpeg'
  },
  {
    id: 'chicken-burger',
    num: 26,
    category: 'burgers',
    name: 'Chicken Burger',
    nameAr: 'برجر دجاج',
    nameKu: 'بەرگری مریشک',
    desc: 'خبز برجر، شريحة دجاج وخس · Burger bun, chicken slice & lettuce · نانی بەرگر، پارچە مریشک و خەس',
    price: 3500,
    priceFormatted: '3,500 د.ع',
    badge: '🍔 Chicken Burger',
    img: 'assets/26.jpeg'
  },
  {
    id: 'cheese-burger',
    num: 27,
    category: 'burgers',
    name: 'Cheese Burger',
    nameAr: 'برجر بالجبنة',
    nameKu: 'بەرگر بە پەنیر',
    desc: 'خبز برجر، شريحة دجاج وجبنة · Burger bun, chicken slice & cheese · نانی بەرگر، پارچە مریشک و پەنیر',
    price: 4500,
    priceFormatted: '4,500 د.ع',
    badge: '🍔 Cheeseburger',
    img: 'assets/27.jpeg'
  },
  {
    id: 'escalope-sandwich',
    num: 28,
    category: 'sandwiches',
    name: 'Escalope Sandwich',
    nameAr: 'سندويش أسكالوب',
    nameKu: 'سەندویچی ئەسکالۆپ',
    desc: 'صمون فرنسي وأسكالوب · French bread & escalope · سەموونی فەرەنسی و ئەسکالۆپ',
    price: 5000,
    priceFormatted: '5,000 د.ع',
    badge: '🥪 Escalope',
    img: 'assets/28.jpeg'
  },
  {
    id: 'french-fries-plate',
    num: 29,
    category: 'fries',
    name: 'French Fries Plate',
    nameAr: 'طبق بطاطا مقلية',
    nameKu: 'قاپی بەتاتە',
    desc: 'بطاطا مقلية عادي · French fries plate · بەتاتەی سوورکراوە',
    price: 1500,
    priceFormatted: '1,500 د.ع',
    badge: '🍟 Fries',
    img: 'assets/29.jpeg'
  },
  {
    id: 'falafel-plate-10pcs',
    num: 30,
    category: 'appetizers',
    name: 'Falafel Plate (10 Pcs)',
    nameAr: 'طبق فلافل (10 قطع)',
    nameKu: 'قاپی فەلافل (١٠ پارچە)',
    desc: '10 قطع فلافل طازجة · 10 pieces of fresh falafel · ١٠ پارچە فەلافلی نوێ',
    price: 1000,
    priceFormatted: '1,000 د.ع',
    badge: '🥗 Falafel',
    img: 'assets/30.jpeg'
  },
  {
    id: 'hummus-tahini-lemon',
    num: 31,
    category: 'appetizers',
    name: 'Hummus Special',
    nameAr: 'حمص بالطحينة',
    nameKu: 'حومس بە تەحین',
    desc: 'حمص، بطحينة وعصير ليمون · Hummus with tahini & lemon juice · حومس بە تەحین و ئاوی لیمۆ',
    price: 2500,
    priceFormatted: '2,500 د.ع',
    badge: '🥗 Hummus',
    img: 'assets/31.jpeg'
  },
  {
    id: 'lahm-bi-ajeen',
    num: 32,
    category: 'pastries',
    name: 'Lahm Bi Ajeen',
    nameAr: 'لحم بالعجين',
    nameKu: 'لحم بالعجين',
    desc: 'عجينة لحم بالعجين ولحم مفروم · Dough topped with minced meat · هەویری تایبەت و گوشتی ڕنراو',
    price: 1750,
    priceFormatted: '1,750 د.ع',
    badge: '🫓 Pastry',
    img: 'assets/32.jpeg'
  },
  {
    id: 'zaatar-dish',
    num: 33,
    category: 'pastries',
    name: 'Zaatar Dish',
    nameAr: 'زعتر',
    nameKu: 'زەعەتەر',
    desc: 'صدر دجاج، أرز، قطعة زعتر، سلطة خضراء وبطاطس مهروسة · Chicken breast, rice, zaatar piece, green salad & mashed potatoes · سنگ مریشک، برنج، زەعەتەر، سەڵاتە و بەتاتەی شێلراو',
    price: 1250,
    priceFormatted: '1,250 د.ع',
    badge: '🫓 Zaatar',
    img: 'assets/33.jpeg'
  },
  {
    id: 'muhammara-hummus',
    num: 34,
    category: 'appetizers',
    name: 'Muhammara',
    nameAr: 'محمرة',
    nameKu: 'محه مەره',
    desc: 'حمص بالطحينة والباذنجان · Hummus with tahini & eggplant · حومس بە تەحین و بادنجان',
    price: 1250,
    priceFormatted: '1,250 د.ع',
    badge: '🥗 Appetizer',
    img: 'assets/34.jpeg'
  },
  {
    id: 'akawi-cheese-pastry',
    num: 35,
    category: 'pastries',
    name: 'Akawi Cheese Manakish',
    nameAr: 'جبنة عكاوي',
    nameKu: 'پەنیری عەکاوی',
    desc: 'عجينة وجبنة عكاوي · Dough & Akawi cheese · هەویر و پەنیری عەکاوی',
    price: 1750,
    priceFormatted: '1,750 د.ع',
    badge: '🫓 Akawi',
    img: 'assets/35.jpeg'
  },
  {
    id: 'kashkaval-pastry-1',
    num: 36,
    category: 'pastries',
    name: 'Kashkaval Cheese Pastry',
    nameAr: 'عجينة قشقوان',
    nameKu: 'پەنیری قەشقەوان',
    desc: 'عجينة وجبنة قشقوان · Dough & Kashkaval cheese · هەویر و پەنیری قەشقەوان',
    price: 1750,
    priceFormatted: '1,750 د.ع',
    badge: '🫓 Kashkaval',
    img: 'assets/36.jpeg'
  },
  {
    id: 'kashkaval-pastry-2',
    num: 37,
    category: 'pastries',
    name: 'Kashkaval Cheese Pastry Special',
    nameAr: 'عجينة قشقوان ممتازة',
    nameKu: 'پەنیری قەشقەوان تایبەت',
    desc: 'عجينة وجبنة قشقوان · Dough & Kashkaval cheese · هەویر و پەنیری قەشقەوان',
    price: 1750,
    priceFormatted: '1,750 د.ع',
    badge: '🫓 Kashkaval',
    img: 'assets/36.jpeg'
  },
  {
    id: 'kashkaval-muhammara',
    num: 38,
    category: 'pastries',
    name: 'Kashkaval Cheese with Muhammara',
    nameAr: 'جبنة قشقوان مع محمرة',
    nameKu: 'پەنیری قەشقەوان بە محەمەرە',
    desc: 'عجين، جبنة قشقوان ومحمرة · Dough, Kashkaval cheese & Muhammara · هەویر، پەنیری قەشقەوان و محەمەرە',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🫓 Kashkaval',
    img: 'assets/38.jpeg'
  },
  {
    id: 'shish-tawook-french-samoon',
    num: 39,
    category: 'sandwiches',
    name: 'Shish Tawook Sandwich',
    nameAr: 'شيش طاووق',
    nameKu: 'شیش تاووق',
    desc: 'صدر دجاج، بطاطا مقلية، كول سلو وصمون فرنسي · Chicken breast, fries, coleslaw & French bread · سنگ مریشک، بەتاتە، کۆلسڵۆ و سەموونی فەرەنسی',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🥪 Shish Tawook',
    img: 'assets/39.jpeg'
  },
  {
    id: 'kashkaval-zaatar',
    num: 40,
    category: 'pastries',
    name: 'Kashkaval Cheese with Zaatar',
    nameAr: 'جبنة قشقوان مع زعتر',
    nameKu: 'پەنیری قەشقەوان بە زەعەتەر',
    desc: 'عجينة، جبنة قشقوان وزعتر · Dough, Kashkaval cheese & Zaatar · هەویر، پەنیری قەشقەوان و زەعەتەر',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🫓 Kashkaval',
    img: 'assets/40.jpeg'
  },
  {
    id: 'olives-kashkaval',
    num: 41,
    category: 'pastries',
    name: 'Olives with Kashkaval Cheese',
    nameAr: 'زيتون مع قشقوان',
    nameKu: 'زەیتوون بە قەشقەوان',
    desc: 'عجينة، جبنة قشقوان وزيتون · Dough, Kashkaval cheese & olives · هەویر، پەنیری قەشقەوان و زەیتوون',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🫓 Olives & Cheese',
    img: 'assets/41.jpeg'
  },
  {
    id: 'mortadella-kashkaval',
    num: 42,
    category: 'pastries',
    name: 'Mortadella with Kashkaval Cheese',
    nameAr: 'مرتديلا مع قشقوان',
    nameKu: 'مۆرتادێلا بە قەشقەوان',
    desc: 'عجينة، مرتديلا وجبنة قشقوان · Dough, mortadella & Kashkaval cheese · هەویر، مۆرتادێلا و پەنیری قەشقەوان',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🫓 Mortadella',
    img: 'assets/42.jpeg'
  },
  {
    id: 'mini-pizza-1pc',
    num: 43,
    category: 'pizza',
    name: 'Mini Pizza (1 Pc)',
    nameAr: 'بيتزا صغيرة (1 قطعة)',
    nameKu: 'پیتزای بچووک (١ پارچە)',
    desc: '1 قطعة بيتزا صغيرة · 1 mini pizza piece · ١ پارچە پیتزای بچووک',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🍕 Mini Pizza',
    img: 'assets/43.jpeg'
  },
  {
    id: 'mixed-cheese-pastry',
    num: 44,
    category: 'pastries',
    name: 'Mixed Cheese Manakish',
    nameAr: 'جبنة مشكل',
    nameKu: 'پەنیری تێکەڵاو',
    desc: 'عجينة وجبنة شيدر · Dough & cheddar cheese · هەویر و پەنیری شیدار',
    price: 2750,
    priceFormatted: '2,750 د.ع',
    badge: '🫓 Cheese Mix',
    img: 'assets/44.jpeg'
  },
  {
    id: 'wushka-beef-cheese',
    num: 45,
    category: 'pastries',
    name: 'Wushka (Beef & Cheese Bread)',
    nameAr: 'وشكا',
    nameKu: 'وشکا (گوشت و پەنیر)',
    desc: 'خبز محشو باللحم البقري والجبنة · Stuffed bread with beef & cheese · نانی ئاخنراو بە گوشتی مانگا و پەنیر',
    price: 2750,
    priceFormatted: '2,750 د.ع',
    badge: '🫓 Wushka',
    img: 'assets/45.jpeg'
  },
  {
    id: 'lahm-bi-ajeen-egg',
    num: 46,
    category: 'pastries',
    name: 'Lahm Bi Ajeen with Egg',
    nameAr: 'لحم بالعجين بالبيض',
    nameKu: 'لحم بالعجين بە هێلکە',
    desc: 'لحم مفروم، بيض وعجينة لحم بالعجين · Minced meat, egg & dough · گوشتی ڕنراو، هێلکە و هەویر',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🫓 Pastry with Egg',
    img: 'assets/46.jpeg'
  },
  {
    id: 'lahm-bi-ajeen-kashkaval',
    num: 47,
    category: 'pastries',
    name: 'Lahm Bi Ajeen with Kashkaval Cheese',
    nameAr: 'لحم بالعجين مع جبنة قشقوان',
    nameKu: 'لحم بالعجين بە پەنیری قەشقەوان',
    desc: 'جبنة قشقوان ولحم مفروم · Kashkaval cheese & minced meat · پەنیری قەشقەوان و گوشتی ڕنراو',
    price: 2250,
    priceFormatted: '2,250 د.ع',
    badge: '🫓 Meat & Cheese',
    img: 'assets/47.jpeg'
  },
  {
    id: 'shamiyeh-1kg',
    num: 48,
    category: 'pastries',
    name: '1 KG Shamiyeh Pastries',
    nameAr: 'كيلو شامية',
    nameKu: 'کیلۆیەکی شامیدا',
    desc: '1 كيلو جرام من المعجنات الحلوة · 1 kg of sweet traditional pastries · ١ килоی هەویرکاری شیرین',
    price: 32000,
    priceFormatted: '32,000 د.ع',
    badge: '🫓 1 KG Sweet',
    img: 'assets/48.jpeg'
  },
  {
    id: 'mineral-water',
    num: 49,
    category: 'drinks',
    name: 'Mineral Water',
    nameAr: 'مياه معدنية',
    nameKu: 'ئاوی کانزایی',
    desc: 'مياه معدنية معقمة · Sterilized mineral water · ئاوی کانزایی پاکژکراوە',
    price: 250,
    priceFormatted: '250 د.ع',
    badge: '💧 Water',
    img: 'assets/49.jpeg'
  },
  {
    id: 'ayran-drink',
    num: 50,
    category: 'drinks',
    name: 'Smoked Ayran',
    nameAr: 'عيران مدخن',
    nameKu: 'عەیرانی دووکەڵاوی',
    desc: 'عيران مدخن طازج · Fresh smoked Ayran · عەیرانی دووکەڵاوی نوێ',
    price: 500,
    priceFormatted: '500 د.ع',
    badge: '🥛 Ayran',
    img: 'assets/50.jpeg'
  },
  {
    id: 'pepsi-can',
    num: 51,
    category: 'drinks',
    name: 'Pepsi Can',
    nameAr: 'بيبسي',
    nameKu: 'بیپسی',
    desc: 'مشروب غازي بيبسي · Refreshing Pepsi soft drink · بیپسی فێنککەرەوە',
    price: 750,
    priceFormatted: '750 د.ع',
    badge: '🥤 Soft Drink',
    img: 'assets/51.jpeg'
  },
  {
    id: '7up-can',
    num: 52,
    category: 'drinks',
    name: '7Up Can',
    nameAr: 'سفن أب',
    nameKu: 'سفن ئاپ',
    desc: 'مشروب غازي سفن أب · Refreshing 7Up soft drink · سفن ئاپ فێنککەرەوە',
    price: 750,
    priceFormatted: '750 د.ع',
    badge: '🥤 Soft Drink',
    img: 'assets/52.jpeg'
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
    const displayMsg = (menuItems.length === 0 && q === '') ? (dict.empty_menu_msg || 'Menu items cleared.') : dict.search_no_results;
    const icon = menuItems.length === 0 && q === '' ? '📋' : '🔍';
    foodGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">${icon}</p>
        <p style="font-size: 1.2rem; font-weight: 600;">${displayMsg}</p>
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
    </div>
  ` : `
    <div class="no-photo-card-header" style="background: ${theme.gradient};">
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
    const waText = encodeURIComponent(`Hello Sham Bird! I would like to order:\n📌 ${item.nameAr} / ${item.name}\n💰 Price: ${item.priceFormatted}`);
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
    if (zoomTitle) zoomTitle.textContent = currentModalItem.name;

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

/* ── Ambient Chill Restaurant Music Engine ───────────────────────────────── */
let audioCtx = null;
let masterGainNode = null;
let isMusicPlaying = false;
let synthTimer = null;
let currentVolume = 0.25;

// Warm Chill Lounge Chords (Frequencies in Hz for smooth lounge vibes)
const loungeChords = [
  // Cmaj9: C3, G3, B3, E4, D5
  [130.81, 196.00, 246.94, 329.63, 587.33],
  // Am9: A2, E3, G3, C4, B4
  [110.00, 164.81, 196.00, 261.63, 493.88],
  // Fmaj9: F2, C3, E3, A3, G4
  [87.31, 130.81, 164.81, 220.00, 392.00],
  // G13 / G7sus: G2, D3, F3, B3, E4
  [98.00, 146.83, 174.61, 246.94, 329.63]
];
let chordIndex = 0;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
      masterGainNode = audioCtx.createGain();
      masterGainNode.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
      masterGainNode.connect(audioCtx.destination);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playLoungeChord() {
  if (!audioCtx || !isMusicPlaying) return;

  const bgAudio = document.getElementById('bg-audio');
  if (bgAudio && bgAudio.src && !bgAudio.paused) {
    return; // HTML5 Audio element is actively playing
  }

  const chord = loungeChords[chordIndex];
  chordIndex = (chordIndex + 1) % loungeChords.length;

  const now = audioCtx.currentTime;
  const chordGain = audioCtx.createGain();
  chordGain.gain.setValueAtTime(0.001, now);
  chordGain.gain.linearRampToValueAtTime(0.18, now + 0.8);
  chordGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

  // Soft lowpass filter for warm acoustic dining atmosphere
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(650, now);

  chordGain.connect(filter);
  filter.connect(masterGainNode);

  chord.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();

    osc.type = 'sine';
    osc2.type = 'triangle';

    osc.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.002, now); // Gentle chorus effect

    const oscGain = audioCtx.createGain();
    oscGain.gain.value = i === 0 ? 0.35 : 0.2; // Warm bass grounding

    osc.connect(oscGain);
    osc2.connect(oscGain);
    oscGain.connect(chordGain);

    osc.start(now);
    osc2.start(now);

    osc.stop(now + 5.0);
    osc2.stop(now + 5.0);
  });
}

function startSynthLoop() {
  if (synthTimer) clearInterval(synthTimer);
  playLoungeChord();
  synthTimer = setInterval(() => {
    if (isMusicPlaying) {
      playLoungeChord();
    }
  }, 4800);
}

function toggleAmbientMusic() {
  const widget = document.getElementById('ambient-music-widget');
  const icon = document.getElementById('music-icon');
  const label = document.getElementById('music-label');
  const bgAudio = document.getElementById('bg-audio');

  initAudioContext();

  isMusicPlaying = !isMusicPlaying;

  if (isMusicPlaying) {
    if (bgAudio && bgAudio.src && bgAudio.readyState >= 2) {
      bgAudio.volume = currentVolume;
      bgAudio.play().catch(() => {
        startSynthLoop();
      });
    } else {
      startSynthLoop();
    }

    widget?.classList.add('playing');
    if (icon) icon.textContent = '🎵';
    if (label) label.textContent = state.currentLang === 'ar' ? 'موسيقى هادئة' : state.currentLang === 'ku' ? 'مۆسیقا' : 'Chill Lounge';
  } else {
    if (bgAudio) bgAudio.pause();
    if (synthTimer) clearInterval(synthTimer);
    widget?.classList.remove('playing');
    if (icon) icon.textContent = '🔇';
    if (label) label.textContent = state.currentLang === 'ar' ? 'مكتوم' : state.currentLang === 'ku' ? 'بێدەنگ' : 'Muted';
  }
}

function setMusicVolume(val) {
  currentVolume = parseFloat(val);
  if (masterGainNode && audioCtx) {
    masterGainNode.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
  }
  const bgAudio = document.getElementById('bg-audio');
  if (bgAudio) {
    bgAudio.volume = currentVolume;
  }
}

// Auto-start ambient music gently on first user click or touch interaction
document.addEventListener('click', function autoStartAudioOnce() {
  if (!isMusicPlaying) {
    toggleAmbientMusic();
  }
}, { once: true });
