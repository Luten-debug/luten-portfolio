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
  const mountedRef = useRef(false);

  const tweetId = tweetUrl.split("/status/")[1]?.split("?")[0];

  useEffect(() => {
    if (!tweetId || !containerRef.current) return;
    if (mountedRef.current) return;
    mountedRef.current = true;

    const loadWidget = () => {
      if (window.twttr?.widgets && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.twttr.widgets
          .createTweet(tweetId, containerRef.current, {
            theme: "dark",
            dnt: true,
            conversation: "none",
            width: 350,
          })
          .then((el) => {
            setLoaded(true);
            if (el) {
              el.style.margin = "0";
              el.style.width = "100%";
            }
          });
      }
    };

    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => setTimeout(loadWidget, 100);
      document.head.appendChild(script);
    } else {
      loadWidget();
    }
  }, [tweetId]);

  return (
    <div
      className={`relative transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ minHeight: loaded ? "auto" : "200px" }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
        </div>
      )}
      <div
        ref={containerRef}
        className="[&_twitter-widget]:!m-0 [&_twitter-widget]:!w-full [&_twitter-widget]:!max-w-full [&_.twitter-tweet]:!m-0 [&_iframe]:!border-none [&_iframe]:!w-full"
      />
    </div>
  );
}
