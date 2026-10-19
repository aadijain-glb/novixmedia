import { motion } from "framer-motion";
import { CREATORS } from "../lib/constants";
import { TrendingUp, Users, Sparkles } from "lucide-react";

export default function Creators() {
  return (
    <section id="creators" data-testid="creators-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-neon/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="label-tag">
              <Sparkles size={14} className="text-neon" /> Featured Creators
            </span>
            <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
              Talent that <span className="text-gradient">moves markets</span>.
            </h2>
          </motion.div>
          <p className="text-white/55 text-sm md:max-w-sm">
            A curated roster spanning beauty, fashion, fitness, fintech and lifestyle — vetted for
            engagement quality, audience overlap and brand safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CREATORS.map((c, i) => (
            <motion.article
              key={c.handle}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              data-testid={`creator-card-${i}`}
              className="group relative rounded-2xl overflow-hidden glass neon-border-hover"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
              </div>

              {/* Category pill at top */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full glass-strong text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 shadow-lg">
                  {c.category}
                </span>
              </div>

              {/* Neon glow ring on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl shadow-[inset_0_0_30px_rgba(0,240,255,0.1)]" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-black text-2xl text-white tracking-tight group-hover:text-neon transition-colors duration-300">{c.name}</h3>
                <p className="text-xs text-white/55 mt-0.5">{c.handle}</p>
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-white/80">
                    <Users size={13} className="text-neon" />
                    <span className="font-semibold">{c.followers}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80">
                    <TrendingUp size={13} className="text-neon" />
                    <span className="font-semibold">{c.engagement}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="section-divider mt-24 mx-auto max-w-5xl" />
    </section>
  );
}