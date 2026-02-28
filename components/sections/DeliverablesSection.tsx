import { SectionHeading } from "@/components/ui/SectionHeading";
import { PenTool, Layout, Video } from "lucide-react";

export function DeliverablesSection() {
  const deliverables = [
    {
      id: "01",
      icon: PenTool,
      name: "Brand Identity",
      details:
        "Logo, color system, typography, and brand guidelines. The foundation every other deliverable is built upon.",
    },
    {
      id: "02",
      icon: Layout,
      name: "Website",
      A: "Live, deployed website. Designed and developed during the event by the same team.",
    },
    {
      id: "03",
      icon: Video,
      name: "Video Ad",
      details:
        "A short promotional video that sells the product. Shot, edited, and produced on-site.",
    },
  ];

  return (
    <section className="py-24 relative" id="deliverables">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="What Participants Build"
              subtitle="Three deliverables. One unified vision. Each team receives a theme on the first day. They have until Day 5 to submit all three of the following. The jury evaluates them as a whole, not separately. A great website with a weak brand loses to a team that got all three right."
            />

            <div className="glass-card mt-12 p-8 rounded-3xl border-brand-accent/30 bg-brand-accent/5 backdrop-blur-xl">
              <h3 className="text-xl font-medium text-white mb-3">
                Judged as One Coherent Brand
              </h3>
              <p className="text-gray-400">
                Do all three pieces feel like they belong together? That's the
                question the jury answers.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {deliverables.map((item) => (
              <div
                key={item.id}
                className="glass-card p-6 flex gap-6 items-start group hover:-translate-x-2 transition-transform duration-300"
              >
                <div className="text-5xl font-extralight text-white/20 group-hover:text-white/40 transition-colors">
                  {item.id}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-brand-accent" />
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {item.details || item.A}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
