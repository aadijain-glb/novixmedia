import { motion } from "framer-motion";
import Stat from "./Stat";
import { STATS } from "../lib/constants";
import { Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative ambient blob */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="label-tag">
              <span className="w-6 h-px bg-neon" /> About the Agency
            </span>
            <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
              We build the bridge between <span className="text-gradient">culture</span> and{" "}
              <span className="text-gradient">commerce</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-white/65 text-base md:text-lg leading-relaxed"
          >
            <p>
              Novix Media is a full-stack influencer marketing agency operating at the intersection of
              talent, performance and brand. We work with the world's most ambitious companies and
              creators to engineer campaigns that don't just trend — they convert.
            </p>
            <p className="text-white/55">
              From editorial-grade launches to high-performance UGC engines, every engagement is
              architected around measurable lift, transparent attribution and creators we'd
              personally invest in.
            </p>

            {/* Badge pills with glow effect */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["First-party Attribution", "Brand-Safe Network", "Performance Guarantee"].map((b) => (
                <span key={b} className="px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.18em] font-semibold text-white/70 hover:text-neon hover:border-neon/40 transition-all duration-300 cursor-default">
                  {b}
                </span>
              ))}
            </div>

            {/* Quick highlight card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-strong rounded-2xl p-5 border border-neon/20 bg-neon/[0.02] flex items-center gap-4 mt-4"
            >
              <div className="w-11 h-11 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shrink-0">
                <Zap size={20} className="text-neon" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Zero-lag execution model</div>
                <div className="text-xs text-white/50 mt-0.5">Average campaign launch time: 72 hours from brief sign-off.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div data-testid="stats-grid" className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (<Stat key={s.label} {...s} index={i} />))}
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="section-divider mt-24 mx-auto max-w-5xl" />
    </section>
  );
}