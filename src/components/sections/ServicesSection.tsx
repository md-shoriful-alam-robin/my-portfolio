'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SERVICES = [
  {
    icon: '⚛️',
    title: 'Full Stack Development',
    desc: 'React, Next.js, Node.js, and REST APIs — pixel-perfect UIs with scalable backends.',
    tags: ['React', 'Next.js', 'Node.js'],
    accent: 'from-teal/20 to-teal/5',
  },
  {
    icon: '📊',
    title: 'Data Analytics & Power BI',
    desc: 'Star schema modelling, DAX measures, and multi-page dashboards that turn raw data into decisions.',
    tags: ['Power BI', 'DAX', 'Excel'],
    accent: 'from-violet/20 to-violet/5',
  },
  {
    icon: '🗄️',
    title: 'SQL & Database Design',
    desc: 'Efficient queries, CTEs, window functions, and data cleaning pipelines on MySQL.',
    tags: ['MySQL', 'SQL', 'ETL'],
    accent: 'from-teal/20 to-violet/5',
  },
  {
    icon: '🔍',
    title: 'SEO & Digital Marketing',
    desc: 'On-page SEO, Google Business Profile optimization, and email marketing campaigns that convert.',
    tags: ['SEO', 'GMB', 'Email'],
    accent: 'from-violet/20 to-teal/5',
  },
  {
    icon: '🎨',
    title: 'UI/UX & Web Design',
    desc: 'Responsive, accessible, and visually distinctive designs — from wireframe to deployment.',
    tags: ['Figma', 'Tailwind', 'CSS'],
    accent: 'from-teal/20 to-teal/5',
  },
  {
    icon: '📈',
    title: 'Freelance Consulting',
    desc: 'Available on Fiverr for Power BI dashboards, web builds, and digital strategy sessions.',
    tags: ['Fiverr', 'Remote', 'B2B'],
    accent: 'from-violet/20 to-violet/5',
  },
]

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.span
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        className="section-label text-center block"
      >
        // services
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl font-extrabold text-snow text-center mb-14"
      >
        What I <span className="shimmer-text">Build</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`relative glass p-6 rounded-2xl cursor-default overflow-hidden group hover:border-teal/30 hover:shadow-teal-glow transition-all duration-300`}
          >
            {/* gradient bg */}
            <div className={`absolute inset-0 bg-gradient-to-br ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
              <span className="text-3xl block mb-4">{svc.icon}</span>
              <h3 className="font-display font-bold text-snow text-base mb-2">{svc.title}</h3>
              <p className="text-mist text-sm leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md border border-teal/15 text-teal font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
