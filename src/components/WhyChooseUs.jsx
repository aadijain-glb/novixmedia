import { motion } from "framer-motion";
import { WHY } from "../lib/constants";
import { Rocket, ShieldCheck, BarChart3, Flame } from "lucide-react";

const WHY_ICONS = [Rocket, ShieldCheck, BarChart3, Flame];

export default function WhyChooseUs() {
  return (
    <section id="why" data-testid="why-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32 self-start"
          >
            <span className="label-tag">
              <span className="w-6 h-px bg-neon" /> Why Novix Media
            </span>
            <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
              Built for brands that <span className="text-gradient">refuse to be average</span>.
            </h2>
            <p className="mt-6 text-white/55 text-base leading-relaxed">
              Four operating principles that separate one-off campaigns from compounding programs.
            </p>

            {/* Trust badge */}
            <div className="mt-8 glass p-5 rounded-2xl border border-white/10 inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center">
                <ShieldCheck size={22} className="text-neon" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm">Trusted by 50+ Brands</div>
                <div className="text-xs text-white/50 mt-0.5">98% client retention rate</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 relative pl-10 md:pl-14">
            <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-neon/40 to-transparent" />

            <div className="space-y-8">
              {WHY.map((w, i) => {
                const Icon = WHY_ICONS[i];
                return (
                  <motion.div
                    key={w.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    data-testid={`why-item-${i}`}
                    className="relative group"
                  >
                    <div className="absolute -left-10 md:-left-14 top-1.5 w-7 h-7 rounded-full glass-strong flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow duration-500">
                      <div className="w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
                    </div>

                    <div className="glass p-6 rounded-2xl border border-white/10 group-hover:border-neon/30 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon/70">0{i + 1}</span>
                        {Icon && <Icon size={16} className="text-neon/60" />}
                      </div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight group-hover:text-neon transition-colors duration-300">{w.title}</h3>
                      <p className="mt-3 text-white/55 leading-relaxed max-w-lg">{w.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="section-divider mt-24 mx-auto max-w-5xl" />
    </section>
  );
}