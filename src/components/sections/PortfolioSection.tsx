'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ─── CMS INTEGRATION POINT ───────────────────────────────────────────
// When you connect Sanity.io or Strapi, replace this static array with:
//   const { data: projects } = useSWR('/api/projects', fetcher)
// Each project object shape stays the same.
// ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 'ai-resume-builder',
    emoji: '🤖',
    title: 'AI Resume Builder',
    desc: 'React + Gemini API — generates tailored CVs with a German employer section & Chancenkarte visa note.',
    tags: ['React', 'Gemini API', 'Netlify'],
    href: 'https://robin-ai-resume-builder.netlify.app',
    github: 'https://github.com/md-shoriful-alam-robin',
    gradient: 'from-[#0f2027] via-[#203a43] to-[#2c5364]',
  },
  {
    id: 'contact-vault',
    emoji: '📇',
    title: 'ContactVault',
    desc: 'Full-stack contact manager — React/Vite frontend + json-server backend, deployed on Netlify & Render.',
    tags: ['React', 'Vite', 'json-server'],
    href: 'https://reaactcontact.netlify.app/',
    github: 'https://github.com/md-shoriful-alam-robin',
    gradient: 'from-[#312e81] via-[#4c1d95] to-[#1e1b4b]',
  },
  {
    id: 'auth-vault',
    emoji: '🔐',
    title: 'AuthVault — Firebase Auth',
    desc: 'Secure auth system with Email/Password, Google OAuth & GitHub OAuth using React + Firebase.',
    tags: ['React', 'Firebase', 'OAuth'],
    href: 'https://react-frontend-firebase.netlify.app/',
    github: 'https://github.com/md-shoriful-alam-robin',
    gradient: 'from-[#1a1f36] via-[#1e3a5f] to-[#0ea5e9]',
  },
  {
    id: 'food-recipe',
    emoji: '🍜',
    title: 'Food Recipe App',
    desc: 'MERN stack recipe platform to discover, browse, and save favourite meals with full CRUD.',
    tags: ['MERN', 'MongoDB', 'Node.js'],
    href: 'https://mernassignment4.netlify.app/',
    github: 'https://github.com/md-shoriful-alam-robin',
    gradient: 'from-[#134e4a] via-[#065f46] to-[#064e3b]',
  },
  {
    id: 'sheba-clone',
    emoji: '🏠',
    title: 'Sheba.xyz — Service Platform UI',
    desc: 'Professional home-services marketplace UI inspired by Sheba.xyz, fully responsive.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://sheba-website.netlify.app/',
    github: 'https://github.com/md-shoriful-alam-robin',
    gradient: 'from-[#1e3a5f] via-[#1e4d6b] to-[#14b8a6]',
  },
]

// ─── POWER BI DASHBOARD SLOT ──────────────────────────────────────────
// Paste your Power BI embed URL below.
// Get it from: Power BI Service → File → Publish to web → iFrame URL
const POWERBI_EMBED_URL = '' // e.g. 'https://app.powerbi.com/reportEmbed?reportId=...'
// ─────────────────────────────────────────────────────────────────────

export default function PortfolioSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="portfolio" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.span
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        className="section-label text-center block"
      >
        // portfolio
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl font-extrabold text-snow text-center mb-4"
      >
        Recent <span className="shimmer-text">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-mist text-sm text-center mb-14"
      >
        Click any card to see the live deployment ↗
      </motion.p>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {PROJECTS.map((proj, i) => (
          <motion.a
            key={proj.id}
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.55 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group glass rounded-2xl overflow-hidden hover:border-teal/40 hover:shadow-teal-glow transition-all duration-300 flex flex-col no-underline"
          >
            {/* Thumbnail */}
            <div className={`h-36 bg-gradient-to-br ${proj.gradient} flex items-center justify-center relative overflow-hidden`}>
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300 z-10">
                {proj.emoji}
              </span>
              {/* scan line */}
              <div className="scan-line" />
            </div>

            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="font-display font-bold text-snow text-sm leading-tight">{proj.title}</h3>
              <p className="text-mist text-xs leading-relaxed flex-1">{proj.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md bg-teal/10 border border-teal/15 text-teal font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-teal font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)] animate-pulse" />
                  Live
                </span>
                <span className="text-mist text-xs group-hover:text-teal group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── Power BI Dashboard Section ── */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="glass rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div>
            <span className="section-label mb-0">// data_analytics</span>
            <h3 className="font-display font-bold text-snow text-base mt-0.5">
              Power BI Dashboard Preview
            </h3>
          </div>
          <span className="px-3 py-1 text-xs rounded-full border border-teal/20 text-teal font-mono">
            Live Embed
          </span>
        </div>

        <div className="relative" style={{ paddingTop: '56.25%' }}>
          {POWERBI_EMBED_URL ? (
            <iframe
              title="Power BI Dashboard"
              src={POWERBI_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          ) : (
            /* ── PLACEHOLDER — remove when you add the embed URL above ── */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card/50">
              <div className="text-5xl animate-float">📊</div>
              <p className="font-mono text-mist text-sm text-center px-6">
                Power BI embed URL goes in{' '}
                <code className="text-teal bg-teal/10 px-1.5 py-0.5 rounded text-xs">
                  POWERBI_EMBED_URL
                </code>{' '}
                inside <br />
                <code className="text-violet text-xs">PortfolioSection.tsx</code>
              </p>
              <a
                href="https://fiverr.com/typical_robin"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal to-violet text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                onClick={e => e.stopPropagation()}
              >
                See dashboards on Fiverr →
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
