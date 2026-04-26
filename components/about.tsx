"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
                alt="Barber at work"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
              Welcome
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 text-balance">
              The Ultimate Grooming Destination in Mivida
            </h2>
            <div className="w-16 h-px bg-white/30 mb-8" />
            <p className="text-white/70 leading-relaxed mb-6">
              When life gets messy, fade away the stress and escape! Sit back, relax, 
              and let the most professional barbers give you a fresh look.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              The true measure of success is not what you have, but what you give. 
              At Escape Barbershop, we give you the confidence of looking your absolute best.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Call Us</p>
                  <a href="tel:01554006321" className="text-white hover:text-white/80 transition-colors">015 54006321</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Hours</p>
                  <p className="text-white">Every Day 10 AM - 10 PM</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 border border-white/20 bg-white/5">
              <svg className="w-5 h-5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-white/80">Mivida, Eterna — Gate 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
