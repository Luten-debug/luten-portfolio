"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Strategic People Partner",
    description:
      "Single point of contact for ~400 employees. Trusted advisor for leaders and teams on all people-related topics — from hiring to org design.",
    tags: ["Workforce Planning", "Org Design", "Advisory"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Employee Relations",
    description:
      "Navigating complex employee cases with empathy and legal precision. Conflict resolution, disciplinary processes, and works council collaboration.",
    tags: ["Conflict Resolution", "Labor Law", "Works Council"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Performance & Talent",
    description:
      "Designing and executing performance management cycles, talent reviews, and succession planning. Identifying high-potentials and building leadership pipelines.",
    tags: ["Performance Management", "Talent Reviews", "Succession Planning"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Change Management",
    description:
      "Leading people through organizational transformation. Restructurings, process changes, and culture initiatives — with clear communication and stakeholder alignment.",
    tags: ["Transformation", "Stakeholder Management", "Communication"],
  },
];

export default function HRPartner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            People & Strategy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            More than <span className="gradient-text">Content</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            As Sr. HR Business Partner at Tesla Gigafactory Berlin, I&apos;m the central point of contact
            for ~400 employees — bridging business goals and people strategy every day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card-bg/50 border border-card-border hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-3">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-muted/80 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
