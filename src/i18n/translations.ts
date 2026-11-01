export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const HERO_TYPEWRITER_PHRASES: Array<{ en: string; ar: string }> = [
  {
    en: 'Moving Your World, One Journey at a Time.',
    ar: 'ننقل عالمكم، خطوة بخطوة بكل أمان.',
  },
  {
    en: 'Your Trusted Partner in Relocation.',
    ar: 'شريككم الموثوق في نقل الأثاث والخدمات اللوجستية.',
  },
  {
    en: 'Every Move Deserves Expert Care.',
    ar: 'كل عملية نقل تستحق عناية فائقة وخبرة متقنة.',
  },
  {
    en: 'Moving Made Simple. Moving Made Better.',
    ar: 'النقل بأسلوب أسهل، وتجربة أفضل.',
  },
  {
    en: 'From Your Doorstep to Your Destination.',
    ar: 'من عتبة بابكم حتى وجهتكم النهائية.',
  },
  {
    en: 'Reliable Moving. Seamless Journeys.',
    ar: 'نقل يعتمد عليه، ورحلات سلسة خالية من القلق.',
  },
  {
    en: 'Your Journey Begins With Us.',
    ar: 'رحلتكم الجديدة تبدأ معنا.',
  },
];

export const TRANSLATIONS: TranslationDictionary = {
  // Brand & Company Credentials
  companyName: {
    en: 'ALI RAZA INTERNATIONAL TRADE SPS',
    ar: 'شركة علي رضا للتجارة الدولية ش.ش.و',
  },
  divisionName: {
    en: 'OAN Moving & Logistics Services',
    ar: 'خدمات عون لنقل الأثاث والخدمات اللوجستية',
  },
  tagline: {
    en: 'Premier Relocation, Heavy Transport & International Cargo in Muscat, Oman',
    ar: 'الريادة في نقل المنازل والمكاتب والشحن الدولي في سلطنة عُمان',
  },
  crLabel: {
    en: 'CR: 1481820',
    ar: 'سجل تجاري: ١٤٨١٨٢٠',
  },
  taxLabel: {
    en: 'Tax ID: 1896320',
    ar: 'الرقم الضريبي: ١٨٩٦٣٢٠',
  },
  locationLabel: {
    en: 'Ruwi / Muttrah, Muscat, Sultanate of Oman',
    ar: 'روي / مطرح، مسقط، سلطنة عُمان',
  },
  phoneLabel: {
    en: '+968 9838 6824',
    ar: '+968 9838 6824',
  },
  promoOfferText: {
    en: 'Save 15% on all Mid-Week Moves! Use code OANWEEKDAY',
    ar: 'وفّر ١٥٪ على جميع الانتقالات منتصف الأسبوع! استخدم الرمز OANWEEKDAY',
  },
  limitedOfferBadge: {
    en: 'LIMITED OFFER',
    ar: 'عرض محدود',
  },

  // Navigation Links
  navHome: {
    en: 'Home',
    ar: 'الرئيسية',
  },
  navAbout: {
    en: 'About Us',
    ar: 'من نحن',
  },
  navServices: {
    en: 'Our Services',
    ar: 'خدماتنا',
  },
  navCalculator: {
    en: 'Cost Calculator',
    ar: 'حاسبة التكلفة',
  },
  navProcess: {
    en: 'Our Process',
    ar: 'مراحل العمل',
  },
  navTestimonials: {
    en: 'Testimonials',
    ar: 'آراء العملاء',
  },
  navFaq: {
    en: 'FAQ',
    ar: 'الأسئلة الشائعة',
  },
  navContact: {
    en: 'Contact Us',
    ar: 'اتصل بنا',
  },
  navGetQuote: {
    en: 'Get a Free Quote',
    ar: 'احصل على عرض سعر',
  },
  navAdmin: {
    en: 'Admin Pricing',
    ar: 'لوحة الأسعار',
  },

  // Theme & Language
  lightMode: {
    en: 'Light Mode',
    ar: 'الوضع الفاتح',
  },
  darkMode: {
    en: 'Dark Mode',
    ar: 'الوضع الداكن',
  },
  languageSelector: {
    en: 'Language',
    ar: 'اللغة',
  },
  english: {
    en: 'English',
    ar: 'الإنجليزية',
  },
  arabic: {
    en: 'العربية',
    ar: 'العربية',
  },

  // WhatsApp Floating Button
  chatWithUs: {
    en: 'Chat with us on WhatsApp',
    ar: 'تواصل معنا عبر واتساب',
  },
  instantResponse: {
    en: 'Instant Support & Photo Quotes',
    ar: 'رد فوري وعروض بالصور',
  },

  // Statistics
  customerStatCount: {
    en: '2,067+',
    ar: '٢,٠٦٧+',
  },
  customerStatTitle: {
    en: 'Customers in the Last 8 Months',
    ar: 'عميل تم خدمتهم خلال آخر ٨ أشهر',
  },
  customerStatSub: {
    en: 'Across Muscat, Sohar, Salalah & GCC Cross-Border Routes',
    ar: 'عبر مسقط، صحار، صلالة وشحنات دول مجلس التعاون',
  },
  statSatisfaction: {
    en: '99.4%',
    ar: '٩٩.٤٪',
  },
  statSatisfactionLabel: {
    en: 'Punctuality & Safety Record',
    ar: 'معدل الالتزام بالمواعيد وسلامة الأثاث',
  },
  statReviews: {
    en: '4.9/5 Rating',
    ar: 'تقييم ٤.٩/٥',
  },
  statReviewsLabel: {
    en: 'Based on 3,400+ Client Experiences',
    ar: 'بناءً على أكثر من ٣,٤٠٠ مراجعة عميل',
  },

  // Hero Section
  heroPill: {
    en: '#1 Rated Local & Long-Distance Movers in Oman',
    ar: 'الشركة الرائدة الأولى في نقل الأثاث والشحن داخل عُمان',
  },
  heroSubtitle: {
    en: 'Licensed, fully insured, and background-checked moving specialists. We pack, load, and deliver your belongings with white-glove care and zero hidden fees.',
    ar: 'فريق متخصص ومرخص ومؤمن بالكامل. نتولى الفك والتغليف والنقل وإعادة التركيب بعناية متناهية وبأسعار شفافة وبدون أي رسوم خفية.',
  },
  ctaInstantEstimate: {
    en: 'Calculate & Lock In My Rate',
    ar: 'احسب التكلفة وثبت السعر الآن',
  },
  ctaExploreServices: {
    en: 'Explore Services',
    ar: 'استكشف كافة الخدمات',
  },
  guaranteeOnTime: {
    en: 'Guaranteed On-Time Delivery',
    ar: 'التزام تام بالمواعيد المحددة',
  },
  freePackingBoxes: {
    en: 'Free Packing Materials Kit Offer',
    ar: 'عرض باقة كراتين التغليف المجانية',
  },
  fullValuation: {
    en: 'Full Transit Cargo Protection',
    ar: 'حماية كاملة للمنقولات أثناء النقل',
  },
  transparentPricing: {
    en: 'Transparent Flat-Rate Pricing',
    ar: 'أسعار واضحة ومحددة بدون مفاجآت',
  },

  // Calculator Multi-Step Stepper
  step1Title: {
    en: 'Moving Details',
    ar: 'بيانات النقل',
  },
  step2Title: {
    en: 'Property Sizing',
    ar: 'حجم العقار والأثاث',
  },
  step3Title: {
    en: 'Services',
    ar: 'الخدمات المطلوبة',
  },
  step4Title: {
    en: 'Access Details',
    ar: 'بيانات الطوابق والمصعد',
  },
  step5Title: {
    en: 'Price Breakdown',
    ar: 'التكلفة التقديرية',
  },

  // Calculator Labels
  movingFrom: {
    en: 'Moving From (Origin)',
    ar: 'الانتقال من (الموقع الحالي)',
  },
  movingTo: {
    en: 'Moving To (Destination)',
    ar: 'الانتقال إلى (الوجهة الجديدة)',
  },
  movingDate: {
    en: 'Target Moving Date',
    ar: 'تاريخ النقل المفضل',
  },
  movingType: {
    en: 'Relocation Category',
    ar: 'نوع عملية النقل',
  },
  residential: {
    en: 'Residential Moving',
    ar: 'نقل منزلي وسكني',
  },
  commercial: {
    en: 'Commercial & Office',
    ar: 'مكاتب ومؤسسات تجارية',
  },
  international: {
    en: 'International Relocation',
    ar: 'شحن ونقل دولي',
  },
  oneWay: {
    en: 'One-Way Transit',
    ar: 'رحلة واحدة باتجاه واحد',
  },
  returnTrip: {
    en: 'Return / Multi-Stop',
    ar: 'رحلة ذهاب وعودة أو متعددة الوقفات',
  },

  // Property Details
  studio: {
    en: 'Studio Apartment',
    ar: 'شقة استوديو',
  },
  bed1: {
    en: '1-Bedroom Apartment',
    ar: 'شقة غرفة نوم وصالة',
  },
  bed2: {
    en: '2-Bedroom Apartment',
    ar: 'شقة غرفتين وصالة',
  },
  bed3: {
    en: '3-Bedroom Apartment',
    ar: 'شقة ٣ غرف نوم وصالة',
  },
  bed4plus: {
    en: '4+ Bedroom House',
    ar: 'منزل ٤ غرف فأكثر',
  },
  villa: {
    en: 'Villa (Multi-Story)',
    ar: 'فيلا متعددة الطوابق',
  },
  office: {
    en: 'Commercial Office Space',
    ar: 'مكتب تجاري',
  },
  customInventory: {
    en: 'Custom Inventory Items',
    ar: 'منقولات وبضائع مخصصة',
  },

  // Breakdown
  baseCost: {
    en: 'Base Moving Fee',
    ar: 'أجرة النقل الأساسية',
  },
  transportCharge: {
    en: 'Transportation & Vehicle Fuel',
    ar: 'الشاحنة والوقود والمسافة',
  },
  laborCharge: {
    en: 'Professional Moving Crew',
    ar: 'فريق العمل والعمالة المتخصصة',
  },
  packingCharge: {
    en: 'Packing Supplies & Protection',
    ar: 'مواد التغليف والكراتين والأشرطة',
  },
  additionalCharge: {
    en: 'Carpentry & Optional Services',
    ar: 'النجارة والخدمات الإضافية',
  },
  totalEstimatedCost: {
    en: 'Estimated Total Cost',
    ar: 'إجمالي التكلفة التقديرية',
  },
  omrCurrency: {
    en: 'OMR',
    ar: 'ر.ع',
  },
  indicativeNotice: {
    en: 'Indicative estimate based on active published rates. Final binding rates are verified upon survey.',
    ar: 'تقدير استرشادي وفق التعرفة المعتمدة الحالية. يتم تثبيت السعر النهائي بعد المعاينة الدقيقة.',
  },
  customQuoteRequired: {
    en: 'Custom quotation required for this route or international crossing.',
    ar: 'يتطلب هذا المسار أو الشحن الدولي عرض سعر مخصص من مسؤول العمليات.',
  },
  requestThisQuote: {
    en: 'Request This Moving Quote',
    ar: 'طلب هذا العرض وتثبيت الحجز',
  },

  // Testimonials Page
  testimonialsHeroTitle: {
    en: 'Trusted by Customers. Driven by Every Journey.',
    ar: 'ثقة عملائنا سر تميزنا في كل رحلة.',
  },
  testimonialsHeroSub: {
    en: 'Discover the experiences of customers who have chosen ALI RAZA INTERNATIONAL TRADE SPS for their moving and relocation needs.',
    ar: 'اكتشف تجارب العملاء الذين اختاروا شركة علي رضا للتجارة الدولية (خدمات عون) لتلبية احتياجات النقل والترحيل اللوجستي.',
  },
  verifiedReviewBadge: {
    en: 'Verified Move',
    ar: 'عملية نقل موثقة',
  },
  shareYourFeedback: {
    en: 'Have you moved with us? Share your feedback',
    ar: 'هل قمت بالنقل معنا؟ شاركنا رأيك وتجربتك',
  },
  submitReviewBtn: {
    en: 'Submit Genuine Review',
    ar: 'إرسال المراجعة والتقييم',
  },
  readyToExperience: {
    en: 'Ready to Experience a Better Move?',
    ar: 'هل أنت جاهز لتجربة نقل استثنائية وبدون قلق؟',
  },

  // Common CTAs
  prevStep: {
    en: 'Previous Step',
    ar: 'الخطوة السابقة',
  },
  nextStep: {
    en: 'Next Step',
    ar: 'الخطوة التالية',
  },
  phoneUs: {
    en: 'Call +968 9838 6824',
    ar: 'اتصل بنا: +968 9838 6824',
  },
  whatsappUs: {
    en: 'WhatsApp Us',
    ar: 'تواصل عبر واتساب',
  },
};
