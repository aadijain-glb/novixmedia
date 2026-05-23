import { motion } from "framer-motion";
import { SERVICES } from "../lib/constants";
import { Megaphone, Handshake, Camera, Users, LineChart, Zap, TrendingUp } from "lucide-react";
import { Instagram } from "./Icons";

const ICONS = [Megaphone, Handshake, Camera, Instagram, TrendingUp, Users, LineChart, Zap];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 radial-fade" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-deep/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="label-tag">
            <span className="w-6 h-px bg-neon" /> What We Do
          </span>
          <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
            A premium suite engineered for <span className="text-gradient">scale</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                data-testid={`service-card-${s.code}`}
                className="group relative glass rounded-2xl p-7 neon-border-hover overflow-hidden h-full flex flex-col"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-neon/0 group-hover:bg-neon/15 rounded-full blur-3xl transition-all duration-500" />
                <div className="flex items-center justify-between mb-6 relative">
                  <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center text-neon group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/30">{s.code}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-neon opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore service
                  <span className="w-4 h-px bg-neon" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}