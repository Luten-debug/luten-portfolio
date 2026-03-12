"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags?: string[];
  highlight?: boolean;
}

const experiences: TimelineItem[] = [
  {
    period: "Jan 2026 – Present",
    role: "HR Business Partner",
    company: "Tesla",
    location: "Gigafactory Berlin",
    description:
      "Talent & Performance Management, Employee Relations. Leading HR operations for a large manufacturing team.",
    tags: ["Talent Management", "Employee Relations", "Performance"],
    highlight: true,
  },
  {
    period: "Sep 2025 – Dec 2025",
    role: "Sr. Content Specialist",
    company: "Tesla",
    location: "Gigafactory Berlin",
    description:
      "Lead Content Creation at Giga Berlin for internal and external channels. Generating over 100M impressions — just on X.",
    tags: ["Content Lead", "100M+ Impressions", "Employer Branding"],
    highlight: true,
  },
  {
    period: "Oct 2024 – Sep 2025",
    role: "Content Specialist",
    company: "Tesla",
    location: "Gigafactory Berlin",
    description:
      "Content creation & strategy for internal and external audiences. Working with press, politicians, influencers, and VIPs. Planning & executing factory tours.",
    tags: ["Content Strategy", "PR", "Factory Tours"],
  },
  {
    period: "Jul 2023 – Sep 2024",
    role: "Associate Content Producer",
    company: "Tesla",
    location: "Berlin",
    description:
      "Showing people what it's really like at Tesla — in motion, photos, text, or in person.",
    tags: ["Video", "Photography", "Storytelling"],
  },
  {
    period: "Feb 2023 – Jul 2023",
    role: "Intern — Content & Programs",
    company: "Tesla",
    location: "Berlin",
    description:
      "Entry into Tesla's content and employer branding world at Gigafactory Berlin.",
    tags: ["Internship", "Content"],
  },
  {
    period: "Jan 2022 – Jan 2023",
    role: "Working Student",
    company: "zebra | group GmbH",
    location: "Chemnitz",
    description:
      "Social media content strategy (internal & external), client pitch contributions, and content strategy development at a creative agency.",
    tags: ["Agency", "Social Media", "Strategy"],
  },
  {
    period: "Aug 2020 – Sep 2021",
    role: "Freelance Photographer",
    company: "Audi Zentrum Rostock",
    location: "Rostock",
    description:
      "Photo and video shoots with current Audi models. Creative concepts connecting cars with the city of Rostock.",
    tags: ["Photography", "Automotive", "Freelance"],
  },
  {
    period: "Jul 2019 – Sep 2021",
    role: "Working Student PR/Marketing",
    company: "Nordwasser GmbH",
    location: "Rostock",
    description:
      "Built and managed the entire social media presence from scratch. Employer branding campaigns, internal communications, and photo/video production.",
    tags: ["Social Media", "Employer Branding", "Design"],
  },
];

const education = [
  {
    period: "2021 – 2024",
    degree: "M.Sc. Media & Instructional Psychology",
    school: "TU Chemnitz",
  },
  {
    period: "2018 – 2021",
    degree: "B.A. Psychology",
    school: "FH des Mittelstandes (FHM)",
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`w-3 h-3 rounded-full border-2 ${
            item.highlight
              ? "bg-accent border-accent shadow-[0_0_12px_rgba(59,130,246,0.5)]"
              : "bg-card-bg border-white/20"
          }`}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
        }`}
      >
        <div
          className={`p-5 rounded-xl border transition-all duration-300 hover:border-white/10 ${
            item.highlight
              ? "bg-accent/5 border-accent/20"
              : "bg-card-bg/50 border-card-border"
          }`}
        >
          <p className="text-xs text-muted font-mono mb-2">{item.period}</p>
          <h3 className="text-base font-semibold text-white mb-1">
            {item.role}
          </h3>
          <p className="text-sm text-accent mb-2">
            {item.company}{" "}
            <span className="text-muted">· {item.location}</span>
          </p>
          <p className="text-sm text-muted leading-relaxed">
            {item.description}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            3+ Years at{" "}
            <span className="gradient-text">Tesla</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg">
            From intern to HR Business Partner — building teams, creating
            content, and shaping employer branding at Gigafactory Berlin.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />

          <div className="flex flex-col gap-10">
            {experiences.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Education</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-5 rounded-xl bg-card-bg/50 border border-card-border"
              >
                <p className="text-xs text-muted font-mono mb-2">
                  {edu.period}
                </p>
                <p className="text-sm font-medium text-white">{edu.degree}</p>
                <p className="text-sm text-muted">{edu.school}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
