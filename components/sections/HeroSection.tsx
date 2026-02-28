"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="container px-4 mx-auto flex flex-col items-center text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            StackHack
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light text-balance leading-relaxed">
            A national hackathon where teams of 4 have 5 days to build a
            complete brand, website, and video ad from a blank page.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full",
                "bg-white text-black px-8 py-4 font-medium transition-transform hover:scale-105 active:scale-95",
              )}
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
            <FeatureCard
              icon={Calendar}
              title="Date"
              description="March 25, 2026 (adjustable)"
            />
            <FeatureCard
              icon={MapPin}
              title="Location"
              description="1337 Khouribga"
            />
            <FeatureCard
              icon={Users}
              title="Organized by"
              description="WeDesign Club"
            />
            <FeatureCard icon={Users} title="Scope" description="National" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card flex flex-col items-center justify-center text-center p-6 rounded-2xl">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-gray-300" />
      </div>
      <h3 className="text-sm font-medium text-gray-400 mb-1">{title}</h3>
      <p className="text-base font-medium text-white">{description}</p>
    </div>
  );
}
