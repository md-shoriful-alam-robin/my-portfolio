'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ─── CMS INTEGRATION POINT ───────────────────────────────────────────
// Replace static TESTIMONIALS with Sanity / Strapi fetch when ready.
// ─────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'E-commerce Owner, UK',
    body: 'Robin built us a beautiful React storefront in record time. His attention to detail and communication were exceptional.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Ahmed K.',
    role: 'Marketing Manager, UAE',
    body: 'The Power BI dashboards Robin delivered completely changed how we track KPIs. Clean, fast, and insightful.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Lisa T.',
    role: 'Startup Founder, Canada',
    body: 'Our SEO traffic doubled in 3 months after Robin overhauled our Google Business Profile and on-page SEO.',
    rating: 5,
    avatar: '👩‍🚀',
  },
]

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.span
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        className="section-label text-center block"
      >
        // testimonials
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl font-extrabold text-snow text-center mb-14"
      >
        Client <span className="shimmer-text">Voices</span>
      </motion.h2>

      <div className="grid sm:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
            className="glass p-6 rounded-2xl hover:border-teal/30 hover:shadow-teal-glow transition-all duration-300 flex flex-col gap-4"
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <span key={j} className="text-amber-400 text-sm">★</span>
              ))}
            </div>

            <p className="text-mist text-sm leading-relaxed flex-1">"{t.body}"</p>

            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
              <span className="text-2xl">{t.avatar}</span>
              <div>
                <p className="text-snow text-xs font-semibold">{t.name}</p>
                <p className="text-mist/60 text-[11px] font-mono">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Review CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="https://g.page/r/CWWS0AcK_BksEAE/review"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-400/30 text-amber-400 text-sm font-semibold hover:bg-amber-400/10 transition-all duration-200"
        >
          ⭐ Leave a Google Review
        </a>
      </motion.div>
    </section>
  )
}
