export interface CompanyProfile {
  name: string;
  division: string;
  crNumber: string;
  taxId: string;
  headquarters: string;
  phone: string;
  email: string;
  whatsapp: string;
  operatingHours: string;
  governoratesCovered: string[];
}

export const COMPANY_PROFILE: CompanyProfile = {
  name: 'Ali Raza International Trade SPC',
  division: 'OAN Moving & Logistics Services',
  crNumber: '1481820',
  taxId: '1896320',
  headquarters: 'Ruwi / Muttrah Commercial Area, Muscat, Sultanate of Oman',
  phone: '+968 98386824',
  email: 'Iqumantransport@gmail.com',
  whatsapp: '+96898386824',
  operatingHours: 'Saturday – Thursday: 7:00 AM – 10:00 PM | Friday: Emergency & Pre-Scheduled',
  governoratesCovered: [
    'Muscat (Ruwi, Muttrah, Qurum, Al Khuwair, Seeb, Al Mouj, Bowsher)',
    'Al Batinah South & North (Barka, Sohar, Suwaiq)',
    'Ad Dakhiliyah (Nizwa, Samail, Izki)',
    'Ash Sharqiyah (Sur, Ibra)',
    'Dhofar (Salalah Interstate Logistics)',
    'GCC Cross-Border (Oman – UAE / Dubai Freight)',
  ],
};

export interface ServiceDetail {
  id: string;
  code: string;
  title: string;
  arabicTitle: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  basePriceOMR: number;
  unit: string;
  image: string;
}

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'house_moving',
    code: '01',
    title: 'OAN Logistics & House Moving',
    arabicTitle: 'خدمات نقل وتغليف الأثاث المنزلي',
    shortDesc: 'Complete residential villa and apartment shifting with premium bubble wrap, cardboard padding, and master carpenter disassembly across Muscat.',
    fullDesc: 'Our flagship relocation division handles everything from studio apartments to luxury multi-story villas in Al Mouj, Qurum, and Bowsher. Includes heavy blanket protection, wardrobe carton boxes, sofa shrink-wrapping, and systematic room-by-room reassembly.',
    features: [
      'Skilled carpenters for bedroom sets, IKEA units & cupboards',
      'High-grade bubble roll, shrink stretch wrap & heavy blankets',
      'Clean 3-ton to 7-ton enclosed covered trucks',
      'High-rise stair & elevator protection in modern towers',
    ],
    basePriceOMR: 45,
    unit: 'starts from 45 OMR',
    image: '/src/assets/images/residential_moving_1793515744246.jpg',
  },
  {
    id: 'office_moving',
    code: '02',
    title: 'Corporate & Office Relocation',
    arabicTitle: 'نقل المكاتب والشركات والمؤسسات',
    shortDesc: 'Rapid corporate facility relocation engineered for zero operational downtime with secure IT server transport.',
    fullDesc: 'Specialized business moving for corporate offices in Ruwi Financial District, Ghala Industrial, and Knowledge Oasis Muscat. Overnight and weekend dispatch ensures your staff walks into a fully operational workspace on Sunday morning.',
    features: [
      'Modular workstation and conference table disassembly',
      'Anti-static bubble protection for monitors, servers & printers',
      'Confidential document archive boxes with seal tags',
      'Dedicated logistics supervisor on-site throughout',
    ],
    basePriceOMR: 75,
    unit: 'starts from 75 OMR',
    image: '/src/assets/images/commercial_office_1793515744170.jpg',
  },
  {
    id: 'building_materials',
    code: '03',
    title: 'Building Materials Trading & Transport',
    arabicTitle: 'تجارة ونقل مواد البناء والإنشاءات',
    shortDesc: 'Wholesale and retail supply of gypsum boards, cement, steel, tile adhesive, and structural supplies delivered directly to construction sites.',
    fullDesc: 'As a registered commercial entity (CR: 1481820), Ali Raza International Trade SPC supplies and transports high-grade building materials to contractors, developers, and private villa builders throughout the Sultanate.',
    features: [
      'Wholesale direct pricing with official VAT invoices (Tax ID: 1896320)',
      'Scheduled daily flatbed deliveries to active construction sites',
      'Cement, gypsum, sand, aggregates, and structural hardware',
      'Crane-assisted and tail-lift offloading available',
    ],
    basePriceOMR: 35,
    unit: 'per trip / supply order',
    image: '/src/assets/images/storage_facility_1793515744751.jpg',
  },
  {
    id: 'housewares_trade',
    code: '04',
    title: 'Housewares & Commercial Trade',
    arabicTitle: 'تجارة الأدوات المنزلية والتجهيزات العامة',
    shortDesc: 'Import, wholesale, and regional distribution of durable household goods, plastic crates, storage systems, and domestic appliances.',
    fullDesc: 'Serving retail merchants and commercial facilities in Muttrah Souq, Ruwi commercial avenues, and hypermarkets with bulk imports of verified quality housewares and packing consumables.',
    features: [
      'Commercial grade moving crates and plastic storage containers',
      'Kitchenware, domestic hardware, and utility goods',
      'Flexible wholesale MOQs for retail shops and distributors',
      'Door-to-door store replenishment logistics',
    ],
    basePriceOMR: 40,
    unit: 'bulk wholesale pricing',
    image: '/src/assets/images/storage_facility_1793515744751.jpg',
  },
  {
    id: 'waste_collection',
    code: '05',
    title: 'Waste Collection & Disposal Treatment',
    arabicTitle: 'جمع ونقل ومعالجة المخلفات والنفايات التجارية',
    shortDesc: 'Approved municipal waste hauling, construction debris removal, site cleanouts, and commercial scrap management.',
    fullDesc: 'Compliant with Muscat Municipality and Be’ah environmental standards. We clear construction rubble, renovated building debris, commercial packing waste, and industrial scrap safely.',
    features: [
      'Muscat Municipality compliant dumping & permit manifests',
      'Rapid clearance for end-of-tenancy and post-construction sites',
      'Eco-friendly sorting for recyclable timber, metal, and plastic',
      'Same-day pickup available for commercial emergencies',
    ],
    basePriceOMR: 30,
    unit: 'per load / dump trip',
    image: '/src/assets/images/moving_truck_crew_1793515743600.jpg',
  },
  {
    id: 'contracting_support',
    code: '06',
    title: 'Contracting Support & Heavy Freight',
    arabicTitle: 'الدعم اللوجستي للمقاولات والمعدات الثقيلة',
    shortDesc: 'Dedicated vehicle hire, 3-ton to 10-ton transport, loading labor crews, and project material staging for local contractors.',
    fullDesc: 'We partner with general contractors across Oman to provide on-demand fleet vehicles, experienced loading labor, and inter-governorate machinery logistics.',
    features: [
      'Daily, weekly, and monthly long-term logistics contracts',
      'Trained loading manpower with safety gear (PPE)',
      'Inter-governorate transport from Muscat to Nizwa, Sohar & Salalah',
      'Clear corporate documentation for project audits',
    ],
    basePriceOMR: 50,
    unit: 'daily rate / contract basis',
    image: '/src/assets/images/moving_truck_crew_1793515743600.jpg',
  },
];

export interface OmanQuoteParams {
  serviceType: 'house_moving' | 'office_moving' | 'building_materials' | 'waste_collection';
  moveSize: 'studio_small' | '1bhk' | '2bhk' | '3bhk_villa' | 'large_villa_office';
  distanceCategory: 'local_muscat' | 'muscat_batinah' | 'muscat_dakhiliyah' | 'interstate_salalah';
  helpersCount: number;
  packingNeeded: boolean;
}

export function calculateOmanQuote(params: OmanQuoteParams) {
  // Base rates in OMR (Omani Riyals)
  let baseLow = 30;
  let baseHigh = 45;

  // Service Type Matrix
  if (params.serviceType === 'house_moving') {
    switch (params.moveSize) {
      case 'studio_small':
        baseLow = 30;
        baseHigh = 45;
        break;
      case '1bhk':
        baseLow = 45;
        baseHigh = 65;
        break;
      case '2bhk':
        baseLow = 65;
        baseHigh = 95;
        break;
      case '3bhk_villa':
        baseLow = 110;
        baseHigh = 160;
        break;
      case 'large_villa_office':
        baseLow = 170;
        baseHigh = 260;
        break;
    }
  } else if (params.serviceType === 'office_moving') {
    switch (params.moveSize) {
      case 'studio_small':
        baseLow = 50;
        baseHigh = 75;
        break;
      case '1bhk':
        baseLow = 75;
        baseHigh = 110;
        break;
      case '2bhk':
        baseLow = 110;
        baseHigh = 160;
        break;
      case '3bhk_villa':
        baseLow = 160;
        baseHigh = 240;
        break;
      case 'large_villa_office':
        baseLow = 240;
        baseHigh = 380;
        break;
    }
  } else if (params.serviceType === 'building_materials') {
    baseLow = 30;
    baseHigh = 55;
    if (params.moveSize === '3bhk_villa' || params.moveSize === 'large_villa_office') {
      baseLow += 25;
      baseHigh += 40;
    }
  } else if (params.serviceType === 'waste_collection') {
    baseLow = 25;
    baseHigh = 45;
    if (params.moveSize === '3bhk_villa' || params.moveSize === 'large_villa_office') {
      baseLow += 20;
      baseHigh += 35;
    }
  }

  // Distance / Governorate Multiplier
  let distanceSurcharge = 0;
  let distanceLabel = 'Within Muscat (Ruwi, Qurum, Seeb, Al Mouj)';

  if (params.distanceCategory === 'muscat_batinah') {
    distanceSurcharge = 35;
    distanceLabel = 'Muscat to Al Batinah (Barka, Sohar, Rustaq)';
  } else if (params.distanceCategory === 'muscat_dakhiliyah') {
    distanceSurcharge = 40;
    distanceLabel = 'Muscat to Ad Dakhiliyah (Samail, Nizwa, Bahla)';
  } else if (params.distanceCategory === 'interstate_salalah') {
    distanceSurcharge = 190;
    distanceLabel = 'Muscat to Dhofar / Salalah Long-Haul (~1,000 km)';
  }

  baseLow += distanceSurcharge;
  baseHigh += distanceSurcharge;

  // Packing Add-on
  if (params.packingNeeded) {
    const packingFee = params.moveSize === 'large_villa_office' || params.moveSize === '3bhk_villa' ? 35 : 20;
    baseLow += packingFee;
    baseHigh += packingFee + 10;
  }

  return {
    quoteId: `OAN-${Math.floor(1000 + Math.random() * 9000)}`,
    estimatedTotalLowOMR: baseLow,
    estimatedTotalHighOMR: baseHigh,
    currency: 'OMR',
    distanceLabel,
    currencySymbol: 'ر.ع',
  };
}

export const OMAN_REVIEWS = [
  {
    id: 'rev_1',
    author: 'Eng. Salim Al Harthy',
    role: 'Al Mouj Resident',
    location: 'Qurum → Al Mouj, Muscat',
    review: 'OAN Moving team relocated our 4-bedroom villa seamlessly. The carpenters handled the heavy wooden wardrobes and Italian dining set with utmost care. Everything delivered without a scratch.',
    rating: 5,
    service: 'Full Villa Relocation',
  },
  {
    id: 'rev_2',
    author: 'Tariq Al Balushi',
    role: 'Operations Director, Apex Gulf Trading',
    location: 'Ruwi Commercial Hub → Ghala Industrial',
    review: 'Ali Raza International Trade SPC provided commercial logistics for our office shift over the weekend. Official Tax invoices (Tax ID: 1896320) and prompt CR documentation made corporate approval very simple.',
    rating: 5,
    service: 'Corporate Office Shift',
  },
  {
    id: 'rev_3',
    author: 'Mohammed Al Maamari',
    role: 'Construction Site Supervisor',
    location: 'Mabella & Barka Sites',
    review: 'We regularly source building materials and hire their 3-ton transport for our renovation projects. Always punctual, fair pricing in OMR, and dependable drivers.',
    rating: 5,
    service: 'Building Materials Transport',
  },
];

export const OMAN_FAQS = [
  {
    question: 'Is Ali Raza International Trade SPC officially registered in Oman?',
    answer: 'Yes, absolutely. We are a fully licensed Single Person Company (SPC) under the Ministry of Commerce, Industry and Investment Promotion (MOCIIP), Commercial Registration No. 1481820 and Tax ID No. 1896320, headquarted in Ruwi / Muttrah, Muscat.',
  },
  {
    question: 'How do you calculate moving costs in Omani Riyals (OMR)?',
    answer: 'Our rates are transparent with no hidden surprises. Pricing depends on your home size (1BHK, 2BHK, or Villa), loading floor/elevator access, and travel distance across Muscat or inter-governorate routes (e.g. Barka, Nizwa, or Salalah). Use our instant calculator above to see real-time estimates.',
  },
  {
    question: 'Do you provide professional carpenters for furniture dismantling and reassembly?',
    answer: 'Yes! Every OAN moving team includes experienced carpenters who safely disassemble and reassemble master bed sets, six-door wardrobes, modular kitchens, IKEA furnishings, TV wall brackets, and curtains.',
  },
  {
    question: 'Can you handle commercial waste and construction debris removal legally?',
    answer: 'Yes. Our waste collection and treatment division holds the necessary municipality authorizations to transport non-hazardous commercial and renovation rubble directly to approved government landfill sites.',
  },
  {
    question: 'What payment methods do you accept in Oman?',
    answer: 'We accept direct Bank Muscat mobile wallet transfers, cash upon delivery, and official bank cheques / electronic transfers for corporate accounts with formal VAT invoices.',
  },
];
