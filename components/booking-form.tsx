"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, Clock, User, Phone, Scissors } from "lucide-react";

const services = [
  "Hair Cut",
  "Beard Trim",
  "Pedicure",
  "Facial / Hydrafacial",
  "Hair Dye",
  "Oil Care",
  "Full Face Wax",
  "At Home Service",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

export function BookingForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", service: "", date: "", time: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-24 md:py-32 bg-black relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
            Reserve Your Spot
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Book Appointment
          </h2>
          <div className="w-16 h-px bg-white/30 mx-auto" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-12 py-4 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-12 py-4 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
              />
            </div>

            {/* Service */}
            <div className="relative">
              <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-12 py-4 text-white focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-neutral-900">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-neutral-900">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-12 py-4 text-white focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 cursor-pointer [color-scheme:dark]"
              />
            </div>

            {/* Time */}
            <div className="relative md:col-span-2">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-12 py-4 text-white focus:border-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-neutral-900">Select Time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time} className="bg-neutral-900">
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Booking..." : isSubmitted ? "Booked Successfully!" : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
