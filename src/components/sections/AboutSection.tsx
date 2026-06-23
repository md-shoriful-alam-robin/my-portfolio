"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SKILLS = [
  { name: "React / Next.js", level: 85, color: "from-teal to-teal/60" },
  {
    name: "JavaScript / TypeScript",
    level: 80,
    color: "from-violet to-violet/60",
  },
  { name: "Power BI / DAX", level: 88, color: "from-teal to-violet" },
  { name: "SQL / MySQL", level: 82, color: "from-violet to-teal" },
  { name: "Advanced Excel", level: 90, color: "from-teal to-teal/60" },
  { name: "Node.js / REST API", level: 72, color: "from-violet to-violet/60" },
];

const BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "Power BI",
  "SQL",
  "Excel",
  "Python",
  "Firebase",
  "Tailwind",
  "Git",
  "Figma",
  "SEO",
];

const FADE_LEFT = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.7 } },
};
const FADE_RIGHT = {
  hidden: { x: 40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.7 } },
};

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="section-label text-center block"
      >
        // about_me
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl font-extrabold text-snow text-center mb-16"
      >
        Who I <span className="shimmer-text">Am</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left – Bio */}
        <motion.div
          variants={FADE_LEFT}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="glass p-7 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-violet flex items-center justify-center text-xl">
                👨‍💻
              </div>
              <div>
                <h3 className="font-display font-bold text-snow text-lg">
                  MD Shoriful Alam Robin
                </h3>
                <p className="text-mist text-xs font-mono">
                  Sylhet, Bangladesh 🇧🇩 → Germany 🇩🇪
                </p>
              </div>
            </div>

            <p className="text-mist text-sm leading-relaxed">
              I'm a{" "}
              <span className="text-teal font-medium">
                Full Stack Developer
              </span>{" "}
              and <span className="text-teal font-medium">Data Analyst</span>{" "}
              with an MBA background — a rare combo that lets me bridge
              technical execution with business strategy.
            </p>

            <p className="text-mist text-sm leading-relaxed">
              Currently building portfolio projects for my{" "}
              <span className="text-violet font-medium">
                global client acquisition —
              </span>
              while freelancing on Fiverr with Power BI dashboards and web
              development.
            </p>

            <div className="pt-2 border-t border-white/5">
              <p className="font-mono text-xs text-mist/60 mb-3">
                ✦ Tech Stack & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className="px-2.5 py-1 text-xs rounded-lg border border-teal/15 bg-teal/5 text-teal font-mono hover:border-teal/50 transition-colors"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right – Skill Bars */}
        <motion.div
          variants={FADE_RIGHT}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-5"
        >
          {SKILLS.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-snow text-sm font-medium">
                  {skill.name}
                </span>
                <span className="font-mono text-teal text-xs">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              { label: "Education", value: "MBA + BBA" },
              { label: "German Level", value: "A2 → B1" },
              { label: "Availability", value: "24 / 7 Remote" },
              { label: "Fiverr", value: "fiverr.com/typical_robin" },
            ].map((f) => (
              <div key={f.label} className="glass p-3 rounded-xl">
                <p className="font-mono text-[10px] text-mist/50 uppercase tracking-wider">
                  {f.label}
                </p>
                <p className="text-snow text-xs font-medium mt-0.5">
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
