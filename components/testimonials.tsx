"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Abdelrahman Hossam",
    role: "2 months ago",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "Very good haircut, exactly what I wanted. Thanks to Abdallah — one of the best barbers and gave me a great hairstyle. Highly recommended.",
    rating: 5,
  },
  {
    name: "Mustafa Ahmed Sewilam",
    role: "11 months ago",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content:
      "Just had one of the best experiences. The atmosphere was clean, stylish, and welcoming from the moment I walked in. My barber was professional, friendly, and clearly knew what he was doing. I'll definitely be coming back.",
    rating: 5,
  },
  {
    name: "Khaled Ali",
    role: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content:
      "A special thanks to the manager who was on-site as well; the customer service here is truly top-tier. The shop is spotless, and I was very impressed to see the staff consistently cleaning and sanitizing their equipment before every use.",
    rating: 5,
  },
  {
    name: "Mahmoud Ahmed",
    role: "4 months ago",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
    content:
      "Highly recommended. Stylist Magy the hair stylist is amazing, he knows exactly his work and he's very professional.",
    rating: 5,
  },
];

export function Testimonials() {
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
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral-950"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Barbershop Stories
          </h2>
          <p className="text-white/60 mb-6">The true measure of success is not what you have, but what you give</p>
          <div className="w-16 h-px bg-white/30 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-8 border border-white/10 bg-black/50 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-white text-white"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/70 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
