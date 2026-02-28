import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyExistsSection() {
  return (
    <section className="py-24 relative" id="why-exists">
      <div className="container px-4 mx-auto max-w-5xl">
        <SectionHeading
          title="Why StackHack Exists"
          subtitle="We got tired of hackathons that only reward the code."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              Most hackathons ask you to build something. StackHack asks you to
              build a product with a name, a face, and a story.
            </p>
            <p>
              The team that wins isn't just the one with the best repository.
              It's the one whose brand, website, and video ad feel like they
              belong together. We build something that stands on its own: a
              unified vision.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            {/* Ambient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="text-xl text-white relative z-10 leading-relaxed font-medium">
              "We built this event because Morocco has no shortage of talented
              developers and designers. What's rare is people who can do both,
              and communicate it."
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <p className="text-brand-accent font-medium mt-2">
                StackHack is where we close that gap with real stakes, a real
                deadline, and a national audience watching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
