import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Globe2, Timer } from "lucide-react";

export function FormatSection() {
  const cards = [
    {
      icon: Users,
      title: "One Team. Full Deliverable.",
      description:
        "No separate tracks. Code, design, and motion from the same 4 people.",
    },
    {
      icon: Globe2,
      title: "National, Not Campus.",
      description:
        "Open to any IT school in Morocco: 1337, YouCode, EMSI, ENSIAS, and beyond. The best 10 teams get in.",
    },
    {
      icon: Timer,
      title: "48 Hours. Real Pressure.",
      description:
        "A theme revealed on Day 1. A submission deadline on Day 5. Five days to build.",
    },
  ];

  return (
    <section className="py-24 bg-white/5" id="format">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeading title="The Format" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-7 h-7 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
