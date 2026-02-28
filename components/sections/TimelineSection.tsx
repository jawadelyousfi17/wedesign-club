import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function TimelineSection() {
  const timeline = [
    {
      date: "Jan 04",
      title: "Official Launch",
      details:
        "Teaser video release and registration opens across Discord and social channels.",
    },
    {
      date: "Jan 04–14",
      title: "Registration Phase",
      details:
        "10-day window. Open to all IT schools nationally. Max 10 teams.",
    },
    {
      date: "Jan 15",
      title: "Headcount Lock",
      details:
        "Final numbers confirmed. Sponsor logos finalized. All print and merch production begins.",
    },
    {
      date: "Jan 20",
      title: "Print Production",
      details: "Banners, roll-ups, and badges sent to printer.",
    },
    {
      date: "Feb 01",
      title: "Logistics Check",
      details:
        "Merchandise delivery, trophies, and housing confirmed for visiting participants.",
    },
    {
      date: "Feb 12",
      title: "Day 1: Opening",
      details: "Check-in, keynote, theme reveal. All 40 participants on-site.",
    },
    {
      date: "Feb 13–15",
      title: "Days 2-4: The Sprint",
      details:
        "48h+ continuous build. Mentorship sessions and side challenges throughout.",
    },
    {
      date: "Feb 16",
      title: "Day 5: Demo Day",
      details:
        "Submissions close, cinema-style presentations, jury deliberation.",
    },
    {
      date: "Feb 17",
      title: "Awards & Closing",
      details:
        "Prize distribution, closing ceremony. Post-event content goes live.",
    },
  ];

  return (
    <section className="py-24 relative" id="timeline">
      <div className="container px-4 mx-auto max-w-4xl">
        <SectionHeading
          title="Timeline"
          subtitle="Key dates leading to the event."
          align="center"
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8 md:gap-16`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 top-4 w-14 h-14 bg-background border border-white/20 rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-brand-accent rounded-full" />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                >
                  <Badge className="mb-3 border-brand-accent/50 text-brand-accent">
                    {item.date}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {item.details}
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
