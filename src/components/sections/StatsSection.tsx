"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const STATS = [
  { value: 15, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { value: 3, suffix: "+", label: "Years Experience", icon: "🗓️" },
  { value: 10, suffix: "+", label: "Happy Clients", icon: "🤝" },
  { value: 5, suffix: "", label: "Tech Stacks Mastered", icon: "⚡" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass p-6 rounded-2xl text-center group hover:border-teal/40 hover:shadow-teal-glow transition-all duration-300"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="font-display text-3xl font-extrabold text-snow">
              {inView ? (
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              ) : (
                <span>0{stat.suffix}</span>
              )}
            </div>
            <p className="text-mist text-xs mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
