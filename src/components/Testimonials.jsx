import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/constants";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-neon/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <span className="label-tag justify-center inline-flex">
          <span className="w-6 h-px bg-neon" /> Client Testimonials
        </span>

        <div className="mt-10 relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              data-testid="testimonial-card"
              className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-[0_20px_80px_-20px_rgba(0,240,255,0.25)]"
            >
              <Quote size={32} className="text-neon mx-auto mb-6 opacity-60" />
              <p className="font-heading font-medium text-xl md:text-3xl text-white leading-snug tracking-tight">
                "{t.quote}"
              </p>
              <div className="mt-8 flex flex-col items-center">
                <span className="text-white font-semibold">{t.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/45 mt-1">{t.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-testid={`testimonial-dot-${idx}`}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-8 bg-neon" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
