"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral-950"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
            See Us In Action
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            The Craft
          </h2>
          <div className="w-16 h-px bg-white/30 mx-auto" />
        </div>

        {/* Video Container */}
        <div
          className={`relative max-w-4xl mx-auto aspect-video overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            loop
          >
            <source
              src="http://escapebarber.shop/files/video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Play/Pause Button Overlay */}
          <button
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white group-hover:text-black" />
              ) : (
                <Play className="w-8 h-8 text-white group-hover:text-black ml-1" />
              )}
            </div>
          </button>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/20" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/20" />
        </div>
      </div>
    </section>
  );
}
