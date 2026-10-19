import { motion } from "framer-motion";
import { SERVICES } from "../lib/constants";
import { Megaphone, Handshake, Camera, Users, LineChart, Zap, TrendingUp, ArrowUpRight } from "lucide-react";
import { Instagram } from "./Icons";

const ICONS = [Megaphone, Handshake, Camera, Instagram, Users, Zap];

const ACCENT_COLORS = [
  "from-cyan-500/20 to-blue-600/10",
  "from-purple-500/20 to-pink-500/10",
  "from-amber-500/20 to-orange-500/10",
  "from-rose-500/20 to-pink-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-sky-500/20 to-indigo-500/10",
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 radial-fade" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-deep/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="label-tag">
              <span className="w-6 h-px bg-neon" /> What We Do
            </span>
            <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
              A premium suite engineered for <span className="text-gradient">scale</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm max-w-sm"
          >
            End-to-end creator marketing infrastructure — from discovery to attribution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                data-testid={`service-card-${s.code}`}
                className="group relative glass rounded-2xl p-7 neon-border-hover overflow-hidden h-full flex flex-col"
              >
                {/* Ambient accent glow on hover */}
                <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${ACCENT_COLORS[i]} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />

                <div className="flex items-center justify-between mb-6 relative">
                  <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-neon group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/30 font-mono">{s.code}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white tracking-tight group-hover:text-neon transition-colors duration-300">{s.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-neon opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="section-divider mt-24 mx-auto max-w-5xl" />
    </section>
  );
}