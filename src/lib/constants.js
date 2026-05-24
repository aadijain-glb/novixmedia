export const AGENCY = {
  name: "Novix Media",
  tagline: "Influencer Marketing Agency",
  email: "contact@novixmedia.com",
  address: "Delhi NCR",
  location: "Delhi NCR",
  socials: {
    instagram: "https://www.instagram.com/novixmedia_/",
    linkedin: "https://www.linkedin.com/in/novix-media-9785b5411/",
  },
};

export const STATS = [
  { label: "Worked With Influencers", value: 200, suffix: "+" },
  { label: "Campaign Executed", value: 100, suffix: "+" },
  { label: "Brand Collaborations", value: 50, suffix: "+" },
  { label: "Client Retention", value: 85, suffix: "%" },
];

export const SERVICES = [
  { title: "Influencer Marketing", desc: "Hand-picked creator partnerships engineered to convert attention into revenue.", code: "01" },
  { title: "Brand Deals", desc: "End-to-end negotiation, contracting and execution for category-defining collaborations.", code: "02" },
  { title: "UGC Campaigns", desc: "Authentic creator-led content that ad platforms love and audiences trust.", code: "03" },
  { title: "Instagram Growth", desc: "Story-driven scaling playbooks that compound followers, saves and shares.", code: "04" },
  // { title: "Performance Marketing", desc: "ROI-focused campaigns engineered to convert creator mindshare into customer acquisition.", code: "05" },
  { title: "Talent Management", desc: "Full-service representation for creators ready to operate like a brand.", code: "06" },
  // { title: "Social Media Strategy", desc: "Channel architecture, content systems and analytics — built to outlast trends.", code: "07" },
  { title: "Paid Campaigns", desc: "Meta and Instagram ads engineered around your highest-performing creators.", code: "08" },
];

export const CREATORS = [
  { name: "Alessia Moreau", handle: "@alessia.m", category: "Fashion · Lifestyle", followers: "4.2M", engagement: "8.6%", img: "https://images.unsplash.com/photo-1768609957061-476e4acc7634?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMGRhcmslMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3NzkzOTgxMDV8MA&ixlib=rb-4.1.0&q=85" },
  { name: "Marcus Vance", handle: "@marcusv", category: "Tech · Finance", followers: "2.8M", engagement: "11.2%", img: "https://images.pexels.com/photos/20096042/pexels-photo-20096042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { name: "Reya Okafor", handle: "@reya.ok", category: "Beauty · Editorial", followers: "5.6M", engagement: "9.4%", img: "https://images.pexels.com/photos/18393751/pexels-photo-18393751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { name: "Kai Sterling", handle: "@kaisterling", category: "Fitness · Travel", followers: "3.1M", engagement: "12.8%", img: "https://images.unsplash.com/photo-1769650795529-18ad9d78cd5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMGRhcmslMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3NzkzOTgxMDV8MA&ixlib=rb-4.1.0&q=85" },
];

export const BRANDS = [
  "Fello", "Gullak", "Siply", "Junio"
];

export const CASE_STUDIES = [
  {
    brand: "AURUM × Reya Okafor",
    category: "Beauty Launch",
    before: { reach: "120K", er: "2.1%", roas: "1.4x" },
    after: { reach: "18.4M", er: "9.4%", roas: "6.8x" },
    summary: "Editorial-first launch campaign across 14 creators. Sold out hero SKU in 11 days.",
  },
  {
    brand: "NOVA × Marcus Vance",
    category: "Fintech Acquisition",
    before: { reach: "85K", er: "1.7%", roas: "0.9x" },
    after: { reach: "9.2M", er: "11.2%", roas: "5.3x" },
    summary: "High-impact creator integrations + paid amplification drove a 412% lift in qualified signups.",
  },
  {
    brand: "HELIX × Kai Sterling",
    category: "Performance Apparel",
    before: { reach: "240K", er: "3.4%", roas: "2.1x" },
    after: { reach: "24.7M", er: "12.8%", roas: "8.4x" },
    summary: "Creator-native UGC system producing 80+ assets / month feeding a $1.8M paid pipeline.",
  },
];

export const TESTIMONIALS = [
  { name: "Sienna Park", role: "CMO, AURUM", quote: "Novix Media didn't just run a campaign — they architected the launch that defined our brand for a generation." },
  { name: "Jordan Reeves", role: "Founder, NOVA", quote: "The most operationally rigorous influencer team we've worked with. Every dollar is accounted for, every result is real." },
  { name: "Amelia Cho", role: "VP Growth, HELIX", quote: "8.4x ROAS in a category that traditionally returns 2x. They turn creator relationships into infrastructure." },
  { name: "David Okonkwo", role: "Head of Brand, ORBIT", quote: "They think like a fund, execute like an agency, and treat creators like founders. Rare combination." },
];

export const WHY = [
  { title: "Compounding Growth", desc: "Strategies designed to keep paying back long after the campaign window closes." },
  { title: "Vetted Creator Network", desc: "Every partner is hand-picked, brand-safe and engagement-audited before introduction." },
  { title: "Data-Driven Strategy", desc: "First-party attribution, lift studies and cohort analytics behind every decision." },
  { title: "Viral Campaign Expertise", desc: "Proprietary playbooks shipped across 50+ campaigns and 100+ in audience reach." },
];

const getEnvValue = (key, fallback) => {
  const val = import.meta.env[key];
  if (val && val !== `YOUR_${key.substring(13)}` && val !== 'your_service_id' && val !== 'your_template_id' && val !== 'your_public_key' && val !== 'your_private_key') {
    return val;
  }
  return fallback;
};

export const EMAILJS_CONFIG = {
  SERVICE_ID: getEnvValue('VITE_EMAILJS_SERVICE_ID', 'service_dsgasw1'),
  TEMPLATE_ID: getEnvValue('VITE_EMAILJS_TEMPLATE_ID', 'template_051qmwb'),
  PUBLIC_KEY: getEnvValue('VITE_EMAILJS_PUBLIC_KEY', '0q3bqcB9LCs1irUQZ'),
};