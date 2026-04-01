"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export const Section = ({ children, className, id, animate = true }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate || !sectionRef.current) return;

    const el = sectionRef.current;
    
    gsap.fromTo(
      el.querySelectorAll(".reveal-up"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [animate]);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={cn("py-24 md:py-32 overflow-hidden", className)}
    >
      {children}
    </section>
  );
};
