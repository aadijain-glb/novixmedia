import { motion } from "framer-motion";
import { CREATORS } from "../lib/constants";
import { TrendingUp, Users } from "lucide-react";

export default function Creators() {
  return (
    <section id="creators" data-testid="creators-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="label-tag">
              <span className="w-6 h-px bg-neon" /> Featured Creators
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
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full glass-strong text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">
                  {c.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-black text-2xl text-white tracking-tight">{c.name}</h3>
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
    </section>
  );
}