import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Mail, Phone, Instagram, MapPin } from "lucide-react";

export function SponsorshipSection() {
  const tiers = [
    {
      name: "Event Partner",
      price: "Base Tier",
      description: "Visibility and brand presence throughout the event.",
      features: [
        "Logo on all event banners (x5)",
        "Logo on participant ID badges & lanyards",
        "Logo on participant tote bags",
        "Mention in social media posts (3 club channels)",
        "Logo on event landing page",
        "Brand mention in post-event recap video",
        "Listed in opening ceremony acknowledgements",
      ],
    },
    {
      name: "Presenting Sponsor",
      price: "Premium Tier",
      description: "Maximum prominence and direct interaction opportunities.",
      highlighted: true,
      features: [
        "All Event Partner benefits",
        "Logo on premium hoodies (participants & staff)",
        'Event co-branded: "StackHack 2026, presented by [Brand]"',
        "Largest logo size on all materials",
        "Branded slot at opening ceremony (5 min)",
        "Dedicated stand or branded zone during event",
        "Dedicated featured post: story + feed (3 clubs)",
        "Full media package: photos + recap video",
        "Custom activation (workshop, challenge, talk)",
        "Opt-in participant contact list",
      ],
    },
  ];

  return (
    <section className="py-24 relative" id="sponsors">
      <div className="container px-4 mx-auto max-w-6xl mb-24">
        <SectionHeading
          title="Sponsor Visibility"
          subtitle="Where your brand appears. Your brand runs from the first announcement in January through the post-event recap published after Feb 17."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 rounded-3xl flex flex-col ${
                tier.highlighted
                  ? "border-brand-accent/50 bg-brand-accent/5 relative shadow-[0_0_50px_-12px] shadow-brand-accent/20"
                  : "border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 text-xs font-bold uppercase rounded-full tracking-widest">
                  Maximum Impact
                </div>
              )}

              <h3 className="text-2xl font-semibold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-400 font-light text-sm mb-6 h-10">
                {tier.description}
              </p>

              <div className="h-px w-full bg-white/10 mb-6" />

              <ul className="space-y-4 flex-grow mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 rounded-full p-1 ${tier.highlighted ? "bg-brand-accent/20 text-brand-accent" : "bg-white/10 text-white"}`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 font-light text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 text-center rounded-xl font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-brand-accent text-white hover:bg-brand-accent-hover"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Inquire Details
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section inline as a footer */}
      <div
        className="container px-4 mx-auto max-w-5xl border-t border-white/10 pt-24"
        id="contact"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-medium text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Interested? Let's talk. If this feels like the right fit, reach
              out. We'll walk you through the details, answer any questions, and
              figure out a package that works for both sides.
            </p>

            <div className="space-y-6">
              <ContactRow
                icon={Phone}
                label="WhatsApp / Phone"
                value="+212 624-169526"
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value="wedesign.club1337@gmail.com"
              />
              <ContactRow
                icon={Instagram}
                label="Instagram"
                value="@wedesign.1337"
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value="1337 Khouribga, Morocco"
              />
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl bg-white/5 border-white/10 h-full flex flex-col justify-center">
            <h3 className="text-xl font-medium text-white mb-4">
              Who's Organizing This
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Built from the inside. StackHack is entirely student-driven. No
              external agency. No outsourced production. Led by WeDesign Club
              with support from other campus clubs at 1337.
            </p>

            <h3 className="text-xl font-medium text-white mb-4">
              Host Institution
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              1337 Khouribga - 42 Network. One of the world's most recognized
              peer-to-peer coding schools. 1337 Khouribga provides the venue,
              infrastructure, housing for visiting participants, and the
              institutional weight that makes StackHack a real event and not
              just a club meetup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
        <Icon className="w-5 h-5 text-brand-accent" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-lg font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
