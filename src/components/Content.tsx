"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const XEmbed = dynamic(() => import("./XEmbed"), { ssr: false });

interface ContentItem {
  type: string;
  title: string;
  description: string;
  icon: string;
}

const contentAreas: ContentItem[] = [
  {
    type: "X / Twitter",
    title: "100M+ Impressions",
    description:
      "Lead content creator behind @gigafactories and contributor to @Tesla, @teslaeurope, and @Tesla_AI. Building authentic employer branding content that resonates.",
    icon: "𝕏",
  },
  {
    type: "PR & Press",
    title: "Press, Politicians & VIPs",
    description:
      "Working with major press outlets, politicians, influencers, and VIPs. Planning and executing factory tours and high-profile visits at Gigafactory Berlin.",
    icon: "📰",
  },
  {
    type: "Visual Content",
    title: "Photo, Video & Motion",
    description:
      "End-to-end content production — from concept to camera to post. Showing people what it's really like at Tesla through compelling visual storytelling.",
    icon: "🎬",
  },
  {
    type: "Strategy",
    title: "Content & Employer Branding",
    description:
      "Internal and external content strategy for one of the world's most talked-about companies. Bridging HR and communications to tell authentic stories.",
    icon: "🧠",
  },
];

const featuredPosts = [
  "https://x.com/Tesla_AI/status/1963308798765838809",
  "https://x.com/gigafactories/status/1877015591162101942",
  "https://x.com/gigafactories/status/1791033038601589015",
  "https://x.com/gigafactories/status/1767905470415618392",
  "https://x.com/Tesla/status/1639713037174161408",
];

export default function Content() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="content" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Content & Communication
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Building{" "}
            <span className="gradient-text">Tesla&apos;s voice</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg">
            From social media to press relations — creating content that reaches
            millions and shapes perception.
          </p>
        </motion.div>

        {/* Content areas grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {contentAreas.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card-bg/50 border border-card-border hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-accent font-mono mb-1">
                    {item.type}
                  </p>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured X Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <h3 className="text-xl font-bold text-white">
              Featured Posts
            </h3>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
            {featuredPosts.map((url, i) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="break-inside-avoid"
              >
                <XEmbed tweetUrl={url} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
