export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  tagline: string;
  heroImage: string;
  shortDesc: string;
  overview: string;
  benefits: { title: string; desc: string }[];
  whatsIncluded: string[];
  howItWorks: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'residential-moving',
    slug: 'residential-moving',
    title: 'Residential Moving',
    tagline: 'Reliable, white-glove household relocation for apartments, duplexes, and luxury villas.',
    heroImage: '/images/residential_moving_1793515744246.jpg',
    shortDesc:
      'Full-service home moving tailored to protect your furniture, electronics, and memories across Muscat and the Sultanate.',
    overview:
      'Ali Raza International Trade SPS (OAN Moving & Logistics) specializes in seamless residential moving. Whether transitioning from a studio in Ruwi, an apartment in Qurum, or an expansive multi-story villa in Al Mouj or Bowsher, our disciplined moving crew manages every facet of your relocation with maximum precision and zero stress.',
    benefits: [
      {
        title: 'Master Carpenter Care',
        desc: 'Experienced in-house technicians safely dismantle and reassemble intricate bedroom sets, wardrobes, and IKEA furnishings.',
      },
      {
        title: 'Climate-Protected Fleet',
        desc: 'Enclosed 3-ton to 7-ton transport vehicles designed to seal against extreme Gulf summer heat and highway dust.',
      },
      {
        title: 'Floor & Wall Safeguards',
        desc: 'Protective neoprene runners, door jamb shields, and padded banister wraps used at both origin and destination.',
      },
      {
        title: 'Guaranteed Pricing',
        desc: 'Transparent binding estimates in OMR with zero hidden stair, fuel, or parking fees on moving day.',
      },
    ],
    whatsIncluded: [
      'Comprehensive pre-move inventory inspection and scheduling',
      'Heavy-duty quilted moving blankets and commercial shrink-wrapping',
      'Disassembly of beds, large dining tables, and modular storage units',
      'Careful loading with weight distribution and ratchet strap securing',
      'Safe transit by certified, background-checked professional drivers',
      'Unloading, room placement, and reassembly at your new address',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Request & Estimate',
        desc: 'Submit your inventory via our online calculator or WhatsApp to receive an accurate, written cost breakdown.',
      },
      {
        step: '02',
        title: 'Preparation & Packing',
        desc: 'Our uniformed crew arrives on time with packing materials, boxes, and tools to prepare large and delicate items.',
      },
      {
        step: '03',
        title: 'Secure Transport',
        desc: 'Goods are systematically loaded, tied down in our enclosed fleet, and transported directly to your destination.',
      },
      {
        step: '04',
        title: 'Reassembly & Placement',
        desc: 'Furniture is reassembled in your desired rooms, rugs unrolled, and packing debris cleared away.',
      },
    ],
    faqs: [
      {
        q: 'Do you provide wardrobe boxes for hanging clothes?',
        a: 'Yes, we provide tall wardrobe cartons with metal hanging bars on moving day to keep suits, dresses, and abayas wrinkle-free.',
      },
      {
        q: 'Can you move high-value electronics and large LED TVs?',
        a: 'Yes, flat-screen televisions are padded with dense anti-scratch foam blankets and packed into custom heavy-duty TV crates.',
      },
      {
        q: 'How many days in advance should I book my home move?',
        a: 'We recommend reserving 3 to 7 days in advance, especially for weekend and end-of-month moves, though emergency same-day slots are often available.',
      },
    ],
    relatedSlugs: ['furniture-moving', 'packing-unpacking', 'loading-unloading'],
  },
  {
    id: 'commercial-moving',
    slug: 'commercial-moving',
    title: 'Commercial Moving',
    tagline: 'Streamlined commercial relocation engineered to protect inventory and eliminate operational downtime.',
    heroImage: '/images/commercial_office_1793515744170.jpg',
    shortDesc:
      'Corporate, retail, and industrial shifting managed by commercial transport specialists with formal VAT documentation.',
    overview:
      'Operating a business requires tight deadlines and zero disruptions. Ali Raza International Trade SPS delivers structured commercial moving solutions for corporate headquarters, retail stores, showrooms, and warehouse hubs throughout Oman and the GCC.',
    benefits: [
      {
        title: 'Minimal Business Disruption',
        desc: 'Flexible scheduling including evening, weekend, and overnight shifts so your team resumes work on schedule.',
      },
      {
        title: 'MOCIIP Compliance',
        desc: 'Official Commercial Registration (CR: 1481820) and Tax ID (1896320) documentation for seamless procurement audits.',
      },
      {
        title: 'Asset Tagging & Tracking',
        desc: 'Systematic labeling of desks, IT peripherals, documents, and merchandise to guarantee correct placement.',
      },
      {
        title: 'Specialized Handling Equipment',
        desc: 'Hydraulic pallet jacks, commercial rolling bins, furniture dollies, and tail-lift transport trucks.',
      },
    ],
    whatsIncluded: [
      'Dedicated project logistics manager assigned to your commercial move',
      'Pre-move floorplan mapping and color-coded destination tagging',
      'Disassembly of modular workstations, executive desks, and shelving',
      'Protective packaging for inventory merchandise and fragile displays',
      'Multi-vehicle coordination for large multi-truck corporate moves',
      'Post-move debris removal and final inspection with facility managers',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Site Survey & Phasing',
        desc: 'We conduct a walk-through to assess equipment, elevator reservations, building access, and timeline constraints.',
      },
      {
        step: '02',
        title: 'Tagging & Packing',
        desc: 'Departments and workstation assets are labeled according to the new floorplan layout.',
      },
      {
        step: '03',
        title: 'Dedicated Commercial Transit',
        desc: 'Our commercial fleet transports files, furniture, and inventory in organized, secure stages.',
      },
      {
        step: '04',
        title: 'Setup & Handover',
        desc: 'Desks, shelving, and office furniture are positioned and reassembled ready for immediate employee occupancy.',
      },
    ],
    faqs: [
      {
        q: 'Can you provide tax invoices with your commercial moving services?',
        a: 'Yes, Ali Raza International Trade SPS provides formal VAT invoices with our Tax ID (1896320) and CR credentials.',
      },
      {
        q: 'Do you operate on Friday and Saturday for office relocations?',
        a: 'Yes, weekend and overnight operations are standard for our corporate team to ensure zero weekday downtime.',
      },
      {
        q: 'Can you move heavy retail display fixtures and metal shelving?',
        a: 'Yes, our teams carry tools to disassemble gondolas, metal warehouse racking, and commercial display counters.',
      },
    ],
    relatedSlugs: ['office-relocation', 'transportation-logistics', 'loading-unloading'],
  },
  {
    id: 'international-moving',
    slug: 'international-moving',
    title: 'International Moving',
    tagline: 'Reliable cross-border overland freight and international relocations between Oman, the GCC, and beyond.',
    heroImage: '/images/moving_truck_crew_1793515743600.jpg',
    shortDesc:
      'Structured international moves between the Sultanate of Oman and UAE, Saudi Arabia, Qatar, Bahrain, and global hubs.',
    overview:
      'Relocating across borders demands meticulous customs coordination, heavy-duty export wrapping, and dependable interstate transport. Ali Raza International Trade SPS facilitates seamless international moves from Muscat to Dubai, Abu Dhabi, Riyadh, and GCC transit corridors.',
    benefits: [
      {
        title: 'Export-Grade Wrapping',
        desc: 'Multi-layer corrugated boxing, moisture barrier shrink-wrap, and impact-absorbing edge protectors.',
      },
      {
        title: 'Border & Customs Guidance',
        desc: 'Assistance with manifest itemization, border clearance declarations, and GCC transit paperwork.',
      },
      {
        title: 'Dedicated or Consolidated Loads',
        desc: 'Options for dedicated full-truckload (FTL) direct transit or economical shared consolidated transport.',
      },
      {
        title: 'Direct Driver Tracking',
        desc: 'Continuous dispatch updates on highway transit, border checkpoints, and estimated delivery dates.',
      },
    ],
    whatsIncluded: [
      'Comprehensive export inventory listing and packing manifest',
      'Heavy-duty export boxing, crating, and furniture sealing',
      'Customs declaration support at Oman-UAE and GCC border crossings',
      'Overland freight transport in locked, weather-sealed cargo trucks',
      'Direct delivery to destination address with unloading and placement',
      'Clear transparent pricing without surprise border surcharges',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'International Consultation',
        desc: 'We review your destination country, timeline, volume, and required customs clearance documentation.',
      },
      {
        step: '02',
        title: 'Export Packing Day',
        desc: 'Our specialized packing team packs every item using international transport grade wrapping materials.',
      },
      {
        step: '03',
        title: 'Border Transit & Clearance',
        desc: 'The truck proceeds through the border post with customs manifests and bill of lading documentation.',
      },
      {
        step: '04',
        title: 'Final Delivery & Handover',
        desc: 'Your shipment is delivered directly to your new international residence or corporate facility.',
      },
    ],
    faqs: [
      {
        q: 'What documents are required for moving between Oman and the UAE?',
        a: 'You will need copies of your passport, residency visa/Emirates ID or Oman Civil ID, and an itemized packing manifest.',
      },
      {
        q: 'How long does a road transit move from Muscat to Dubai take?',
        a: 'Standard transit between Muscat and Dubai or Abu Dhabi typically takes 24 to 48 hours depending on border clearance.',
      },
      {
        q: 'Are customs duties included in the estimate?',
        a: 'Used personal household goods are generally exempt under GCC regulations when accompanied by valid resident visas, but any government inspections or duty charges are documented transparently.',
      },
    ],
    relatedSlugs: ['commercial-moving', 'packing-unpacking', 'transportation-logistics'],
  },
  {
    id: 'office-relocation',
    slug: 'office-relocation',
    title: 'Office Relocation',
    tagline: 'Zero-disruption workplace relocation with specialized IT computer carts and modular workstation assembly.',
    heroImage: '/images/commercial_office_1793515744170.jpg',
    shortDesc:
      'Turnkey office moving for tech firms, law practices, clinics, and financial institutions in Muscat business centers.',
    overview:
      'From boutique professional suites in Ruwi High Street to multi-floor tech campuses in Knowledge Oasis Muscat and Ghala Industrial, our office relocation division is trained to execute workplace transitions with clinical organization.',
    benefits: [
      {
        title: 'Anti-Static IT Protection',
        desc: 'Specialized padding and foam protection for desktop towers, curved monitors, rack equipment, and printers.',
      },
      {
        title: 'Desk System Specialists',
        desc: 'Proficient with all commercial modular partition screens, cable trays, and ergonomic sit-stand workstations.',
      },
      {
        title: 'Secure File & Archive Crates',
        desc: 'Numbered, tamper-evident plastic moving crates for legal records, accounting archives, and HR files.',
      },
      {
        title: 'Weekend Handover Guarantee',
        desc: 'We finish moving on Friday or Saturday evening so your personnel start Monday morning without delay.',
      },
    ],
    whatsIncluded: [
      'Pre-move coordination meetings with office managers and IT teams',
      'Supply of computer bags, monitor sleeves, and numbered crate kits',
      'Systematic workstation disassembly, cable grouping, and hardware labeling',
      'Conference room table disassembly and executive leather furniture care',
      'Dedicated elevator padding and building lobby floor protection',
      'Reassembly of desks and basic furniture placement per layout drawings',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Workplace Planning',
        desc: 'We review department seating plans and establish a staged relocation schedule.',
      },
      {
        step: '02',
        title: 'IT & Document Staging',
        desc: 'Staff pack personal belongings into provided crates while our crew disassembles desks and wraps screens.',
      },
      {
        step: '03',
        title: 'Rapid Transfer',
        desc: 'Multiple trucks transfer equipment smoothly to prevent crowding at service elevators.',
      },
      {
        step: '04',
        title: 'Commissioning & Layout',
        desc: 'Desks are anchored, partitions aligned, and crates set at their respective staff workstations.',
      },
    ],
    faqs: [
      {
        q: 'Do your movers disconnect and reconnect IT computer cables?',
        a: 'We carefully disconnect, bundle, and wrap desktop monitors and peripherals. We recommend corporate IT staff handle sensitive server shut-downs.',
      },
      {
        q: 'Can you provide building insurance certificates (COI) for landlords?',
        a: 'Yes, as a registered commercial entity (CR: 1481820), we supply building management with driver credentials and company documentation.',
      },
      {
        q: 'How do you handle confidential client documents?',
        a: 'We provide heavy-duty security crates with numbered zip-tie seals for sensitive files and legal documents.',
      },
    ],
    relatedSlugs: ['commercial-moving', 'furniture-moving', 'loading-unloading'],
  },
  {
    id: 'furniture-moving',
    slug: 'furniture-moving',
    title: 'Furniture Moving',
    tagline: 'Expert furniture moving, heavy piece rigging, and carpenter disassembly for homes and offices.',
    heroImage: '/images/residential_moving_1793515744246.jpg',
    shortDesc:
      'Dedicated handling for solid wood wardrobes, sectional sofas, marble dining tables, and delicate antiques.',
    overview:
      'Furniture moving requires specialized technique, high-tensile lifting straps, and carpentry expertise. Ali Raza International Trade SPS provides professional furniture moving services whether you are moving a single oversized heirloom or an entire multi-bedroom villa.',
    benefits: [
      {
        title: 'Certified In-House Carpenters',
        desc: 'We do not hire temporary street labor; our full-time carpenters understand furniture engineering and joinery.',
      },
      {
        title: 'Heavy Rigging Capabilities',
        desc: 'Skid boards, hydraulic jacks, and four-point shoulder dollies for pianos, fireproof safes, and stone tables.',
      },
      {
        title: 'Triple-Layer Packaging',
        desc: 'Fabric quilts, heavy stretch film, and corrugated corner guards prevent scuffs and pressure indentations.',
      },
      {
        title: 'Balcony / Window Hoisting',
        desc: 'Controlled hoisting solutions for items that cannot negotiate narrow staircases or residential elevator cabs.',
      },
    ],
    whatsIncluded: [
      'Initial inspection of hinges, glass panels, and structural fastenings',
      'Disassembly of king/queen bedframes, wardrobes, and modular sofas',
      'Individual wrapping of cushions, fabric upholstery, and leather items',
      'Hardware screws and fittings preserved in labeled, sealed bags',
      'Transportation in clean, padded trucks with tie-down anchoring',
      'Precise room placement and leveling of legs at your destination',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Inspection & Preparation',
        desc: 'Our carpenter checks drawers, glass inserts, and locks to secure all moving parts.',
      },
      {
        step: '02',
        title: 'Dismantling & Padding',
        desc: 'Bulky pieces are dismantled into manageable components and thoroughly padded with quilted blankets.',
      },
      {
        step: '03',
        title: 'Protected Transit',
        desc: 'Pieces are secured vertically against truck wall slats with commercial ratcheting straps.',
      },
      {
        step: '04',
        title: 'Rebuilding & Alignment',
        desc: 'Frames are reassembled with original bolts, doors aligned, and placed exactly where you want them.',
      },
    ],
    faqs: [
      {
        q: 'Can you move heavy upright pianos or home safes?',
        a: 'Yes, our team is equipped with heavy-capacity dollies and stair-skids for pianos and safes up to 350 kg.',
      },
      {
        q: 'Will you reassemble IKEA or customized bedroom sets?',
        a: 'Yes, our carpenters assemble European, Italian, and IKEA furniture daily with precision.',
      },
      {
        q: 'Do you move glass dining tabletops and large mirrors?',
        a: 'Yes, all glass items receive corrugated cardboard sandwiching and bubble wrapping for impact absorption.',
      },
    ],
    relatedSlugs: ['residential-moving', 'packing-unpacking', 'loading-unloading'],
  },
  {
    id: 'packing-unpacking',
    slug: 'packing-unpacking',
    title: 'Packing & Unpacking Services',
    tagline: 'Professional packing supplies, fragile dishpacks, and complete unpacking services.',
    heroImage: '/images/storage_facility_1793515744751.jpg',
    shortDesc:
      'Save dozens of hours with our skilled packers using premium 5-ply cartons, bubble wrap, and tissue paper.',
    overview:
      'Packing is the most time-consuming and delicate part of any relocation. Ali Raza International Trade SPS offers complete and partial packing services utilizing industry-grade materials to safeguard your china, books, wardrobe, and treasured collectibles.',
    benefits: [
      {
        title: 'Heavy-Duty 5-Ply Cartons',
        desc: 'Commercial-grade corrugated boxes designed to withstand stacking pressure during transport.',
      },
      {
        title: 'Fragile Dishpack Engineering',
        desc: 'Double-walled cell dividers and clean unprinted wrapping paper for glassware, porcelain, and crystal.',
      },
      {
        title: 'Systematic Box Labeling',
        desc: 'Every box is cataloged with room of origin, contents description, and destination placement notes.',
      },
      {
        title: 'Debris Removal Service',
        desc: 'Once unpacked at your new home, our team removes and disposes of all used boxes and paper responsibly.',
      },
    ],
    whatsIncluded: [
      'Full delivery of boxes, bubble wrap, tape, and packing paper',
      'Complete packing of kitchen cupboards, pantry, and dishware',
      'Clothing transferred directly onto hanging bars in wardrobe boxes',
      'Lamps, artwork, and mirror crating in custom telescoping boxes',
      'Optional day-after unpacking and cupboard placement service',
      'Environmentally conscious collection and recycling of carton materials',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Packing Supplies Arrival',
        desc: 'We arrive the day before or morning of your move with fresh, clean packing materials.',
      },
      {
        step: '02',
        title: 'Methodical Packing',
        desc: 'Room by room, items are wrapped, cushioned, boxed, and sealed with heavy-duty vinyl tape.',
      },
      {
        step: '03',
        title: 'Inventory Cataloging',
        desc: 'Boxes are numbered and marked by destination room (e.g., "Master Bedroom — Linens").',
      },
      {
        step: '04',
        title: 'Unpacking at Destination',
        desc: 'If selected, our team unpacks items onto flat surfaces and clears all packaging trash.',
      },
    ],
    faqs: [
      {
        q: 'Can I pack some personal items myself and leave fragile items for your team?',
        a: 'Absolutely! Our "Fragile-Only" packing option focuses on glassware, kitchenware, artwork, and electronics.',
      },
      {
        q: 'Are your packing materials clean and new?',
        a: 'Yes, we only supply brand new, clean corrugated cartons and hygienic unprinted packaging paper.',
      },
      {
        q: 'Do you unpack and put items away in drawers?',
        a: 'Our standard unpacking unpacks items onto flat surfaces (countertops and tables). Full pantry and closet organizing can be arranged upon request.',
      },
    ],
    relatedSlugs: ['residential-moving', 'furniture-moving', 'transportation-logistics'],
  },
  {
    id: 'loading-unloading',
    slug: 'loading-unloading',
    title: 'Loading & Unloading',
    tagline: 'Professional heavy-lifting labor crews equipped with dollies, ramps, and safety gear.',
    heroImage: '/images/moving_truck_crew_1793515743600.jpg',
    shortDesc:
      'Reliable labor for rental trucks, shipping containers, pods, or internal villa room rearrangements.',
    overview:
      'Even if you already have transport arranged or have an international container arriving at Port Sultan Qaboos or Sohar Port, Ali Raza International Trade SPS provides trained, background-checked loading and unloading crews to handle the heavy lifting safely.',
    benefits: [
      {
        title: 'Trained Ergonomic Lifting',
        desc: 'Our staff uses proper lifting straps, forearm forklifts, and teamwork to prevent back strain and property damage.',
      },
      {
        title: 'Optimal Space Utilization',
        desc: 'Expert loaders stack boxes and furniture tightly like a jigsaw puzzle to prevent shifting on highway turns.',
      },
      {
        title: 'Stair & Elevator Mastery',
        desc: 'Specialized techniques for carrying oversized sofas and appliances through tight stairwells and lifts.',
      },
      {
        title: 'On-Demand Hourly or Flat Rates',
        desc: 'Flexible crew sizing (2, 3, 4, or more helpers) based on your specific timeline and volume.',
      },
    ],
    whatsIncluded: [
      'Uniformed, energetic moving helpers equipped with commercial hand trucks and dollies',
      'Supply of loading ramps, tie-down straps, and protective moving pads',
      'Systematic loading of sea-shipping containers (20ft / 40ft) or domestic trucks',
      'Careful unloading, container de-stuffing, and interior room distribution',
      'Heavy appliance handling (refrigerators, washing machines, cookers)',
      'Clean walkthrough verifying all items are in their designated locations',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Crew Booking',
        desc: 'Tell us the container size, truck type, or home layout to determine the ideal crew number.',
      },
      {
        step: '02',
        title: 'Staging & Ramp Setup',
        desc: 'Our crew arrives on time, inspects access pathways, and sets up aluminum ramps and floor runners.',
      },
      {
        step: '03',
        title: 'Systematic Handling',
        desc: 'Heaviest furniture pieces are loaded base-first, followed by medium cartons and fragile items on top.',
      },
      {
        step: '04',
        title: 'Securing & Sign-Off',
        desc: 'Loads are strapped tight, or upon arrival, placed into your designated rooms with zero hassle.',
      },
    ],
    faqs: [
      {
        q: 'Can I hire a crew just for loading or unloading my own container or rental truck?',
        a: 'Yes, our labor-only service is perfect for customers who have already arranged their own vehicle or sea container.',
      },
      {
        q: 'Do your helpers bring dollies and moving straps?',
        a: 'Yes, our crews arrive fully equipped with heavy-duty 4-wheel dollies, hand trucks, lifting straps, and toolkits.',
      },
      {
        q: 'What is the minimum booking time for a labor crew?',
        a: 'Standard labor bookings start from a 2-hour minimum with straightforward, affordable hourly extensions.',
      },
    ],
    relatedSlugs: ['furniture-moving', 'residential-moving', 'transportation-logistics'],
  },
  {
    id: 'transportation-logistics',
    slug: 'transportation-logistics',
    title: 'Transportation & Logistics',
    tagline: 'Dedicated commercial freight, covered transport fleet, and GCC supply chain distribution.',
    heroImage: '/images/storage_facility_1793515744751.jpg',
    shortDesc:
      'Licensed freight transport across all governorates of Oman, construction site deliveries, and cross-border trucking.',
    overview:
      'As a registered trade and transport entity (CR: 1481820 | Tax ID: 1896320), Ali Raza International Trade SPS operates a versatile commercial logistics network connecting Muscat with Al Batinah, Ad Dakhiliyah, Dhofar, and GCC industrial centers.',
    benefits: [
      {
        title: 'Versatile Fleet Sizing',
        desc: 'Enclosed 3-ton pickups, 7-ton medium freight trucks, and 10-ton to 40-foot flatbed trailers for diverse payloads.',
      },
      {
        title: 'Sultanate-Wide Coverage',
        desc: 'Daily routes connecting Muscat, Barka, Sohar, Rustaq, Nizwa, Sur, and long-haul direct runs to Salalah.',
      },
      {
        title: 'B2B Building Materials Logistics',
        desc: 'Wholesale delivery of cement, gypsum boards, ceramic tiles, steel, and structural hardware to contractor jobsites.',
      },
      {
        title: 'Licensed Waste Hauling',
        desc: 'Authorized transport for construction debris, commercial packaging waste, and municipal cleanouts.',
      },
    ],
    whatsIncluded: [
      'Dedicated point-to-point freight transport with verified professional drivers',
      'Real-time GPS tracking and transit milestone reporting',
      'All-weather cargo covers and security strap tie-down points',
      'Tail-lift hydraulic offloading support for heavy machinery or pallets',
      'Corporate credit facilities and official VAT invoices for registered businesses',
      'Scheduled recurring distribution contracts for retailers and manufacturers',
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Route & Cargo Assessment',
        desc: 'We identify tonnage, cargo dimensions, pickup/drop-off zones, and timing requirements.',
      },
      {
        step: '02',
        title: 'Fleet Dispatch',
        desc: 'The right capacity truck and qualified driver are dispatched promptly to your warehouse or jobsite.',
      },
      {
        step: '03',
        title: 'Secure Highway Transit',
        desc: 'Your freight is hauled safely along the Sultanate highway corridors under continuous dispatch oversight.',
      },
      {
        step: '04',
        title: 'Proof of Delivery (POD)',
        desc: 'Cargo is checked against delivery notes and signed off with official documentation for your records.',
      },
    ],
    faqs: [
      {
        q: 'Do you provide daily or weekly transport contracts for local companies?',
        a: 'Yes, we provide flexible ongoing commercial logistics contracts for manufacturers, contractors, and retailers.',
      },
      {
        q: 'Can you transport building materials and construction supplies directly to active job sites?',
        a: 'Yes, as part of our building materials trading division, our flatbed and freight fleet delivers directly to active construction sites.',
      },
      {
        q: 'What governorates in Oman do your trucks serve?',
        a: 'We cover all regions: Muscat, Al Batinah North & South, Ad Dakhiliyah, Ash Sharqiyah, Ad Dhahirah, and Dhofar (Salalah).',
      },
    ],
    relatedSlugs: ['commercial-moving', 'international-moving', 'loading-unloading'],
  },
];
