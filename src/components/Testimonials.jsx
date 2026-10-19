import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../lib/constants";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[i];

  const handlePrev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const handleNext = () => setI((v) => (v + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-neon/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag justify-center inline-flex">
            <span className="w-6 h-px bg-neon" /> Client Testimonials
          </span>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-1 mt-6 mb-2">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} size={16} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">Rated 5 / 5 by Our Partners</p>
        </motion.div>

        <div className="mt-10 relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              data-testid="testimonial-card"
              className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-[0_20px_80px_-20px_rgba(0,240,255,0.25)] relative overflow-hidden"
            >
              {/* Subtle shimmer accent */}
              <div className="absolute inset-0 shimmer pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                <Quote size={32} className="text-neon mx-auto mb-6 opacity-60" />
                <p className="font-heading font-medium text-xl md:text-3xl text-white leading-snug tracking-tight">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon/30 to-neon-deep/30 flex items-center justify-center text-white font-heading font-bold text-sm mb-3 border border-neon/30">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="text-white font-semibold">{t.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/45 mt-1">{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls: arrows + dots */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-neon hover:border-neon/40 transition"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-testid={`testimonial-dot-${idx}`}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-8 bg-neon shadow-[0_0_10px_rgba(0,240,255,0.5)]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-neon hover:border-neon/40 transition"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
