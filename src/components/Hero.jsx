import { motion } from "framer-motion";
import { ArrowRight, Music2, Sparkles } from "lucide-react";
import { Instagram } from "./Icons";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/a0f67db5-e333-420b-95db-9260d32bf2cf/images/f5904fde70f5df0d98b536ba2b16f5b8dda9fcf73d41ab5551f42e421c6c9672.png";

const FLOATING = [
  { Icon: Instagram, top: "18%", left: "8%", delay: 0 },
  { Icon: Music2, top: "75%", right: "14%", delay: 0.3 },
  { Icon: Sparkles, top: "12%", right: "22%", delay: 1.5 },
];

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: (i) => ({
    y: 0, opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const headline = ["We", "Turn", "Creators", "Into", "Brands"];

  return (
    <section id="hero" data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/50 to-ink-900" />
        <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      </div>

      {FLOATING.map(({ Icon, top, left, right, delay }, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
          style={{ top, left, right }}
          className="absolute z-10 hidden md:block"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay, ease: "easeInOut" }}
            className="w-14 h-14 rounded-2xl glass flex items-center justify-center shadow-[0_8px_32px_rgba(0,240,255,0.15)]"
          >
            <Icon size={22} className="text-neon" />
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute -top-20 left-1/4 w-[480px] h-[480px] rounded-full bg-neon/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[520px] h-[520px] rounded-full bg-neon-deep/20 blur-[140px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          data-testid="hero-badge"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/80 font-semibold">
            Trusted by 50+ Brands · 100+ Reach
          </span>
        </motion.div>

        <h1 data-testid="hero-headline"
          className="font-heading font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] leading-[0.95] flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            {["We", "Turn", "Creators"].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-3 md:mr-6">
                <motion.span custom={i} variants={word} initial="hidden" animate="show"
                  className={`inline-block ${w === "Creators" ? "text-gradient neon-text" : "text-white"}`}>
                  {w}
                </motion.span>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-1 sm:mt-2">
            {["Into", "Brands"].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-3 md:mr-6">
                <motion.span custom={i + 3} variants={word} initial="hidden" animate="show"
                  className={`inline-block ${w === "Brands" ? "text-gradient neon-text" : "text-white"}`}>
                  {w}
                </motion.span>
              </span>
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-white/65 leading-relaxed"
          data-testid="hero-subheadline"
        >
          We scale ambitious brands through hand-picked creator partnerships, paid amplification
          and a content engine designed to compound — across Instagram and Youtube.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" data-testid="hero-cta-book-appointment" className="btn-neon group">
            Book an Appointment
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.3em]"
        >
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}