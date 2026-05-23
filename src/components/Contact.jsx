import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { AGENCY, EMAILJS_CONFIG } from "../lib/constants";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) =>
    setForm((p) => ({
      ...p,
      [k]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and a project brief.");
      return;
    }

    setSubmitting(true);

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitting(false);
          toast.success("Lead submitted! We will reach out within 24 hours.");
          setForm({
            name: "",
            email: "",
            company: "",
            budget: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS submission failure:", error);
          setSubmitting(false);
          toast.error("Email service is temporarily unavailable. Please try again later or email us directly.");
        }
      );
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="label-tag">
                <span className="w-6 h-px bg-neon" /> Contact Us
              </span>
              <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-[1.02]">
                Let's make something <span className="text-gradient">legendary</span>.
              </h2>
            </div>

            <p className="text-white/55 text-base leading-relaxed">
              Have a product or service designed to capture active mindshare?
              Our team operates with zero-lag response workflows. Get in touch to schedule a growth mapping audit.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon border border-white/10">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Us</p>
                  <a href={`mailto:${AGENCY.email}`} className="text-sm font-semibold hover:text-neon transition-colors">
                    {AGENCY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon border border-white/10">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Call Us</p>
                  <a href={`tel:${AGENCY.phone}`} className="text-sm font-semibold hover:text-neon transition-colors">
                    {AGENCY.phone}
                  </a>
                </div>
              </div>

              {AGENCY.whatsapp && (
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon border border-white/10">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">WhatsApp Us</p>
                    <a
                      href={`https://wa.me/${AGENCY.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold hover:text-neon transition-colors"
                    >
                      {AGENCY.whatsapp}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon border border-white/10">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Headquarters</p>
                  <span className="text-sm font-semibold">{AGENCY.address || AGENCY.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-7 glass p-5 sm:p-7 md:p-10 rounded-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="block space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Your Name *</span>
                <input
                  type="text"
                  required
                  name="name"
                  value={form.name}
                  onChange={update("name")}
                  className="form-input"
                  placeholder="Aanya Sharma"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Your Email *</span>
                <input
                  type="email"
                  required
                  name="email"
                  value={form.email}
                  onChange={update("email")}
                  className="form-input"
                  placeholder="aanya@company.com"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="block space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Company Name</span>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={update("company")}
                  className="form-input"
                  placeholder="Acme Corp"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Estimated Budget</span>
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={update("budget")}
                  className="form-input"
                  placeholder="e.g. ₹50,000"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">Project Brief *</span>
              <textarea
                rows={5}
                required
                name="message"
                value={form.message}
                onChange={update("message")}
                className="form-input resize-none"
                placeholder="Tell us about your brand goals and timeline…"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="btn-neon w-full md:w-auto group disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Request"}
              <ArrowUpRight
                size={16}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}