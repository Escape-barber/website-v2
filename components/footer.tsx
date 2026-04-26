"use client";

import { Logo } from "./logo";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#booking" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo size="md" className="mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Premium grooming experience where style meets precision. Your
              escape from the ordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/50 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  Mivida, Eterna
                  <br />
                  Gate 2
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/50 shrink-0" />
                <a
                  href="tel:01554006321"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  015 54006321
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/50 shrink-0" />
                <div className="text-sm">
                  <p className="text-white/70">Every Day</p>
                  <p className="text-white/50">10:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/50 shrink-0 opacity-0" />
                <div className="text-sm">
                  <p className="text-white/70">At Home Service</p>
                  <p className="text-white/50">After 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6 text-center">
            Find Us
          </h4>
          <div className="w-full h-64 md:h-80 overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d31.123456789!3d30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdde81a15cbc88e46!2sEscape%20barbershop!5e0!3m2!1sen!2seg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Escape Barbershop Location"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Escape+barbershop/data=!4m2!3m1!1s0x0:0xdde81a15cbc88e46"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Escape Barbershop. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
