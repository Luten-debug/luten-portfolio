"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Company Logo Components ── */

function TeslaLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 278.7 36.3" fill="currentColor">
      <path d="M238.1 14.4v21.9h7V14.4h11.3V7.9h-29.5v6.5zM0 14.4v21.9h7V14.4h11.3V7.9H-11.2v6.5z" transform="translate(11.2)" />
      <path d="M31.3 7.9v28.4h28.1v-6.5H38.3V24h17.8v-6.2H38.3v-3.4h21.1V7.9zM136.5 7.9v28.4h28.1v-6.5h-21.1V24h17.8v-6.2h-17.8v-3.4h21.1V7.9zM70.2 7.9L80.7 24.6 69.5 36.3h8.6l7.5-7.8 5.2-8.3 11.6-20.3h-7.9l-7.2 13-7.2-13zM100.2 7.9v28.4h7V7.9zM190.1 7.9l-14.8 28.4h7.6l2.8-5.7h15.6l2.8 5.7h7.6L197 7.9zm3.5 8.2l4.9 9.5h-9.8z" />
    </svg>
  );
}

function ZebraLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-bold tracking-tight ${className}`}>
      <span className="text-white">zebra</span>
      <span className="text-muted"> | group</span>
    </div>
  );
}

function AudiLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="40" cy="30" r="18" />
      <circle cx="72" cy="30" r="18" />
      <circle cx="104" cy="30" r="18" />
      <circle cx="136" cy="30" r="18" />
    </svg>
  );
}

function GenericLogo({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div className={`font-semibold text-sm tracking-tight text-white ${className}`}>
      {name}
    </div>
  );
}

/* ── Data ── */

interface SubRole {
  period: string;
  role: string;
  description: string;
  tags?: string[];
  highlight?: boolean;
}

interface CompanyBlock {
  company: string;
  location: string;
  totalPeriod: string;
  logo: React.ReactNode;
  accentColor: string;
  roles: SubRole[];
}

const companies: CompanyBlock[] = [
  {
    company: "Tesla",
    location: "Gigafactory Berlin",
    totalPeriod: "Feb 2023 – Present · 3+ Years",
    logo: <TeslaLogo className="h-4 w-auto text-white" />,
    accentColor: "rgba(232, 33, 39, 0.8)",
    roles: [
      {
        period: "Jan 2026 – Present",
        role: "HR Business Partner",
        description:
          "Talent & Performance Management, Employee Relations. Leading HR operations for a large manufacturing team.",
        tags: ["Talent Management", "Employee Relations", "Performance"],
        highlight: true,
      },
      {
        period: "Sep 2025 – Dec 2025",
        role: "Sr. Content Specialist · Employer Branding Content Lead",
        description:
          "Lead Content Creation at Giga Berlin for internal and external channels. Generating over 100M impressions — just on X.",
        tags: ["Content Lead", "100M+ Impressions", "Employer Branding"],
        highlight: true,
      },
      {
        period: "Oct 2024 – Sep 2025",
        role: "Content Specialist",
        description:
          "Content creation & strategy for internal and external audiences. Working with press, politicians, influencers, and VIPs. Planning & executing factory tours.",
        tags: ["Content Strategy", "PR", "Factory Tours"],
      },
      {
        period: "Jul 2023 – Sep 2024",
        role: "Associate Content Producer",
        description:
          "Showing people what it's really like at Tesla — in motion, photos, text, or in person.",
        tags: ["Video", "Photography", "Storytelling"],
      },
      {
        period: "Feb 2023 – Jul 2023",
        role: "Intern — Content & Programs",
        description:
          "Entry into Tesla's content and employer branding world at Gigafactory Berlin.",
        tags: ["Internship", "Content"],
      },
    ],
  },
  {
    company: "zebra | group GmbH",
    location: "Chemnitz",
    totalPeriod: "Jan 2022 – Jan 2023 · 1 Year",
    logo: <ZebraLogo className="text-sm" />,
    accentColor: "rgba(168, 85, 247, 0.8)",
    roles: [
      {
        period: "Jan 2022 – Jan 2023",
        role: "Working Student — Social & Creative",
        description:
          "Social media content strategy (internal & external), client pitch contributions, and content strategy development at a creative agency.",
        tags: ["Agency", "Social Media", "Strategy", "Client Pitches"],
      },
    ],
  },
  {
    company: "Audi Zentrum Rostock",
    location: "Rostock",
    totalPeriod: "Aug 2020 – Sep 2021 · 1 Year",
    logo: <AudiLogo className="h-5 w-auto text-white/70" />,
    accentColor: "rgba(187, 0, 0, 0.8)",
    roles: [
      {
        period: "Aug 2020 – Sep 2021",
        role: "Freelance Photographer",
        description:
          "Photo and video shoots with current Audi models. Creative concepts connecting cars with the city of Rostock.",
        tags: ["Photography", "Automotive", "Freelance"],
      },
    ],
  },
  {
    company: "Nordwasser GmbH",
    location: "Rostock",
    totalPeriod: "Jul 2019 – Sep 2021 · 2 Years",
    logo: <GenericLogo name="Nordwasser" />,
    accentColor: "rgba(34, 197, 94, 0.8)",
    roles: [
      {
        period: "Jul 2019 – Sep 2021",
        role: "Working Student PR/Marketing",
        description:
          "Built the entire social media presence from scratch. Employer branding campaigns, internal communications, photo/video production, and print design.",
        tags: ["Social Media", "Employer Branding", "Design", "Print"],
      },
    ],
  },
  {
    company: "Lidl Deutschland",
    location: "Neckarsulm",
    totalPeriod: "Jan 2020 – Apr 2020 · 4 Months",
    logo: <GenericLogo name="Lidl" />,
    accentColor: "rgba(0, 83, 159, 0.8)",
    roles: [
      {
        period: "Jan 2020 – Apr 2020",
        role: "Intern — Employer Branding",
        description:
          "Social media management for Xing, LinkedIn & kununu. Social media KPIs, competitive analysis, and employee photo shoots.",
        tags: ["Employer Branding", "LinkedIn", "Analytics"],
      },
    ],
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

/* ── Company Card Component ── */

function CompanyCard({
  block,
  index,
}: {
  block: CompanyBlock;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isTesla = block.company === "Tesla";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Company Header */}
      <div
        className={`rounded-xl border overflow-hidden ${
          isTesla
            ? "border-accent/20 bg-accent/[0.03]"
            : "border-card-border bg-card-bg/50"
        }`}
      >
        {/* Top bar with logo */}
        <div
          className="px-6 py-4 flex items-center justify-between border-b"
          style={{
            borderColor: isTesla
              ? "rgba(59, 130, 246, 0.15)"
              : "rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Accent dot */}
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{
                background: block.accentColor,
                boxShadow: `0 0 10px ${block.accentColor}`,
              }}
            />
            <div>
              <div className="flex items-center gap-3">
                {block.logo}
                {isTesla && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                    CURRENT
                  </span>
                )}
              </div>
              <p className="text-xs text-muted mt-0.5">
                {block.location}
              </p>
            </div>
          </div>
          <p className="text-xs text-muted font-mono hidden sm:block">
            {block.totalPeriod}
          </p>
        </div>

        {/* Roles */}
        <div className="divide-y divide-white/[0.03]">
          {block.roles.map((role, i) => (
            <div
              key={i}
              className={`px-6 py-4 ${
                role.highlight ? "bg-accent/[0.02]" : ""
              } ${
                isTesla && i === 0
                  ? "border-l-2 border-l-accent"
                  : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <h3
                  className={`text-sm font-semibold ${
                    role.highlight ? "text-white" : "text-white/80"
                  }`}
                >
                  {role.role}
                </h3>
                <p className="text-xs text-muted font-mono shrink-0">
                  {role.period}
                </p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {role.description}
              </p>
              {role.tags && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-muted/80 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tesla progression arrow hint */}
        {isTesla && (
          <div className="px-6 py-3 bg-accent/[0.02] border-t border-accent/10 flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-accent/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <p className="text-xs text-accent/60">
              5 roles in 3 years — from intern to HR Business Partner
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main Timeline Component ── */

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
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

        {/* Company blocks */}
        <div className="flex flex-col gap-6">
          {companies.map((block, i) => (
            <CompanyCard key={block.company} block={block} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
            <svg
              className="w-4 h-4 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            Education
          </h3>
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
