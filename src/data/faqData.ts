export interface FaqItem {
  id: string;
  category: 'General Questions' | 'Moving Costs' | 'Packing & Moving' | 'International Moving' | 'Booking & Support';
  question: string;
  answer: string;
}

export const FAQS_CATALOG: FaqItem[] = [
  // General Questions
  {
    id: 'gen-1',
    category: 'General Questions',
    question: 'What services does ALI RAZA INTERNATIONAL TRADE SPS provide?',
    answer:
      'ALI RAZA INTERNATIONAL TRADE SPS (featuring OAN Moving & Logistics Services) provides comprehensive residential moving, commercial office relocations, international freight within the GCC, furniture dismantling and assembly, professional packing and unpacking, loading and unloading labor, building materials transport, and commercial logistics across the Sultanate of Oman.',
  },
  {
    id: 'gen-2',
    category: 'General Questions',
    question: 'Which locations do you serve?',
    answer:
      'Our headquarters are located in Ruwi / Muttrah, Muscat. We operate daily across the Capital Governorate (Ruwi, Muttrah, Qurum, Al Khuwair, Ghubrah, Azaiba, Seeb, Al Mouj, Mawaleh, Bowsher) and provide regular regional and long-distance moving to Al Batinah (Barka, Sohar), Ad Dakhiliyah (Nizwa, Samail), Ash Sharqiyah (Sur), Dhofar (Salalah), and cross-border transport to the UAE (Dubai, Abu Dhabi).',
  },
  {
    id: 'gen-3',
    category: 'General Questions',
    question: 'How do I book a moving service?',
    answer:
      'You can book online in 3 simple ways: use our interactive Moving Cost Calculator to configure your requirements and request a quote, submit the online Request a Quote form, or contact our dispatch team directly via WhatsApp or phone at +968 9838 6824. A team member will promptly verify details and lock in your scheduled slot.',
  },
  {
    id: 'gen-4',
    category: 'General Questions',
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking 3 to 7 days in advance for local household and office moves, and 1 to 2 weeks for long-distance or international GCC relocations. However, if you require urgent or same-day service within Muscat, contact us directly—we maintain reserve crew and vehicle capacity for emergency bookings.',
  },

  // Moving Costs
  {
    id: 'cost-1',
    category: 'Moving Costs',
    question: 'How is the moving cost calculated?',
    answer:
      'Moving costs are calculated transparently based on: 1) the volume/size of your property or inventory, 2) the transit distance between origin and destination, 3) the number of movers and carpenters required, 4) packing material requirements, and 5) physical access factors such as stair flights without elevator access or long walking carries.',
  },
  {
    id: 'cost-2',
    category: 'Moving Costs',
    question: 'Are there additional charges?',
    answer:
      'We maintain a strict transparent pricing policy with zero surprise charges on moving day. Any potential factors—such as specialty heavy item rigging (heavy safes or upright pianos), extra packing supplies requested on-site, or flights of stairs—are itemized clearly in your written estimate beforehand so you know exactly what to expect.',
  },
  {
    id: 'cost-3',
    category: 'Moving Costs',
    question: 'Can I receive a customized quotation?',
    answer:
      'Yes. For larger villas, multi-story offices, or complex industrial moves, we provide a free customized quotation. You can share an inventory list or photos/videos via WhatsApp (+968 9838 6824), or request a complimentary on-site survey in Muscat.',
  },
  {
    id: 'cost-4',
    category: 'Moving Costs',
    question: 'Does the calculator provide a final price?',
    answer:
      'Our online moving cost calculator provides an indicative planning estimate based on typical labor and transport rates in Oman. Because actual physical layouts, custom carpentry, and packaging volumes can vary, our team reviews your calculated selections and confirms the final binding price before scheduling.',
  },

  // Packing & Moving
  {
    id: 'pack-1',
    category: 'Packing & Moving',
    question: 'Do you provide packing materials?',
    answer:
      'Yes. When packing service is requested, we arrive with fresh, commercial-grade packing supplies including heavy-duty 5-ply corrugated boxes, high-density bubble wrap, stretch film, unprinted packing tissue, adhesive tape, and specialized wardrobe boxes equipped with hanging bars for clothing.',
  },
  {
    id: 'pack-2',
    category: 'Packing & Moving',
    question: 'Can you transport fragile items?',
    answer:
      'Yes. Delicate items such as crystal stemware, porcelain dishware, ornate chandeliers, mirrors, and large curved LED TVs receive multi-layer cushioning, cardboard encasing, and cell-pack dividers, and are loaded in dedicated shock-absorbing positions inside our trucks.',
  },
  {
    id: 'pack-3',
    category: 'Packing & Moving',
    question: 'Do you offer furniture dismantling and assembly?',
    answer:
      'Yes. Our team includes professional in-house carpenters (نجار محترف) who safely dismantle and reassemble complex bedroom sets, multi-door wardrobes, dining tables, modular office desks, and shelving units. Hardware screws are bagged and labeled meticulously.',
  },
  {
    id: 'pack-4',
    category: 'Packing & Moving',
    question: 'How should I prepare before moving day?',
    answer:
      'We recommend separating personal essentials (passports, cash, daily medications, phone chargers) into a personal travel bag. Defrost your refrigerator 24 hours prior if moving major appliances, and reserve building service elevators or parking loading docks with your building management where applicable.',
  },

  // International Moving
  {
    id: 'intl-1',
    category: 'International Moving',
    question: 'Do you provide international relocation?',
    answer:
      'Yes, we provide structured overland international moving and freight transport connecting the Sultanate of Oman with the United Arab Emirates (Dubai, Abu Dhabi, Sharjah), Saudi Arabia, Qatar, and other GCC countries.',
  },
  {
    id: 'intl-2',
    category: 'International Moving',
    question: 'What documents may be required?',
    answer:
      'For cross-border relocations, standard documentation includes: copies of the shipper’s passport, resident visa or National Civil ID for Oman and the destination country, and an itemized packing list / customs declaration manifest which our team assists in preparing.',
  },
  {
    id: 'intl-3',
    category: 'International Moving',
    question: 'How is international transportation arranged?',
    answer:
      'We operate dedicated and consolidated enclosed freight transport. Items are prepared with export-grade packaging, sealed into the truck, and accompanied through border customs inspection points with full bill of lading documentation straight to your destination address.',
  },

  // Booking & Support
  {
    id: 'book-1',
    category: 'Booking & Support',
    question: 'How can I modify my booking?',
    answer:
      'If your closing date, tenancy timing, or inventory changes, simply notify our dispatch coordinator by WhatsApp or phone at +968 9838 6824 or email Iqumantransport@gmail.com at least 24 to 48 hours in advance, and we will adjust your schedule at no penalty fee.',
  },
  {
    id: 'book-2',
    category: 'Booking & Support',
    question: 'How can I contact your team?',
    answer:
      'You can reach us directly via telephone or WhatsApp at +968 9838 6824, by email at Iqumantransport@gmail.com, or visit our commercial headquarters in the Ruwi / Muttrah business district in Muscat. Our customer service desk operates Saturday through Thursday from 7:00 AM to 10:00 PM, with emergency Friday dispatch.',
  },
  {
    id: 'book-3',
    category: 'Booking & Support',
    question: 'How do I request a quotation?',
    answer:
      'You can request a quotation directly through our /get-a-quote page, use the /moving-cost-calculator to build your breakdown, or send a quick WhatsApp message to +968 9838 6824 with your pickup and delivery locations. We respond with formal written proposals promptly.',
  },
];
