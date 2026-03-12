"use client";

import { useEffect, useRef, useState } from "react";

interface XEmbedProps {
  tweetUrl: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
        createTweet: (
          id: string,
          el: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export default function XEmbed({ tweetUrl }: XEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Extract tweet ID from URL
  const tweetId = tweetUrl.split("/status/")[1]?.split("?")[0];

  useEffect(() => {
    if (!tweetId || !containerRef.current) return;

    const loadWidget = () => {
      if (window.twttr?.widgets && containerRef.current) {
        // Clear previous content
        containerRef.current.innerHTML = "";
        window.twttr.widgets
          .createTweet(tweetId, containerRef.current, {
            theme: "dark",
            dnt: true,
            align: "center",
          })
          .then(() => setLoaded(true));
      }
    };

    // Load Twitter widget script if not present
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        setTimeout(loadWidget, 100);
      };
      document.head.appendChild(script);
    } else {
      loadWidget();
    }
  }, [tweetId]);

  return (
    <div className="relative min-h-[200px]">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            <p className="text-xs text-muted">Loading post...</p>
          </div>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
