import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudienceSection() {
  return (
    <section className="py-24" id="audience">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="The Audience"
              subtitle="40 motivated people, in one place, for 5 days."
            />

            <p className="text-gray-400 font-light leading-relaxed mb-6">
              StackHack is intentionally small. 10 teams, 40 participants
              maximum. The goal is quality over volume. These are people who
              applied, got selected, and traveled to be here. Not a passive
              audience. These are people who will remember this week.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <div className="text-4xl font-semibold text-white mb-2 tracking-tight">
                  18-30
                </div>
                <p className="text-sm font-medium text-brand-secondary">
                  Age Range
                </p>
              </div>
              <div>
                <div className="text-4xl font-semibold text-white mb-2 tracking-tight">
                  40
                </div>
                <p className="text-sm font-medium text-brand-secondary">
                  Max Participants
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-3xl bg-white/5 border-white/10 space-y-12">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Who Participates
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Open to students from any IT school in Morocco: 1337, YouCode,
                EMSI, ENSIAS, UM6P, private schools, and more. Focusing on
                development, design, and motion graphics disciplines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Format Impact
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                10 teams is the cap. That means every person there earned their
                spot. The engagement level from a room like that is something
                you don't get from 500-person events.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Geographic Spread
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Visitors from outside Khouribga are hosted on campus for the
                full 5 days. That means your brand is present during every meal,
                every break, and every conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
