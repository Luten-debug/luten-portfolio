"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

// Placeholder for future X embeds
const featuredPosts = [
  {
    handle: "@gigafactories",
    placeholder: true,
    text: "X post embed coming soon — viral content with millions of impressions",
  },
  {
    handle: "@gigafactories",
    placeholder: true,
    text: "X post embed coming soon — behind the scenes at Giga Berlin",
  },
  {
    handle: "@gigafactories",
    placeholder: true,
    text: "X post embed coming soon — employer branding content",
  },
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
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
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

        {/* Featured X Posts - placeholders for embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">
            Featured Posts
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {featuredPosts.map((post, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-card-bg/50 border border-card-border border-dashed flex flex-col items-center justify-center text-center min-h-[200px]"
              >
                <span className="text-2xl mb-3 opacity-30">𝕏</span>
                <p className="text-xs text-muted font-mono mb-2">
                  {post.handle}
                </p>
                <p className="text-xs text-muted/50">{post.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted/50 text-center mt-4">
            X post embeds will be added once specific post URLs are provided
          </p>
        </motion.div>
      </div>
    </section>
  );
}
