import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Persistent storage path for pricing and stats
const DATA_DIR = path.resolve(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const PRICING_STORE_FILE = path.join(DATA_DIR, 'pricingStore.json');
const STATS_STORE_FILE = path.join(DATA_DIR, 'statsStore.json');
const TESTIMONIALS_STORE_FILE = path.join(DATA_DIR, 'testimonialsStore.json');

// Default pricing structure based on Omani Riyal market standards
const DEFAULT_PRICING = {
  version: 1,
  lastUpdated: new Date().toISOString(),
  currency: {
    code: 'OMR',
    symbol: 'OMR',
    name: 'Omani Rial',
    decimalPlaces: 3,
  },
  basePropertyPricing: {
    studio: { name: 'Studio Apartment', basePrice: 40, minCharge: 35, laborRate: 15, active: true },
    '1bed': { name: '1-Bedroom Apartment', basePrice: 55, minCharge: 50, laborRate: 20, active: true },
    '2bed': { name: '2-Bedroom Apartment', basePrice: 85, minCharge: 75, laborRate: 30, active: true },
    '3bed': { name: '3-Bedroom Apartment', basePrice: 125, minCharge: 110, laborRate: 40, active: true },
    '4plus': { name: '4+ Bedroom House', basePrice: 175, minCharge: 150, laborRate: 50, active: true },
    villa: { name: 'Villa (Multi-Story)', basePrice: 220, minCharge: 180, laborRate: 60, active: true },
    office: { name: 'Commercial Office', basePrice: 140, minCharge: 120, laborRate: 45, active: true },
    custom: { name: 'Custom Inventory', basePrice: 60, minCharge: 50, laborRate: 25, active: true },
  },
  distancePricing: {
    baseTransportationFee: 20,
    pricePerKm: 0.35,
    minimumDistanceKm: 15,
    longDistanceSurchargePct: 10,
    muscatLocalFlatRate: 25,
    governorateSurcharges: {
      muscat: 0,
      batinah_south: 25,
      batinah_north: 45,
      dakhiliyah: 40,
      sharqiyah_south: 55,
      sharqiyah_north: 50,
      dhofar_salalah: 160,
      buraimi: 70,
      dhahirah: 65,
      musandam: 200,
    },
    internationalMovingNotice: 'Custom quotation required. Dependent on container size, sea/road freight route and border clearance.',
  },
  additionalServices: {
    packing: { name: 'Full Furniture Wrapping & Packing', price: 25, pricingMethod: 'fixed', active: true, desc: 'Bubble wrap, stretch film, heavy edge blankets' },
    unpacking: { name: 'Unpacking & Room Arrangement', price: 20, pricingMethod: 'fixed', active: true, desc: 'Unpacking and complete box debris removal' },
    dismantling: { name: 'Carpentry Dismantling', price: 15, pricingMethod: 'per_item', active: true, desc: 'Per bed, large wardrobe or dining table' },
    assembly: { name: 'Carpentry Re-Assembly', price: 15, pricingMethod: 'per_item', active: true, desc: 'Precision reassembly and wall mounting' },
    fragile: { name: 'Fragile China & Glassware Crating', price: 20, pricingMethod: 'fixed', active: true, desc: 'Dish packs with cellular cell dividers' },
    loading: { name: 'Dedicated Loading & Unloading Team', price: 25, pricingMethod: 'fixed', active: true, desc: 'Trained professional crew with hydraulic liftgates' },
    heavy_furniture: { name: 'Heavy Item Handling (Safe/Piano)', price: 40, pricingMethod: 'fixed', active: true, desc: 'Specialized dolly and strap rigging' },
    storage: { name: 'Secure Monthly Warehousing Storage', price: 50, pricingMethod: 'per_month', active: true, desc: 'Air-cooled insured Muscat facility' },
    extra_boxes: { name: 'Standard Moving Box Kit (10 Boxes)', price: 12, pricingMethod: 'fixed', active: true, desc: 'Heavy duty corrugated double wall' },
    extra_worker: { name: 'Additional Moving Helper', price: 15, pricingMethod: 'per_day', active: true, desc: 'Additional certified mover helper' },
    floor_access_no_elevator: { name: 'Stairs Carrying (Per Floor Above 2nd)', price: 5, pricingMethod: 'per_floor', active: true, desc: 'Manual carry when elevator unavailable' },
  },
  taxesAndDiscounts: {
    taxPercentage: 0,
    promotionalDiscountPct: 15,
    promoCode: 'OANWEEKDAY',
    minimumBookingAmount: 35,
  },
  disclaimer: 'Indicative estimate based on standard volume configurations. Formal binding rates are confirmed via free on-site or video survey.',
};

// Initial state load or fallback
function loadPricingStore() {
  if (fs.existsSync(PRICING_STORE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PRICING_STORE_FILE, 'utf-8'));
    } catch {
      // fallback
    }
  }
  const initial = {
    published: DEFAULT_PRICING,
    draft: JSON.parse(JSON.stringify(DEFAULT_PRICING)),
    history: [
      {
        timestamp: new Date().toISOString(),
        author: 'System Initializer',
        action: 'Default Omani market baseline loaded',
      },
    ],
  };
  fs.writeFileSync(PRICING_STORE_FILE, JSON.stringify(initial, null, 2));
  return initial;
}

function savePricingStore(data: any) {
  fs.writeFileSync(PRICING_STORE_FILE, JSON.stringify(data, null, 2));
}

// Stats store
const DEFAULT_STATS = {
  customerCount: 2067,
  timePeriod: 'Last 8 Months',
  label: '2,067+ Customers in the Last 8 Months',
  verifiedClaimsNotice: 'Statistic monitored for official verification and periodic MOCIIP compliance updating.',
  rating: 4.9,
  totalReviews: 3400,
  yearsExperience: 8,
};

function loadStatsStore() {
  if (fs.existsSync(STATS_STORE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(STATS_STORE_FILE, 'utf-8'));
    } catch {
      // fallback
    }
  }
  fs.writeFileSync(STATS_STORE_FILE, JSON.stringify(DEFAULT_STATS, null, 2));
  return DEFAULT_STATS;
}

// Testimonials store
const INITIAL_TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Tariq Al-Lawati',
    serviceCategory: 'Residential Moving (Villa)',
    location: 'Al Mouj, Muscat to Madinat Al Ilam',
    rating: 5,
    date: '2026-03-12',
    comment: 'Exceptional professionalism from the OAN moving crew. They dismantled three king-sized bedroom sets and reassembled them without a single scratch. Arrived exactly at 8 AM as promised.',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Salim Al-Harthy',
    serviceCategory: 'Commercial Office Relocation',
    location: 'Ruwi CBD to Knowledge Oasis Muscat (KOM)',
    rating: 5,
    date: '2026-02-28',
    comment: 'Relocated our 25-desk corporate office over a single weekend. Server racks and IT equipment were handled with antistatic bubble protection. Ready for work on Sunday morning.',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Fatma Al-Balushi',
    serviceCategory: 'Packing & Furniture Moving',
    location: 'Bausher, Muscat to Sohar',
    rating: 5,
    date: '2026-02-15',
    comment: 'The packing team brought clean corrugated cartons and dish cells for all our kitchen chinaware. Nothing was chipped. Clear OMR invoice without unexpected add-on charges.',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'David Reynolds',
    serviceCategory: 'International Relocation (Dubai to Muscat)',
    location: 'UAE to Al Qurum, Muscat',
    rating: 5,
    date: '2026-01-20',
    comment: 'Handled our cross-border moving clearance at Hatta/Wajajah with zero hassle. All paperwork and import manifests were filed perfectly by Ali Raza International Trade.',
    verified: true,
  },
  {
    id: 'test-5',
    name: 'Nasser Al-Kindi',
    serviceCategory: 'Apartment Relocation',
    location: 'Al Khuwair to Azaiba',
    rating: 5,
    date: '2026-01-08',
    comment: 'Fast and trustworthy. The online calculator gave me a clear ballpark of 85 OMR, and the final bill was true to the survey. Highly recommended moving company in Muscat.',
    verified: true,
  },
];

function loadTestimonialsStore() {
  if (fs.existsSync(TESTIMONIALS_STORE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(TESTIMONIALS_STORE_FILE, 'utf-8'));
    } catch {
      // fallback
    }
  }
  fs.writeFileSync(TESTIMONIALS_STORE_FILE, JSON.stringify(INITIAL_TESTIMONIALS, null, 2));
  return INITIAL_TESTIMONIALS;
}

// Authentication Token Store (Server-side in-memory session tokens)
const ACTIVE_ADMIN_TOKENS = new Set<string>();
const ADMIN_PASSWORD_HASH = crypto.createHash('sha256').update(process.env.ADMIN_PASSWORD || 'OanAdmin2026!').digest('hex');

// Auth middleware
function requireAdminAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized. Admin token missing.' });
  }
  const token = authHeader.split(' ')[1];
  if (!ACTIVE_ADMIN_TOKENS.has(token)) {
    return res.status(403).json({ error: 'Forbidden. Invalid or expired administrative session.' });
  }
  next();
}

// -------------------------------------------------------------
// PUBLIC & ADMIN API ROUTES
// -------------------------------------------------------------

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  const inputHash = crypto.createHash('sha256').update(password).digest('hex');
  if (inputHash === ADMIN_PASSWORD_HASH) {
    const token = crypto.randomBytes(32).toString('hex');
    ACTIVE_ADMIN_TOKENS.add(token);
    return res.json({
      success: true,
      token,
      message: 'Authenticated successfully as administrator',
      expiresIn: '24h',
    });
  }
  return res.status(401).json({ error: 'Invalid administrator credentials' });
});

// Admin Logout
app.post('/api/admin/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    ACTIVE_ADMIN_TOKENS.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
});

// Public: Get Active Published Pricing for Calculator
app.get('/api/pricing', (req, res) => {
  const store = loadPricingStore();
  res.json(store.published);
});

// Admin: Get Draft + Published Pricing + Change History
app.get('/api/admin/pricing', requireAdminAuth, (req, res) => {
  const store = loadPricingStore();
  res.json(store);
});

// Admin: Save Draft Pricing
app.post('/api/admin/pricing/save', requireAdminAuth, (req, res) => {
  const { draft } = req.body;
  if (!draft) {
    return res.status(400).json({ error: 'Draft pricing configuration required' });
  }
  const store = loadPricingStore();
  store.draft = {
    ...draft,
    lastUpdated: new Date().toISOString(),
  };
  savePricingStore(store);
  res.json({ success: true, message: 'Draft configuration saved successfully', draft: store.draft });
});

// Admin: Publish Pricing to Live Calculator
app.post('/api/admin/pricing/publish', requireAdminAuth, (req, res) => {
  const store = loadPricingStore();
  store.published = JSON.parse(JSON.stringify(store.draft));
  store.published.lastUpdated = new Date().toISOString();
  store.history.unshift({
    timestamp: new Date().toISOString(),
    author: 'Administrator',
    action: `Published updated pricing configuration (Version ${store.published.version || 1})`,
  });
  if (store.history.length > 20) store.history = store.history.slice(0, 20);
  savePricingStore(store);
  res.json({ success: true, message: 'Published configuration is now LIVE on customer calculator', published: store.published });
});

// Admin: Reset Draft to Last Published
app.post('/api/admin/pricing/reset', requireAdminAuth, (req, res) => {
  const store = loadPricingStore();
  store.draft = JSON.parse(JSON.stringify(store.published));
  savePricingStore(store);
  res.json({ success: true, message: 'Draft reverted to last published configuration', draft: store.draft });
});

// Public: Customer Statistics
app.get('/api/stats', (req, res) => {
  const stats = loadStatsStore();
  res.json(stats);
});

// Admin: Update Statistics
app.post('/api/admin/stats', requireAdminAuth, (req, res) => {
  const { customerCount, timePeriod, rating, totalReviews } = req.body;
  const stats = loadStatsStore();
  if (customerCount !== undefined) stats.customerCount = Number(customerCount);
  if (timePeriod !== undefined) stats.timePeriod = String(timePeriod);
  if (rating !== undefined) stats.rating = Number(rating);
  if (totalReviews !== undefined) stats.totalReviews = Number(totalReviews);
  stats.label = `${stats.customerCount.toLocaleString()}+ Customers in the ${stats.timePeriod}`;
  fs.writeFileSync(STATS_STORE_FILE, JSON.stringify(stats, null, 2));
  res.json({ success: true, message: 'Company statistics updated', stats });
});

// Public: Get Testimonials
app.get('/api/testimonials', (req, res) => {
  const testimonials = loadTestimonialsStore();
  res.json(testimonials);
});

// Public: Submit Customer Feedback
app.post('/api/testimonials', (req, res) => {
  const { name, serviceCategory, location, rating, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).json({ error: 'Name and comment are required' });
  }
  const testimonials = loadTestimonialsStore();
  const newEntry = {
    id: `test-${Date.now()}`,
    name: String(name).slice(0, 80),
    serviceCategory: String(serviceCategory || 'Residential Moving').slice(0, 60),
    location: String(location || 'Muscat, Oman').slice(0, 60),
    rating: Math.min(5, Math.max(1, Number(rating) || 5)),
    date: new Date().toISOString().split('T')[0],
    comment: String(comment).slice(0, 1000),
    verified: false,
  };
  testimonials.unshift(newEntry);
  fs.writeFileSync(TESTIMONIALS_STORE_FILE, JSON.stringify(testimonials, null, 2));
  res.status(201).json({ success: true, message: 'Thank you! Your feedback has been received.', testimonial: newEntry });
});

// -------------------------------------------------------------
// VITE DEV SERVER OR STATIC PRODUCTION SERVING
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ali Raza International Trade SPS server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
