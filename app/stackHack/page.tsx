import { HeroSection } from "@/components/sections/HeroSection";
import { WhyExistsSection } from "@/components/sections/WhyExistsSection";
import { FormatSection } from "@/components/sections/FormatSection";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SponsorshipSection } from "@/components/sections/SponsorshipSection";

export default function StackHackPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-accent selection:text-white">
      {/* Navigation will go here */}

      {/* Sections */}
      <HeroSection />
      <WhyExistsSection />
      <FormatSection />
      <DeliverablesSection />
      <AudienceSection />
      <TimelineSection />
      <SponsorshipSection />

      {/* Footer will go here */}
    </main>
  );
}
