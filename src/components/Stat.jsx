import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Stat({ value, label, prefix = "", suffix = "", decimals = 0, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const display = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`stat-card-${label.toLowerCase().replace(/\s/g, "-")}`}
      className="relative glass rounded-2xl p-8 group neon-border-hover overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/10 rounded-full blur-3xl group-hover:bg-neon/20 transition-all duration-500" />
      <div className="relative">
        <div className="font-heading font-black text-4xl md:text-5xl text-white tracking-tighter">
          {prefix}{display}<span className="text-neon">{suffix}</span>
        </div>
        <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">{label}</div>
      </div>
    </motion.div>
  );
}