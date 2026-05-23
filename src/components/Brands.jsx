import MarqueeComponent from "react-fast-marquee";
import { motion } from "framer-motion";
import { BRANDS } from "../lib/constants";

const Marquee = MarqueeComponent.default || MarqueeComponent;

export default function Brands() {
  return (
    <section id="brands" data-testid="brands-section" className="relative py-20 md:py-28 border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <span className="label-tag">
            <span className="w-6 h-px bg-neon" /> Trusted Partners
          </span>
          <h2 className="mt-4 font-heading font-bold text-2xl md:text-3xl tracking-tight text-white">
            Working with category-defining brands.
          </h2>
        </div>
        <p className="text-white/45 text-sm max-w-sm">
          50+ collaborations across finance, lifestyle, fashion, beauty, ed-tech, trading, and infotainment.
        </p>
      </motion.div>

      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <Marquee gradient={false} speed={40} pauseOnHover>
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <div key={`${b}-${i}`} data-testid={`brand-logo-${i}`} className="group mx-10 md:mx-14 flex items-center justify-center">
              <span className="font-heading font-black text-2xl md:text-4xl tracking-[0.15em] text-white/30 group-hover:text-neon transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                {b}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
