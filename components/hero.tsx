"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="http://escapebarber.shop/files/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-6">
          <div className="w-24 h-px bg-white/50 mx-auto mb-8" />
          <span className="text-sm tracking-[0.3em] uppercase text-white/70 font-sans">
            Premium Grooming Experience
          </span>
        </div>

        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] uppercase text-white mb-2">
          ESCAPE
        </h1>
        <span className="text-lg md:text-xl tracking-[0.3em] uppercase text-white/90 mb-8">
          barbershop
        </span>

        <p className="text-base md:text-lg text-white/70 font-light tracking-wide mb-4 max-w-xl">
          Your Grooming Retreat at Mivida
        </p>
        
        <p className="text-sm md:text-base text-white/60 font-light mb-12 max-w-lg italic">
          We fix what your ex did to your hair
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#booking"
            className="group px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
          >
            Book Your Appointment
          </a>
          <a
            href="https://maps.google.com/?q=Mivida+Eterna+Gate+2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-transparent text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black border-2 border-white/50 transition-all duration-300"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-white/70 w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
