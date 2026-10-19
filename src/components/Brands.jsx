import { useState, useRef } from "react";
import MarqueeComponent from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Building2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Image as ImageIcon,
  Heart
} from "lucide-react";
import { BRANDS, BRAND_COLLABORATIONS } from "../lib/constants";

const Marquee = MarqueeComponent.default || MarqueeComponent;

export default function Brands() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);

  const currentBrand = BRAND_COLLABORATIONS[activeTab] || BRAND_COLLABORATIONS[0];

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % BRAND_COLLABORATIONS.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + BRAND_COLLABORATIONS.length) % BRAND_COLLABORATIONS.length);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="brands" data-testid="brands-section" className="relative py-20 md:py-28 border-y border-white/10 overflow-hidden bg-ink-900/60">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-neon/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div>
            <span className="label-tag mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} className="text-neon animate-pulse" />
              Brand Showcase
            </span>
            <h2 className="mt-2 font-heading font-black text-3xl md:text-5xl tracking-tight text-white leading-tight">
              Recent <span className="text-gradient">Collaborations</span>.
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm">
            Click on any brand tab below to view campaign product shots, creator highlights, and key results.
          </p>
        </motion.div>

        {/* Scrollable Tabs Bar */}
        <div className="relative mb-8 flex items-center gap-2">
          <button
            onClick={() => scrollTabs("left")}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass border border-white/10 text-white/70 hover:text-neon hover:border-neon/40 transition shrink-0 z-10"
            aria-label="Scroll tabs left"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable Tabs Track */}
          <div
            ref={tabsRef}
            className="flex items-center gap-3 overflow-x-auto scrollbar-none py-2 px-1 w-full scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BRAND_COLLABORATIONS.map((brand, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={brand.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center gap-3 px-5 py-3 rounded-2xl font-heading font-bold text-sm transition-all duration-300 shrink-0 border ${
                    isActive
                      ? "bg-white/[0.08] text-white border-neon shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-[1.02]"
                      : "bg-white/[0.02] text-white/60 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {/* Logo or Initials badge in Tab */}
                  {brand.logo ? (
                    <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <span className={`text-xs px-2 py-0.5 rounded-md font-mono font-bold ${isActive ? "bg-neon text-ink-900" : "bg-white/10 text-white/60"}`}>
                      0{index + 1}
                    </span>
                  )}

                  <span>{brand.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-2xl border border-neon/60 pointer-events-none shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass border border-white/10 text-white/70 hover:text-neon hover:border-neon/40 transition shrink-0 z-10"
            aria-label="Scroll tabs right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Visual Brand Photo Card Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBrand.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="glass-strong rounded-3xl p-6 md:p-10 border border-white/15 relative overflow-hidden shadow-2xl"
          >
            {/* Soft Ambient Color Glow */}
            <div className={`absolute -top-20 -right-20 w-[450px] h-[450px] bg-gradient-to-br ${currentBrand.accentColor} rounded-full blur-[130px] opacity-80 pointer-events-none`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Side: Campaign Photo Showcase */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 glass group shadow-2xl bg-black/40">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full flex items-center justify-center p-4 overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                    {currentBrand.productImage ? (
                      <img
                        src={currentBrand.productImage}
                        alt={`${currentBrand.name} Product Showcase`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-white/40">
                        <ImageIcon size={48} />
                        <span className="text-xs">Campaign Visual</span>
                      </div>
                    )}
                  </div>

                  {/* Photo Caption Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl glass-strong border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Heart size={14} className="text-pink-400 fill-pink-400/30" />
                      <span className="text-xs font-semibold text-white/90">Campaign Content Showcase</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-neon bg-neon/10 px-2 py-0.5 rounded-md border border-neon/20">
                      Verified Campaign
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Clean Visual Info & Stat Badges */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Brand Header */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      {currentBrand.logo ? (
                        <div className="w-14 h-14 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg border border-white/20">
                          <img src={currentBrand.logo} alt={currentBrand.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center font-heading font-black text-xl text-white shadow-inner">
                          {currentBrand.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight">
                          {currentBrand.name}
                        </h3>
                        <p className="text-xs text-white/60">{currentBrand.tagline}</p>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-neon/10 border border-neon/30 text-neon">
                      {currentBrand.badge}
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    {currentBrand.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-white/40">
                    Campaign Highlights
                  </div>
                  {currentBrand.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90 glass px-3.5 py-2.5 rounded-xl border border-white/10">
                      <CheckCircle2 size={15} className="text-neon shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stat Cards Row */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                  <div className="glass p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-0.5">
                      {currentBrand.metricLabel}
                    </div>
                    <div className={`font-heading font-black text-2xl md:text-3xl bg-gradient-to-r ${currentBrand.gradientText} bg-clip-text text-transparent`}>
                      {currentBrand.metric}
                    </div>
                  </div>

                  <div className="glass p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-0.5">
                      {currentBrand.secondaryMetricLabel}
                    </div>
                    <div className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                      {currentBrand.secondaryMetric}
                    </div>
                  </div>
                </div>

                {/* Bottom Controls & CTA */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-neon hover:border-neon/40 transition"
                      aria-label="Previous Brand"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-xs font-mono text-white/40 px-1">
                      0{activeTab + 1} / 0{BRAND_COLLABORATIONS.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-neon hover:border-neon/40 transition"
                      aria-label="Next Brand"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <a href="#contact" className="btn-neon !px-5 !py-2.5 !text-xs flex items-center gap-1.5">
                    <span>Collaborate</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Infinite Brand Marquee Ticker */}
      <div
        className="relative mt-12 py-5 border-y border-white/5 bg-white/[0.01]"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <Marquee gradient={false} speed={35} pauseOnHover>
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brandName, i) => (
            <div
              key={`${brandName}-${i}`}
              data-testid={`brand-logo-${i}`}
              className="group mx-8 md:mx-12 flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-neon/40 hover:bg-neon/10 transition-all duration-300 cursor-pointer"
            >
              <Building2 size={16} className="text-white/40 group-hover:text-neon transition-colors" />
              <span className="font-heading font-bold text-lg md:text-xl tracking-wider text-white/70 group-hover:text-white transition-all duration-300">
                {brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon/50 group-hover:bg-neon group-hover:shadow-[0_0_8px_#00F0FF]" />
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
