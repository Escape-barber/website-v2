"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 80, height: 40 },
    md: { width: 120, height: 60 },
    lg: { width: 180, height: 90 },
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src="https://escapebarber.shop/images/IMG_17921.png"
        alt="Escape Barbershop"
        width={sizes[size].width}
        height={sizes[size].height}
        className="object-contain"
        priority
      />
    </div>
  );
}
