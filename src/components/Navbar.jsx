import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AGENCY } from "../lib/constants";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  // { label: "Creators", href: "#creators" },
  // { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-ink-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#hero" data-testid="navbar-logo" className="flex items-center gap-2 group">
            <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-md object-cover border border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.3)]" />
            <span className="font-heading font-black text-lg tracking-tight text-white group-hover:text-neon transition-colors">
              {AGENCY.name}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" data-testid="navbar-cta-book-call" className="hidden md:inline-flex btn-neon !px-5 !py-2.5 !text-xs">
              Book a Call
            </a>
            <button
              type="button"
              data-testid="navbar-mobile-toggle"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-3 glass-strong rounded-2xl p-5 flex flex-col gap-2"
              data-testid="mobile-menu"
            >
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-white/80 hover:text-neon hover:bg-white/5 transition">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-neon mt-2 !w-full">Book a Call</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}