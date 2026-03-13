"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background transparent profile image — B&W, fades in, bigger & tighter to top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 flex justify-end items-start pointer-events-none z-[2]"
      >
        <Image
          src="/profile-transparent.png"
          alt="Luten Reinhardt"
          width={1200}
          height={1200}
          className="w-full max-w-[600px] md:max-w-[720px] lg:max-w-[820px] h-auto object-contain -mt-4 sm:-mt-2 mr-[2%] md:mr-[5%] lg:mr-[10%] grayscale"
          style={{ objectPosition: "center top" }}
          priority
        />
      </motion.div>

      {/* Strong gradient fade to black — bottom half */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background:
            "linear-gradient(to top, #0a0a0a 0%, #0a0a0a 10%, rgba(10,10,10,0.95) 25%, rgba(10,10,10,0.6) 45%, rgba(10,10,10,0.15) 65%, transparent 80%)",
        }}
      />

      {/* Left side darkening for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-transparent pointer-events-none z-[3]" />

      {/* Accent glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none z-[1]" />

      {/* Name — sits BEHIND the image for layered depth effect */}
      <div className="absolute z-[1] w-full px-6 bottom-[40vh] sm:bottom-[43vh]">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter leading-[0.9] select-none"
          >
            Luten
            <br />
            <span className="gradient-text">Reinhardt</span>
          </motion.h1>
        </div>
      </div>

      {/* Text content — in front of image + gradient */}
      <div className="relative z-[4] w-full px-6 pb-20 pt-[68vh] sm:pt-[62vh]">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="text-accent text-sm font-medium tracking-widest uppercase mb-3"
          >
            HR & Employer Branding
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
            className="text-muted text-lg max-w-lg leading-relaxed mb-6"
          >
            Sr. HR Business Partner & Employer Branding Content Lead at{" "}
            <span className="text-white font-medium">
              Tesla Gigafactory Berlin
            </span>
            . Building the team that builds the future — and telling the story
            behind it.{" "}
            <span className="text-white">100M+ impressions on X.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              My Journey
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/10 hover:border-white/25 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
            <div className="flex gap-4 ml-2">
              <a
                href="https://x.com/gigafactories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/luten-reinhardt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[5]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
