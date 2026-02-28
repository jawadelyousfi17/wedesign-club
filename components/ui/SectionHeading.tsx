"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
