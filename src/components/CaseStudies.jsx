import { motion } from "framer-motion";
import { CASE_STUDIES } from "../lib/constants";
import { ArrowUpRight, TrendingUp } from "lucide-react";

function MetricRow({ label, before, after }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4 py-3 border-t border-white/5 first:border-t-0">
      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/40">{label}</span>
      <span className="text-sm text-white/45 line-through font-mono">{before}</span>
      <span className="text-sm font-heading font-bold text-neon flex items-center gap-1.5">
        <TrendingUp size={13} /> {after}
      </span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" data-testid="case-studies-section" className="relative py-24 md:py-32">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-neon/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="label-tag">
            <span className="w-6 h-px bg-neon" /> Campaign Results
          </span>
          <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
            Real campaigns. <span className="text-gradient">Measurable lift.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.article
              key={cs.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`case-study-${i}`}
              className="group relative glass rounded-2xl p-7 neon-border-hover overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-neon">{cs.category}</span>
                  <h3 className="mt-2 font-heading font-bold text-xl text-white tracking-tight leading-tight">{cs.brand}</h3>
                </div>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-neon group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">{cs.summary}</p>

              <div className="mt-6 rounded-xl bg-white/[0.02] border border-white/5 p-4">
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Metric</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Before</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">After</span>
                </div>
                <MetricRow label="Reach" before={cs.before.reach} after={cs.after.reach} />
                <MetricRow label="ER" before={cs.before.er} after={cs.after.er} />
                <MetricRow label="ROAS" before={cs.before.roas} after={cs.after.roas} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
