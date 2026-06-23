'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-shoriful-alam-robin/', icon: '💼' },
  { label: 'GitHub',   href: 'https://github.com/md-shoriful-alam-robin',           icon: '🐙' },
  { label: 'Fiverr',   href: 'https://fiverr.com/typical_robin',                     icon: '🟢' },
  { label: 'Behance',  href: 'https://www.behance.net/mdshorifulalamrobin',          icon: '🎨' },
  { label: 'X',        href: 'https://x.com/RobinIdea',                              icon: '✕' },
  { label: 'Instagram',href: 'https://www.instagram.com/md_shoriful_alam_robin',     icon: '📸' },
]

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formOpen, setFormOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 max-w-4xl mx-auto">
      <motion.span
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        className="section-label text-center block"
      >
        // contact
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl font-extrabold text-snow text-center mb-4"
      >
        Get In <span className="shimmer-text">Touch</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-mist text-sm text-center mb-12"
      >
        Open to remote roles, freelance projects, and Germany relocation opportunities.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left – info */}
        <motion.div
          initial={{ x: -30, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          {[
            { icon: '📧', label: 'Email', value: 'contact@shorifulrobin.me', href: 'mailto:contact@shorifulrobin.me' },
            { icon: '📞', label: 'WhatsApp', value: '+880 1710-210006', href: 'https://api.whatsapp.com/send?phone=8801710210006' },
            { icon: '🌍', label: 'Website', value: 'shorifulrobin.me', href: 'https://shorifulrobin.me' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-4 glass p-4 rounded-xl hover:border-teal/40 hover:shadow-teal-glow transition-all duration-300 group"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-mono text-[10px] text-mist/50 uppercase tracking-wider">{item.label}</p>
                <p className="text-snow text-sm font-medium group-hover:text-teal transition-colors">{item.value}</p>
              </div>
            </a>
          ))}

          {/* Social grid */}
          <div className="glass p-5 rounded-xl">
            <p className="font-mono text-xs text-mist/50 mb-3 uppercase tracking-wider">Social &amp; Platforms</p>
            <div className="grid grid-cols-3 gap-2">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 hover:border-teal/30 hover:bg-teal/5 text-mist hover:text-teal transition-all duration-200 text-xs font-medium"
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right – form */}
        <motion.div
          initial={{ x: 30, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {status === 'sent' ? (
            <div className="glass p-10 rounded-2xl text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-snow font-bold mb-1">Message sent!</h3>
              <p className="text-mist text-sm">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass p-6 rounded-2xl space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden"><label>Don't fill: <input name="bot-field" /></label></p>

              {[
                { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                { id: 'email',   label: 'Email',   type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-mono text-[11px] text-mist/60 uppercase tracking-widest mb-1.5">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-snow text-sm placeholder:text-mist/30 focus:outline-none focus:border-teal/50 focus:shadow-teal-glow transition-all"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block font-mono text-[11px] text-mist/60 uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-snow text-sm placeholder:text-mist/30 focus:outline-none focus:border-teal/50 focus:shadow-teal-glow transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal to-violet text-white font-semibold text-sm hover:opacity-90 hover:shadow-teal-glow transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Something went wrong. Try emailing directly.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
