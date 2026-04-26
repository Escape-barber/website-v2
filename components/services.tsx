"use client";

import { useEffect, useRef, useState } from "react";
import { Scissors, Sparkles, Droplets, Home } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Cuts",
    description: "Sharp cuts and clean fades for a fresh look every time.",
  },
  {
    icon: Scissors,
    title: "Beards",
    description: "Expert beard grooming, shaping, and maintenance.",
  },
  {
    icon: Droplets,
    title: "Pedicure",
    description: "Relaxing foot care and grooming treatment.",
  },
  {
    icon: Sparkles,
    title: "Facials / Hydrafacial",
    description: "Deep cleansing facial treatments for healthy skin.",
  },
  {
    icon: Droplets,
    title: "Dyes",
    description: "Professional hair coloring and dye services.",
  },
  {
    icon: Droplets,
    title: "Oil Care",
    description: "Nourishing oil treatments for hair and scalp.",
  },
  {
    icon: Sparkles,
    title: "Full Face Wax",
    description: "Complete facial waxing for a smooth, clean look.",
  },
  {
    icon: Home,
    title: "At Home Service",
    description: "Need escape after 9PM? We come to you.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral-950"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Barbershop Services
          </h2>
          <p className="text-white/60 mb-6">Sharp cuts, clean fades, and premium grooming for a fresh look every time.</p>
          <div className="w-16 h-px bg-white/30 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 md:p-8 border border-white/10 bg-black/50 hover:border-white/30 hover:bg-white/5 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white/70 mb-4 md:mb-6 group-hover:text-white transition-colors" />
              <h3 className="font-serif text-base md:text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
