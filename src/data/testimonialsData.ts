export interface Testimonial {
  id: string;
  name: string;
  serviceCategory: string;
  serviceCategoryAr: string;
  location: string;
  locationAr: string;
  rating: number;
  date: string;
  comment: string;
  commentAr: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tariq Al-Lawati',
    serviceCategory: 'Residential Moving (Villa)',
    serviceCategoryAr: 'نقل فيلا سكنية متكاملة',
    location: 'Al Mouj, Muscat to Madinat Al Ilam',
    locationAr: 'من الموج، مسقط إلى مدينة الإعلام',
    rating: 5,
    date: '2026-03-12',
    comment:
      'Exceptional professionalism from the OAN moving crew. They dismantled three king-sized bedroom sets and reassembled them without a single scratch. Arrived exactly at 8 AM as promised.',
    commentAr:
      'احترافية استثنائية من فريق شركة علي رضا (عون). قاموا بفك ثلاث غرف نوم كينج وإعادة تركيبها بدقة متناهية وبدون أي خدش. وصلوا في الساعة الثامنة صباحاً تماماً كما تم الاتفاق.',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Salim Al-Harthy',
    serviceCategory: 'Commercial Office Relocation',
    serviceCategoryAr: 'نقل مقر شركة تجارية',
    location: 'Ruwi CBD to Knowledge Oasis Muscat (KOM)',
    locationAr: 'من مركز روي التجاري إلى واحة المعرفة مسقط',
    rating: 5,
    date: '2026-02-28',
    comment:
      'Relocated our 25-desk corporate office over a single weekend. Server racks and IT equipment were handled with antistatic bubble protection. Ready for work on Sunday morning.',
    commentAr:
      'تم نقل مقر شركتنا المكون من ٢٥ مكتباً خلال عطلة نهاية أسبوع واحدة. تم تغليف أجهزة الخوادم والشبكات بمواد مضادة للشحنات. باشر موظفونا العمل صباح الأحد بكل سلاسة.',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Fatma Al-Balushi',
    serviceCategory: 'Packing & Furniture Moving',
    serviceCategoryAr: 'تغليف أدوات المطبخ ونقل الأثاث',
    location: 'Bausher, Muscat to Sohar',
    locationAr: 'من بوشر، مسقط إلى ولاية صحار',
    rating: 5,
    date: '2026-02-15',
    comment:
      'The packing team brought clean corrugated cartons and dish cells for all our kitchen chinaware. Nothing was chipped. Clear OMR invoice without unexpected add-on charges.',
    commentAr:
      'أحضر فريق التغليف كراتين مقواة نظيفة وفواصل خاصة لأطقم الأواني والخزف. لم ينكسر أي شيء طوال الطريق لصحار. الفاتورة بالريال العماني كانت واضحة تماماً وبدون أي زيادات.',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'David Reynolds',
    serviceCategory: 'International Relocation (GCC)',
    serviceCategoryAr: 'نقل دولي وشحن عبر الحدود (الخليج)',
    location: 'Dubai, UAE to Al Qurum, Muscat',
    locationAr: 'من دبي، الإمارات إلى القرم، مسقط',
    rating: 5,
    date: '2026-01-20',
    comment:
      'Handled our cross-border moving clearance at Hatta/Wajajah with zero hassle. All paperwork and import manifests were filed perfectly by Ali Raza International Trade.',
    commentAr:
      'أنجزوا إجراءات التخليص الجمركي في منفذ الوجاجة الحدودي بكل سهولة وسرعة. كانت كافة أوراق الإعفاء والبيانات الجمركية مكتملة لدى شركة علي رضا للتجارة الدولية.',
    verified: true,
  },
  {
    id: 'test-5',
    name: 'Nasser Al-Kindi',
    serviceCategory: 'Apartment Relocation',
    serviceCategoryAr: 'نقل شقة سكنية',
    location: 'Al Khuwair to Azaiba',
    locationAr: 'من الخوير إلى العذيبة، مسقط',
    rating: 5,
    date: '2026-01-08',
    comment:
      'Fast and trustworthy. The online calculator gave me a clear ballpark of 85 OMR, and the final bill was true to the survey. Highly recommended moving company in Muscat.',
    commentAr:
      'سرعة ومصداقية عالية. حاسبة الأسعار في الموقع أعطتني تقديراً مبدئياً بقيمة ٨٥ ريالاً عمانياً، وكانت الفاتورة النهائية مطابقة تماماً للمعاينة. أنصح بشدة بالتعامل معهم.',
    verified: true,
  },
  {
    id: 'test-6',
    name: 'Eng. Khalfan Al-Maamari',
    serviceCategory: 'Building Materials Transport',
    serviceCategoryAr: 'نقل مواد بناء ومعدات',
    location: 'Muttrah Port to Ghala Industrial',
    locationAr: 'من ميناء مطرح إلى صناعية غلا',
    rating: 5,
    date: '2025-12-19',
    comment:
      'Ali Raza International Trade provided flatbed trucks and crane offloading for heavy structural pipes. Drivers are professional, safety-oriented, and know Muscat routes thoroughly.',
    commentAr:
      'وفرت شركة علي رضا للتجارة شاحنات مسطحة مع رافعة لتنزيل أنابيب إنشائية ثقيلة. سائقون محترفون وملتزمون بمعايير السلامة وملمون بكافة مسارات مسقط.',
    verified: true,
  },
];
