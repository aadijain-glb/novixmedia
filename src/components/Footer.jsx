import { Instagram, Linkedin } from "./Icons";
import { AGENCY } from "../lib/constants";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <a href="#hero" className="font-heading font-black text-3xl text-white tracking-tight">
              {AGENCY.name}
            </a>
            <p className="mt-4 text-white/50 text-sm max-w-sm leading-relaxed">
              We turn creators into brands — and brands into culture. {AGENCY.address}.
            </p>
          </div>

          <FooterCol title="Agency" links={[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Why Novix Media", href: "#why" },
          ]} />
          <FooterCol title="Connect" links={[
            { label: "Book an Appointment", href: "#contact" },
            { label: "Email", href: `mailto:${AGENCY.email}` },
            AGENCY.whatsapp ? { label: "WhatsApp", href: `https://wa.me/${AGENCY.whatsapp.replace(/\D/g, "")}` } : null,
          ].filter(Boolean)} />
        </div>

        <div className="select-none pointer-events-none mb-12 overflow-hidden">
          <div className="font-heading font-black text-[20vw] md:text-[18vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">
            {AGENCY.name}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {AGENCY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: AGENCY.socials.instagram, label: "instagram" },
              AGENCY.socials.linkedin ? { Icon: Linkedin, href: AGENCY.socials.linkedin, label: "linkedin" } : null,
            ].filter(Boolean).map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label} data-testid={`footer-social-${label}`}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-neon transition">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="md:col-span-3">
      <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-white/70 hover:text-neon transition">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}