"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { COPY } from "@/constants/copy";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-heading font-bold text-xl tracking-tighter leading-none">
            INTELIGENCIA <span className="text-rose-600">SEVILLA</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
            Consultora Experta en <span className="text-white font-bold">IA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {COPY.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === item.href ? "text-white" : "text-zinc-400"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" href="/contacto">
            {COPY.common.cta_audit}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-40 flex flex-col p-8 transition-all duration-500 lg:hidden",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex justify-between items-center mb-12">
            <span className="font-heading font-bold text-xl tracking-tighter">
              INTELIGENCIA <span className="text-rose-600">SEVILLA</span>
            </span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={28} />
            </button>
        </div>
        <div className="flex flex-col gap-6">
          {COPY.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-2xl font-heading font-semibold transition-colors",
                pathname === item.href ? "text-rose-500" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button variant="primary" size="lg" className="w-full" href="/contacto">
              {COPY.common.cta_audit}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
