"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoBg?: string;
  accentColor: string;
  roles: SubRole[];
}

const companies: CompanyBlock[] = [
  {
    company: "Tesla",
    location: "Gigafactory Berlin-Brandenburg",
    totalPeriod: "Feb 2023 – Present · 3+ Years",
    logo: "/logos/tesla.png",
    logoWidth: 80,
    logoHeight: 16,
    accentColor: "#e82127",
    roles: [
      {
        period: "Jan 2026 – Present",
        role: "HR Business Partner",
        description:
          "Owning Talent, Performance Management & Employee Relations for a high-output manufacturing org. Direct impact on retention, leadership development and workforce strategy at one of the most fast-paced factories in Europe.",
        tags: ["Talent Management", "Employee Relations", "Performance"],
        highlight: true,
      },
      {
        period: "Sep 2025 – Dec 2025",
        role: "Sr. Content Specialist · Employer Branding Content Lead",
        description:
          "Led all content creation at Giga Berlin — internal comms, external storytelling, employer branding. Drove over 100 million impressions on X alone. Built the playbook for how Tesla Germany tells its story.",
        tags: ["Content Lead", "100M+ Impressions", "Employer Branding"],
        highlight: true,
      },
      {
        period: "Oct 2024 – Sep 2025",
        role: "Content Specialist",
        description:
          "Ran content strategy across all channels. Managed relationships with press, politicians, influencers and VIPs. Planned and executed factory tours that shaped public perception of Giga Berlin.",
        tags: ["Content Strategy", "PR", "VIP Factory Tours"],
      },
      {
        period: "Jul 2023 – Sep 2024",
        role: "Associate Content Producer",
        description:
          "Brought Tesla's story to life — through video, photography, written content and live experiences. Created the authentic, behind-the-scenes content that set Giga Berlin apart.",
        tags: ["Video", "Photography", "Storytelling"],
      },
      {
        period: "Feb 2023 – Jul 2023",
        role: "Intern — Content & Programs",
        description:
          "Started the Tesla journey. Dove straight into content production and employer branding at Europe's most ambitious gigafactory.",
        tags: ["Internship", "Content"],
      },
    ],
  },
  {
    company: "zebra | group GmbH",
    location: "Chemnitz",
    totalPeriod: "Jan 2022 – Jan 2023 · 1 Year",
    logo: "/logos/zebra.jpg",
    logoWidth: 80,
    logoHeight: 30,
    logoBg: "white",
    accentColor: "#a855f7",
    roles: [
      {
        period: "Jan 2022 – Jan 2023",
        role: "Working Student — Social & Creative",
        description:
          "Shaped social media strategies for agency clients from concept to execution. Co-created client pitches and built content frameworks that won new business.",
        tags: ["Agency", "Social Media", "Strategy", "Client Pitches"],
      },
    ],
  },
  {
    company: "Audi Zentrum Rostock",
    location: "Rostock",
    totalPeriod: "Aug 2020 – Sep 2021 · 1 Year",
    logo: "/logos/audi.svg",
    logoWidth: 70,
    logoHeight: 24,
    accentColor: "#bb0000",
    roles: [
      {
        period: "Aug 2020 – Sep 2021",
        role: "Freelance Photographer",
        description:
          "Solo-responsible for all visual content — photo and video shoots with current Audi models. Developed creative concepts that connected automotive premium with the city of Rostock.",
        tags: ["Photography", "Automotive", "Freelance", "Video"],
      },
    ],
  },
  {
    company: "Nordwasser GmbH",
    location: "Rostock",
    totalPeriod: "Jul 2019 – Sep 2021 · 2 Years",
    logo: "/logos/nordwasser.jpg",
    logoWidth: 90,
    logoHeight: 30,
    logoBg: "white",
    accentColor: "#22c55e",
    roles: [
      {
        period: "Jul 2019 – Sep 2021",
        role: "Working Student PR/Marketing",
        description:
          "Built an entire social media presence from zero. Designed and executed employer branding campaigns, produced photo/video content, created the employee magazine, and managed agency relationships — all while studying.",
        tags: ["Social Media", "Employer Branding", "Design", "Print"],
      },
    ],
  },
  {
    company: "Lidl Deutschland",
    location: "Neckarsulm",
    totalPeriod: "Jan 2020 – Apr 2020 · 4 Months",
    logo: "/logos/lidl.png",
    logoWidth: 40,
    logoHeight: 40,
    accentColor: "#0053a0",
    roles: [
      {
        period: "Jan 2020 – Apr 2020",
        role: "Intern — Employer Branding",
        description:
          "Hands-on employer branding at Germany's biggest discounter. Managed Xing, LinkedIn & kununu profiles, tracked social KPIs and ran competitive analyses.",
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

/* ── Company Card ── */

function CompanyCard({ block, index }: { block: CompanyBlock; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isTesla = block.company === "Tesla";

  return (
    <div className="relative flex items-stretch gap-0">
      {/* Left timeline rail */}
      <div className="hidden md:flex flex-col items-center w-16 shrink-0 relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="relative z-10 mt-6"
        >
          <div
            className="w-4 h-4 rounded-full border-[3px]"
            style={{
              borderColor: block.accentColor,
              background: isTesla ? block.accentColor : "#0a0a0a",
              boxShadow: isTesla ? `0 0 12px ${block.accentColor}60` : "none",
            }}
          />
        </motion.div>
        <div className="flex-1 w-[2px] bg-white/[0.06] mt-1" />
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="flex-1 pb-6"
      >
        <div
          className={`rounded-xl border overflow-hidden transition-all duration-300 ${
            isTesla
              ? "border-[#e82127]/20 bg-[#e82127]/[0.02] hover:border-[#e82127]/30"
              : "border-card-border bg-card-bg/50 hover:border-white/10"
          }`}
        >
          {/* Header */}
          <div
            className="px-6 py-4 flex items-center justify-between border-b"
            style={{
              borderColor: isTesla
                ? "rgba(232, 33, 39, 0.12)"
                : "rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex items-center justify-center rounded-md overflow-hidden shrink-0"
                style={{
                  background: block.logoBg || "transparent",
                  padding: block.logoBg ? "4px 8px" : "0",
                }}
              >
                <Image
                  src={block.logo}
                  alt={block.company}
                  width={block.logoWidth}
                  height={block.logoHeight}
                  className="object-contain"
                  style={{
                    maxHeight: `${block.logoHeight}px`,
                    filter: !block.logoBg ? "brightness(0) invert(1)" : "none",
                  }}
                />
              </div>
              {isTesla && (
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#e82127]/10 text-[#e82127] border border-[#e82127]/20 font-semibold tracking-wide">
                  CURRENT
                </span>
              )}
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-xs text-muted font-mono">{block.totalPeriod}</p>
              <p className="text-[11px] text-muted/60">{block.location}</p>
            </div>
          </div>

          {/* Roles */}
          <div className="divide-y divide-white/[0.03]">
            {block.roles.map((role, i) => (
              <div
                key={i}
                className={`px-6 py-5 ${role.highlight ? "bg-white/[0.01]" : ""} ${
                  isTesla && i === 0 ? "border-l-2 border-l-[#e82127]" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h3
                    className={`text-[15px] font-bold ${
                      role.highlight ? "text-white" : "text-white/90"
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

          {isTesla && (
            <div className="px-6 py-3 bg-[#e82127]/[0.03] border-t border-[#e82127]/10 flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#e82127]/70"
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
              <p className="text-xs text-[#e82127]/70 font-medium">
                5 roles in 3 years — Intern → HR Business Partner
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main ── */

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
          className="mb-12 md:ml-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            3+ Years at <span className="gradient-text">Tesla</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg">
            From intern to HR Business Partner — building teams, creating
            content, and shaping how Tesla Germany tells its story.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
          {companies.map((block, i) => (
            <CompanyCard key={block.company} block={block} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:ml-16"
        >
          <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.degree} className="p-5 rounded-xl bg-card-bg/50 border border-card-border">
                <p className="text-xs text-muted font-mono mb-2">{edu.period}</p>
                <p className="text-sm font-semibold text-white">{edu.degree}</p>
                <p className="text-sm text-muted">{edu.school}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
