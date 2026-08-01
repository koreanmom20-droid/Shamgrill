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
    menu_sub: 'All prices listed in IQD · by chef Recommendation.',
    cat_all: 'All Items',
    cat_ch_shawarma: 'Chicken Shawarma',
    cat_meat_shawarma: 'Meat Shawarma',
    cat_sandwiches: 'Sandwiches & Rolls',
    cat_meals: 'Meals & Grill',
    cat_burgers: 'Burgers',
    cat_pastries: 'Pastries & Pizza',
    cat_falafel: 'Falafel & Fries',
    cat_oriental: 'Oriental & Salads',
    cat_drinks: 'Drinks',
    search_no_results: 'No dishes found matching your search.',
    view_item: 'View Item',
    // New Sections
    chef_title: "Chef's Recommendations",
    chef_sub: "Handcrafted signature feasts selected by our master chefs",
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
  },
  ku: {
    hero_title: 'ئەمڕۆ حەزت لە چییە بیخۆیت؟',
    hero_sub: 'تاقی بکەرەوە لە ژەمە بەتامەکانی شاورمەی مریشک و گوشت، بەرگر، مریشکی برژاو، هەویرکاری، پیتزا و خوارده‌مه‌نییە ڕەسەنەکان.',
    search_ph: 'گەڕان بۆ شاورمە، ژەمەکان، بەرگر، پیتزا، هەویرکاری...',
    btn_browse: 'پێشبینینی مێنیو',
    menu_title: 'مێنیوی شام بیرد و ئەلئەساله',
    menu_sub: 'سەرجەم نرخەکان بە دیناری عێراقی (IQD)ن · بە نوێترین کوالیتی ئامادەکراوە',
    cat_all: 'هەمووی',
    cat_ch_shawarma: 'شاورمەی مریشک',
    cat_meat_shawarma: 'شاورمەی گوشت',
    cat_sandwiches: 'سەندویچ و لوولەکان',
    cat_meals: 'ژەمەکان و برژاو',
    cat_burgers: 'بەرگر',
    cat_pastries: 'هەویرکاری و پیتزا',
    cat_falafel: 'فەلافل و بەتاتە',
    cat_oriental: 'خواردنی ڕۆژهەڵاتی و سەڵاتە',
    cat_drinks: 'خواردنەوەکان',
    search_no_results: 'هیچ ژەمێک نەدۆزرایەوە بەم ناوه.',
    view_item: 'تەماشای ژەمەکە بکە',
    chef_title: "دیارییەکانی شێف",
    chef_sub: "تایبەتمەندترین ژەمە هەڵبژێردراوەکان لای شێفی سەرەکی",
    why_title: "بۆچی شام بیرد؟",
    why_sub: "کوالیتی بەرز، تامی ڕەسەن و خزمەتگوزاری بێ وێنە",
    stats_items: "ژەمە جیاوازەکان",
    stats_years: "ساڵ ئەزموون",
    stats_guests: "مشتەری بەختەوەر",
    stats_halal: "١٠٠٪ حەڵاڵ",
    reviews_title: "ڕای مشتەرییەکانمان",
    reviews_sub: "بۆچوونی ڕاستەقینەی ئاشقانی خواردن لە هەولێر و بەغدا",
    gallery_title: "گالێری ئینستاگرام",
    gallery_sub: "تاگی @ShamBird بکە لە ستۆرییەکانت",
    cta_title: "حەزت لە شاورمە و برژاوی ڕەسەنە؟",
    cta_sub: "ئەمڕۆ سەردانمان بکە یان مێنیوەکە ببڕوانە",
  },
  ar: {
    hero_title: 'شنو مشتهي اليوم ؟',
    hero_sub: 'شاورمە، وجبات، بركر، معجنات، بيتزا، مقبلات ، كلشييي و كلاشيييي',
    search_ph: 'ابحث عن شاورما، وجبات، بركر، بيتزا، معجنات...',
    btn_browse: 'تصفح المنيو كامل',
    menu_title: 'قائمة طعام شام بيرد والأصالة',
    menu_sub: 'جميع الأسعار بالدينار العراقي (IQD) · مُحضّرة طازجة بأجود المكونات',
    cat_all: 'الكل',
    cat_ch_shawarma: 'شاورما دجاج',
    cat_meat_shawarma: 'شاورما لحم',
    cat_sandwiches: 'السندويشات واللفات',
    cat_meals: 'الوجبات والدجاج المشوي',
    cat_burgers: 'البركر',
    cat_pastries: 'المعجنات والبيتزا',
    cat_falafel: 'الفلافل والبطاطا',
    cat_oriental: 'الشرقي والمقبلات',
    cat_drinks: 'المشروبات',
    search_no_results: 'لم يتم العثور على أكلات تطابق بحثك.',
    view_item: 'عرض الوجبة',
    chef_title: "توصيات الشيف الخاصة",
    chef_sub: "وجبات مميزة مجهزة بشغف بأيدي أمهر الطهاة",
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
  }
};

// ── Category Visual Themes Dictionary ─────────────────────────────────────
const catThemes = {
  ch_shawarma: {
    fallbackImg: 'assets/shawarma.png',
    gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🍗'
  },
  meat_shawarma: {
    fallbackImg: 'assets/mixed_grill.png',
    gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🥩'
  },
  sandwiches: {
    fallbackImg: 'assets/mixed_grill.png',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🥪'
  },
  meals: {
    fallbackImg: 'assets/broasted.png',
    gradient: 'linear-gradient(135deg, rgba(217, 119, 6, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🍽️'
  },
  burgers: {
    fallbackImg: 'assets/broasted.png',
    gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.45) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🍔'
  },
  pastries: {
    fallbackImg: 'assets/starters.png',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🫓'
  },
  falafel: {
    fallbackImg: 'assets/starters.png',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🧆'
  },
  oriental: {
    fallbackImg: 'assets/shawarma.png',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🍚'
  },
  drinks: {
    fallbackImg: 'assets/starters.png',
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4) 0%, rgba(14, 15, 20, 0.95) 100%)',
    icon: '🥤'
  }
};

// ── Complete Menu Data with Individual Meal Photos ─────────────────────────
const menuItems = [
  // --- CHICKEN SHAWARMA ---
  { id: 'cs1', category: 'ch_shawarma', name: 'Chicken Shawarma Roll (Saj Bread)', nameAr: 'لفة شاورما دجاج خبز صاج', nameKu: 'لوولەی شاورمەی مریشک نانی ساج', desc: 'Fresh chicken shawarma wrapped in traditional Saj flatbread with garlic & pickles.', priceFormatted: '2,000 IQD', img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=900&auto=format&fit=crop&q=80', badge: '🔥 Popular' },
  { id: 'cs2', category: 'ch_shawarma', name: 'Chicken Shawarma Roll (Lebanese Bread)', nameAr: 'لفة شاورما دجاج خبز لبناني', nameKu: 'لوولەی شاورمەی مریشک نانی لبنانی', desc: 'Chicken shawarma wrapped in soft pita Lebanese bread.', priceFormatted: '1,500 IQD', img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900&auto=format&fit=crop&q=80', badge: ' Classic' },
  { id: 'cs3', category: 'ch_shawarma', name: 'Chicken Shawarma Roll (Stone Samoon)', nameAr: 'لفة شاورما دجاج صمون حجري', nameKu: 'لوولەی شاورمەی مریشک سەموونی بەردین', desc: 'Authentic stone-oven samoon bread filled with chicken shawarma & garlic paste.', priceFormatted: '1,250 IQD', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=80', badge: ' Stone Oven' },
  { id: 'cs4', category: 'ch_shawarma', name: 'Chicken Shawarma Roll (French Samoon)', nameAr: 'لفة شاورما دجاج صمون فرنسي', nameKu: 'لوولەی شاورمەی مریشک سەموونی فەرەنسی', desc: 'Crispy baguette-style French samoon filled with chicken shawarma.', priceFormatted: '3,000 IQD', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=900&auto=format&fit=crop&q=80', badge: ' Crunchy' },
  { id: 'cs5', category: 'ch_shawarma', name: 'Chicken Shawarma Roll (Arabi Style)', nameAr: 'لفة شاورما عربي', nameKu: 'لوولەی شاورمەی عەرەبی', desc: 'Sliced Arabi shawarma roll served with garlic paste & pickles.', priceFormatted: '3,000 IQD', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80', badge: ' Traditional' },
  { id: 'cs6', category: 'ch_shawarma', name: 'Double Chicken Shawarma Roll', nameAr: 'لفة شاورما دبل', nameKu: 'لوولەی شاورمەی دبل', desc: 'Double portion chicken shawarma roll packed with meat.', priceFormatted: '3,500 IQD', img: 'assets/shawarma.png', badge: ' Double Extra' },
  { id: 'cs7', category: 'ch_shawarma', name: 'Arabi Chicken Shawarma Meal', nameAr: 'وجبة شاورما عربي دجاج', nameKu: 'ژەمی شاورمەی عەرەبی مریشک', desc: 'Sliced chicken shawarma platter served with fries, garlic sauce & pickles.', priceFormatted: '5,000 IQD', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=80', badge: '⭐ Meal Deal' },
  { id: 'cs8', category: 'ch_shawarma', name: 'Double Arabi Chicken Shawarma Meal', nameAr: 'وجبة شاورما عربي دبل', nameKu: 'ژەمی شاورمەی عەرەبی دبل', desc: 'Double Arabi sliced chicken shawarma platter with extra fries & sauce.', priceFormatted: '7,000 IQD', img: 'assets/shawarma.png', badge: '🔥 Huge Portion' },
  { id: 'cs9', category: 'ch_shawarma', name: 'Chicken Shawarma Meal Platter', nameAr: 'وجبة شاورما دجاج', nameKu: 'ژەمی شاورمەی مریشک', desc: 'Generous chicken shawarma platter with garlic sauce, salad & fries.', priceFormatted: '12,000 IQD', img: 'assets/shawarma.png', badge: ' Chef Special' },
  { id: 'cs10', category: 'ch_shawarma', name: 'Kasro Chicken Shawarma Meal', nameAr: 'وجبة كاسرو شاورما دجاج', nameKu: 'ژەمی کاسرۆی شاورمەی مریشک', desc: 'Special Kasro layered chicken shawarma feast platter.', priceFormatted: '20,000 IQD', img: 'assets/shawarma.png', badge: '👑 Deluxe' },
  { id: 'cs11', category: 'ch_shawarma', name: '1 kg Chicken Shawarma', nameAr: 'كيلو شاورما دجاج', nameKu: 'یەک کیلۆ شاورمەی مریشک', desc: 'One full kilogram of fresh chicken shawarma meat with breads & dips.', priceFormatted: '20,000 IQD', img: 'assets/shawarma.png', badge: '📦 1 KG Box' },
  { id: 'cs12', category: 'ch_shawarma', name: 'Family Kasro Arabi Meal', nameAr: 'وجبة كاسرو عربي عائلي', nameKu: 'ژەمی کاسرۆی عەرەبی عائلی', desc: 'Family-size Kasro Arabi chicken shawarma platter.', priceFormatted: '12,000 IQD', img: 'assets/shawarma.png', badge: '👨‍👩‍👧‍👦 Family' },

  // --- MEAT SHAWARMA ---
  { id: 'ms1', category: 'meat_shawarma', name: 'Meat Shawarma Roll (Saj Bread)', nameAr: 'لفة شاورما لحم خبز صاج', nameKu: 'لوولەی شاورمەی گوشت نانی ساج', desc: 'Tender beef & lamb shawarma wrapped in thin Saj bread.', priceFormatted: '2,500 IQD', img: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=900&auto=format&fit=crop&q=80', badge: '🥩 Juicy Meat' },
  { id: 'ms2', category: 'meat_shawarma', name: 'Meat Shawarma Roll (Lebanese Bread)', nameAr: 'لفة شاورما لحم خبز لبناني', nameKu: 'لوولەی شاورمەی گوشت نانی لبناني', desc: 'Meat shawarma with tahini, sumac & onions in Lebanese pita.', priceFormatted: '2,500 IQD', img: 'assets/mixed_grill.png', badge: ' Classic' },
  { id: 'ms3', category: 'meat_shawarma', name: 'Meat Shawarma Roll (Stone Samoon)', nameAr: 'لفة شاورما لحم صمون حجري', nameKu: 'لوولەی شاورمەی گوشت سەموونی بەردین', desc: 'Meat shawarma stuffed inside stone-baked samoon.', priceFormatted: '2,000 IQD', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=80', badge: ' Fresh Baked' },
  { id: 'ms4', category: 'meat_shawarma', name: 'Meat Shawarma Roll (French Samoon)', nameAr: 'لفة شاورما لحم صمون فرنسي', nameKu: 'لوولەی شاورمەی گوشت سەموونی فەرەنسی', desc: 'Meat shawarma inside crispy French baguette samoon.', priceFormatted: '3,500 IQD', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=900&auto=format&fit=crop&q=80', badge: ' Extra Crisp' },
  { id: 'ms5', category: 'meat_shawarma', name: 'Meat Shawarma Roll (Double)', nameAr: 'لفة شاورما لحم دبل', nameKu: 'لوولەی شاورمەی گوشت دبل', desc: 'Double portion of meat shawarma roll.', priceFormatted: '4,000 IQD', img: 'assets/mixed_grill.png', badge: ' Double Meat' },
  { id: 'ms6', category: 'meat_shawarma', name: 'Arabi Meat Shawarma Meal', nameAr: 'وجبة شاورما لحم عربي', nameKu: 'ژەمی شاورمەی گوشتی عەرەبی', desc: 'Sliced Arabi meat shawarma served with fries & tahini dip.', priceFormatted: '4,500 IQD', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80', badge: '⭐ Favorite' },
  { id: 'ms7', category: 'meat_shawarma', name: 'Double Meat Shawarma Meal', nameAr: 'وجبة شاورما لحم دبل', nameKu: 'ژەمی شاورمەی گوشتی دبل', desc: 'Double portion Arabi meat shawarma platter with fries.', priceFormatted: '6,500 IQD', img: 'assets/mixed_grill.png', badge: '🔥 Huge Portion' },
  { id: 'ms8', category: 'meat_shawarma', name: '250g Meat Shawarma Meal', nameAr: 'وجبة شاورما لحم 250g', nameKu: 'ژەمی شاورمەی گوشت ٢٥٠ گرام', desc: 'Quarter kilo meat shawarma served with salad, bread & sauce.', priceFormatted: '8,000 IQD', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=80', badge: ' 250g' },
  { id: 'ms9', category: 'meat_shawarma', name: 'Half Kilo Meat Shawarma', nameAr: 'نص كيلو شاورما لحم', nameKu: 'نیوە کیلۆ شاورمەی گوشت', desc: '500g of meat shawarma served with bread & sides.', priceFormatted: '15,000 IQD', img: 'assets/mixed_grill.png', badge: '📦 500g Box' },
  { id: 'ms10', category: 'meat_shawarma', name: '1 kg Meat Shawarma', nameAr: 'كيلو شاورما لحم', nameKu: 'یەک کیلۆ شاورمەی گوشت', desc: 'Full 1 KG meat shawarma feast with all toppings & sides.', priceFormatted: '30,000 IQD', img: 'assets/mixed_grill.png', badge: '👑 1 KG Feast' },

  // --- SANDWICHES & ROLLS ---
  { id: 'sw1', category: 'sandwiches', name: 'Shish Tawook Sandwich', nameAr: 'سندويش شيش طاووق', nameKu: 'سەندویچی شیش طاووق', desc: 'Grilled chicken skewers, garlic paste & pickles in sandwich bread.', priceFormatted: '4,000 IQD', img: 'assets/mixed_grill.png', badge: ' Grilled' },
  { id: 'sw2', category: 'sandwiches', name: 'Crispy Chicken Sandwich', nameAr: 'سندويش كريسبي', nameKu: 'سەندویچی کریسپی', desc: 'Golden crispy chicken breast with mayo, lettuce & pickles.', priceFormatted: '4,000 IQD', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=900&auto=format&fit=crop&q=80', badge: ' Crispy' },
  { id: 'sw3', category: 'sandwiches', name: 'Fajita Sandwich', nameAr: 'سندويش فاهيتا', nameKu: 'سەندویچی فاهيتا', desc: 'Sautéed chicken strips, bell peppers, onions & melted cheese.', priceFormatted: '4,000 IQD', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&auto=format&fit=crop&q=80', badge: ' Sizzling' },
  { id: 'sw4', category: 'sandwiches', name: 'Escalope Sandwich', nameAr: 'سندويش سكالوب', nameKu: 'سەندویچی سکالۆپ', desc: 'Breaded fried chicken escalope with house sauce & salad.', priceFormatted: '4,500 IQD', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&auto=format&fit=crop&q=80', badge: ' Tasty' },
  { id: 'sw5', category: 'sandwiches', name: 'Zinger Sandwich', nameAr: 'سندويش زنجر', nameKu: 'سەندویچی زنجر', desc: 'Spicy zinger chicken fillet with cheddar cheese & spicy mayo.', priceFormatted: '4,500 IQD', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=900&auto=format&fit=crop&q=80', badge: '🌶️ Spicy' },
  { id: 'sw6', category: 'sandwiches', name: 'Francisco Sandwich', nameAr: 'سندويش فرانسيسكو', nameKu: 'سەندویچی فرانسیسکۆ', desc: 'Chicken, sweet corn, mozzarella cheese, mushrooms & soy glaze.', priceFormatted: '4,500 IQD', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=900&auto=format&fit=crop&q=80', badge: ' Special' },
  { id: 'sw7', category: 'sandwiches', name: 'Mexican Sandwich', nameAr: 'سندويش مكسيكي', nameKu: 'سەندویچی مەکسیکی', desc: 'Spicy Mexican chicken with jalapeño, salsa & melted cheese.', priceFormatted: '4,500 IQD', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&auto=format&fit=crop&q=80', badge: '🌶️ Mexican' },
  { id: 'sw8', category: 'sandwiches', name: 'Mortadella Roll', nameAr: 'لفت مرتديلا', nameKu: 'لوولەی مۆرتادێلا', desc: 'Mortadella slices roll with pickles.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=900&auto=format&fit=crop&q=80', badge: ' Quick Snack' },
  { id: 'sw9', category: 'sandwiches', name: 'Mortadella Roll with Cheese', nameAr: 'لفت مرتديلا مع جبن', nameKu: 'لوولەی مۆرتادێلا بە پەنیر', desc: 'Mortadella roll stuffed with melted cheese.', priceFormatted: '2,000 IQD', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&auto=format&fit=crop&q=80', badge: ' Cheesy' },
  { id: 'sw10', category: 'sandwiches', name: 'Mortadella Roll with Fries', nameAr: 'لفت مرتديلا مع بطاطا', nameKu: 'لوولەی مۆرتادێلا بە بەتاتە', desc: 'Mortadella roll stuffed with crispy french fries.', priceFormatted: '1,500 IQD', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&auto=format&fit=crop&q=80', badge: ' Combo' },

  // --- MEALS & GRILL ---
  { id: 'ml1', category: 'meals', name: 'Shish Tawook Meal', nameAr: 'وجبة شيش طاووق', nameKu: 'ژەمی شیش طاووق', desc: 'Grilled chicken tawook skewers served with fries, garlic dip & bread.', priceFormatted: '8,000 IQD', img: 'assets/mixed_grill.png', badge: '⭐ Platter' },
  { id: 'ml2', category: 'meals', name: 'Crispy Chicken Meal (+ Pieces)', nameAr: 'وجبة كريسبي + قطع', nameKu: 'ژەمی کریسپی + پارچە', desc: 'Crispy chicken strips & pieces platter with fries & coleslaw.', priceFormatted: '9,000 IQD', img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&auto=format&fit=crop&q=80', badge: ' Crispy Combo' },
  { id: 'ml3', category: 'meals', name: 'Fajita Meal', nameAr: 'وجبة فاهيتا', nameKu: 'ژەمی فاهيتا', desc: 'Sizzling chicken fajita served with rice, fries & salad.', priceFormatted: '9,000 IQD', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&auto=format&fit=crop&q=80', badge: ' Sizzling' },
  { id: 'ml4', category: 'meals', name: 'Escalope Meal', nameAr: 'وجبة سكالوب', nameKu: 'ژەمی سکالۆپ', desc: 'Large chicken escalope served with fries, coleslaw & garlic dip.', priceFormatted: '10,000 IQD', img: 'assets/broasted.png', badge: ' Deluxe' },
  { id: 'ml5', category: 'meals', name: 'Zinger Meal', nameAr: 'وجبة زنجر', nameKu: 'ژەمی زنجر', desc: 'Spicy Zinger chicken fillets platter with fries & spicy sauce.', priceFormatted: '10,000 IQD', img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&auto=format&fit=crop&q=80', badge: '🌶️ Spicy Feast' },
  { id: 'ml6', category: 'meals', name: 'Rizo Chicken', nameAr: 'ريزو دجاج', nameKu: 'ریزووی مریشک', desc: 'Spiced rice bowl topped with crispy chicken pieces & barbecue glaze.', priceFormatted: '5,000 IQD', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&auto=format&fit=crop&q=80', badge: ' Popular Rice' },
  { id: 'ml7', category: 'meals', name: 'Whole Grilled Chicken Meal', nameAr: 'دجاج مشوي كامل مع بطاطا وثومية ومقبلات', nameKu: 'مریشکی برژاوی تەواو لەگەڵ بەتاتە و سۆس', desc: 'Whole charcoal-grilled chicken served with fries, garlic dip & salad.', priceFormatted: '12,000 IQD', img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900&auto=format&fit=crop&q=80', badge: '🔥 Whole Grill' },
  { id: 'ml8', category: 'meals', name: 'Half Grilled Chicken Meal', nameAr: 'نصف دجاج مشوي مع بطاطا وثومية ومقبلات', nameKu: 'نیوە مریشکی برژاو لەگەڵ بەتاتە و سۆس', desc: 'Half charcoal-grilled chicken served with fries & garlic dip.', priceFormatted: '6,000 IQD', img: 'assets/broasted.png', badge: ' Half Grill' },

  // --- BURGERS ---
  { id: 'bg1', category: 'burgers', name: 'Chicken Burger', nameAr: 'بركر دجاج', nameKu: 'بەرگری مریشک', desc: 'Chicken patty, lettuce, mayo & pickles in soft burger bun.', priceFormatted: '3,000 IQD', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80', badge: ' Classic' },
  { id: 'bg2', category: 'burgers', name: 'Beef Burger', nameAr: 'بركر لحم', nameKu: 'بەرگری گوشت', desc: 'Juicy beef patty, tomato, onion & burger house sauce.', priceFormatted: '3,500 IQD', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&auto=format&fit=crop&q=80', badge: ' Beef' },
  { id: 'bg3', category: 'burgers', name: 'Double Chicken Burger', nameAr: 'بركر دجاج دبل', nameKu: 'دبل بەرگری مریشک', desc: 'Two chicken patties stacked with double cheese & sauce.', priceFormatted: '4,000 IQD', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&auto=format&fit=crop&q=80', badge: ' Double' },
  { id: 'bg4', category: 'burgers', name: 'Double Beef Burger', nameAr: 'بركر لحم دبل', nameKu: 'دبل بەرگری گوشت', desc: 'Two juicy beef patties stacked high.', priceFormatted: '6,000 IQD', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&auto=format&fit=crop&q=80', badge: ' Double Beef' },
  { id: 'bg5', category: 'burgers', name: 'Cheeseburger', nameAr: 'تشيز بركر', nameKu: 'چیز بەرگر', desc: 'Beef burger topped with melted cheddar cheese slice.', priceFormatted: '4,000 IQD', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=900&auto=format&fit=crop&q=80', badge: '🧀 Cheesy' },
  { id: 'bg6', category: 'burgers', name: 'Double Cheeseburger', nameAr: 'تشيز بركر دبل', nameKu: 'دبل چیز بەرگر', desc: 'Double beef patties with double melted cheddar cheese.', priceFormatted: '6,500 IQD', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=900&auto=format&fit=crop&q=80', badge: '🧀 Double Cheese' },

  // --- PASTRIES & PIZZA ---
  { id: 'pz1', category: 'pastries', name: "Za'atar Pastry", nameAr: 'معجنة زعتر', nameKu: 'زەعتەر', desc: 'Wild thyme & olive oil oven-fresh pastry.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14da?w=900&auto=format&fit=crop&q=80', badge: ' Oven Fresh' },
  { id: 'pz2', category: 'pastries', name: 'Muhammara Pastry', nameAr: 'محمرة', nameKu: 'محەمەرە', desc: 'Spiced red pepper paste pastry baked fresh.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80', badge: ' Spiced' },
  { id: 'pz3', category: 'pastries', name: 'Sujuk Pastry', nameAr: 'سجق', nameKu: 'سوجوک', desc: 'Seasoned sujuk beef sausage pastry.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80', badge: ' Sujuk' },
  { id: 'pz4', category: 'pastries', name: 'Akkawi Cheese Pastry', nameAr: 'جبنة عكاوي', nameKu: 'پەنیری عەکاوی', desc: 'Akkawi cheese baked inside dough.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&auto=format&fit=crop&q=80', badge: ' Cheesy' },
  { id: 'pz5', category: 'pastries', name: 'Kashkaval Cheese Pastry', nameAr: 'جبنة قشقوان', nameKu: 'پەنیری قەشقەوان', desc: 'Melted Kashkaval cheese pastry.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&auto=format&fit=crop&q=80', badge: ' Kashkaval' },
  { id: 'pz6', category: 'pastries', name: 'Lahm Bi Ajeen (Meat Pie)', nameAr: 'لحم بعجين', nameKu: 'گوشت بە هەویر', desc: 'Traditional thin pie topped with spiced minced meat.', priceFormatted: '1,250 IQD', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=80', badge: ' Traditional' },

  // --- FALAFEL & FRIES ---
  { id: 'fl1', category: 'falafel', name: 'Falafel Roll (Stone Samoon)', nameAr: 'لفة فلافل صمون حجري', nameKu: 'لوولەی فەلافل سەموونی بەردین', desc: 'Crispy falafel pieces, tahini & salad in stone samoon.', priceFormatted: '1,000 IQD', img: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=900&auto=format&fit=crop&q=80', badge: ' Crispy' },
  { id: 'fl2', category: 'falafel', name: 'Falafel Roll (Lebanese Bread)', nameAr: 'لفة فلافل خبز لبناني', nameKu: 'لوولەی فەلافل نانی لبنانی', desc: 'Falafel roll in thin pita Lebanese bread.', priceFormatted: '1,250 IQD', img: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=900&auto=format&fit=crop&q=80', badge: ' Classic' },
  { id: 'fl12', category: 'falafel', name: 'French Fries Plate', nameAr: 'صحن بطاطا', nameKu: 'قابی بەتاتە', desc: 'Plate of golden crispy french fries.', priceFormatted: '1,500 IQD', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&auto=format&fit=crop&q=80', badge: ' Side' },

  // --- ORIENTAL & SALADS ---
  { id: 'or1', category: 'oriental', name: 'Rice with Stew', nameAr: 'رز ومرق', nameKu: 'برنج و شلە', desc: 'Basmati rice served with traditional Iraqi vegetable stew.', priceFormatted: '4,000 IQD', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&auto=format&fit=crop&q=80', badge: ' Traditional' },
  { id: 'or4', category: 'oriental', name: 'Hummus', nameAr: 'حمص بطحينة', nameKu: 'حمس', desc: 'Creamy chickpea hummus with virgin olive oil.', priceFormatted: '1,000 IQD', img: 'assets/starters.png', badge: ' Appetizer' },

  // --- DRINKS ---
  { id: 'dr1', category: 'drinks', name: 'Mineral Water', nameAr: 'ماء نقي', nameKu: 'ئاو', desc: 'Chilled bottle of mineral drinking water.', priceFormatted: '250 IQD', img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=900&auto=format&fit=crop&q=80', badge: '💧 Cold' },
  { id: 'dr2', category: 'drinks', name: 'Iraqi Black Tea', nameAr: 'شاي عراقي مهيل', nameKu: 'چای عێراقی', desc: 'Traditional freshly brewed black tea with cardamom.', priceFormatted: '500 IQD', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&auto=format&fit=crop&q=80', badge: '☕ Hot' },
  { id: 'dr4', category: 'drinks', name: 'Pepsi Can', nameAr: 'بيبسي كان', nameKu: 'پێپسی قوتوو', desc: 'Ice cold Pepsi can.', priceFormatted: '500 IQD', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&auto=format&fit=crop&q=80', badge: '🥤 Soft Drink' }
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

function switchLanguage(lang) {
  selectLanguage(lang);
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }
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
  document.getElementById('hero-question').textContent = dict.hero_title;
  document.getElementById('hero-subtitle').textContent = dict.hero_sub;
  searchInput.placeholder = dict.search_ph;

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
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

// Render Food Cards Grid grouped into distinct visual sections
function renderFoodGrid() {
  const dict = i18n[state.currentLang] || i18n.en;

  const categoryDefs = [
    { key: 'ch_shawarma', titleKey: 'cat_ch_shawarma', icon: '🍗' },
    { key: 'meat_shawarma', titleKey: 'cat_meat_shawarma', icon: '🥩' },
    { key: 'sandwiches', titleKey: 'cat_sandwiches', icon: '🥪' },
    { key: 'meals', titleKey: 'cat_meals', icon: '🍽️' },
    { key: 'burgers', titleKey: 'cat_burgers', icon: '🍔' },
    { key: 'pastries', titleKey: 'cat_pastries', icon: '🫓' },
    { key: 'falafel', titleKey: 'cat_falafel', icon: '🧆' },
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

  const imageSrc = item.img || theme.fallbackImg;

  return `
    <div class="food-card">
      <div class="food-img-wrapper" style="background: ${theme.gradient};">
        <img 
          src="${imageSrc}" 
          alt="${item.name}" 
          class="food-img" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='${theme.fallbackImg}';"
        />
        <div class="food-card-overlay"></div>
        <span class="badge-tag">${item.badge}</span>
        <span class="cat-icon-badge">${theme.icon}</span>
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
    modalImg.src = imageSrc;
    modalImg.onerror = function () {
      this.onerror = null;
      this.src = theme.fallbackImg;
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
    zoomImg.src = imageSrc;
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
