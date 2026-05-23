import { motion } from "framer-motion";
import { WHY } from "../lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="why" data-testid="why-section" className="relative py-24 md:py-32">
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
          </motion.div>

          <div className="lg:col-span-7 relative pl-10 md:pl-14">
            <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-neon/40 to-transparent" />

            <div className="space-y-10">
              {WHY.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  data-testid={`why-item-${i}`}
                  className="relative"
                >
                  <div className="absolute -left-10 md:-left-14 top-1.5 w-7 h-7 rounded-full glass-strong flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">0{i + 1}</span>
                  <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">{w.title}</h3>
                  <p className="mt-3 text-white/55 leading-relaxed max-w-lg">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}