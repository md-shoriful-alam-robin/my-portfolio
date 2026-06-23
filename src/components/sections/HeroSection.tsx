"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";

// Lazy-load 3D — avoids SSR crash
const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-40 h-40 rounded-full border border-teal/20 animate-pulse" />
    </div>
  ),
});

const FADE_UP = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* 3D Canvas background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/25 bg-teal/5 text-xs font-mono text-teal mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          Available for remote & Germany opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-snow">MD Shoriful</span>{" "}
          <span className="shimmer-text">Alam Robin</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          custom={2}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="font-mono text-lg sm:text-xl text-teal mb-6 h-8"
        >
          <TypeAnimation
            sequence={[
              "💻 Full Stack Developer",
              2000,
              "📊 Data Analyst",
              2000,
              "📈 Power BI Specialist",
              2000,
              "🌐 Digital Marketer",
              2000,
              "⚡ 24/7 Available Freelancer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="text-mist text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Turning raw data into insights — with React, Power BI, SQL &amp;
          JavaScript.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal to-violet text-white font-semibold text-sm hover:opacity-90 hover:shadow-teal-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            View Portfolio →
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl border border-white/15 text-snow font-semibold text-sm hover:border-teal/50 hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://fiverr.com/typical_robin"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-xl border border-teal/20 text-teal font-semibold text-sm hover:bg-teal/10 transition-all duration-300"
          >
            Hire on Fiverr
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-mist/50"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-teal/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
