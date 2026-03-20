export interface IngredientDetail {
  name: string;
  dosage: string;
  unit: string;
  description: string;
  clinicalDose: string;
  category?: string;
}

export interface Flavor {
  id: string;
  name: string;
  color: string;
  inStock: boolean;
}

export interface Size {
  id: string;
  label: string;
  servings: number;
  price: number;
  compareAtPrice?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
  helpful: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: "pre-workout" | "protein" | "aminos" | "health" | "apparel";
  benefits: string[];
  servings: number;
  scoopSize: string;
  caffeineContent?: number;
  isStimFree: boolean;
  price: number;
  compareAtPrice?: number;
  images: string[];
  flavors: Flavor[];
  sizes: Size[];
  ingredients: IngredientDetail[];
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
  relatedProducts: string[];
  stacksWith: string[];
  badges: string[];
  subscriptionEligible: boolean;
  subscriptionDiscount: number;
  inStock: boolean;
  lowStockThreshold: number;
  accentColor: "blue" | "red" | "gold";
}

export const products: Product[] = [
  {
    id: "prod_ascension",
    name: "ASCENSION",
    slug: "ascension",
    tagline: "Rise above your limits",
    description:
      "Ascension is our flagship pre-workout formula designed to elevate every dimension of your training. Clinically dosed ingredients for energy, focus, pumps, and endurance — with full label transparency. No proprietary blends. No compromises.",
    category: "pre-workout",
    benefits: ["Energy", "Focus", "Performance"],
    servings: 30,
    scoopSize: "13g",
    caffeineContent: 250,
    isStimFree: false,
    price: 49.99,
    compareAtPrice: 59.99,
    images: ["/images/products/ascension-main.jpg"],
    flavors: [
      { id: "citrus-mango", name: "Citrus Mango", color: "#f5a623", inStock: true },
      { id: "arctic-blast", name: "Arctic Blast", color: "#4a9ed8", inStock: true },
      { id: "blood-orange", name: "Blood Orange", color: "#d4542a", inStock: false },
    ],
    sizes: [
      { id: "30srv", label: "30 Servings", servings: 30, price: 49.99, compareAtPrice: 59.99 },
      { id: "60srv", label: "60 Servings", servings: 60, price: 89.99, compareAtPrice: 109.99 },
    ],
    ingredients: [
      {
        name: "L-Citrulline",
        dosage: "8000",
        unit: "mg",
        description:
          "Boosts nitric oxide production for enhanced blood flow and massive pumps. Supports endurance and reduces fatigue during intense training.",
        clinicalDose: "6000-8000mg",
        category: "Pump & Performance",
      },
      {
        name: "Beta-Alanine",
        dosage: "3200",
        unit: "mg",
        description:
          "Buffers lactic acid buildup, allowing you to push through more reps and extend your training capacity.",
        clinicalDose: "3200-6400mg",
        category: "Pump & Performance",
      },
      {
        name: "Betaine Anhydrous",
        dosage: "2500",
        unit: "mg",
        description:
          "Supports power output, muscle endurance, and cellular hydration. Enhances body composition over time.",
        clinicalDose: "2500mg",
        category: "Pump & Performance",
      },
      {
        name: "Taurine",
        dosage: "2000",
        unit: "mg",
        description:
          "Supports cell hydration, reduces oxidative stress, and enhances endurance performance.",
        clinicalDose: "1000-2000mg",
        category: "Pump & Performance",
      },
      {
        name: "Nitrosigine®",
        dosage: "1500",
        unit: "mg",
        description:
          "Patented complex that boosts nitric oxide for up to 6 hours. Enhances blood flow, pumps, and cognitive function.",
        clinicalDose: "1500mg",
        category: "Pump & Performance",
      },
      {
        name: "Caffeine Anhydrous",
        dosage: "250",
        unit: "mg",
        description:
          "Clean, fast-acting energy that enhances focus, alertness, and training intensity without the crash.",
        clinicalDose: "200-400mg",
        category: "Energy & Focus",
      },
      {
        name: "Alpha-GPC (50%)",
        dosage: "600",
        unit: "mg",
        description:
          "Premium choline source for enhanced mind-muscle connection, focus, and cognitive performance during training.",
        clinicalDose: "300-600mg",
        category: "Energy & Focus",
      },
      {
        name: "L-Tyrosine",
        dosage: "1000",
        unit: "mg",
        description:
          "Amino acid precursor to dopamine and norepinephrine. Supports focus and mental clarity under stress.",
        clinicalDose: "500-2000mg",
        category: "Energy & Focus",
      },
      {
        name: "Rhodiola Rosea",
        dosage: "300",
        unit: "mg",
        description:
          "Adaptogenic herb that reduces perceived exertion, fights fatigue, and supports recovery.",
        clinicalDose: "200-600mg",
        category: "Energy & Focus",
      },
    ],
    reviews: [
      {
        id: "rev_1",
        author: "Marcus T.",
        rating: 5,
        date: "2025-12-15",
        title: "Best pre-workout I've ever used",
        body: "The focus and energy from Ascension is unmatched. No jitters, no crash, just clean energy and incredible pumps. The Citrus Mango flavor is amazing too.",
        verified: true,
        helpful: 24,
      },
      {
        id: "rev_2",
        author: "Sarah K.",
        rating: 5,
        date: "2025-11-28",
        title: "Finally a transparent formula",
        body: "Love that every ingredient is clinically dosed and clearly listed. I can actually see what I'm putting in my body. The performance is next level.",
        verified: true,
        helpful: 18,
      },
      {
        id: "rev_3",
        author: "Jake W.",
        rating: 4,
        date: "2025-11-10",
        title: "Great energy, solid pumps",
        body: "Really solid pre-workout. The energy hits smooth and lasts the whole session. Beta-alanine tingles hit different at this dose. Would love to see more flavors.",
        verified: true,
        helpful: 12,
      },
      {
        id: "rev_4",
        author: "Diana R.",
        rating: 5,
        date: "2025-10-22",
        title: "Game changer for morning workouts",
        body: "I train at 5am and this gets me locked in within 20 minutes. The Alpha-GPC makes such a difference for mind-muscle connection.",
        verified: true,
        helpful: 15,
      },
      {
        id: "rev_5",
        author: "Chris B.",
        rating: 5,
        date: "2025-10-05",
        title: "Premium quality, worth every penny",
        body: "You can tell this is a step above other pre-workouts. The ingredient quality and dosing is spot on. Subscribed for monthly delivery.",
        verified: true,
        helpful: 21,
      },
    ],
    averageRating: 4.8,
    reviewCount: 127,
    relatedProducts: ["warpath", "dominus"],
    stacksWith: ["warpath"],
    badges: ["Best Seller", "New"],
    subscriptionEligible: true,
    subscriptionDiscount: 15,
    inStock: true,
    lowStockThreshold: 10,
    accentColor: "blue",
  },
  {
    id: "prod_warpath",
    name: "WARPATH",
    slug: "warpath",
    tagline: "Unleash the pump",
    description:
      "Warpath is our stimulant-free pump and performance formula. Designed to be stacked with Ascension or used standalone for those who train late. Maximum blood flow, skin-splitting pumps, and enhanced endurance without a single milligram of caffeine.",
    category: "pre-workout",
    benefits: ["Pump", "Blood Flow", "Endurance"],
    servings: 30,
    scoopSize: "11g",
    isStimFree: true,
    price: 44.99,
    compareAtPrice: 54.99,
    images: ["/images/products/warpath-main.jpg"],
    flavors: [
      { id: "crimson-fury", name: "Crimson Fury", color: "#8b3a3a", inStock: true },
      { id: "grape-surge", name: "Grape Surge", color: "#6b3fa0", inStock: true },
    ],
    sizes: [
      { id: "30srv", label: "30 Servings", servings: 30, price: 44.99, compareAtPrice: 54.99 },
    ],
    ingredients: [
      {
        name: "L-Citrulline",
        dosage: "8000",
        unit: "mg",
        description:
          "Maximum dose for extreme nitric oxide production and blood flow enhancement.",
        clinicalDose: "6000-8000mg",
        category: "Pump Matrix",
      },
      {
        name: "GlycerPump™",
        dosage: "3000",
        unit: "mg",
        description:
          "Hyper-hydrates muscles for fuller, harder pumps that last well beyond your training session.",
        clinicalDose: "2000-3000mg",
        category: "Pump Matrix",
      },
      {
        name: "Nitrosigine®",
        dosage: "1500",
        unit: "mg",
        description:
          "Patented ingredient for sustained nitric oxide elevation and enhanced blood flow.",
        clinicalDose: "1500mg",
        category: "Pump Matrix",
      },
      {
        name: "Betaine Anhydrous",
        dosage: "2500",
        unit: "mg",
        description:
          "Supports power output and muscle cell volumization for enhanced performance.",
        clinicalDose: "2500mg",
        category: "Performance",
      },
      {
        name: "Pink Himalayan Salt",
        dosage: "1000",
        unit: "mg",
        description:
          "Electrolyte support for hydration, pumps, and sustained muscular performance.",
        clinicalDose: "500-1500mg",
        category: "Performance",
      },
      {
        name: "S7®",
        dosage: "50",
        unit: "mg",
        description:
          "Plant-based nitric oxide booster shown to increase NO levels by up to 230%.",
        clinicalDose: "50mg",
        category: "Pump Matrix",
      },
    ],
    reviews: [
      {
        id: "rev_w1",
        author: "Tyler M.",
        rating: 5,
        date: "2025-12-01",
        title: "Insane pumps without stims",
        body: "Perfect for my evening workouts. The pumps are absolutely ridiculous. Stacking with Ascension on morning sessions is the ultimate combo.",
        verified: true,
        helpful: 19,
      },
      {
        id: "rev_w2",
        author: "Amanda L.",
        rating: 5,
        date: "2025-11-15",
        title: "Best non-stim I've tried",
        body: "I'm caffeine sensitive so this is perfect for me. The GlycerPump makes such a noticeable difference. Arms look crazy during bicep day.",
        verified: true,
        helpful: 14,
      },
      {
        id: "rev_w3",
        author: "Derek H.",
        rating: 4,
        date: "2025-10-30",
        title: "Solid pump formula",
        body: "Great product, the pumps are real. Tastes good too. Would like to see a larger size option.",
        verified: true,
        helpful: 8,
      },
    ],
    averageRating: 4.7,
    reviewCount: 89,
    relatedProducts: ["ascension", "dominus"],
    stacksWith: ["ascension"],
    badges: ["Popular"],
    subscriptionEligible: true,
    subscriptionDiscount: 15,
    inStock: true,
    lowStockThreshold: 15,
    accentColor: "red",
  },
  {
    id: "prod_dominus",
    name: "DOMINUS",
    slug: "dominus",
    tagline: "Command your performance",
    description:
      "Dominus is our everyday performance formula — moderate stimulant energy combined with nootropics and endurance compounds. Designed for athletes who train hard every day and need consistent energy without overstimulation.",
    category: "pre-workout",
    benefits: ["Performance", "Drive", "Stamina"],
    servings: 30,
    scoopSize: "13g",
    caffeineContent: 150,
    isStimFree: false,
    price: 47.99,
    compareAtPrice: 57.99,
    images: ["/images/products/dominus-main.jpg"],
    flavors: [
      { id: "dark-cherry", name: "Dark Cherry", color: "#7a2532", inStock: true },
      { id: "tropical-storm", name: "Tropical Storm", color: "#2d8a6e", inStock: true },
    ],
    sizes: [
      { id: "30srv", label: "30 Servings", servings: 30, price: 47.99, compareAtPrice: 57.99 },
      { id: "60srv", label: "60 Servings", servings: 60, price: 84.99, compareAtPrice: 104.99 },
    ],
    ingredients: [
      {
        name: "L-Citrulline",
        dosage: "6000",
        unit: "mg",
        description:
          "Clinical dose for enhanced blood flow and performance without the massive pump focus of Warpath.",
        clinicalDose: "6000-8000mg",
        category: "Performance",
      },
      {
        name: "Beta-Alanine",
        dosage: "3200",
        unit: "mg",
        description:
          "Endurance support through lactic acid buffering for extended training sessions.",
        clinicalDose: "3200-6400mg",
        category: "Performance",
      },
      {
        name: "Betaine Anhydrous",
        dosage: "2500",
        unit: "mg",
        description:
          "Power output and cellular hydration for consistent daily performance.",
        clinicalDose: "2500mg",
        category: "Performance",
      },
      {
        name: "Caffeine Anhydrous",
        dosage: "150",
        unit: "mg",
        description:
          "Moderate energy for daily use without tolerance buildup or afternoon crashes.",
        clinicalDose: "200-400mg",
        category: "Energy & Focus",
      },
      {
        name: "L-Theanine",
        dosage: "200",
        unit: "mg",
        description:
          "Smooths out caffeine for calm, focused energy. Reduces jitters and anxiety.",
        clinicalDose: "100-200mg",
        category: "Energy & Focus",
      },
      {
        name: "Alpha-GPC (50%)",
        dosage: "300",
        unit: "mg",
        description:
          "Enhanced mind-muscle connection and cognitive support during training.",
        clinicalDose: "300-600mg",
        category: "Energy & Focus",
      },
      {
        name: "Lion's Mane Extract",
        dosage: "500",
        unit: "mg",
        description:
          "Nootropic mushroom supporting neurogenesis, focus, and long-term brain health.",
        clinicalDose: "500-1000mg",
        category: "Energy & Focus",
      },
    ],
    reviews: [
      {
        id: "rev_d1",
        author: "Ryan P.",
        rating: 5,
        date: "2025-12-10",
        title: "Perfect everyday pre",
        body: "Not everyone needs 400mg of caffeine. This is perfectly balanced for daily training. I use Ascension for PR days and Dominus for everything else.",
        verified: true,
        helpful: 22,
      },
      {
        id: "rev_d2",
        author: "Jessica M.",
        rating: 4,
        date: "2025-11-20",
        title: "Love the nootropic blend",
        body: "The Lion's Mane and L-Theanine combo is amazing for focus. Energy is smooth and sustained. Great for afternoon sessions.",
        verified: true,
        helpful: 16,
      },
      {
        id: "rev_d3",
        author: "Anthony G.",
        rating: 5,
        date: "2025-11-02",
        title: "Underrated product",
        body: "People sleep on moderate-stim pre-workouts. This delivers exactly what I need day in and day out without burning out my adrenals.",
        verified: true,
        helpful: 11,
      },
    ],
    averageRating: 4.7,
    reviewCount: 74,
    relatedProducts: ["ascension", "warpath"],
    stacksWith: ["warpath"],
    badges: ["New"],
    subscriptionEligible: true,
    subscriptionDiscount: 15,
    inStock: true,
    lowStockThreshold: 20,
    accentColor: "red",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products.filter((p) => product.relatedProducts.includes(p.slug));
}
